type MiniBarsProps = {
  title: string;
  baselineMs: number;
  stressMs?: number;
  maxMs: number;
  labelLeft?: string;
  labelRight?: string;
  variant?: 'gpu' | 'cpu';
};

function formatSigned(value: number) {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)} ms`;
}

export default function MiniBars({
  title,
  baselineMs,
  stressMs,
  maxMs,
  labelLeft = 'Baseline',
  labelRight = 'Stress',
  variant = 'gpu'
}: MiniBarsProps) {
  const scale = maxMs > 0 ? maxMs : 1;
  const baselineWidth = Math.max(0, Math.min(100, (baselineMs / scale) * 100));
  const stressWidth = stressMs === undefined ? null : Math.max(0, Math.min(100, (stressMs / scale) * 100));
  const delta = stressMs === undefined ? null : stressMs - baselineMs;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <div className="mt-3 space-y-2">
        <div className="grid grid-cols-[68px_1fr_auto] items-center gap-2">
          <span className="text-xs text-slate-600">{labelLeft}</span>
          <div className="h-2.5 rounded-full bg-slate-100">
            <div className="h-2.5 rounded-full bg-slate-400" style={{ width: `${baselineWidth}%` }} />
          </div>
          <span className="text-xs text-slate-700">{baselineMs.toFixed(2)} ms</span>
        </div>

        {stressWidth !== null && (
          <div className="grid grid-cols-[68px_1fr_auto] items-center gap-2">
            <span className="text-xs text-slate-600">{labelRight}</span>
            <div className="h-2.5 rounded-full bg-slate-100">
              <div className={`h-2.5 rounded-full ${variant === 'gpu' ? 'bg-cyan-600' : 'bg-slate-600'}`} style={{ width: `${stressWidth}%` }} />
            </div>
            <span className="text-xs text-slate-700">{stressMs.toFixed(2)} ms</span>
          </div>
        )}
      </div>

      {delta !== null && <p className="mt-2 text-xs text-slate-600">Δ {formatSigned(delta)}</p>}
    </article>
  );
}
