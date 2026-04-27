import WorkCard from '../components/WorkCard';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { workProjects } from '../data/projects';

export default function WorkSection() {
  return (
    <section id="work" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Deep dives — rendering, tooling, optimization"
        subtitle="Profiled breakdowns of XR rendering bottlenecks, UI overdraw cost, runtime diagnostics, and mobile frame budget stabilisation."
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
