import { Link } from 'react-router-dom';

export default function XRStressLabCaseStudyPage() {
  return (
    <div className="min-h-screen bg-site-pattern">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/">← Back to Home</Link>
        </div>

      <h1 className="text-3xl font-semibold text-slate-900">XR Performance Stress Lab</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">Profiler-led XR Rendering Analysis</p>
      <p className="mt-4 text-slate-700">
        A controlled XR test harness used to isolate overdraw, MSAA, submission pressure, and frame pacing variance
        under repeatable runtime conditions.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">Scaffold: summarize the XR performance constraints and investigation goals.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">Scaffold: detail scene toggles, capture strategy, and controlled A/B experiment setup.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">Scaffold: add measured deltas and bottleneck classifications from profiler traces.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Scaffold: attach frame debugger captures and timing tables relevant to each stress path.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">Scaffold: map bottlenecks to practical mitigation options for XR delivery constraints.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Experiments Conducted</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <Link to="/lab/overdraw" className="hover:text-cyan-700 hover:underline">
              Overdraw Stress (GPU-bound fragment)
            </Link>
          </li>
          <li>
            <Link to="/lab/msaa" className="hover:text-cyan-700 hover:underline">
              MSAA Scaling (bandwidth amplification)
            </Link>
          </li>
          <li>
            <Link to="/lab/instancing" className="hover:text-cyan-700 hover:underline">
              Instancing vs Non-Instancing (submission cost)
            </Link>
          </li>
          <li>
            <Link to="/lab/frame-pacing" className="hover:text-cyan-700 hover:underline">
              Frame Pacing Variance Capture
            </Link>
          </li>
        </ul>
      </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Links</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>
              <a href="https://github.com/placeholder/xr-performance-lab" className="hover:text-cyan-700 hover:underline">
                Repository
              </a>
            </li>
            <li>
              <Link to="/lab/overdraw" className="hover:text-cyan-700 hover:underline">
                Overdraw Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/msaa" className="hover:text-cyan-700 hover:underline">
                MSAA Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/instancing" className="hover:text-cyan-700 hover:underline">
                Instancing Lab
              </Link>
            </li>
            <li>
              <Link to="/lab/frame-pacing" className="hover:text-cyan-700 hover:underline">
                Frame Pacing Lab
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
