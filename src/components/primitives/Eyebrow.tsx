import type { ReactNode } from 'react';

type EyebrowProps = { children: ReactNode; className?: string };

export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)] ${className}`}>
      {children}
    </p>
  );
}
