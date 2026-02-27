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
        UI masking is often treated as a UI problem, but its cost is rendering-adjacent: it can amplify fill-rate,
        introduce extra passes, and increase redraw frequency. SoftMaskPro focuses on predictable GPU behavior under
        fill-rate heavy UI workloads.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">
          Production UI frequently combines masking, transparency, and layered composition. The risk is silent
          fill-rate amplification: small UI changes can create large GPU deltas, especially on XR/mobile targets. The
          goal was to make masking behavior observable and controllable, and to document safe operating constraints for
          teams.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">
          Profiled masked UI scenarios using repeatable test scenes and capture protocol. Inspected draw/pass
          composition (masking plus blending) to understand where cost accumulates. Reduced unnecessary redraw paths
          via targeted update behavior and clarified usage constraints so the tool remains deterministic under load.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">
          Results are tracked as profiler-backed patterns rather than marketing claims: identified cost growth vectors
          from stacked UI layers plus masking plus transparency; validated improvements via CPU/GPU frame cost checks
          under repeatable UI scenarios; documented when masking becomes a fill-rate multiplier so teams can budget it.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">
          Evidence includes profiler captures and pass inspection showing redraw frequency under UI changes,
          pass-level composition during masking, and blend/depth settings that influence overdraw and fill-rate cost.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">
          Operational guidelines: avoid deep stacking of masked transparent layers, minimize full-screen masked quads,
          constrain redraw triggers to known UI changes, and treat masked UI as a GPU-budgeted system rather than free
          UI.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a href="https://github.com/JamesDeRaja/XRPerformanceLab" className="hover:text-cyan-700 hover:underline">
              Repository
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
