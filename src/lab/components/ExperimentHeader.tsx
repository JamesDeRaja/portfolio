import type { LabExperiment } from '../types';

type ExperimentHeaderProps = Pick<LabExperiment, 'title' | 'subtitle' | 'lastUpdated' | 'context'>;

export default function ExperimentHeader({ title, subtitle, lastUpdated, context }: ExperimentHeaderProps) {
  return (
    <header className="space-y-3 border-b border-slate-200 pb-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      <p className="text-base text-slate-700">{subtitle}</p>
      {lastUpdated && <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>}
      {context && <p className="text-sm text-slate-600">{context}</p>}
    </header>
  );
}
