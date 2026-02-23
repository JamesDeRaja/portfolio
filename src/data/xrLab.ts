import type { Experiment, ResultRow } from '../types';

export const xrLabConfig = {
  status: 'Active build (measured milestones)',
  target: 'Quest / PCVR (OpenXR)'
};

export const xrExperiments: Experiment[] = [
  {
    id: 'baseline-scene',
    title: 'Baseline Scene',
    spec: {
      goal: 'Establish a controlled baseline with deterministic camera motion and fixed content.',
      toggles: ['Reference scene only', 'No stress toggles enabled'],
      controls: ['Fixed camera path', 'Constant scene content', 'Stable render settings'],
      metrics: ['CPU ms', 'GPU ms', 'Draw calls', 'Frame time variance'],
      hypothesis: 'None expected; baseline should remain balanced.',
      notes: ['Lock scene conditions', 'Maintain deterministic benchmark path']
    }
  },
  {
    id: 'overdraw-toggle',
    title: 'Overdraw Stress Toggle',
    spec: {
      goal: 'Quantify fragment pressure impact caused by stacked transparent surfaces.',
      toggles: ['Enable layered transparent quads', 'Enable UI overlays'],
      controls: ['Keep camera and geometry constant', 'Same shader/material baseline'],
      metrics: ['GPU ms increase', 'Overdraw heatmap', 'Draw calls'],
      hypothesis: 'GPU fragment bottleneck.',
      notes: ['Reduce transparent overlap', 'Simplify shaders', 'Tighten UI layering']
    }
  },
  {
    id: 'msaa-toggle',
    title: 'MSAA Toggle (0x/2x/4x)',
    spec: {
      goal: 'Measure anti-aliasing quality-to-cost tradeoff under identical geometry.',
      toggles: ['MSAA 0x', 'MSAA 2x', 'MSAA 4x'],
      controls: ['Identical geometry', 'Fixed content and camera path'],
      metrics: ['GPU ms delta', 'Frame variance by MSAA level'],
      hypothesis: 'GPU rasterization cost growth.',
      notes: ['Use lowest acceptable MSAA', 'Tune render scale', 'Combine with content simplification']
    }
  },
  {
    id: 'instancing-vs-batching',
    title: 'Instancing vs Non-Instancing (300 meshes)',
    spec: {
      goal: 'Compare draw submission overhead and GPU behavior across batching strategies.',
      toggles: ['Instanced render path', 'Non-instanced render path'],
      controls: ['Same 300 mesh set', 'Same material and lighting context'],
      metrics: ['CPU render thread ms', 'Draw call count', 'GPU ms'],
      hypothesis: 'CPU submission pressure in non-instanced mode.',
      notes: ['Favor instancing for repeated meshes', 'Reduce material variants']
    }
  },
  {
    id: 'cpu-stress',
    title: 'CPU Stress Simulation',
    spec: {
      goal: 'Stress gameplay-side scheduling to observe frame-time headroom erosion.',
      toggles: ['Inject scripted workload in update loop'],
      controls: ['Render path unchanged', 'Scene content unchanged'],
      metrics: ['Main thread ms', 'Render thread ms', 'Spike frequency'],
      hypothesis: 'CPU main thread saturation.',
      notes: ['Move expensive work off-frame', 'Optimize update cadence', 'Profile hotspots']
    }
  },
  {
    id: 'frame-pacing-stability',
    title: 'Frame Pacing Stability (variance + spikes)',
    spec: {
      goal: 'Track consistency over time rather than single-frame peaks.',
      toggles: ['Variance monitor enabled', 'Optional disturbance events'],
      metrics: ['Frame variance', 'Spike count', '1% low frame time'],
      hypothesis: 'Mixed; pacing instability from CPU/GPU sync disruptions.',
      notes: ['Identify recurring spike signatures', 'Align workloads to frame budget']
    }
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
