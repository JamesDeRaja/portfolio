import type { WorkProject } from '../types';

export const workProjects: WorkProject[] = [
  {
    id: 'xr-stress-lab',
    title: 'XR Performance Stress Lab',
    summary: 'Profiler-led test harness for isolating XR rendering and frame pacing constraints.',
    highlights: [
      'Designed repeatable scene toggles for overdraw, MSAA, and CPU pressure.',
      'Instrumented frame timing variance capture for spike analysis.',
      'Prepared mitigation matrix tied to bottleneck signatures.'
    ],
    impact: [
      'Quantified overdraw fragment delta: 6.37 ms → 13.64 ms (Δ +7.27 ms, GPU-bound).',
      'Measured MSAA amplification under XR bandwidth pressure.',
      'Classified CPU vs GPU submission bottlenecks via controlled toggles.'
    ],
    caseStudyUrl: '/case-studies/xr-stress-lab',
    repoUrl: 'https://github.com/JamesDeRaja/XRPerformanceLab',
    featured: true
  },
  {
    id: 'softmaskpro',
    title: 'SoftMaskPro (Unity UI Rendering Tooling)',
    summary: 'Rendering-adjacent UI masking toolkit focused on predictable cost under load.',
    highlights: [
      'Profiled mask passes against fill-rate heavy UI scenes.',
      'Reduced unnecessary redraw paths through targeted update logic.',
      'Documented usage constraints for production teams.'
    ],
    impact: [
      'Profile-validated mask redraw cost under fill-rate heavy UI.',
      'Reduced redundant redraw paths through targeted update logic.',
      'Documented ZWrite / Blend tradeoffs for predictable GPU cost.'
    ],
    caseStudyUrl: '/case-studies/softmaskpro',
    repoUrl: 'https://github.com/JamesDeRaja/XRPerformanceLab'
  },
  {
    id: 'perf-overlay',
    title: 'Unity Performance & Profiling Toolkit / Overlay',
    summary: 'Runtime overlay and helper utilities for quick bottleneck triage in development builds.',
    highlights: [
      'Built lightweight HUD for frame timing, memory, and draw call snapshots.',
      'Added scenario presets for A/B profiling sessions.',
      'Streamlined capture notes for engineering handoff.'
    ],
    impact: [
      'Instrumented runtime frame-time variance capture.',
      'Enabled draw-call and submission spike triage in development builds.',
      'Reduced profiling turnaround through standardized capture snapshots.'
    ],
    caseStudyUrl: '/case-studies/profiling-toolkit',
    repoUrl: 'https://github.com/JamesDeRaja/XRPerformanceLab'
  },
  {
    id: 'mobile-projects',
    title: 'Selected Published Mobile Projects',
    summary:
      'Shipped mobile titles where frame-time stability was protected under heavy real-world runtime load (skinned meshes, navigation, physics, projectile systems). Focus: consistent frame pacing across device tiers, not peak FPS.',
    highlights: [
      'Built profiling-led mitigation plans around release milestones (CPU submission, GPU fill-rate, sync stalls).',
      'Implemented runtime batching + visibility gating for high-agent-count combat scenes.',
      'Stabilized frame pacing by removing spikes (animation/physics bursts, culling inefficiencies, sync points).',
      'Supported post-launch investigations with capture bundles and before/after comparisons.'
    ],
    impact: [
      'Sustained stable 16ms frame time targets during dense combat scenarios on mobile GPUs.',
      'Reduced render submission pressure via dynamic skinned-mesh chunking and spatially coherent grouping.',
      'Improved tile-based GPU efficiency by minimizing overdraw + preventing large-bounds culling failures.',
      'Cut wasted CPU skinning/animation work by disabling off-screen animation updates even under combined bounds.'
    ],
    caseStudyUrl: '/case-studies/sneaky-warrior-3d',
    repoUrl: 'https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884'
  }
];
