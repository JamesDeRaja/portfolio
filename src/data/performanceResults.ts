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
      'Reduce transparency, limit stacked layers, prefer opaque where possible, reduce render scale / use foveation.',
    notes:
      'Moderate (40 layers): CPU 12.63 / GPU 12.03 ms. Extreme (200 layers): CPU 18.23 / GPU 17.79 ms.'
  },

  // ✅ Split MSAA into two experiments:

  {
    name: 'MSAA Cost (Edge Density)',
    baseline: '14.23 / 3.50 ms (MSAA 0x)',
    stress: '15.26 / 4.36 ms (MSAA 4x)',
    bottleneck: 'CPU / pacing-limited (GPU rises with MSAA)',
    rootCause:
      'MSAA increases sample count at triangle edges, raising depth/color bandwidth and resolve work. In an edge-dense scene the GPU cost scales with MSAA level, while overall frame time is still dominated by CPU/pacing in this setup.',
    mitigation:
      'Use 2x–4x MSAA only when needed. Reduce edge density (thin geometry, micro-edges) and prefer render-scale/foveation tradeoffs over pushing MSAA higher.',
    notes:
      'Edge-dense geometry measurements: MSAA 0x → GPU 3.50 ms, 2x → 3.73 ms, 4x → 4.36 ms. MSAA 8x showed no meaningful delta vs 4x and was excluded.'
  },
  {
    name: 'MSAA × Overdraw Interaction',
    baseline: '15.26 / 4.36 ms (MSAA 4x, overdraw OFF)',
    stress: '20.04 / 8.75 ms (MSAA 4x + overdraw 40 layers)',
    bottleneck: 'GPU-bound (bandwidth + fragment amplification)',
    rootCause:
      'Transparency overdraw multiplies fragment shading, while MSAA increases sample storage/resolve bandwidth. Together they compound GPU work, producing a much larger GPU jump than MSAA alone.',
    mitigation:
      'Avoid stacked transparency in XR. Keep MSAA at the minimum acceptable level, reduce render scale, use foveated rendering, and limit full-screen/overlay particles.',
    notes:
      'Demonstrates multiplicative cost: GPU 4.36 ms → 8.75 ms when enabling overdraw stack under MSAA 4x.'
  }
];
