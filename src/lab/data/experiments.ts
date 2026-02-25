import type { LabExperiment } from '../types';

export const labExperiments: LabExperiment[] = [
  {
    slug: 'overdraw',
    title: 'Overdraw Stress Test',
    subtitle: 'Transparent Stacking',
    lastUpdated: '2026-02-25',
    context: 'Controlled transparency stacking to quantify overdraw cost under XR-style fragment pressure.',
    metrics: {
      headline: 'RenderLoop (GPU)',
      rows: [
        { label: 'Baseline Render', value: '6.37 ms' },
        { label: 'Overdraw Render', value: '13.64 ms' },
        { label: 'Delta', value: '+7.27 ms', hint: 'CPU stable ~0.5 ms' }
      ],
      bottleneck: 'GPU-bound',
      bottleneckDetail: 'Fragment / overdraw (alpha blending)'
    },
    evidence: [
      {
        title: 'Unity Profiler Comparison',
        description: 'Baseline and stress comparison under identical scene conditions.',
        imagePath: '/lab/Overdraw_CPU_RenderThread_Comparison.png',
        caption: 'Baseline render at 6.37 ms versus overdraw render at 13.64 ms with CPU stable near 0.5 ms.'
      },
      {
        title: 'Frame Debugger Transparent Pass',
        description: 'Transparent pass breakdown during stacked alpha rendering.',
        imagePath: '/lab/Overdraw_FrameDebugger_TransparentPass.png',
        caption: 'Transparent pass cost rises sharply as layered alpha surfaces multiply fragment processing.'
      },
      {
        title: 'Experiment Summary Capture',
        description: 'Consolidated capture of profiler and debugging evidence.',
        imagePath: '/lab/Overdraw_Experiment_Summary.png',
        caption: 'Summary view confirms the fragment bottleneck signature under controlled overdraw stress.'
      }
    ],
    takeaways: [
      'Transparency reduces early-Z effectiveness; stacked layers multiply fragment work.',
      'XR stereo amplifies overdraw cost (per-eye fragment workload).',
      'SrcAlpha/OneMinusSrcAlpha blending behaves as a fill-rate multiplier under stacking.',
      'Mitigation: reduce transparent layers, convert to opaque/cutout, constrain stacking.'
    ]
  }
];

export const getExperimentBySlug = (slug: string): LabExperiment | undefined =>
  labExperiments.find((experiment) => experiment.slug === slug);
