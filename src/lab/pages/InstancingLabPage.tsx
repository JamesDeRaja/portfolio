import { Link } from 'react-router-dom';
import MetricsSummary from '../components/MetricsSummary';

export default function InstancingLabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/case-studies/xr-stress-lab">← Back to XR Stress Lab Case Study</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Instancing vs Non-Instancing Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Submission Cost Isolation</p>
      <p className="mt-4 text-slate-700">
        Compared 10,000-cube rendering with and without instancing to isolate draw submission overhead and rebalance CPU
        and GPU contribution.
      </p>

      <MetricsSummary
        baselineCpu={15.03}
        baselineGpu={7.09}
        stressCpu={7.33}
        stressGpu={5.34}
        bottleneck="CPU-bound (draw submission) → near-balanced"
      />

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Capture export is being normalized for publication.</p>
      </section>
    </main>
  );
}
