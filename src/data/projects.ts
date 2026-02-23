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
    impact: 'Measured in profiler; data capture pipeline in active iteration.',
    caseStudyUrl: '#xr-performance-lab',
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
    impact: 'Measured in profiler; optimization decisions validated with CPU/GPU frame cost checks.',
    caseStudyUrl: '#work',
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
    impact: 'Measured in profiler; improved debugging turnaround during performance investigations.',
    caseStudyUrl: '#work',
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
    impact: 'Shipped mobile titles with sustained profiling-driven optimization support.',
    caseStudyUrl: '#work',
    repoUrl: 'https://github.com/placeholder/mobile-projects'
  }
];
