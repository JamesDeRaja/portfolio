import type { WritingPost } from '../types';

export const writingPosts: WritingPost[] = [
  {
    title: 'Understanding XR Frame Timing and Performance Constraints',
    excerpt:
      'XR frame timing is less forgiving than traditional display loops. This article outlines how prediction windows, compositor deadlines, and synchronization points constrain engineering decisions when tuning Unity scenes.',
    readTime: '9 min read',
    slug: 'understanding-xr-frame-timing-and-performance-constraints'
  },
  {
    title: 'Why Overdraw Kills Performance in Stereo Rendering',
    excerpt:
      'Stereo rendering amplifies fragment cost and exposes overdraw hotspots quickly. We break down practical ways to inspect transparent layers, UI composition, and material behavior to keep fill-rate healthy.',
    readTime: '7 min read',
    slug: 'why-overdraw-kills-performance-in-stereo-rendering'
  },
  {
    title: 'Frame Pacing vs FPS: What Engineers Get Wrong',
    excerpt:
      'Stable pacing matters more than a single peak FPS number. Learn how to interpret variance, spike patterns, and pacing discipline so delivered experiences feel consistently smooth under real workload.',
    readTime: '8 min read',
    slug: 'frame-pacing-vs-fps-what-engineers-get-wrong'
  }
];
