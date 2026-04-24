type MetricBadgeProps = {
  label: string;
};

export default function MetricBadge({ label }: MetricBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-medium text-neon">
      {label}
    </span>
  );
}
