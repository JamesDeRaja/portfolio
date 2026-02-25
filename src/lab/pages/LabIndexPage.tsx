import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ResultsTable from '../../components/ResultsTable';
import { performanceResults } from '../../data/performanceResults';
import { labExperiments } from '../data/experiments';

export default function LabIndexPage() {
  return (
    <div className="min-h-screen bg-site-pattern text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">XR Performance Lab</h1>
          <p className="text-sm text-slate-700">
            Controlled experiment index for profiling bottlenecks in XR rendering pipelines.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Experiments</h2>
          <div className="space-y-3">
            {labExperiments.map((experiment) => (
              <Link
                key={experiment.slug}
                to={`/lab/${experiment.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-700"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {experiment.title} <span className="font-normal text-slate-700">({experiment.subtitle})</span>
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Bottleneck: {experiment.metrics.bottleneck}
                  {experiment.metrics.bottleneckDetail ? ` — ${experiment.metrics.bottleneckDetail}` : ''}
                </p>
                {experiment.lastUpdated && <p className="mt-2 text-xs text-slate-500">Last updated: {experiment.lastUpdated}</p>}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Published Results</h2>
            <p className="text-xs text-slate-500">Aggregated benchmark table for all tracked runs.</p>
          </div>
          <ResultsTable rows={performanceResults} />
        </section>
      </main>
    </div>
  );
}
