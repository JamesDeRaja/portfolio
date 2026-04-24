import BentoCard from './BentoCard';

type ProofCardProps = {
  title: string;
  items: string[];
  caption: string;
  className?: string;
};

export default function ProofCard({ title, items, caption, className = '' }: ProofCardProps) {
  return (
    <BentoCard title={title} className={className}>
      <ul className="mt-3 space-y-2 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs sm:text-sm">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-400">{caption}</p>
    </BentoCard>
  );
}
