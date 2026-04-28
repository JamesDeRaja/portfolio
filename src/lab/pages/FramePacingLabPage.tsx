import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function FramePacingLabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Frame Pacing Lab — James De Raja"
        description="Frame pacing lab focused on variance, spikes, and cadence stability beyond average FPS using profiler-backed measurements."
        url="https://jamesderaja.com/lab/frame-pacing"
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
      <PageHero
        backHref="/case-studies/xr-stress-lab"
        backLabel="Back to XR Stress Lab"
        category="Lab Experiment"
        title="Frame Pacing Variance Lab"
        subtitle="Variance and Spike Characterization"
        description="This experiment track captures variance signatures under controlled workload modulation. Quantified results are published alongside the other stress paths once capture normalization is complete."
        chips={['Frame Pacing', 'Variance', 'Spike Analysis', 'Unity XR']}
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

    </main>
    </div>
  );
}
