import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const c = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  blue: "\x1b[34m",
};

export function banner() {
  console.log(`
${c.bold}${c.cyan}╔══════════════════════════════════════════════════╗
║           CURSOR SOFTWARE FACTORY                 ║
║   Supervisor · Plan-and-Execute · Reflexion     ║
╚══════════════════════════════════════════════════╝${c.reset}
`);
}

export function phase(name: string, role: string) {
  console.log(`\n${c.bold}${c.magenta}▶ ${name}${c.reset} ${c.dim}(${role})${c.reset}`);
  console.log(c.dim + "─".repeat(52) + c.reset);
}

export function log(msg: string) {
  console.log(`  ${msg}`);
}

export function success(msg: string) {
  console.log(`  ${c.green}✓${c.reset} ${msg}`);
}

export function warn(msg: string) {
  console.log(`  ${c.yellow}!${c.reset} ${msg}`);
}

export function streamText(text: string) {
  process.stdout.write(c.dim + text + c.reset);
}

export async function writeArtifacts(dir: string, files: Record<string, unknown>) {
  await mkdir(dir, { recursive: true });
  for (const [name, data] of Object.entries(files)) {
    const content =
      typeof data === "string" ? data : JSON.stringify(data, null, 2);
    const path = join(dir, name);
    await writeFile(path, content, "utf8");
    success(`Wrote ${path}`);
  }
}

export function architectureDiagram() {
  console.log(`
${c.dim}Architecture (LangGraph supervisor + CrewAI roles + Reflexion loop)

        ┌─────────────┐
        │  SUPERVISOR │
        └──────┬──────┘
               │
    ┌──────────┼──────────┬──────────┐
    ▼          ▼          ▼          ▼
 PLANNER   RESEARCHER   BUILDER   REVIEWER
    │          │          │          │
    └──────────┴────┬─────┴──────────┘
                    ▼
              (revise loop)${c.reset}
`);
}
