import { useCountUp } from '../../hooks/useCountUp';

type CountUpProps = {
  end: number;
  suffix?: string;
  className?: string;
};

export default function CountUp({ end, suffix = '', className = '' }: CountUpProps) {
  const { count, ref } = useCountUp({ end, duration: 1.2 });

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
