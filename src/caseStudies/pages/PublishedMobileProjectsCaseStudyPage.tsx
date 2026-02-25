import { Link } from 'react-router-dom';

export default function PublishedMobileProjectsCaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Selected Published Mobile Projects</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Frame Budget Stability Across Device Tiers</p>
      <p className="mt-4 text-slate-700">
        Representative shipped titles where profiling-led decisions were used to protect frame budgets across device
        tiers. Focus: stability under real workloads, not peak FPS.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">
          Mobile performance is dominated by variance: different GPUs, thermal behavior, memory pressure, and content
          spikes. The risk is a build that looks fine on a dev device but fails under real player conditions. The goal
          was to keep frame time within budget and reduce spike frequency before and after release.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">
          Ran targeted profiling passes around release milestones to identify dominant bottlenecks (fill-rate,
          submission, CPU scheduling, memory/GC). Coordinated with art/design to trade visual complexity against frame
          budget. Used structured capture notes to track what changed, why it changed, and whether it improved
          stability.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">
          Measured outcomes are reported as budget protection and stability: maintained frame budget targets through
          bottleneck isolation and mitigation, reduced spike frequency through targeted removal of intermittent
          expensive work, and validated changes through repeatable capture comparisons across representative content.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">
          Evidence includes representative profiler traces and before/after capture bundles from pre-release and
          post-launch investigations (CPU main thread behavior, GPU cost deltas, spike signatures).
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">
          Mitigation follows a device-tier playbook: GPU-bound — reduce overdraw, simplify shaders, and reduce
          resolution where appropriate. CPU-bound — reduce per-frame work, avoid costly iteration patterns, and
          optimize submission behavior. Variance-bound — remove spikes (GC/sync points), stabilize workload cadence,
          and validate across tiers.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a href="https://github.com/placeholder/mobile-projects" className="hover:text-cyan-700 hover:underline">
              Repository
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
