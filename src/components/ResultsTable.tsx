import type { ResultRow } from '../types';

type ResultsTableProps = {
  rows: ResultRow[];
};

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Experiment</th>
            <th className="px-4 py-3">Baseline CPU/GPU (ms)</th>
            <th className="px-4 py-3">Stress CPU/GPU (ms)</th>
            <th className="px-4 py-3">Bottleneck</th>
            <th className="px-4 py-3">Root Cause</th>
            <th className="px-4 py-3">Mitigation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700">
          {rows.map((row) => (
            <tr key={row.experiment}>
              <td className="px-4 py-3 font-medium text-slate-900">{row.experiment}</td>
              <td className="px-4 py-3">{row.baseline}</td>
              <td className="px-4 py-3">{row.stress}</td>
              <td className="px-4 py-3">{row.bottleneck}</td>
              <td className="px-4 py-3">{row.rootCause}</td>
              <td className="px-4 py-3">{row.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
