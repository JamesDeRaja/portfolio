import { Link } from 'react-router-dom';

export default function FramePacingLabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/case-studies/xr-stress-lab">← Back to XR Stress Lab Case Study</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Frame Pacing Variance Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Variance and Spike Characterization</p>
      <p className="mt-4 text-slate-700">
        This experiment track captures variance signatures under controlled workload modulation. Quantified results are
        published alongside the other stress paths once capture normalization is complete.
      </p>
    </main>
  );
}
