import { Link } from 'react-router-dom';

export default function ProfilingToolkitCaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Unity Performance &amp; Profiling Toolkit / Overlay</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Runtime Triage Instrumentation</p>
      <p className="mt-4 text-slate-700">
        A lightweight in-engine overlay and capture workflow to accelerate bottleneck triage during development
        builds. The focus is shortening the loop from symptom to classification to evidence to mitigation.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">
          Performance investigation often fails because the right signals are not visible at the moment a spike occurs.
          Switching tools, reproducing conditions, and aligning captures wastes iteration time. The goal was to make
          key indicators visible in-build and standardize what gets captured for handoff.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">
          Built an overlay that surfaces frame timing signals and lightweight counters during runtime. Added scenario
          presets so investigations can run controlled A/B sessions. Standardized capture notes and snapshot
          conventions so profiler traces and evidence remain comparable across runs.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">
          Outcome focus: faster bottleneck classification during investigation sessions (CPU vs GPU vs variance), more
          consistent evidence quality via standardized capture protocol, and reduced ambiguity during engineering
          handoff by bundling timing context with captures.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">
          Representative outputs include overlay snapshots during spikes, profiler capture references tied to scenario
          presets, and annotated evidence bundles suitable for teammate handoff.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">
          The toolkit is designed to drive mitigation prioritization: classify bottleneck signature, confirm with
          capture, apply targeted fixes (submission, overdraw, bandwidth, scheduling), and re-measure under identical
          scenario preset.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a
              href="https://github.com/JamesDeRaja/XRPerformanceLab"
              className="hover:text-cyan-700 hover:underline"
            >
              Repository
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
