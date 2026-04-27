import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ResultsTable from '../../components/ResultsTable';
import SmartLink from '../../components/SmartLink';
import { performanceResults } from '../../data/performanceResults';
import { Seo } from '../../components/Seo';

export default function XRFrameTimingLabPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="XR Frame Timing Lab — James De Raja"
        description="Lab article on XR frame deadlines, compositor sync points, and practical profiling signals for reducing reprojection risk."
        url="https://jamesderaja.com/lab/xr-frame-timing"
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
      <PageHero
        backHref="/#writing"
        backLabel="Back to Writing"
        category="Lab Article"
        title="Understanding XR Frame Timing and Performance Constraints"
        description="XR frame timing is less forgiving than traditional display loops. This article explains how prediction windows, compositor deadlines, and synchronization points constrain engineering decisions when tuning Unity scenes."
        chips={['Lab Article', '9 min read', 'Unity', 'XR', 'Frame Pacing']}
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


      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Why XR timing is less forgiving</h2>
        <p className="text-slate-300">
          In XR, every frame is deadline-driven for compositor handoff. Missing the budget affects motion stability and
          reprojection behavior, even when average FPS appears acceptable.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">The pipeline: deadlines and sync points</h2>
        <div className="glass-card rounded-2xl p-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
            <span className="rounded-md border border-white/10 px-2 py-1">CPU Simulation</span>
            <span>→</span>
            <span className="rounded-md border border-white/10 px-2 py-1">Submit</span>
            <span>→</span>
            <span className="rounded-md border border-white/10 px-2 py-1">GPU Render</span>
            <span>→</span>
            <span className="rounded-md border border-white/10 px-2 py-1">XR Compositor</span>
            <span>→</span>
            <span className="rounded-md border border-white/10 px-2 py-1">Display</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Sync points and waits can break frame cadence before mean frame time alone indicates a problem.
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Measured Results</h2>
        <p className="text-slate-300">
          These experiments are separate controlled tests; baselines differ per scenario.
        </p>
        <ResultsTable rows={performanceResults} />
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-white">Evidence: profiler and frame debugger captures</h2>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
            alt="Unity Profiler capture showing CPU and Render Thread timing under stress"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">Profiler capture: CPU and Render Thread timing behavior under overdraw load.</figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_Experiment_Summary.png"
            alt="Overdraw experiment summary comparing baseline and stress"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">Controlled comparison: baseline vs overdraw stress with clear GPU escalation.</figcaption>
        </figure>

        <figure className="space-y-2">
          <img
            src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
            alt="Frame Debugger trace showing repeated transparent pass draws"
            loading="lazy"
            className="rounded-xl border border-white/10"
          />
          <figcaption className="text-sm text-slate-400">Frame Debugger trace: repeated transparent draws amplifying fragment cost in stereo.</figcaption>
        </figure>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Key Takeaways</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <span className="font-semibold text-white">XR is deadline-driven:</span> compositor misses are more severe than a simple FPS drop.
          </li>
          <li>
            <span className="font-semibold text-white">Overdraw scales fast in stereo:</span> stacked transparency can exceed budget quickly.
          </li>
          <li>
            <span className="font-semibold text-white">MSAA cost is context-sensitive:</span> edge density and overdraw interaction determine escalation.
          </li>
          <li>
            <span className="font-semibold text-white">Submission still matters:</span> instancing can dramatically reduce CPU pressure.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Next</h2>
        <p className="text-slate-300">
          For full methodology and scene setup details, review the XR Performance Stress Lab resources.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/?section=xr-lab"
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-medium"
          >
            Back to Lab
          </Link>
          <SmartLink
            href="https://github.com/JamesDeRaja/XRPerformanceLab"
            className="btn-primary rounded-xl px-5 py-3 text-sm font-medium"
          >
            XR Stress Lab (GitHub)
          </SmartLink>
        </div>
      </section>
    </main>
    </div>
  );
}
