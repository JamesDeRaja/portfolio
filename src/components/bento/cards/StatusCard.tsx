import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { profile } from '../../../lib/data/profile';

export default function StatusCard() {
  return (
    <BentoCard variant="muted" className="order-7 md:col-span-4 md:row-span-1">
      <Eyebrow>Now</Eyebrow>
      <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{profile.availability}</p>
      <span className="mt-3 inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--color-success)]" />
    </BentoCard>
  );
}
