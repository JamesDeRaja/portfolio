export type StoreMetrics = {
  visitorsImg: string;
  acquisitionsImg: string;
  summary: string;
  metrics: { label: string; value: string }[];
};

export type ShippedTitle = {
  name: string;
  platform: string;
  genre: string;
  technicalFocus: string;
  keyMetric: string;
  googlePlay?: string;
  appStore?: string;
  storeMetrics?: StoreMetrics;
};

export const shippedTitles: ShippedTitle[] = [
  {
    name: 'Sneaky Warrior 3D',
    platform: 'iOS & Android',
    genre: '3D Action / Hyper-Casual',
    technicalFocus:
      'Tiered skinned-mesh spawn system chunking enemies into groups of 5–50 to match scene density — eliminating draw calls and skeleton updates for off-screen units. LOD-aware spawning reduced vertex throughput and CPU animation cost during high-density combat.',
    keyMetric: 'Pushed sustained FPS from sub-60 to 60+ on target devices within 16.6ms budget',
    appStore: 'https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884',
    storeMetrics: {
      visitorsImg: '/metrics/sneaky_warrior_visitors.png',
      acquisitionsImg: '/metrics/sneaky_warrior_acquisitions.png',
      summary:
        'Performance optimization reduced frame spikes and improved session smoothness. Store listing engagement peaked at ~70K visitors with ~16K acquisitions during the optimization update window, contributing to improved CPI campaign efficiency.',
      metrics: [
        { label: 'peak visitors', value: '~70K' },
        { label: 'peak acquisitions', value: '~16K' },
        { label: 'conversion stabilized during optimization window', value: '✓' },
      ],
    },
  },
  {
    name: 'Snake Hole Puzzle — Worm Block Blast',
    platform: 'Android',
    genre: 'Puzzle / Casual',
    technicalFocus:
      'Deterministic bullet pooling managing 100+ concurrent projectiles with zero runtime allocations, eliminating GC spikes during block destruction sequences. A* pathfinding with early-exit heuristics kept path computation under 1ms per frame.',
    keyMetric: 'Stable 60 FPS during peak particle + rigidbody counts on low-end Android',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.AlphaDen.SnakeHolePuzzleWormBlockBlast',
  },
  {
    name: 'Bolt Pop 3D',
    platform: 'Android',
    genre: '3D Puzzle / Casual',
    technicalFocus:
      'Runtime voxelisation system decomposing arbitrary 3D objects into puzzle levels, paired with automated constraint validation to detect unsolvable regions before export. Content pipeline scaled from manual authoring to 45+ validated levels in a single weekend.',
    keyMetric: 'Frame-time consistency across UI-heavy scenes and voxel destruction passes',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D',
  },
];
