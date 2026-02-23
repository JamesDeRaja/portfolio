import type { Experiment, ResultRow } from '../types';

export const xrLabConfig = {
  status: 'Active build (measured milestones)',
  target: 'Quest / PCVR (OpenXR)'
};

export const xrExperiments: Experiment[] = [
  {
    id: 'baseline-scene',
    title: 'Baseline Scene',
    goal: 'Establish a controlled baseline with deterministic camera motion and fixed content.',
    toggles: 'Reference scene only, no stress toggles enabled.',
    measurements: 'CPU ms, GPU ms, draw calls, frame time variance.',
    expectedBottleneck: 'None expected; baseline should remain balanced.',
    mitigation: 'Lock scene conditions and maintain deterministic benchmark path.'
  },
  {
    id: 'overdraw-toggle',
    title: 'Overdraw Stress Toggle',
    goal: 'Quantify fragment pressure impact caused by stacked transparent surfaces.',
    toggles: 'Enable layered transparent quads and UI overlays.',
    measurements: 'GPU ms increase, overdraw heatmap, draw calls.',
    expectedBottleneck: 'GPU fragment bottleneck.',
    mitigation: 'Reduce transparent overlap, simplify shaders, tighten UI layering.'
  },
  {
    id: 'msaa-toggle',
    title: 'MSAA Toggle (0x/2x/4x)',
    goal: 'Measure anti-aliasing quality-to-cost tradeoff under identical geometry.',
    toggles: 'MSAA 0x, 2x, 4x runtime switch.',
    measurements: 'GPU ms delta, frame variance under each MSAA level.',
    expectedBottleneck: 'GPU rasterization cost growth.',
    mitigation: 'Use lowest acceptable MSAA, tune render scale, combine with content simplification.'
  },
  {
    id: 'instancing-vs-batching',
    title: 'Instancing vs Non-Instancing (300 meshes)',
    goal: 'Compare draw submission overhead and GPU behavior across batching strategies.',
    toggles: 'Switch between instanced and non-instanced render paths.',
    measurements: 'CPU render thread ms, draw call count, GPU ms.',
    expectedBottleneck: 'CPU submission pressure in non-instanced mode.',
    mitigation: 'Favor instancing for repeated meshes and reduce material variants.'
  },
  {
    id: 'cpu-stress',
    title: 'CPU Stress Simulation',
    goal: 'Stress gameplay-side scheduling to observe frame-time headroom erosion.',
    toggles: 'Inject scripted workload in update loop.',
    measurements: 'Main thread ms, render thread ms, spike frequency.',
    expectedBottleneck: 'CPU main thread saturation.',
    mitigation: 'Move expensive work off-frame, optimize update cadence, profile hotspots.'
  },
  {
    id: 'frame-pacing-stability',
    title: 'Frame Pacing Stability (variance + spikes)',
    goal: 'Track consistency over time rather than single-frame peaks.',
    toggles: 'Variance monitor with optional disturbance events.',
    measurements: 'Frame variance, spike count, 1% low frame time.',
    expectedBottleneck: 'Mixed; pacing instability from CPU/GPU sync disruptions.',
    mitigation: 'Identify recurring spike signatures and align workloads to frame budget.'
  }
];

export const xrResultRows: ResultRow[] = [
  {
    experiment: 'Baseline Scene',
    baseline: 'Pending measurement',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  },
  {
    experiment: 'Overdraw Stress Toggle',
    baseline: 'Pending measurement',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  },
  {
    experiment: 'MSAA Toggle (0x/2x/4x)',
    baseline: 'Pending measurement',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  },
  {
    experiment: 'Instancing vs Non-Instancing',
    baseline: 'Pending measurement',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  },
  {
    experiment: 'CPU Stress Simulation',
    baseline: 'Pending measurement',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  },
  {
    experiment: 'Frame Pacing Stability',
    baseline: 'Not measured yet',
    stress: 'Pending measurement',
    bottleneck: 'Pending measurement',
    rootCause: 'Pending measurement',
    mitigation: 'Pending measurement'
  }
];
