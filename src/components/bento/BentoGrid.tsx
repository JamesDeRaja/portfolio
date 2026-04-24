import type { ReactNode } from 'react';

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
