import WorkCard from '../components/WorkCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { workProjects } from '../data/projects';

export default function WorkSection() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Deep dives into how I build &amp; optimize"
        subtitle="Technical breakdowns of my XR rendering work, performance tooling, UI systems, and mobile game optimization — with profiler evidence."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {workProjects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.1}>
            <WorkCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
