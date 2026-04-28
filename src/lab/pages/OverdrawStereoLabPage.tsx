import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function OverdrawStereoLabPage() {
  const budgetMs = 11.11;

  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Stereo Overdraw Lab — James De Raja"
        description="Stereo overdraw lab evaluating double-eye transparency cost, fragment amplification, and GPU budget pressure in XR rendering."
        url="https://jamesderaja.com/lab/overdraw-stereo"
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
      <PageHero
        backHref="/#writing"
        backLabel="Back to Writing"
        category="Lab Article"
        title="Why Overdraw Kills Performance in Stereo Rendering"
        description="Stereo rendering amplifies fragment cost and exposes overdraw hotspots quickly. We break down practical ways to inspect transparent layers, UI composition, and material behavior to keep fill-rate healthy."
        chips={['Lab Article', '7 min read', 'XR', 'Unity', 'Fill-rate']}
      />

      <section className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
        <h2 className="text-base font-semibold text-white">Lab Metadata</h2>
        <p className="mt-2 text-sm text-slate-300">Unity 6 · Mobile · 16.6ms Frame Budget</p>
      </section>

      <section className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
        <h2 className="text-base font-semibold text-white">Performance Evidence</h2>
        <ul className="mt-2 space-y-1 text-sm text-slate-300">
          <li>• Profiler Capture (Coming)</li>
          <li>• Frame Debugger (Coming)</li>
          <li>• Metrics Table (Coming)</li>
        </ul>
      </section>


      <div className="glass-card rounded-2xl p-4 text-sm text-slate-300 mt-6">
        <p className="font-semibold text-white">Test Setup</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Target refresh: <span className="font-semibold text-white">90 Hz</span> (budget {budgetMs.toFixed(2)}
            {' '}ms)
          </li>
          <li>
            Render scale: <span className="font-semibold text-white">1.0</span>
          </li>
          <li>
            MSAA: <span className="font-semibold text-white">Disabled</span>
          </li>
          <li>
            Stress source:{' '}
            <span className="font-semibold text-white">40 stacked transparent quads + full-screen particles</span>
          </li>
        </ul>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Why Overdraw Is Brutal in XR</h2>
        <p className="text-slate-300">
          Overdraw means the same pixel gets shaded repeatedly as transparent layers stack. In stereo, fragment work is
          paid twice (left eye + right eye). Transparency also weakens early depth rejection, so repeated passes keep
          consuming GPU cost quickly.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Measured Result (numbers first)</h2>
        <p className="text-slate-300">
          Controlled overdraw stress raises both CPU and GPU time, with a primary GPU-bound signature once GPU cost
          crosses the {budgetMs.toFixed(2)} ms deadline for 90 Hz.
        </p>
        <div className="overflow-x-auto glass-card rounded-2xl">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Case</th>
                <th className="px-4 py-3">CPU (ms)</th>
                <th className="px-4 py-3">GPU (ms)</th>
                <th className="px-4 py-3">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="px-4 py-4 font-medium text-white">Baseline</td>
                <td className="px-4 py-4">8.53</td>
                <td className="px-4 py-4">6.88</td>
                <td className="px-4 py-4">Within budget</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-white">Overdraw Stress</td>
                <td className="px-4 py-4">12.63</td>
                <td className="px-4 py-4">12.03</td>
                <td className="px-4 py-4">
                  <span className="font-semibold text-white">GPU-bound</span> (CPU also rises from render-thread pressure and sync)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Cost Model</h2>
        <div className="glass-card rounded-2xl p-4 text-slate-300">
          <p className="font-semibold text-white">Work ≈ Pixels × Layers × Eyes × (MSAA samples)</p>
          <p className="mt-2 text-sm">
            In this test, <span className="font-semibold text-white">Layers = 40</span>,{' '}
            <span className="font-semibold text-white">Eyes = 2</span>, and{' '}
            <span className="font-semibold text-white">MSAA = 1</span> (disabled), which multiplies fragment
            workload rapidly.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary comparing baseline and overdraw stress"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">
            Baseline vs stress summary showing steep GPU escalation from transparent layer stacking.
          </figcaption>
        </figure>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Unity Profiler capture comparing CPU and render thread behavior under overdraw"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">
            CPU/Render Thread comparison indicating additional pressure and synchronization overhead during stress.
          </figcaption>
        </figure>
        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Frame Debugger transparent pass showing repeated draws"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">
            Frame Debugger evidence of repeated transparent passes driving fragment amplification.
          </figcaption>
        </figure>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">How to Find Overdraw Hotspots</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Use overdraw visualization/capture tooling to isolate layer-heavy regions.</li>
          <li>Use Unity Frame Debugger to inspect repeated transparent passes.</li>
          <li>Verify ZWrite/ZTest/blend state on expensive transparent materials.</li>
          <li>Audit UI overlays and full-screen particle passes for stacked cost.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Mitigation Checklist (ranked by impact)</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li><span className="font-semibold text-white">Reduce stacked transparency</span> and remove redundant overlay layers.</li>
          <li><span className="font-semibold text-white">Prefer opaque/cutout</span> where visual goals allow.</li>
          <li><span className="font-semibold text-white">Limit full-screen particles</span> and large camera-facing transparent quads.</li>
          <li><span className="font-semibold text-white">Consolidate UI layers</span> and avoid redundant canvases.</li>
          <li><span className="font-semibold text-white">Evaluate render scale/foveation</span> when content is transparency-heavy.</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/?section=xr-lab"
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-medium"
          >
            Back to Lab
          </Link>
          <Link
            to="/"
            className="btn-primary rounded-xl px-5 py-3 text-sm font-medium"
          >
            Back to Home
          </Link>
          <Link
            to="/lab/xr-frame-timing"
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-medium"
          >
            Next: XR Frame Timing
          </Link>
        </div>
      </section>
    </main>
    </div>
  );
}
