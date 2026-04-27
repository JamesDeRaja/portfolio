import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { Seo } from '../../components/Seo';

export default function FramePacingVsFPSLabPage() {
  const hz = 72;
  const budgetMs = 1000 / hz;
  const platform = 'MockHMD';

  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Frame Pacing vs FPS Lab — James De Raja"
        description="Lab article showing why stable frame pacing can outperform higher but inconsistent FPS in XR and real-time rendering workloads."
        url="https://jamesderaja.com/lab/frame-pacing-vs-fps"
        keywords="frame pacing vs FPS, XR performance, frame stability, Unity"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'Frame Pacing vs FPS Lab',
          description: 'Lab article showing why stable frame pacing can outperform higher but inconsistent FPS in XR and real-time rendering workloads.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <PageHero
        backHref="/#writing"
        backLabel="Back to Writing"
        category="Lab Article"
        title="Frame Pacing vs FPS: What Engineers Get Wrong"
        description="Stable pacing matters more than a single peak FPS number. Learn how to interpret variance, spike patterns, and pacing discipline so delivered experiences feel consistently smooth under real workload."
        chips={['Lab Article', '8 min read', 'Performance', 'XR', 'Frame Timing']}
      />

      <div className="glass-card rounded-2xl p-4 text-sm text-slate-300 mt-6">
        <p className="font-semibold text-white">Test setup</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Target refresh: <span className="font-semibold text-white">{hz} Hz</span> → budget{' '}
            <span className="font-semibold text-white">{budgetMs.toFixed(2)} ms</span> per frame
          </li>
          <li>
            Platform: <span className="font-semibold text-white">{platform}</span>
          </li>
          <li>
            Focus: <span className="font-semibold text-white">variance + sync-bound pacing</span> with average FPS
          </li>
        </ul>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">The common mistake: optimizing for a number</h2>
        <p className="text-slate-300">
          Many teams chase FPS as a single output metric. FPS can look acceptable while delivery feels unstable because
          what users perceive is consistency, not peak values.
        </p>
        <p className="text-slate-300">
          Two builds with similar averages can still feel very different when variance and deadline misses diverge.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Pacing is variance + spikes</h2>
        <p className="text-slate-300">
          Frame pacing is governed by distribution, not only mean frame time. The worst frames define perceived
          instability.
        </p>
        <div className="glass-card rounded-2xl p-4 text-slate-300">
          <p className="text-sm">
            <span className="font-semibold text-white">Prefer:</span> average + p95 + p99 frame time and spike
            frequency.
          </p>
          <p className="mt-2 text-sm">
            If p99 crosses <span className="font-semibold text-white">{budgetMs.toFixed(2)} ms</span> frequently,
            pacing will feel unstable even when average FPS appears fine.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Deadline framing (why 72 Hz matters)</h2>
        <p className="text-slate-300">
          At {hz} Hz, each frame has {budgetMs.toFixed(2)} ms budget. The goal is deadline consistency with high
          reported FPS.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-white">Evidence: under-target vs on-target pacing</h2>

        <figure className="space-y-2">
          <img
            src="/lab/FramePacing_UnderTarget_LowFPS.png"
            alt="Unity Profiler capture showing low FPS and frame times exceeding the 72 Hz budget"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">
            <span className="font-semibold text-white">Under target:</span> frequent overruns beyond {budgetMs.toFixed(2)} ms lead to unstable delivery.
          </figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/FramePacing_OnTarget_72FPS.png"
            alt="Unity Profiler capture showing delivery near 72 FPS with present and sync markers in the timeline"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">
            <span className="font-semibold text-white">On target (72 FPS):</span> cadence still depends on variance and sync behavior. Markers like WaitForPresentOnGfxThread and WaitForSignal indicate present gating.
          </figcaption>
        </figure>
        <div className="glass-card rounded-2xl p-4 text-sm text-slate-300">
          <span className="font-semibold text-white">Takeaway:</span> FPS indicates whether budget is reached;
          pacing indicates whether budget is reached consistently.
        </div>

        <p className="text-sm text-slate-300">
          Note: these captures show <span className="font-semibold text-white">GPU: --ms</span> (no GPU timing).
          Evidence here emphasizes CPU-side pacing and synchronization. On-device profiling should include GPU timing for
          full classification.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Spike patterns engineers misread</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li><span className="font-semibold text-white">CPU-bound spikes:</span> script hotspots, submission bursts, main-thread stalls.</li>
          <li><span className="font-semibold text-white">GPU-bound spikes:</span> overdraw, expensive fragment work, bandwidth pressure.</li>
          <li><span className="font-semibold text-white">Fence/sync spikes:</span> waits on present/signal boundaries.</li>
          <li><span className="font-semibold text-white">GC spikes:</span> allocation churn and stop-the-world pauses.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">How to measure pacing properly (Unity workflow)</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-300">
          <li><span className="font-semibold text-white">Capture longer windows:</span> use 10-30 second captures.</li>
          <li><span className="font-semibold text-white">Track variance:</span> monitor p95/p99 and spike frequency.</li>
          <li><span className="font-semibold text-white">Read timeline markers:</span> map spikes to waits/submission/GC.</li>
          <li><span className="font-semibold text-white">Change one variable at a time:</span> keep baseline conditions fixed.</li>
        </ol>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Pacing discipline checklist</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li><span className="font-semibold text-white">Budget-first:</span> design for {hz} Hz ({budgetMs.toFixed(2)} ms).</li>
          <li><span className="font-semibold text-white">Protect headroom:</span> maintain margin for real workload spikes.</li>
          <li><span className="font-semibold text-white">Remove multipliers:</span> overdraw, full-screen passes, transparency stacks.</li>
          <li><span className="font-semibold text-white">Stabilize submission:</span> use batching/instancing discipline.</li>
          <li><span className="font-semibold text-white">Eliminate bursty work:</span> reduce allocations and stalls.</li>
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
        </div>
      </section>
    </main>
    </div>
  );
}
