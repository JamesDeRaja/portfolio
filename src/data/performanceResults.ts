export const performanceResults: ExperimentResult[] = [
  {
    name: 'Baseline Scene',
    baseline: '8.53 / 6.88 ms',
    stress: 'N/A',
    bottleneck: 'None (within frame budget)',
    rootCause:
      'Minimal scene complexity. No transparency, no post-processing, no overdraw. GPU has headroom (~1.6 ms).',
    mitigation: 'Not required.',
    notes:
      'Stable near 120 Hz. GPU underutilized relative to frame budget.'
  },
  {
    name: 'Overdraw Stress Toggle',
    baseline: '8.53 / 6.88 ms',
    stress: '12.63 / 12.03 ms',
    bottleneck: 'GPU-bound',
    rootCause:
      'Fragment overdraw scaling in XR from stacked transparency and stereo fragment workload.',
    mitigation:
      'Reduce transparency, limit stacked layers, prefer opaque materials, optimize fill-rate.',
    notes:
      'Moderate (40 layers): CPU 12.63 / GPU 12.03 ms. Extreme (200 layers): CPU 18.23 / GPU 17.79 ms.'
  },
  {
    name: 'MSAA Toggle (0x / 2x / 4x)',
    baseline: '14.23 / 3.50 ms (MSAA 0x)',
    stress: '15.26 / 4.36 ms (MSAA 4x)',
    bottleneck: 'CPU / pacing-limited (GPU cost increases)',
    rootCause:
      'MSAA increases per-pixel sample count at geometric edges, raising depth and color bandwidth plus resolve cost. GPU time scales with MSAA level, but overall frame time remains CPU/pacing constrained in this workload.',
    mitigation:
      'Use lowest acceptable MSAA level (2x–4x in XR). Reduce edge density where possible. Avoid combining high MSAA with heavy transparency or overdraw.',
    notes:
      'Measured (edge-dense geometry): 0x → GPU 3.50 ms, 2x → 3.73 ms, 4x → 4.36 ms. MSAA 8x showed no meaningful delta vs 4x and was excluded. Combining MSAA 4x with overdraw (40 layers) raised GPU to 8.75 ms.'
  }
];
