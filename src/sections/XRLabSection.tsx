import EvidenceCard from '../components/EvidenceCard';
import ExperimentAccordion from '../components/ExperimentAccordion';
import ResultsTable from '../components/ResultsTable';
import SectionHeading from '../components/SectionHeading';
import { performanceResults } from '../data/performanceResults';
import { xrExperiments, xrLabConfig } from '../data/xrLab';

const evidenceItems = [
  {
    title: 'Unity Profiler (CPU / Main Thread)',
    description: 'Main-thread frame budget and scheduling behavior capture.',
    imagePath: '/lab/Overdraw_CPU_RenderThread_Comparison.png',
    caption:
      'Baseline vs overdraw comparison. CPU remains ~0.5 ms while render thread increases from 6.37 ms to 13.64 ms under identical scene conditions.'
  },
  {
    title: 'Unity Profiler (GPU / Render Thread)',
    description: 'GPU frame cost and render-thread contribution snapshot.',
    imagePath: '/lab/Overdraw_FrameDebugger_TransparentPass.png',
    caption:
      'Render-thread dominated under overdraw stress. Transparent stacking doubled fragment workload, increasing GPU cost by ~7 ms.'
  },
  {
    title: 'Frame Debugger / RenderDoc Capture',
    description: 'Pass-level evidence for overdraw and submission behavior.',
    imagePath: '/lab/Overdraw_Experiment_Summary.png',
    caption:
      '201 sequential transparent draw calls (ZWrite Off). Fragment workload scales linearly with stacked layers.'
  }
];

export default function XRLabSection() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <section id="xr-performance-lab" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Core Focus"
        title="XR Performance Stress Lab"
        subtitle="Benchmarking lab to measure overdraw, MSAA cost, instancing vs batching, CPU stress, and frame pacing stability under controlled workloads."
      />
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-800">
            Status: {xrLabConfig.status}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
            Target: {xrLabConfig.target}
          </span>
        </div>
        <p className="mt-3 text-xs text-slate-600">Baseline and overdraw stress milestones are now published with validated measurements.</p>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Experiments</h3>
          <ExperimentAccordion experiments={xrExperiments} />
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-slate-900">Published Results</h3>
          <p className="mb-4 text-xs text-slate-500">Last updated: {lastUpdated}</p>
          <ResultsTable rows={performanceResults} />
          <div className="mt-4 space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Notes</p>
            {performanceResults.map((result) => (
              <p key={`${result.name}-notes`}>
                <span className="font-medium text-slate-900">{result.name}:</span> {result.notes}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900">Evidence (Profiler + Captures)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {evidenceItems.map((item) => (
              <EvidenceCard key={item.title} title={item.title} description={item.description} imagePath={item.imagePath} caption={item.caption} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/placeholder/xr-performance-lab" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
            GitHub Repo
          </a>
          <a href="https://example.com/demo-video" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
            Demo Video
          </a>
        </div>
      </div>
    </section>
  );
}
