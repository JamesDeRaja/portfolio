import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { card, EASE } from '../../lib/motion';

type Variant = 'default' | 'featured' | 'muted';

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  default: 'bg-[var(--color-surface)] border-[var(--color-border)]',
  featured: 'bg-[var(--color-surface-2)] border-[var(--color-border-hover)]',
  muted: 'bg-[var(--color-bg)] border-[var(--color-border)]',
};

export default function BentoCard({ children, className = '', variant = 'default' }: BentoCardProps) {
  return (
    <motion.article
      variants={card}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: EASE }}
      className={`rounded-[18px] border p-6 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.article>
  );
}
