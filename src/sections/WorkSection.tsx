import WorkCard from '../components/WorkCard';
import SectionHeading from '../components/SectionHeading';
import { workProjects } from '../data/projects';

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Performance Engineering Case Studies"
        subtitle="Profiler-backed case studies focused on frame timing, rendering cost, and XR constraints."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {workProjects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
