type MetricBarProps = {
  before: number;
  after: number;
};

export default function MetricBar({ before, after }: MetricBarProps) {
  const max = Math.max(before, after);
  const beforeWidth = (before / max) * 100;
  const afterWidth = (after / max) * 100;

  return (
    <div className="space-y-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div className="h-full rounded-full bg-[var(--color-text-secondary)]" style={{ width: `${beforeWidth}%` }} />
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${afterWidth}%` }} />
      </div>
    </div>
  );
}
