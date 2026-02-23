export type WorkProject = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  impact: string;
  caseStudyUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export type Experiment = {
  id: string;
  title: string;
  goal: string;
  toggles: string;
  measurements: string;
  expectedBottleneck: string;
  mitigation: string;
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
};
