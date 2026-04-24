import type { ReactNode } from 'react';

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
};

export default function BentoCard({ children, className = '', title, subtitle, id }: BentoCardProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition duration-300 hover:border-neon/30 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon/[0.03] via-transparent to-electric/10" aria-hidden="true" />
      <div className="relative z-10">
        {title && <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>}
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
