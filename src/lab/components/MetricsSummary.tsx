type MetricsSummaryProps = {
  baselineCpu: number;
  baselineGpu: number;
  stressCpu: number;
  stressGpu: number;
  bottleneck: string;
  baselineLabel?: string;
  stressLabel?: string;
};

function delta(current: number, baseline: number) {
  const value = current - baseline;
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}`;
}

export default function MetricsSummary({
  baselineCpu,
  baselineGpu,
  stressCpu,
  stressGpu,
  bottleneck,
  baselineLabel = 'Baseline CPU/GPU (ms)',
  stressLabel = 'Stress CPU/GPU (ms)'
}: MetricsSummaryProps) {
  return (
    <section className="mt-6 space-y-3">
      <h2 className="text-xl font-semibold text-white">Metrics Summary</h2>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="glass-card rounded-xl p-4 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.08em] text-slate-500">{baselineLabel}</p>
          <p className="mt-1 font-medium text-white">
            {baselineCpu.toFixed(2)} / {baselineGpu.toFixed(2)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.08em] text-slate-500">{stressLabel}</p>
          <p className="mt-1 font-medium text-white">
            {stressCpu.toFixed(2)} / {stressGpu.toFixed(2)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Delta CPU/GPU (ms)</p>
          <p className="mt-1 font-medium text-white">
            {delta(stressCpu, baselineCpu)} / {delta(stressGpu, baselineGpu)}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-300">
        <span className="font-semibold text-white">Bottleneck:</span> {bottleneck}
      </p>
    </section>
  );
}
