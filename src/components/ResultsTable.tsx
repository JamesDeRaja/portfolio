import type { ExperimentResult } from '../data/performanceResults';

type ResultsTableProps = {
  rows: ExperimentResult[];
};

function formatBottleneck(bottleneck: string) {
  const [firstToken, ...rest] = bottleneck.split(' ');

  return (
    <>
      <strong className="font-semibold text-slate-900">{firstToken}</strong>
      {rest.length > 0 ? ` ${rest.join(' ')}` : ''}
    </>
  );
}

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm" aria-label="XR performance experiment results">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Experiment</th>
            <th className="px-4 py-3">Baseline CPU/GPU</th>
            <th className="px-4 py-3">Stress CPU/GPU</th>
            <th className="px-4 py-3">Bottleneck</th>
            <th className="px-4 py-3">Root Cause</th>
            <th className="px-4 py-3">Mitigation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="px-4 py-4 font-medium text-slate-900">{row.name}</td>
              <td className="px-4 py-4">{row.baseline}</td>
              <td className="px-4 py-4">{row.stress}</td>
              <td className="px-4 py-4">{formatBottleneck(row.bottleneck)}</td>
              <td className="px-4 py-4">{row.rootCause}</td>
              <td className="px-4 py-4">{row.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
