import { Link } from 'react-router-dom';
import { Seo } from '../../components/Seo';

export default function FramePacingLabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Frame Pacing Lab — James De Raja"
        description="Frame pacing lab focused on variance, spikes, and cadence stability beyond average FPS using profiler-backed measurements."
        url="https://james.alphaden.club/lab/frame-pacing"
        keywords="frame pacing, frame variance, Unity profiler, stutter analysis"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'Frame Pacing Lab',
          description: 'Frame pacing lab focused on variance, spikes, and cadence stability beyond average FPS using profiler-backed measurements.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <div className="mb-4">
        <Link to="/case-studies/xr-stress-lab" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">← Back to XR Stress Lab Case Study</Link>
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
