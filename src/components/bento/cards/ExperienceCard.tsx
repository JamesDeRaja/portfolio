import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { experience } from '../../../lib/data/experience';
import { talks } from '../../../lib/data/talks';

export default function ExperienceCard() {
  return (
    <BentoCard className="order-5 md:col-span-8 md:row-span-2">
      <Eyebrow>Experience</Eyebrow>
      <div className="mt-4 space-y-3">
        {experience.map((item) => (
          <div key={`${item.years}-${item.role}`} className="grid gap-2 border-b border-[var(--color-border)] pb-3 md:grid-cols-[110px_1fr]">
            <p className="font-mono text-[13px] text-[var(--color-text-muted)]">{item.years}</p>
            <div>
              <p className="font-medium">{item.role}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-secondary)]">Teaching & speaking: {talks.join(' · ')}</p>
    </BentoCard>
  );
}
