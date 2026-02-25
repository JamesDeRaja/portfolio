export type XrStressLabResult = {
  id: string;
  experiment: string;
  baselineCpu: number;
  baselineGpu: number;
  stressCpu: number | null;
  stressGpu: number | null;
  bottleneck: string;
  labPath?: string;
};

export const xrStressLabResults: XrStressLabResult[] = [
  {
    id: 'baseline-scene',
    experiment: 'Baseline Scene',
    baselineCpu: 8.53,
    baselineGpu: 6.88,
    stressCpu: null,
    stressGpu: null,
    bottleneck: 'None (within frame budget)'
  },
  {
    id: 'overdraw-stress-toggle',
    experiment: 'Overdraw Stress Toggle',
    baselineCpu: 8.53,
    baselineGpu: 6.88,
    stressCpu: 12.63,
    stressGpu: 12.03,
    bottleneck: 'GPU-bound',
    labPath: '/lab/overdraw'
  },
  {
    id: 'msaa-cost-edge-density',
    experiment: 'MSAA Cost (Edge Density)',
    baselineCpu: 14.23,
    baselineGpu: 3.5,
    stressCpu: 15.26,
    stressGpu: 4.36,
    bottleneck: 'CPU / pacing-limited (GPU rises with MSAA)',
    labPath: '/lab/msaa'
  },
  {
    id: 'msaa-overdraw-interaction',
    experiment: 'MSAA × Overdraw Interaction',
    baselineCpu: 15.26,
    baselineGpu: 4.36,
    stressCpu: 20.04,
    stressGpu: 8.75,
    bottleneck: 'GPU-bound (bandwidth + fragment amplification)',
    labPath: '/lab/msaa-overdraw'
  },
  {
    id: 'instancing-vs-non-instancing',
    experiment: 'Instancing vs Non-Instancing (10,000 cubes)',
    baselineCpu: 15.03,
    baselineGpu: 7.09,
    stressCpu: 7.33,
    stressGpu: 5.34,
    bottleneck: 'CPU-bound (draw submission) → near-balanced',
    labPath: '/lab/instancing'
  }
];

export function getResultDelta(result: XrStressLabResult) {
  return {
    deltaCpu: result.stressCpu === null ? null : result.stressCpu - result.baselineCpu,
    deltaGpu: result.stressGpu === null ? null : result.stressGpu - result.baselineGpu
  };
}
