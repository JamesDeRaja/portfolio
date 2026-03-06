import WorkCard from '../components/WorkCard';
import SectionHeading from '../components/SectionHeading';
import { workProjects } from '../data/projects';

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Performance Engineering Case Studies"
        subtitle="Profiler-validated deep-dives into XR rendering bottlenecks, UI overdraw cost, runtime profiling tooling, and mobile frame budget stabilisation. Each study includes baseline measurements, stress deltas, and reproducible mitigation strategies."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {workProjects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
