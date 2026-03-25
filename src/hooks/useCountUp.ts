import { useEffect, useRef, useState } from 'react';

type UseCountUpOptions = {
  end: number;
  duration?: number;
  delay?: number;
};

export function useCountUp({ end, duration = 1.4, delay = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const start = performance.now() + delay * 1000;

          function tick(now: number) {
            const elapsed = Math.max(0, now - start);
            const progress = Math.min(elapsed / (duration * 1000), 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, delay]);

  return { count, ref };
}
