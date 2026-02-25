export type BottleneckType = 'GPU-bound' | 'CPU-bound' | 'Balanced' | 'Unknown';

export type LabMetricRow = {
  label: string;
  value: string;
  hint?: string;
};

export type LabMetricsSummary = {
  headline?: string;
  rows: LabMetricRow[];
  bottleneck: BottleneckType;
  bottleneckDetail?: string;
};

export type EvidenceItem = {
  title: string;
  description?: string;
  imagePath: string;
  caption: string;
};

export type LabExperiment = {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  context?: string;
  metrics: LabMetricsSummary;
  evidence: EvidenceItem[];
  takeaways: string[];
};
