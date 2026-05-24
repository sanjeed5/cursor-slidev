export interface PlanStep {
  id: string;
  title: string;
  description: string;
  dependsOn: string[];
}

export interface Plan {
  goal: string;
  steps: PlanStep[];
  risks: string[];
}

export interface ReviewVerdict {
  verdict: "approve" | "revise";
  summary: string;
  feedback: string[];
  blockers: string[];
}

export interface FactoryArtifacts {
  plan: Plan;
  research: string;
  buildSummary: string;
  review: ReviewVerdict;
  iterations: number;
}

export interface FactoryOptions {
  task: string;
  cwd: string;
  maxRevisions: number;
  model: string;
  apiKey: string;
}
