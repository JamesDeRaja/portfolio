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
    title: 'Selected Published Mobile Projects',
    summary:
      'Production mobile performance work focused on stable frame pacing under extreme agent density (100+ skinned meshes, nav, ragdolls, projectiles).',
    highlights: [
      'Optimized AI agent tick budgets to prevent frame spikes during 100+ concurrent NavMesh agents.',
      'Tuned LOD transitions and texture streaming for consistent visual quality on low-end mobile GPUs.'
    ],
    impact: [
      'Shipped Sneaky Warrior 3D on iOS with stable 30fps under peak combat load.',
      'Reduced memory footprint allowing reliable play on 2GB RAM devices.'
    ],
    caseStudyUrl: '/case-studies/sneaky-warrior-3d',
    repoUrl: 'https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884',
    images: [
      '/images/AquaSpin.png',
      '/images/Bolt.png',
      '/images/Flower.png',
      '/images/News.png',
    ]
  }
];
