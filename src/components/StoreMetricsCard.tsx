type StoreMetricsCardProps = {
  visitorsImg: string;
  acquisitionsImg: string;
  summary: string;
  metrics: { label: string; value: string }[];
};

export default function StoreMetricsCard({ visitorsImg, acquisitionsImg, summary, metrics }: StoreMetricsCardProps) {
  return (
    <div className="mt-6 rounded-xl border border-neon/10 bg-white/[0.02] p-6">
      <h4 className="font-mono text-xs font-semibold uppercase tracking-wide text-neon/60">
        Store Funnel Impact
      </h4>

      {/* Metric highlights */}
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
        {metrics.map((m) => (
          <span key={m.label} className="text-xs text-slate-400">
            <span className="font-mono font-semibold text-neon">{m.value}</span>{' '}{m.label}
          </span>
        ))}
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm text-slate-300 leading-relaxed">{summary}</p>

      {/* Graph images */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <img
            src={visitorsImg}
            alt="Store listing visitors graph"
            className="rounded-lg border border-white/5"
            loading="lazy"
          />
          <p className="mt-1.5 text-[10px] text-slate-500">Store listing visitors</p>
        </div>
        <div>
          <img
            src={acquisitionsImg}
            alt="Store listing acquisitions graph"
            className="rounded-lg border border-white/5"
            loading="lazy"
          />
          <p className="mt-1.5 text-[10px] text-slate-500">Store listing acquisitions</p>
        </div>
      </div>
    </div>
  );
}
