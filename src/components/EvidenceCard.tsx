import { useState } from 'react';
import { motion } from 'framer-motion';

type EvidenceCardProps = {
  title: string;
  description: string;
  imagePath: string;
  caption?: string;
};

export default function EvidenceCard({ title, description, imagePath, caption }: EvidenceCardProps) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="glass-card glass-card-hover card-surface card-surface--low rounded-2xl p-4 transition-all duration-300"
    >
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="mt-1 text-xs text-slate-400">{description}</p>
      <div className="mt-3 h-44 overflow-hidden rounded-xl border border-white/5 bg-void-800">
        {imageMissing ? (
          <div className="flex h-full items-center justify-center text-xs text-slate-600">
            Screenshot placeholder
          </div>
        ) : (
          <img
            src={imagePath}
            alt={`${title} evidence screenshot`}
            loading="lazy"
            onError={() => setImageMissing(true)}
            className="h-full w-full object-cover opacity-90 transition hover:opacity-100"
          />
        )}
      </div>
      {caption && (
        <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
          {caption}
        </p>
      )}
    </motion.article>
  );
}
