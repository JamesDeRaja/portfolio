import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { awards, publishers } from '../../../lib/data/awards';

export default function RecognitionCard() {
  return (
    <BentoCard className="order-6 md:col-span-3 md:row-span-2">
      <Eyebrow>Recognition</Eyebrow>
      <div className="mt-4 space-y-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">Awards</p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--color-text-secondary)]">
            {awards.map((award) => (
              <li key={award.name}><span className="font-mono text-[var(--color-accent)]">{award.year}</span> · {award.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">Publishers</p>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{publishers.join(' · ')}</p>
        </div>
      </div>
    </BentoCard>
  );
}
