import type { EvidenceItem } from '../types';

type EvidenceGalleryProps = {
  evidence: EvidenceItem[];
  title?: string;
};

export default function EvidenceGallery({ evidence, title = 'Evidence' }: EvidenceGalleryProps) {
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-8">
        {evidence.map((item) => (
          <article key={item.title} className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            {item.description && <p className="text-sm text-slate-600">{item.description}</p>}
            <img
              src={item.imagePath}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full rounded-lg border border-slate-200"
            />
            <p className="text-xs text-slate-500/90">{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
