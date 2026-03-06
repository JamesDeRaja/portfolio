import EvidenceCard from '../components/EvidenceCard';
import ExperimentAccordion from '../components/ExperimentAccordion';
import ResultsTable from '../components/ResultsTable';
import SectionHeading from '../components/SectionHeading';
import { performanceResults } from '../data/performanceResults';
import { xrExperiments, xrLabConfig } from '../data/xrLab';
import { Link } from 'react-router-dom';
import SmartLink from '../components/SmartLink';

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
    <section id="xr-lab" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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

        {/* Featured research finding */}
        <div className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Key Finding</p>
          <p className="mt-1 text-lg font-bold text-slate-900">+7.27 ms GPU cost isolated under overdraw stress</p>
          <p className="mt-1 text-xs text-slate-600">
            201 sequential transparent draw calls · ZWrite Off · Render-thread dominated · Unity 6 URP + OpenXR
          </p>
          <p className="mt-1 text-xs text-slate-500 italic">
            Stereo transparency stacking doubles fragment workload — crosses the 11 ms budget boundary at 90 Hz.
          </p>
        </div>

        {/* Test framework pipeline */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Test Framework Pipeline</p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { step: '01', label: 'Locked Baseline Scene', sub: 'Fixed camera, controlled geometry' },
              { step: '02', label: 'Stress Toggle System', sub: 'A/B isolation per variable' },
              { step: '03', label: 'Frame Metrics Capture', sub: 'CPU, GPU, render-thread timings' },
              { step: '04', label: 'Profiler + Frame Debugger', sub: 'Pass-level validation' },
              { step: '05', label: 'Mitigation Playbook', sub: 'Documented, repeatable findings' },
            ].map((node, i, arr) => (
              <div key={node.step} className="flex items-center gap-2">
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  <span className="block font-semibold text-cyan-700">{node.step}</span>
                  <span className="block font-medium text-slate-800">{node.label}</span>
                  <span className="block text-slate-500">{node.sub}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-slate-400 font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
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
          <div className="mt-4">
            <Link to="/case-studies/xr-stress-lab" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
              View full XR case study →
            </Link>
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
          <SmartLink href="https://github.com/JamesDeRaja/XRPerformanceLab" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
            GitHub Repo
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
