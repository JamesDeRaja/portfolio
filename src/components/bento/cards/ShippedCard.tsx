import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import { featuredProjects } from '../../../lib/data/projects';

export default function ShippedCard() {
  return (
    <BentoCard className="order-3 md:col-span-6 md:row-span-2">
      <Eyebrow>Selected Work</Eyebrow>
      <h2 className="mt-3 text-xl font-medium tracking-tight">102 titles shipped. 6 worth talking about.</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
        {featuredProjects.slice(0, 6).map((project) => (
          <div key={project.title} className="overflow-hidden rounded-md border border-[var(--color-border)]">
            <div className="aspect-video bg-[linear-gradient(135deg,#3a3733,#242320)] grayscale-[0.25] transition duration-200 hover:grayscale-0" />
            <div className="p-2">
              <p className="text-sm font-medium">{project.title}</p>
              <p className="font-mono text-[11px] text-[var(--color-text-muted)]">{project.publisher} · {project.platform}</p>
              <p className="font-mono text-[11px] text-[var(--color-text-secondary)]">{project.role}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/work/orbit-raiders" className="mt-4 inline-block text-sm text-[var(--color-accent)] hover:underline">All credits →</a>
    </BentoCard>
  );
}
