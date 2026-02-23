import type { Experiment } from '../types';
import ExperimentSpec from './ExperimentSpec';

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

          <ExperimentSpec spec={experiment.spec} />

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
