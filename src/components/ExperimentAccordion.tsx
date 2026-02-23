import type { Experiment } from '../types';

type ExperimentAccordionProps = {
  experiments: Experiment[];
};

export default function ExperimentAccordion({ experiments }: ExperimentAccordionProps) {
  return (
    <div className="space-y-3">
      {experiments.map((experiment) => (
        <details key={experiment.id} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <summary className="cursor-pointer list-none text-base font-medium text-slate-900">
            <div className="flex items-center justify-between gap-4">
              <span>{experiment.title}</span>
              <span className="text-xs text-slate-500 transition group-open:rotate-180">⌄</span>
            </div>
          </summary>
          <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <p><span className="font-semibold text-slate-900">Goal:</span> {experiment.goal}</p>
            <p><span className="font-semibold text-slate-900">Toggle(s):</span> {experiment.toggles}</p>
            <p><span className="font-semibold text-slate-900">Measured:</span> {experiment.measurements}</p>
            <p><span className="font-semibold text-slate-900">Expected bottleneck:</span> {experiment.expectedBottleneck}</p>
            <p className="sm:col-span-2"><span className="font-semibold text-slate-900">Mitigation notes:</span> {experiment.mitigation}</p>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Measurement Plan</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Metrics: CPU ms, GPU ms, Render thread ms, Draw calls, SetPass, Overdraw</li>
              <li>Tooling: Unity Profiler, Frame Debugger (RenderDoc optional)</li>
              <li>Output: Baseline vs Stress delta + bottleneck classification</li>
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
