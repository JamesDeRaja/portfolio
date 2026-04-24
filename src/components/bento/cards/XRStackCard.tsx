import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';

const chips = [
  'Unity URP/HDRP', 'C#', 'HLSL', 'Burst/Jobs', 'IL2CPP',
  'OpenXR', 'AR Foundation', 'Oculus SDK', 'ARKit/ARCore',
  'Photon', 'Netcode for GameObjects', 'Addressables', 'Java', 'Backend services',
];

export default function XRStackCard() {
  return (
    <BentoCard className="order-4 md:col-span-3 md:row-span-2">
      <Eyebrow>Stack</Eyebrow>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-1 font-mono text-[13px] text-[var(--color-text-secondary)]">
            {chip}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
