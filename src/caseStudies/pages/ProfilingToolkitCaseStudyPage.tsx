import SmartLink from '../../components/SmartLink';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function ProfilingToolkitCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Profiling Toolkit Case Study — James De Raja"
        description="Case study on a Unity runtime profiling overlay that shortens bottleneck triage from symptom capture to mitigation-ready evidence."
        url="https://jamesderaja.com/case-studies/profiling-toolkit"
        keywords="Unity profiler toolkit, runtime overlay, bottleneck triage, performance telemetry"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Profiling Toolkit Case Study',
          description:
            'Case study on a Unity runtime profiling overlay that shortens bottleneck triage from symptom capture to mitigation-ready evidence.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <PageHero
        backHref="/"
        backLabel="Back to Portfolio"
        category="Case Study"
        title="Unity Performance & Profiling Toolkit"
        subtitle="Runtime Triage Instrumentation"
        description="A lightweight in-engine overlay and capture workflow to accelerate bottleneck triage during development builds. Shortens the loop from symptom to classification to evidence to mitigation."
        chips={['Unity Profiler', 'Runtime HUD', 'Frame Timing', 'Draw Calls', 'A/B Profiling']}
      />

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Problem / Context</h2>
        <p className="text-slate-300">
          Performance investigation often fails because the right signals are not visible at the moment a spike occurs.
          Switching tools, reproducing conditions, and aligning captures wastes iteration time. The goal was to make
          key indicators visible in-build and standardize what gets captured for handoff.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Engineering Approach</h2>
        <p className="text-slate-300">
          Built an overlay that surfaces frame timing signals and lightweight counters during runtime. Added scenario
          presets so investigations can run controlled A/B sessions. Standardized capture notes and snapshot
          conventions so profiler traces and evidence remain comparable across runs.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Measured Results</h2>
        <p className="text-slate-300">
          Outcome focus: faster bottleneck classification during investigation sessions (CPU vs GPU vs variance), more
          consistent evidence quality via standardized capture protocol, and reduced ambiguity during engineering
          handoff by bundling timing context with captures.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <p className="text-slate-300">
          Representative outputs include overlay snapshots during spikes, profiler capture references tied to scenario
          presets, and annotated evidence bundles suitable for teammate handoff.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Mitigation Strategy</h2>
        <p className="text-slate-300">
          The toolkit is designed to drive mitigation prioritization: classify bottleneck signature, confirm with
          capture, apply targeted fixes (submission, overdraw, bandwidth, scheduling), and re-measure under identical
          scenario preset.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <SmartLink
              href="https://github.com/JamesDeRaja/XRPerformanceLab"
              className="hover:text-neon hover:underline"
            >
              Repository
            </SmartLink>
          </li>
        </ul>
      </section>
    </main>
    </div>
  );
}
