import { ReactNode } from 'react';

type BentoVariant = 'default' | 'featured' | 'metric' | 'highlight' | 'dim';
type BentoGlow = 'none' | 'cyan' | 'purple' | 'green';
type BentoPadding = 'none' | 'sm' | 'md' | 'lg';
type BentoRounded = '2xl' | 'xl' | 'lg';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: BentoVariant;
  hover?: boolean;
  glow?: BentoGlow;
  padding?: BentoPadding;
  elevated?: boolean;
  rounded?: BentoRounded;
}

// Each variant owns its border width + style + color + background
const variantMap: Record<BentoVariant, string> = {
  default:   'bg-void-900/60 border border-white/[0.10]',
  featured:  'bg-neon/[0.06] border-2 border-neon/[0.28]',
  metric:    'bg-void-900/80 border border-white/[0.09]',
  highlight: 'bg-electric/[0.06] border-2 border-electric/[0.28]',
  dim:       'bg-void-950/90 border border-dashed border-white/[0.08]',
};

const glowMap: Record<BentoGlow, string> = {
  none: '',
  cyan:   'hover:border-neon/[0.46] hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(0,0,0,0.44),_0_0_44px_rgba(129,140,248,0.15)] transition-all duration-300',
  purple: 'hover:border-electric/[0.46] hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(0,0,0,0.44),_0_0_44px_rgba(167,139,250,0.15)] transition-all duration-300',
  green:  'hover:border-emerald-500/[0.42] hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(0,0,0,0.44),_0_0_40px_rgba(52,211,153,0.13)] transition-all duration-300',
};

const paddingMap: Record<BentoPadding, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-5',
  lg:   'p-6',
};

const roundedMap: Record<BentoRounded, string> = {
  '2xl': 'rounded-2xl',
  'xl':  'rounded-xl',
  'lg':  'rounded-lg',
};

export default function BentoCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = 'cyan',
  padding = 'md',
  elevated = false,
  rounded = '2xl',
}: BentoCardProps) {
  return (
    <div
      className={[
        roundedMap[rounded],
        variantMap[variant],
        elevated ? 'bento-elevated' : hover ? glowMap[glow] : '',
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
