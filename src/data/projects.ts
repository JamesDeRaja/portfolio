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
    repoUrl: 'https://github.com/placeholder/xr-performance-lab',
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
    repoUrl: 'https://github.com/placeholder/softmaskpro'
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
    repoUrl: 'https://github.com/placeholder/unity-profiling-overlay'
  },
  {
    id: 'mobile-projects',
    title: 'Selected Published Mobile Projects',
    summary: 'Representative shipped titles with emphasis on runtime stability and technical execution.',
    highlights: [
      'Owned performance tuning passes before release milestones.',
      'Collaborated with design/art on quality vs frame budget tradeoffs.',
      'Supported post-launch diagnostics and fixes.'
    ],
    impact: [
      'Maintained stable 16ms/11ms frame budgets under device-tier constraints.',
      'Diagnosed CPU-GPU sync stalls pre-release.',
      'Applied profiling-driven mitigation pre- and post-launch.'
    ],
    caseStudyUrl: '/case-studies/published-mobile-projects',
    repoUrl: 'https://github.com/placeholder/mobile-projects'
  }
];
