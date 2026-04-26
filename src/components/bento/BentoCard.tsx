import { ReactNode } from 'react';

type BentoVariant = 'default' | 'featured' | 'metric' | 'highlight' | 'dim';
type BentoGlow = 'none' | 'cyan' | 'purple' | 'green';
type BentoPadding = 'none' | 'sm' | 'md' | 'lg';
type BentoImportance = 'low' | 'normal' | 'high' | 'priority';
type BentoShape = 'rounded' | 'soft' | 'rect';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: BentoVariant;
  hover?: boolean;
  glow?: BentoGlow;
  padding?: BentoPadding;
  elevated?: boolean;
  importance?: BentoImportance;
  shape?: BentoShape;
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

const importanceMap: Record<BentoImportance, string> = {
  low: 'border border-dashed border-white/20 bg-void-900/45',
  normal: 'border border-white/[0.08]',
  high: 'border-2 border-neon/35',
  priority: 'border-2 border-neon/45 bg-gradient-to-br from-neon/[0.12] via-electric/[0.05] to-transparent shadow-[0_16px_36px_rgba(129,140,248,0.2)]',
};

const shapeMap: Record<BentoShape, string> = {
  rounded: 'rounded-2xl',
  soft: 'rounded-3xl',
  rect: 'rounded-lg',
};

function getDefaultImportance(variant: BentoVariant): BentoImportance {
  if (variant === 'dim') return 'low';
  if (variant === 'featured' || variant === 'highlight') return 'high';
  return 'normal';
}

export default function BentoCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = 'cyan',
  padding = 'md',
  elevated = false,
  importance,
  shape = 'rounded',
}: BentoCardProps) {
  const resolvedImportance = importance ?? getDefaultImportance(variant);

  return (
    <div
      className={[
        'bento-card transition-all duration-300',
        shapeMap[shape],
        variantMap[variant],
        importanceMap[resolvedImportance],
        elevated ? 'bento-elevated' : hover ? glowMap[glow] : '',
        hover ? 'hover:-translate-y-1 hover:scale-[1.01]' : '',
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
