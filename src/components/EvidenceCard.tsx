import { useState } from 'react';

type EvidenceCardProps = {
  title: string;
  description: string;
  imagePath: string;
  caption?: string;
};

export default function EvidenceCard({ title, description, imagePath, caption }: EvidenceCardProps) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-xs text-slate-600">{description}</p>
      <div className="mt-3 h-44 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        {imageMissing ? (
          <div className="flex h-full items-center justify-center bg-slate-100 text-xs text-slate-500">
            Screenshot placeholder
          </div>
        ) : (
          <img
            src={imagePath}
            alt={title}
            loading="lazy"
            onError={() => setImageMissing(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {caption && (
        <p className="codex/replace-hardcoded-placeholder-with-dynamic-caption">
          {caption}
        </p>
      )}
    </article>
  );
}
