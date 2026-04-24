import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { profile } from '../../../lib/data/profile';

export default function ContactCard() {
  return (
    <BentoCard variant="muted" className="order-8 md:col-span-4 md:row-span-1">
      <Eyebrow>Contact</Eyebrow>
      <nav className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]" aria-label="Contact links">
        <a href={profile.contact.email} className="hover:text-[var(--color-accent)]">Email</a>
        <a href={profile.contact.github} className="hover:text-[var(--color-accent)]">GitHub</a>
        <a href={profile.contact.linkedin} className="hover:text-[var(--color-accent)]">LinkedIn</a>
      </nav>
      <a className="mt-2 inline-block text-sm text-[var(--color-accent)] hover:underline" href={profile.contact.resume}>Resume PDF →</a>
    </BentoCard>
  );
}
