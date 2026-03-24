import type { ExperimentResult } from '../data/performanceResults';

type ResultsTableProps = {
  rows: ExperimentResult[];
};

function formatBottleneck(bottleneck: string) {
  const [firstToken, ...rest] = bottleneck.split(' ');

  return (
    <>
      <strong className="font-semibold text-neon">{firstToken}</strong>
      {rest.length > 0 ? ` ${rest.join(' ')}` : ''}
    </>
  );
}

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto glass-card rounded-2xl">
      <table className="min-w-full divide-y divide-white/5 text-left text-sm" aria-label="XR performance experiment results">
        <thead className="bg-white/[0.02] font-mono text-[10px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="px-4 py-3">Experiment</th>
            <th className="px-4 py-3">Baseline CPU/GPU</th>
            <th className="px-4 py-3">Stress CPU/GPU</th>
            <th className="px-4 py-3">Bottleneck</th>
            <th className="px-4 py-3">Root Cause</th>
            <th className="px-4 py-3">Mitigation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-slate-300">
          {rows.map((row) => (
            <tr key={row.name} className="transition hover:bg-white/[0.02]">
              <td className="px-4 py-4 font-medium text-white/90">{row.name}</td>
              <td className="px-4 py-4 font-mono text-xs">{row.baseline}</td>
              <td className="px-4 py-4 font-mono text-xs">{row.stress}</td>
              <td className="px-4 py-4">{formatBottleneck(row.bottleneck)}</td>
              <td className="px-4 py-4 text-xs">{row.rootCause}</td>
              <td className="px-4 py-4 text-xs">{row.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
