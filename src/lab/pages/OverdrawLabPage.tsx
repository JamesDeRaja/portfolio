import MetricsSummary from '../components/MetricsSummary';
import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function OverdrawLabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Overdraw Lab — James De Raja"
        description="Controlled overdraw stress test quantifying fragment pressure, transparent pass escalation, and GPU bottleneck behavior in Unity XR."
        url="https://jamesderaja.com/lab/overdraw"
        keywords="overdraw lab, GPU fragment pressure, Unity XR, transparent pass"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'Overdraw Lab',
          description: 'Controlled overdraw stress test quantifying fragment pressure, transparent pass escalation, and GPU bottleneck behavior in Unity XR.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <PageHero
        backHref="/case-studies/xr-stress-lab"
        backLabel="Back to XR Stress Lab"
        category="Lab Experiment"
        title="Overdraw Stress Lab"
        subtitle="GPU Fragment Pressure"
        description="Controlled transparency stacking test used to classify fragment bottlenecks with CPU/GPU timing and pass-level evidence."
        chips={['GPU Bound', 'Fragment Pressure', 'Transparent Pass', 'Unity XR']}
        metric="+7.27 ms"
        metricLabel="GPU delta under overdraw stress"
      />

      <section className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
        <h2 className="text-base font-semibold text-white">Lab Metadata</h2>
        <p className="mt-2 text-sm text-slate-300">Unity 6 · Mobile · 16.6ms Frame Budget</p>
      </section>

      <section className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
        <h2 className="text-base font-semibold text-white">Performance Evidence</h2>
        <ul className="mt-2 space-y-1 text-sm text-slate-300">
          <li>• Profiler Capture (Coming)</li>
          <li>• Frame Debugger (Coming)</li>
          <li>• Metrics Table (Coming)</li>
        </ul>
      </section>


      <MetricsSummary
        baselineCpu={8.53}
        baselineGpu={6.88}
        stressCpu={12.63}
        stressGpu={12.03}
        bottleneck="GPU-bound (fragment / overdraw)"
      />

      <section className="mt-6 space-y-3 glass-card rounded-xl p-4">
        <h3 className="text-base font-semibold text-white">RenderLoop (GPU) Summary</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Baseline RenderLoop (ms)</p>
            <p className="mt-1 text-sm font-medium text-white">6.37</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Stress RenderLoop (ms)</p>
            <p className="mt-1 text-sm font-medium text-white">13.64</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Delta (ms)</p>
            <p className="mt-1 text-sm font-medium text-white">+7.27</p>
          </div>
        </div>
        <p className="text-sm text-slate-300">
          201 transparent draws observed with ZWrite Off and SrcAlpha/OneMinusSrcAlpha.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Overdraw CPU and render thread comparison"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Overdraw frame debugger transparent pass"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
        </div>
      </section>
    </main>
    </div>
  );
}
