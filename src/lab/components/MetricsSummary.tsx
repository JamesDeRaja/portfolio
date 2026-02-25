import type { LabMetricsSummary } from '../types';

type MetricsSummaryProps = {
  metrics: LabMetricsSummary;
};

export default function MetricsSummary({ metrics }: MetricsSummaryProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-xl font-semibold text-slate-900">Metrics Summary</h2>
        {metrics.headline && <span className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700">{metrics.headline}</span>}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-3">
        {metrics.rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">{row.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{row.value}</p>
            {row.hint && <p className="mt-1 text-xs text-slate-600">{row.hint}</p>}
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-700">
        <span className="font-semibold text-slate-900">Bottleneck:</span> {metrics.bottleneck}
        {metrics.bottleneckDetail ? ` — ${metrics.bottleneckDetail}` : ''}
      </p>
    </section>
  );
}
