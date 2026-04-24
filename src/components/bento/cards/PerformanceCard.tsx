import BentoCard from '../BentoCard';
import Eyebrow from '../../primitives/Eyebrow';
import MetricBar from '../../primitives/MetricBar';
import CountUp from '../../primitives/CountUp';

export default function PerformanceCard() {
  return (
    <BentoCard variant="featured" className="order-2 md:col-span-4 md:row-span-2">
      <Eyebrow>Performance</Eyebrow>
      <div className="mt-4 space-y-5">
        <div>
          <div className="flex items-end justify-between">
            <p className="font-medium">Draw calls</p>
            <CountUp end={80} suffix="%" className="font-mono text-lg text-[var(--color-accent)]" />
          </div>
          <p className="mb-2 font-mono text-xs text-[var(--color-text-muted)]">Quest 2, 2024 · Unity Frame Debugger</p>
          <MetricBar before={1240} after={248} />
          <p className="mt-1 font-mono text-xs text-[var(--color-text-secondary)]">1240 → 248</p>
        </div>

        <div>
          <p className="font-medium">Client prediction</p>
          <p className="mb-2 font-mono text-xs text-[var(--color-text-muted)]">Android multiplayer · custom rollback traces</p>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            {['Client Input', 'Predicted State', 'Server Reconcile'].map((item) => (
              <div key={item} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-2 font-mono text-[var(--color-text-secondary)]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Reduced visible snapbacks in high-latency sessions.</p>
        </div>

        <div>
          <p className="font-medium">Object pooling</p>
          <p className="font-mono text-sm text-[var(--color-accent)]">GC allocs: 0</p>
          <p className="text-xs text-[var(--color-text-secondary)]">Quest 2 stress scene · Unity Profiler allocation timeline.</p>
        </div>
      </div>
    </BentoCard>
  );
}
