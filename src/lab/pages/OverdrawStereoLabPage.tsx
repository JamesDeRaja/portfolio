import { Link } from 'react-router-dom';
import { Seo } from '../../components/Seo';

export default function OverdrawStereoLabPage() {
  const budgetMs = 11.11;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Stereo Overdraw Lab — James De Raja"
        description="Stereo overdraw lab evaluating double-eye transparency cost, fragment amplification, and GPU budget pressure in XR rendering."
        url="https://james.alphaden.club/lab/overdraw-stereo"
        keywords="stereo overdraw, XR rendering, fragment cost, Unity performance"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'Stereo Overdraw Lab',
          description: 'Stereo overdraw lab evaluating double-eye transparency cost, fragment amplification, and GPU budget pressure in XR rendering.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <div className="mb-4">
        <Link to="/#writing" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">← Back to Writing</Link>
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Why Overdraw Kills Performance in Stereo Rendering</h1>
        <p className="text-slate-700">
          Stereo rendering amplifies fragment cost and exposes overdraw hotspots quickly. We break down practical ways
          to inspect transparent layers, UI composition, and material behavior to keep fill-rate healthy.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Lab Article</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">7 min read</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">XR • Unity • Fill-rate</span>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Test Setup</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Target refresh: <span className="font-semibold text-slate-900">90 Hz</span> (budget {budgetMs.toFixed(2)}
              {' '}ms)
            </li>
            <li>
              Render scale: <span className="font-semibold text-slate-900">1.0</span>
            </li>
            <li>
              MSAA: <span className="font-semibold text-slate-900">Disabled</span>
            </li>
            <li>
              Stress source:{' '}
              <span className="font-semibold text-slate-900">40 stacked transparent quads + full-screen particles</span>
            </li>
          </ul>
        </div>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Why Overdraw Is Brutal in XR</h2>
        <p className="text-slate-700">
          Overdraw means the same pixel gets shaded repeatedly as transparent layers stack. In stereo, fragment work is
          paid twice (left eye + right eye). Transparency also weakens early depth rejection, so repeated passes keep
          consuming GPU cost quickly.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Result (numbers first)</h2>
        <p className="text-slate-700">
          Controlled overdraw stress raises both CPU and GPU time, with a primary GPU-bound signature once GPU cost
          crosses the {budgetMs.toFixed(2)} ms deadline for 90 Hz.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Case</th>
                <th className="px-4 py-3">CPU (ms)</th>
                <th className="px-4 py-3">GPU (ms)</th>
                <th className="px-4 py-3">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="px-4 py-4 font-medium text-slate-900">Baseline</td>
                <td className="px-4 py-4">8.53</td>
                <td className="px-4 py-4">6.88</td>
                <td className="px-4 py-4">Within budget</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-slate-900">Overdraw Stress</td>
                <td className="px-4 py-4">12.63</td>
                <td className="px-4 py-4">12.03</td>
                <td className="px-4 py-4">
                  <span className="font-semibold text-slate-900">GPU-bound</span> (CPU also rises from render-thread pressure and sync)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Cost Model</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
          <p className="font-semibold text-slate-900">Work ≈ Pixels × Layers × Eyes × (MSAA samples)</p>
          <p className="mt-2 text-sm">
            In this test, <span className="font-semibold text-slate-900">Layers = 40</span>,{' '}
            <span className="font-semibold text-slate-900">Eyes = 2</span>, and{' '}
            <span className="font-semibold text-slate-900">MSAA = 1</span> (disabled), which multiplies fragment
            workload rapidly.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary comparing baseline and overdraw stress"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">
            Baseline vs stress summary showing steep GPU escalation from transparent layer stacking.
          </figcaption>
        </figure>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Unity Profiler capture comparing CPU and render thread behavior under overdraw"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">
            CPU/Render Thread comparison indicating additional pressure and synchronization overhead during stress.
          </figcaption>
        </figure>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Frame Debugger transparent pass showing repeated draws"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">
            Frame Debugger evidence of repeated transparent passes driving fragment amplification.
          </figcaption>
        </figure>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">How to Find Overdraw Hotspots</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Use overdraw visualization/capture tooling to isolate layer-heavy regions.</li>
          <li>Use Unity Frame Debugger to inspect repeated transparent passes.</li>
          <li>Verify ZWrite/ZTest/blend state on expensive transparent materials.</li>
          <li>Audit UI overlays and full-screen particle passes for stacked cost.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Checklist (ranked by impact)</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li><span className="font-semibold text-slate-900">Reduce stacked transparency</span> and remove redundant overlay layers.</li>
          <li><span className="font-semibold text-slate-900">Prefer opaque/cutout</span> where visual goals allow.</li>
          <li><span className="font-semibold text-slate-900">Limit full-screen particles</span> and large camera-facing transparent quads.</li>
          <li><span className="font-semibold text-slate-900">Consolidate UI layers</span> and avoid redundant canvases.</li>
          <li><span className="font-semibold text-slate-900">Evaluate render scale/foveation</span> when content is transparency-heavy.</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/?section=xr-lab"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700"
          >
            Back to Lab
          </Link>
          <Link
            to="/"
            className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700"
          >
            Back to Home
          </Link>
          <Link
            to="/lab/xr-frame-timing"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700"
          >
            Next: XR Frame Timing
          </Link>
        </div>
      </section>
    </main>
  );
}
