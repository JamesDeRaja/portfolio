import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const range = to - from;

    function tick(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + range * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, from, to, duration, decimals]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={spanRef} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
