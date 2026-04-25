import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  backHref: string;
  backLabel: string;
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  chips?: string[];
  metric?: string;
  metricLabel?: string;
}

export default function PageHero({
  backHref,
  backLabel,
  category,
  title,
  subtitle,
  description,
  chips = [],
  metric,
  metricLabel,
}: PageHeroProps) {
  return (
    <div className="relative mb-12">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-neon/4 blur-[110px]" />
      </div>

      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <Link
          to={backHref}
          className="group inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-neon"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          {backLabel}
        </Link>
      </motion.div>

      {/* Category badge + chips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.06 }}
        className="flex flex-wrap items-center gap-2 mb-4"
      >
        <span className="chip-glow rounded-full px-3 py-1 font-mono text-xs">{category}</span>
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-slate-400"
          >
            {chip}
          </span>
        ))}
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-2 font-mono text-sm text-neon/70"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-300 leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Optional key metric highlight */}
      {metric && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="mt-5 inline-flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-2.5"
        >
          <span className="font-mono text-xl font-bold text-amber-400">{metric}</span>
          {metricLabel && (
            <span className="text-sm text-slate-400">{metricLabel}</span>
          )}
        </motion.div>
      )}

      {/* Bottom divider */}
      <div className="mt-8 divider-glow" />
    </div>
  );
}
