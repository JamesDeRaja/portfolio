import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { profile } from '../../../lib/data/profile';

export default function HeroCard() {
  return (
    <BentoCard variant="featured" className="order-1 md:col-span-8 md:row-span-3">
      <Eyebrow className="text-[var(--color-accent)]">{profile.role.toUpperCase()}</Eyebrow>
      <h1 className="mt-6 text-[clamp(56px,8vw,96px)] leading-none tracking-[-0.03em] text-[var(--color-text)]">
        <span className="font-serif italic">{profile.name}</span>
        <span className="font-sans"> — builder of real-time systems.</span>
      </h1>
      <p className="mt-6 max-w-3xl text-[21px] leading-[1.4] tracking-[-0.01em] text-[var(--color-text-secondary)]">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[13px] text-[var(--color-text-secondary)]">
        {profile.metrics.map((metric, index) => (
          <div key={metric} className="flex items-center gap-3">
            <span>{metric}</span>
            {index < profile.metrics.length - 1 ? <span className="h-4 w-px bg-[var(--color-border-hover)]" /> : null}
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
