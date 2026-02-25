import { Link } from 'react-router-dom';
import MetricsSummary from '../components/MetricsSummary';

export default function OverdrawLabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/case-studies/xr-stress-lab">← Back to XR Stress Lab Case Study</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Overdraw Stress Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">GPU Fragment Pressure</p>
      <p className="mt-4 text-slate-700">
        Controlled transparency stacking test used to classify fragment bottlenecks with CPU/GPU timing and pass-level
        evidence.
      </p>

      <MetricsSummary
        baselineCpu={8.53}
        baselineGpu={6.88}
        stressCpu={12.63}
        stressGpu={12.03}
        bottleneck="GPU-bound (fragment / overdraw)"
      />

      <section className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="text-base font-semibold text-slate-900">RenderLoop (GPU) Summary</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Baseline RenderLoop (ms)</p>
            <p className="mt-1 text-sm font-medium text-slate-900">6.37</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Stress RenderLoop (ms)</p>
            <p className="mt-1 text-sm font-medium text-slate-900">13.64</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Delta (ms)</p>
            <p className="mt-1 text-sm font-medium text-slate-900">+7.27</p>
          </div>
        </div>
        <p className="text-sm text-slate-700">
          201 transparent draws observed with ZWrite Off and SrcAlpha/OneMinusSrcAlpha.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Overdraw CPU and render thread comparison"
            className="rounded-xl border border-slate-200"
          />
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Overdraw frame debugger transparent pass"
            className="rounded-xl border border-slate-200"
          />
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary"
            className="rounded-xl border border-slate-200"
          />
        </div>
      </section>
    </main>
  );
}
