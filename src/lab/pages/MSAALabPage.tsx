import MetricsSummary from '../components/MetricsSummary';
import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function MSAALabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="MSAA Scaling Lab — James De Raja"
        description="MSAA scaling lab measuring GPU bandwidth amplification and frame-time impact across anti-aliasing levels in controlled Unity scenes."
        url="https://jamesderaja.com/lab/msaa"
        keywords="MSAA scaling, Unity performance, GPU bandwidth, anti-aliasing"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'MSAA Scaling Lab',
          description: 'MSAA scaling lab measuring GPU bandwidth amplification and frame-time impact across anti-aliasing levels in controlled Unity scenes.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <PageHero
        backHref="/case-studies/xr-stress-lab"
        backLabel="Back to XR Stress Lab"
        category="Lab Experiment"
        title="MSAA Cost Lab"
        subtitle="Edge Density Bandwidth Analysis"
        description="Measured anti-aliasing sampling cost in an edge-dense scene to isolate GPU increase while tracking overall pacing behavior."
        chips={['MSAA', 'GPU Bandwidth', 'Bandwidth Amplification', 'Unity XR']}
        metric="+0.86 ms"
        metricLabel="GPU delta from MSAA 0x → 4x"
      />

      <MetricsSummary
        baselineCpu={14.23}
        baselineGpu={3.5}
        stressCpu={15.26}
        stressGpu={4.36}
        bottleneck="CPU / pacing-limited (GPU rises with MSAA)"
        baselineLabel="Baseline CPU/GPU (ms, MSAA 0x)"
        stressLabel="Stress CPU/GPU (ms, MSAA 4x)"
      />

      <section id="msaa-overdraw" className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">MSAA × Overdraw Interaction</h2>
        <MetricsSummary
          baselineCpu={15.26}
          baselineGpu={4.36}
          stressCpu={20.04}
          stressGpu={8.75}
          bottleneck="GPU-bound (bandwidth + fragment amplification)"
          baselineLabel="Baseline CPU/GPU (ms, MSAA 4x + overdraw OFF)"
          stressLabel="Stress CPU/GPU (ms, MSAA 4x + overdraw 40 layers)"
        />
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <p className="text-slate-300">Profiler capture set pending publication for this experiment path.</p>
      </section>
    </main>
    </div>
  );
}
