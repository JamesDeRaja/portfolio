import { useParams } from 'react-router-dom';

export default function WorkSlugPage() {
  const { slug } = useParams();

  return (
    <main className="mx-auto min-h-[70vh] max-w-4xl px-4 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">Case Study</p>
      <h1 className="mt-4 text-4xl tracking-tight">{slug?.replace(/-/g, ' ')}</h1>
      <p className="mt-6 text-[var(--color-text-secondary)]">
        This case-study stub is ready for deeper profiling notes, before/after captures, and implementation decisions.
      </p>
    </main>
  );
}
