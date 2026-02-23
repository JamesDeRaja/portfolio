export type ShippedTitle = {
  name: string;
  technicalFocus: string;
  googlePlay?: string;
  appStore?: string;
};

export const shippedTitles: ShippedTitle[] = [
  {
    name: 'Bolt Pop 3D',
    technicalFocus: 'Frame-time consistency tuning for puzzle interactions and UI-heavy scenes.',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D'
  },
  {
    name: 'Snake Hole Puzzle',
    technicalFocus: 'Runtime performance balancing for effects-heavy loops under mobile GPU constraints.',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.AlphaDen.SnakeHolePuzzleWormBlockBlast'
  },
  {
    name: 'Sneaky Warriour',
    technicalFocus: 'Post-launch diagnostics and targeted optimization for stability across device tiers.',
    googlePlay: 'https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884'
  }
];
