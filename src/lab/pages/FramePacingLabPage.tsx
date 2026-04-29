import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function FramePacingLabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Frame Pacing Lab — James De Raja"
        description="Frame pacing lab focused on variance, spikes, and cadence stability beyond average FPS using profiler-backed measurements."
        canonicalPath="https://james.alphaden.club/lab/frame-pacing"
        ogType="article"
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
    </main>
    </div>
  );
}
