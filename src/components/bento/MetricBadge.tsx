type MetricColor = 'cyan' | 'green' | 'purple' | 'white' | 'amber' | 'red';

interface MetricBadgeProps {
  value: string;
  label?: string;
  color?: MetricColor;
  size?: 'sm' | 'md';
}

const colorMap: Record<MetricColor, string> = {
  cyan: 'text-neon border-neon/25 bg-neon/[0.07]',
  green: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/[0.07]',
  purple: 'text-electric border-electric/25 bg-electric/[0.07]',
  white: 'text-white border-white/15 bg-white/[0.05]',
  amber: 'text-amber-400 border-amber-500/25 bg-amber-500/[0.07]',
  red: 'text-red-400 border-red-500/25 bg-red-500/[0.07]',
};

export default function MetricBadge({
  value,
  label,
  color = 'cyan',
  size = 'md',
}: MetricBadgeProps) {
  const textSize = size === 'sm' ? 'text-[11px]' : 'text-xs';
  const px = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border font-mono ${colorMap[color]} ${textSize} ${px}`}
    >
      <span className="font-semibold">{value}</span>
      {label && <span className="opacity-55">{label}</span>}
    </span>
  );
}
