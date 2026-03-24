import type { Experiment } from '../types';
import ExperimentSpec from './ExperimentSpec';

type ExperimentAccordionProps = {
  experiments: Experiment[];
};

export default function ExperimentAccordion({ experiments }: ExperimentAccordionProps) {
  return (
    <div className="space-y-3">
      {experiments.map((experiment) => (
        <details key={experiment.id} className="glass-card group rounded-xl transition-all duration-300">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-white hover:text-neon transition [&::-webkit-details-marker]:hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-neon/50">{experiment.id}</span>
                <span>{experiment.title}</span>
                <span className="text-xs font-normal text-slate-500 group-open:hidden">{experiment.spec.hypothesis}</span>
              </div>
              <span className="text-slate-500 transition group-open:rotate-90">&rsaquo;</span>
            </div>
          </summary>

          <div className="border-t border-white/5 px-5 py-4">
            <ExperimentSpec spec={experiment.spec} />

            <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-slate-400">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-white/60">Measurement Plan</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  Metrics: CPU ms, GPU ms, Render thread ms, Draw calls, SetPass, Overdraw
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  Tooling: Unity Profiler, Frame Debugger (RenderDoc optional)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  Output: Baseline vs Stress delta + bottleneck classification
                </li>
              </ul>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
