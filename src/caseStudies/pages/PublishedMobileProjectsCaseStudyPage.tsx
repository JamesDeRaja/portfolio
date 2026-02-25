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
        Case study scaffold for shipped projects where profiling-led engineering decisions were used to protect frame
        budgets across varied mobile hardware classes.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">Scaffold: outline platform constraints and frame-time risks before release.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">Scaffold: summarize optimization passes and cross-discipline implementation flow.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">Scaffold: add per-tier stability observations and pre/post mitigation checkpoints.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Scaffold: include representative captures from release and post-launch cycles.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">Scaffold: map device-tier bottlenecks to mitigation playbooks.</p>
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
