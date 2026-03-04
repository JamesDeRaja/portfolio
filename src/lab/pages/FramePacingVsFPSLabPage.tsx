import { Link } from 'react-router-dom';
import { Seo } from '../../components/Seo';

export default function FramePacingVsFPSLabPage() {
  const hz = 72;
  const budgetMs = 1000 / hz;
  const platform = 'MockHMD';

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Frame Pacing vs FPS Lab — James De Raja"
        description="Lab article showing why stable frame pacing can outperform higher but inconsistent FPS in XR and real-time rendering workloads."
        url="https://james.alphaden.club/lab/frame-pacing-vs-fps"
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
      <div style={{ marginBottom: '16px' }}>
        <Link to="/?section=writing">← Back to Writing</Link>
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Frame Pacing vs FPS: What Engineers Get Wrong</h1>
        <p className="text-slate-700">
          Stable pacing matters more than a single peak FPS number. Learn how to interpret variance, spike patterns, and
          pacing discipline so delivered experiences feel consistently smooth under real workload.
        </p>

        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Lab Article</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">8 min read</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Performance • XR • Frame Timing</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Test setup</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Target refresh: <span className="font-semibold text-slate-900">{hz} Hz</span> → budget{' '}
              <span className="font-semibold text-slate-900">{budgetMs.toFixed(2)} ms</span> per frame
            </li>
            <li>
              Platform: <span className="font-semibold text-slate-900">{platform}</span>
            </li>
            <li>
              Focus: <span className="font-semibold text-slate-900">variance + sync-bound pacing</span> (not just average FPS)
            </li>
          </ul>
        </div>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">The common mistake: optimizing for a number</h2>
        <p className="text-slate-700">
          Many teams chase FPS as a single output metric. FPS can look acceptable while delivery feels unstable because
          what users perceive is consistency, not peak values.
        </p>
        <p className="text-slate-700">
          Two builds with similar averages can still feel very different when variance and deadline misses diverge.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Pacing is variance + spikes</h2>
        <p className="text-slate-700">
          Frame pacing is governed by distribution, not only mean frame time. The worst frames define perceived
          instability.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Prefer:</span> average + p95 + p99 frame time and spike
            frequency.
          </p>
          <p className="mt-2 text-sm">
            If p99 crosses <span className="font-semibold text-slate-900">{budgetMs.toFixed(2)} ms</span> frequently,
            pacing will feel unstable even when average FPS appears fine.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Deadline framing (why 72 Hz matters)</h2>
        <p className="text-slate-700">
          At {hz} Hz, each frame has {budgetMs.toFixed(2)} ms budget. The goal is deadline consistency, not just the
          highest reported FPS.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Evidence: under-target vs on-target pacing</h2>

        <figure className="space-y-2">
          <img
            src="/lab/FramePacing_UnderTarget_LowFPS.png"
            alt="Unity Profiler capture showing low FPS and frame times exceeding the 72 Hz budget"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Under target:</span> frequent overruns beyond {budgetMs.toFixed(2)} ms lead to unstable delivery.
          </figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/FramePacing_OnTarget_72FPS.png"
            alt="Unity Profiler capture showing delivery near 72 FPS with present and sync markers in the timeline"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">On target (72 FPS):</span> cadence still depends on variance and sync behavior. Markers like WaitForPresentOnGfxThread and WaitForSignal indicate present gating.
          </figcaption>
        </figure>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          Frame pacing screenshots are intentionally omitted for now to avoid binary upload constraints in this
          environment. The article content remains focused on 72 Hz deadline behavior, variance interpretation, and
          synchronization markers.
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Takeaway:</span> FPS indicates whether budget is reached;
          pacing indicates whether budget is reached consistently.
        </div>

        <p className="text-sm text-slate-700">
          Note: these captures show <span className="font-semibold text-slate-900">GPU: --ms</span> (no GPU timing).
          Evidence here emphasizes CPU-side pacing and synchronization. On-device profiling should include GPU timing for
          full classification.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Spike patterns engineers misread</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li><span className="font-semibold text-slate-900">CPU-bound spikes:</span> script hotspots, submission bursts, main-thread stalls.</li>
          <li><span className="font-semibold text-slate-900">GPU-bound spikes:</span> overdraw, expensive fragment work, bandwidth pressure.</li>
          <li><span className="font-semibold text-slate-900">Fence/sync spikes:</span> waits on present/signal boundaries.</li>
          <li><span className="font-semibold text-slate-900">GC spikes:</span> allocation churn and stop-the-world pauses.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">How to measure pacing properly (Unity workflow)</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          <li><span className="font-semibold text-slate-900">Capture longer windows:</span> use 10-30 second captures.</li>
          <li><span className="font-semibold text-slate-900">Track variance:</span> monitor p95/p99 and spike frequency.</li>
          <li><span className="font-semibold text-slate-900">Read timeline markers:</span> map spikes to waits/submission/GC.</li>
          <li><span className="font-semibold text-slate-900">Change one variable at a time:</span> keep baseline conditions fixed.</li>
        </ol>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Pacing discipline checklist</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li><span className="font-semibold text-slate-900">Budget-first:</span> design for {hz} Hz ({budgetMs.toFixed(2)} ms).</li>
          <li><span className="font-semibold text-slate-900">Protect headroom:</span> maintain margin for real workload spikes.</li>
          <li><span className="font-semibold text-slate-900">Remove multipliers:</span> overdraw, full-screen passes, transparency stacks.</li>
          <li><span className="font-semibold text-slate-900">Stabilize submission:</span> use batching/instancing discipline.</li>
          <li><span className="font-semibold text-slate-900">Eliminate bursty work:</span> reduce allocations and stalls.</li>
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
        </div>
      </section>
    </main>
  );
}
