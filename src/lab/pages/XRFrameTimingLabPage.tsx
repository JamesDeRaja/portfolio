import { Link } from 'react-router-dom';
import ResultsTable from '../../components/ResultsTable';
import SmartLink from '../../components/SmartLink';
import { performanceResults } from '../../data/performanceResults';
import { Seo } from '../../components/Seo';

export default function XRFrameTimingLabPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="XR Frame Timing Lab — James De Raja"
        description="Lab article on XR frame deadlines, compositor sync points, and practical profiling signals for reducing reprojection risk."
        url="https://james.alphaden.club/lab/xr-frame-timing"
        keywords="XR frame timing, compositor deadlines, reprojection, Unity XR"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'XR Frame Timing Lab',
          description: 'Lab article on XR frame deadlines, compositor sync points, and practical profiling signals for reducing reprojection risk.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <div className="mb-4">
        <Link to="/#writing" className="text-sm text-slate-500 hover:text-cyan-700 transition-colors">← Back to Writing</Link>
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Understanding XR Frame Timing and Performance Constraints</h1>
        <p className="text-slate-700">
          XR frame timing is less forgiving than traditional display loops. This article explains how prediction windows,
          compositor deadlines, and synchronization points constrain engineering decisions when tuning Unity scenes.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Lab Article</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">9 min read</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1">Unity • XR • Frame Pacing</span>
        </div>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Why XR timing is less forgiving</h2>
        <p className="text-slate-700">
          In XR, every frame is deadline-driven for compositor handoff. Missing the budget affects motion stability and
          reprojection behavior, even when average FPS appears acceptable.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">The pipeline: deadlines and sync points</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
            <span className="rounded-md border border-slate-200 px-2 py-1">CPU Simulation</span>
            <span>→</span>
            <span className="rounded-md border border-slate-200 px-2 py-1">Submit</span>
            <span>→</span>
            <span className="rounded-md border border-slate-200 px-2 py-1">GPU Render</span>
            <span>→</span>
            <span className="rounded-md border border-slate-200 px-2 py-1">XR Compositor</span>
            <span>→</span>
            <span className="rounded-md border border-slate-200 px-2 py-1">Display</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Sync points and waits can break frame cadence before mean frame time alone indicates a problem.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">
          These experiments are separate controlled tests; baselines differ per scenario.
        </p>
        <ResultsTable rows={performanceResults} />
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Evidence: profiler and frame debugger captures</h2>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Unity Profiler capture showing CPU and Render Thread timing under stress"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">Profiler capture: CPU and Render Thread timing behavior under overdraw load.</figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary comparing baseline and stress"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">Controlled comparison: baseline vs overdraw stress with clear GPU escalation.</figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Frame Debugger trace showing repeated transparent pass draws"
            className="rounded-xl border border-slate-200"
          />
          <figcaption className="text-sm text-slate-600">Frame Debugger trace: repeated transparent draws amplifying fragment cost in stereo.</figcaption>
        </figure>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <span className="font-semibold text-slate-900">XR is deadline-driven:</span> compositor misses are more severe than a simple FPS drop.
          </li>
          <li>
            <span className="font-semibold text-slate-900">Overdraw scales fast in stereo:</span> stacked transparency can exceed budget quickly.
          </li>
          <li>
            <span className="font-semibold text-slate-900">MSAA cost is context-sensitive:</span> edge density and overdraw interaction determine escalation.
          </li>
          <li>
            <span className="font-semibold text-slate-900">Submission still matters:</span> instancing can dramatically reduce CPU pressure.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Next</h2>
        <p className="text-slate-700">
          For full methodology and scene setup details, review the XR Performance Stress Lab resources.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/?section=xr-lab"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700"
          >
            Back to Lab
          </Link>
          <SmartLink
            href="https://github.com/JamesDeRaja/XRPerformanceLab"
            className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700"
          >
            XR Stress Lab (GitHub)
          </SmartLink>
        </div>
      </section>
    </main>
  );
}
