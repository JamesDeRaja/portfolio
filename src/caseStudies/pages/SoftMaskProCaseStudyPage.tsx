import { Link } from 'react-router-dom';

export default function SoftMaskProCaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">SoftMaskPro (Unity UI Rendering Tooling)</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">UI Masking Cost Predictability</p>
      <p className="mt-4 text-slate-700">
        Case study scaffold for a UI masking toolkit focused on balancing visual requirements with deterministic GPU
        behavior under heavy fill-rate pressure.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">Scaffold: describe masking constraints in production UI scenes.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">Scaffold: summarize redraw controls, pass-level inspection, and validation setup.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">Scaffold: add profiler-backed deltas and observed rendering cost patterns.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Scaffold: include captures that validate redraw and blend-path behavior.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">Scaffold: map UI scenarios to safe operational settings.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a href="https://github.com/placeholder/softmaskpro" className="hover:text-cyan-700 hover:underline">
              Repository
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
