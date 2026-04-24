import { ReactNode } from 'react';

type BentoVariant = 'default' | 'featured' | 'metric' | 'highlight' | 'dim';
type BentoGlow = 'none' | 'cyan' | 'purple' | 'green';
type BentoPadding = 'none' | 'sm' | 'md' | 'lg';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: BentoVariant;
  hover?: boolean;
  glow?: BentoGlow;
  padding?: BentoPadding;
}

const variantMap: Record<BentoVariant, string> = {
  default: 'bg-void-900/60 border-white/[0.08]',
  featured: 'bg-neon/[0.03] border-neon/20',
  metric: 'bg-void-900/80 border-white/[0.06]',
  highlight: 'bg-electric/[0.03] border-electric/20',
  dim: 'bg-void-950/90 border-white/[0.05]',
};

const glowMap: Record<BentoGlow, string> = {
  none: '',
  cyan: 'hover:border-neon/30 hover:shadow-[0_0_32px_rgba(0,240,255,0.07)] transition-all duration-300',
  purple: 'hover:border-electric/30 hover:shadow-[0_0_32px_rgba(168,85,247,0.07)] transition-all duration-300',
  green: 'hover:border-emerald-500/30 hover:shadow-[0_0_32px_rgba(52,211,153,0.07)] transition-all duration-300',
};

const paddingMap: Record<BentoPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
};

export default function BentoCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = 'cyan',
  padding = 'md',
}: BentoCardProps) {
  return (
    <div
      className={[
        'rounded-2xl border',
        variantMap[variant],
        hover ? glowMap[glow] : '',
        paddingMap[padding],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
