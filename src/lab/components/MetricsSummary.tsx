import { motion } from 'framer-motion';
import CountUp from '../../components/CountUp';

type MetricsSummaryProps = {
  baselineCpu: number;
  baselineGpu: number;
  stressCpu: number;
  stressGpu: number;
  bottleneck: string;
  baselineLabel?: string;
  stressLabel?: string;
};

function deltaColor(current: number, baseline: number): string {
  const v = current - baseline;
  if (v > 0.5) return 'text-red-400';
  if (v < -0.5) return 'text-emerald-400';
  return 'text-slate-300';
}

export default function MetricsSummary({
  baselineCpu,
  baselineGpu,
  stressCpu,
  stressGpu,
  bottleneck,
  baselineLabel = 'Baseline',
  stressLabel = 'Under Stress',
}: MetricsSummaryProps) {
  const cpuDelta = stressCpu - baselineCpu;
  const gpuDelta = stressGpu - baselineGpu;
  const cpuDeltaColor = deltaColor(stressCpu, baselineCpu);
  const gpuDeltaColor = deltaColor(stressGpu, baselineGpu);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="mt-6 rounded-2xl border border-white/[0.08] bg-void-900/60 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_4px_16px_rgba(0,0,0,0.3)]"
    >
      {/* Header */}
      <div className="border-b border-white/[0.06] px-5 py-3 flex items-center justify-between">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
          Metrics Summary
        </p>
        <span className="font-mono text-[10px] text-slate-600">CPU / GPU (ms)</span>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.05]">
        {/* Baseline */}
        <div className="p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-3">
            {baselineLabel}
          </p>
          <div className="space-y-1.5">
            <div>
              <CountUp to={baselineCpu} decimals={2} duration={1.1} className="font-mono text-xl font-bold text-white" />
              <p className="font-mono text-[10px] text-slate-600">CPU ms</p>
            </div>
            <div>
              <CountUp to={baselineGpu} decimals={2} duration={1.1} className="font-mono text-xl font-bold text-white" />
              <p className="font-mono text-[10px] text-slate-600">GPU ms</p>
            </div>
          </div>
        </div>

        {/* Under stress */}
        <div className="p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-3">
            {stressLabel}
          </p>
          <div className="space-y-1.5">
            <div>
              <CountUp to={stressCpu} decimals={2} duration={1.1} className="font-mono text-xl font-bold text-amber-400" />
              <p className="font-mono text-[10px] text-slate-600">CPU ms</p>
            </div>
            <div>
              <CountUp to={stressGpu} decimals={2} duration={1.1} className="font-mono text-xl font-bold text-amber-400" />
              <p className="font-mono text-[10px] text-slate-600">GPU ms</p>
            </div>
          </div>
        </div>

        {/* Delta */}
        <div className="p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-3">
            Delta
          </p>
          <div className="space-y-1.5">
            <div>
              <CountUp
                to={cpuDelta}
                from={0}
                decimals={2}
                prefix={cpuDelta >= 0 ? '+' : ''}
                duration={1.1}
                className={`font-mono text-xl font-bold ${cpuDeltaColor}`}
              />
              <p className="font-mono text-[10px] text-slate-600">CPU ms</p>
            </div>
            <div>
              <CountUp
                to={gpuDelta}
                from={0}
                decimals={2}
                prefix={gpuDelta >= 0 ? '+' : ''}
                duration={1.1}
                className={`font-mono text-xl font-bold ${gpuDeltaColor}`}
              />
              <p className="font-mono text-[10px] text-slate-600">GPU ms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottleneck classification */}
      <div className="border-t border-white/[0.06] px-5 py-3 flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-white">Bottleneck:</span> {bottleneck}
        </p>
      </div>
    </motion.div>
  );
}
