import { motion } from 'framer-motion';

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
    <article
      className="glass-card rounded-xl p-3"
      role="img"
      aria-label={`${title}: ${labelLeft} ${baselineMs.toFixed(2)} milliseconds${
        stressMs === undefined ? '' : `, ${labelRight} ${stressMs.toFixed(2)} milliseconds`
      }`}
    >
      <p className="text-sm font-medium text-white">{title}</p>
      <div className="mt-3 space-y-2">
        <div className="grid grid-cols-[68px_1fr_auto] items-center gap-2">
          <span className="text-xs text-slate-400">{labelLeft}</span>
          <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-2.5 rounded-full bg-slate-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${baselineWidth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <span className="font-mono text-xs text-slate-300">{baselineMs.toFixed(2)} ms</span>
        </div>

        {stressWidth !== null && (
          <div className="grid grid-cols-[68px_1fr_auto] items-center gap-2">
            <span className="text-xs text-slate-400">{labelRight}</span>
            <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className={`h-2.5 rounded-full ${variant === 'gpu' ? 'bg-neon/60' : 'bg-electric/60'}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${stressWidth}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="font-mono text-xs text-slate-300">{stressMs!.toFixed(2)} ms</span>
          </div>
        )}
      </div>

      {delta !== null && <p className="mt-2 font-mono text-xs text-neon/70">&Delta; {formatSigned(delta)}</p>}
    </article>
  );
}
