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
        Structured scaffold for documenting an in-engine profiling toolkit used to accelerate performance triage and
        handoff across development builds.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">Scaffold: capture the bottleneck visibility gaps that motivated the toolkit.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">Scaffold: summarize overlay architecture, capture protocol, and triage workflow.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">Scaffold: add concrete turnaround and variance-insight outcomes.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Scaffold: include sample overlays, captures, and annotated output snapshots.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">Scaffold: define how standardized captures inform mitigation prioritization.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a
              href="https://github.com/placeholder/unity-profiling-overlay"
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
