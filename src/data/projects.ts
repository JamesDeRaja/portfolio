import type { WorkProject } from '../types';

export const workProjects: WorkProject[] = [
  {
    id: 'xr-stress-lab',
    title: 'XR Performance Stress Lab',
    summary: 'Profiler-led test harness for isolating XR rendering and frame pacing constraints.',
    highlights: [
      'Reduced submission + skinning cost via dynamic skinned-mesh chunking.',
      'Protected culling/occlusion behavior with spatially coherent grouping + visibility gating.'
    ],
    impact: [
      'Maintained stable 16ms frame pacing during dense combat moments on mobile GPUs.',
      'Prevented stutter spikes during ragdoll + projectile bursts via workload gating.'
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
    repoUrl: 'https://github.com/JamesDeRaja/SoftMaskPro-Performance-Study'
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
    title: 'Sneaky Warrior / Next-Gen Stealth Action R&D',
    summary:
      'Sneaky Warrior 3D is live on iOS, and the next iteration is a practical testbed for XR rendering, ECS-scale simulation, frame pacing, and large-scene performance research.',
    highlights: [
      'Building the next iteration of Sneaky Warrior as a performance-focused stealth action R&D project.',
      'Keeping live-title proof separate from XR/ECS research systems until backed by direct captures.'
    ],
    impact: [
      'Published Sneaky Warrior 3D on iOS.',
      'Using shipped mobile constraints to guide profiler-backed next-iteration R&D.'
    ],
    caseStudyUrl: '/case-studies/sneaky-warrior-3d',
    repoUrl: 'https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884'
  }
];
