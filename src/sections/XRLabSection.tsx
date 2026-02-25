import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { labExperiments } from '../lab/data/experiments';

export default function XRLabSection() {
  return (
    <section id="xr-performance-lab" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Core Focus"
        title="XR Performance Stress Lab"
        subtitle="Engineering-grade profiling experiments for overdraw, MSAA cost, instancing, and frame pacing under controlled workloads."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Latest Experiments</h3>
        <div className="mt-4 space-y-3">
          {labExperiments.map((experiment) => (
            <Link
              key={experiment.slug}
              to={`/lab/${experiment.slug}`}
              className="block rounded-xl border border-slate-200 p-4 transition hover:border-cyan-700"
            >
              <p className="text-sm font-semibold text-slate-900">
                {experiment.title} <span className="font-normal text-slate-600">({experiment.subtitle})</span>
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {experiment.metrics.bottleneck}
                {experiment.metrics.bottleneckDetail ? ` — ${experiment.metrics.bottleneckDetail}` : ''}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-5">
          <Link to="/lab" className="text-sm font-medium text-cyan-700 underline-offset-2 hover:underline">
            Open full lab overview →
          </Link>
        </div>
      </div>
    </section>
  );
}
