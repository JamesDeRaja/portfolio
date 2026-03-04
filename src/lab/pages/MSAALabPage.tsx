import { Link } from 'react-router-dom';
import MetricsSummary from '../components/MetricsSummary';
import { Seo } from '../../components/Seo';

export default function MSAALabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="MSAA Scaling Lab — James De Raja"
        description="MSAA scaling lab measuring GPU bandwidth amplification and frame-time impact across anti-aliasing levels in controlled Unity scenes."
        url="https://james.alphaden.club/lab/msaa"
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
      <div style={{ marginBottom: '16px' }}>
        <Link to="/case-studies/xr-stress-lab">← Back to XR Stress Lab Case Study</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">MSAA Cost Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Edge Density Bandwidth Analysis</p>
      <p className="mt-4 text-slate-700">
        Measured anti-aliasing sampling cost in an edge-dense scene to isolate GPU increase while tracking overall
        pacing behavior.
      </p>

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
        <h2 className="text-xl font-semibold text-slate-900">MSAA × Overdraw Interaction</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Profiler capture set pending publication for this experiment path.</p>
      </section>
    </main>
  );
}
