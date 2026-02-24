export interface ExperimentResult {
  name: string;
  baseline: string;
  stress: string;
  bottleneck: string;
  rootCause: string;
  mitigation: string;
  notes: string;
}

export const performanceResults: ExperimentResult[] = [
  {
    name: 'Baseline Scene',
    baseline: '8.53 / 6.88 ms',
    stress: 'N/A',
    bottleneck: 'None (within frame budget)',
    rootCause:
      'Minimal scene complexity. No transparency, no post-processing, no overdraw. GPU has headroom (~1.6 ms).',
    mitigation: 'Not required.',
    notes: 'Stable near 120 Hz. GPU underutilized relative to frame budget.'
  },
  {
    name: 'Overdraw Stress Toggle',
    baseline: '8.53 / 6.88 ms',
    stress: '12.63 / 12.03 ms',
    bottleneck: 'GPU-bound',
    rootCause: 'Fragment overdraw scaling in XR from stacked transparency and stereo fragment workload.',
    mitigation: 'Reduce transparency / optimize fill-rate.',
    notes:
      'Moderate (40 layers): CPU 12.63 / GPU 12.03 ms. Extreme (200 layers): CPU 18.23 / GPU 17.79 ms.'
  }
];
