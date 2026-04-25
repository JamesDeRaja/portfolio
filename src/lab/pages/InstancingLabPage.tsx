import MetricsSummary from '../components/MetricsSummary';
import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function InstancingLabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Instancing Lab — James De Raja"
        description="Instancing lab comparing draw submission overhead and CPU render-thread savings between instanced and non-instanced scenes."
        url="https://jamesderaja.com/lab/instancing"
        keywords="instancing lab, draw calls, render thread, Unity optimization"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'Instancing Lab',
          description: 'Instancing lab comparing draw submission overhead and CPU render-thread savings between instanced and non-instanced scenes.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <PageHero
        backHref="/case-studies/xr-stress-lab"
        backLabel="Back to XR Stress Lab"
        category="Lab Experiment"
        title="Instancing vs Non-Instancing Lab"
        subtitle="Submission Cost Isolation"
        description="Compared 10,000-cube rendering with and without instancing to isolate draw submission overhead and rebalance CPU and GPU contribution."
        chips={['CPU Bound', 'Draw Calls', 'Submission Cost', 'Unity XR']}
        metric="-7.70 ms"
        metricLabel="CPU reduction via instancing"
      />

      <MetricsSummary
        baselineCpu={15.03}
        baselineGpu={7.09}
        stressCpu={7.33}
        stressGpu={5.34}
        bottleneck="CPU-bound (draw submission) → near-balanced"
      />

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <p className="text-slate-300">Capture export is being normalized for publication.</p>
      </section>
    </main>
    </div>
  );
}
