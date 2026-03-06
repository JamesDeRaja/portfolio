export type WorkProject = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  impact: string[];
  caseStudyUrl: string;
  repoUrl: string;
  featured?: boolean;
  images?: string[];
};

export type ExperimentSpecData = {
  goal: string;
  toggles: string[];
  controls?: string[];
  metrics: string[];
  hypothesis: string;
  notes: string[];
};

export type Experiment = {
  id: string;
  title: string;
  spec: ExperimentSpecData;
};

export type ResultRow = {
  experiment: string;
  baseline: string;
  stress: string;
  bottleneck: string;
  rootCause: string;
  mitigation: string;
};

export type WritingPost = {
  title: string;
  excerpt: string;
  readTime: string;
  slug: string;
  date: string;
};
