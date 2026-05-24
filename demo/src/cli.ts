import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertApiKey,
  logPlan,
  runBuilder,
  runPlanner,
  runResearcher,
  runReviewer,
} from "./agents.js";
import type { FactoryArtifacts, FactoryOptions } from "./types.js";
import {
  architectureDiagram,
  banner,
  phase,
  success,
  warn,
  writeArtifacts,
} from "./ui.js";

export async function runSoftwareFactory(
  options: FactoryOptions
): Promise<FactoryArtifacts> {
  const { task, cwd, maxRevisions, model, apiKey } = options;
  const artifactDir = resolve(cwd, ".factory");

  banner();
  architectureDiagram();

  phase("Phase 1 · Plan", "Planner");
  const plan = await runPlanner(apiKey, model, cwd, task);
  logPlan(plan);
  await writeArtifacts(artifactDir, { "01-plan.json": plan });

  phase("Phase 2 · Research", "Researcher");
  const research = await runResearcher(apiKey, model, cwd, task, plan);
  await writeArtifacts(artifactDir, { "02-research.md": research });

  let buildSummary = "";
  let review: FactoryArtifacts["review"] = {
    verdict: "revise",
    summary: "",
    feedback: [],
    blockers: [],
  };
  let iterations = 0;

  for (let attempt = 0; attempt <= maxRevisions; attempt++) {
    iterations = attempt + 1;
    phase(`Phase 3 · Build (pass ${iterations})`, "Builder");

    const feedback =
      attempt > 0 ? review.feedback.join("\n") : undefined;

    buildSummary = await runBuilder(
      apiKey,
      model,
      cwd,
      task,
      plan,
      research,
      feedback
    );
    await writeArtifacts(artifactDir, {
      [`03-build-pass-${iterations}.md`]: buildSummary,
    });

    phase(`Phase 4 · Review (pass ${iterations})`, "Reviewer · Reflexion");
    review = await runReviewer(apiKey, model, cwd, task, plan, buildSummary);
    await writeArtifacts(artifactDir, {
      [`04-review-pass-${iterations}.json`]: review,
    });

    if (review.verdict === "approve") {
      success(`Approved: ${review.summary}`);
      break;
    }

    warn(`Revise requested: ${review.summary}`);
    if (attempt === maxRevisions) {
      warn("Max revision passes reached — stopping.");
    }
  }

  return { plan, research, buildSummary, review, iterations };
}

export async function main(argv: string[]) {
  const task =
    argv.slice(2).join(" ").trim() ||
    "Add a dark mode toggle with localStorage persistence";

  const cwd = resolve(dirname(fileURLToPath(import.meta.url)), "../sample-app");
  const apiKey = assertApiKey();

  const result = await runSoftwareFactory({
    task,
    cwd,
    maxRevisions: 1,
    model: process.env.CURSOR_MODEL ?? "composer-2.5",
    apiKey,
  });

  console.log("\n── Done ──");
  console.log(`Task: ${task}`);
  console.log(`Iterations: ${result.iterations}`);
  console.log(`Verdict: ${result.review.verdict}`);
  console.log(`Artifacts: ${resolve(cwd, ".factory")}/`);
}

main(process.argv).catch((err) => {
  console.error("\nFactory error:", err instanceof Error ? err.message : err);
  process.exit(1);
});
