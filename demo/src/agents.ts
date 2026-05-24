import { Agent } from "@cursor/sdk";
import type { Plan, ReviewVerdict } from "./types.js";
import { extractJsonBlock } from "./parse-json.js";
import { log, streamText } from "./ui.js";

const PLANNER_PROMPT = (task: string) => `
You are the PLANNER in a software factory supervisor system.
Create a concise implementation plan for this task in the repository.

Task: ${task}

Respond with ONLY a JSON object (no prose outside the JSON):
{
  "goal": "one sentence",
  "steps": [
    {
      "id": "step-1",
      "title": "short title",
      "description": "what to do",
      "dependsOn": []
    }
  ],
  "risks": ["optional risk strings"]
}

Rules:
- 2-5 steps max for a demo-sized change
- steps should be executable by a coding agent
- use dependsOn only when truly sequential
`;

const RESEARCHER_PROMPT = (task: string, plan: Plan) => `
You are the RESEARCHER in a software factory supervisor system.
Explore this repository and summarize what matters for the task.

Task: ${task}

Approved plan:
${JSON.stringify(plan, null, 2)}

Write a concise research brief (markdown, max 400 words):
- relevant files and patterns
- constraints to respect
- suggested entry points
Do NOT implement yet.
`;

const BUILDER_PROMPT = (
  task: string,
  plan: Plan,
  research: string,
  feedback?: string
) => `
You are the BUILDER in a software factory supervisor system.
Implement the task following the plan and research brief.

Task: ${task}

Plan:
${JSON.stringify(plan, null, 2)}

Research:
${research}

${feedback ? `Reviewer feedback from previous pass — address this:\n${feedback}\n` : ""}

Rules:
- Make minimal, focused changes
- Match existing code style
- Do not add unnecessary dependencies
- Summarize what you changed at the end
`;

const REVIEWER_PROMPT = (task: string, plan: Plan, buildSummary: string) => `
You are the REVIEWER in a software factory supervisor system (Reflexion pattern).
Review the builder's work against the plan.

Task: ${task}

Plan:
${JSON.stringify(plan, null, 2)}

Builder summary:
${buildSummary}

Inspect the actual file changes in the repo.

Respond with ONLY JSON:
{
  "verdict": "approve" | "revise",
  "summary": "one paragraph",
  "feedback": ["specific actionable items if revise"],
  "blockers": ["critical issues if any"]
}

Approve only if the task is reasonably complete for a demo app.
`;

async function runAgent(
  apiKey: string,
  model: string,
  cwd: string,
  prompt: string,
  label: string
): Promise<string> {
  await using agent = await Agent.create({
    apiKey,
    model: { id: model },
    local: { cwd },
  });

  const run = await agent.send(prompt);

  let text = "";
  for await (const event of run.stream()) {
    if (event.type === "assistant") {
      for (const block of event.message.content) {
        if (block.type === "text") {
          text += block.text;
          streamText(block.text);
        }
      }
    }
  }

  const result = await run.wait();
  if (result.status === "error") {
    throw new Error(`${label} run failed: ${result.id}`);
  }

  console.log("");
  return text.trim();
}

export async function runPlanner(
  apiKey: string,
  model: string,
  cwd: string,
  task: string
): Promise<Plan> {
  const raw = await runAgent(apiKey, model, cwd, PLANNER_PROMPT(task), "Planner");
  return extractJsonBlock<Plan>(raw);
}

export async function runResearcher(
  apiKey: string,
  model: string,
  cwd: string,
  task: string,
  plan: Plan
): Promise<string> {
  return runAgent(
    apiKey,
    model,
    cwd,
    RESEARCHER_PROMPT(task, plan),
    "Researcher"
  );
}

export async function runBuilder(
  apiKey: string,
  model: string,
  cwd: string,
  task: string,
  plan: Plan,
  research: string,
  feedback?: string
): Promise<string> {
  return runAgent(
    apiKey,
    model,
    cwd,
    BUILDER_PROMPT(task, plan, research, feedback),
    "Builder"
  );
}

export async function runReviewer(
  apiKey: string,
  model: string,
  cwd: string,
  task: string,
  plan: Plan,
  buildSummary: string
): Promise<ReviewVerdict> {
  const raw = await runAgent(
    apiKey,
    model,
    cwd,
    REVIEWER_PROMPT(task, plan, buildSummary),
    "Reviewer"
  );
  return extractJsonBlock<ReviewVerdict>(raw);
}

export function assertApiKey(): string {
  const key = process.env.CURSOR_API_KEY;
  if (!key?.trim()) {
    throw new Error(
      "CURSOR_API_KEY is required. Get one at cursor.com/dashboard/integrations"
    );
  }
  return key.trim();
}

export function logPlan(plan: Plan) {
  log(`Goal: ${plan.goal}`);
  for (const step of plan.steps) {
    log(`  • [${step.id}] ${step.title}`);
  }
}
