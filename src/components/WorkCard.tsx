import type { WorkProject } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SmartLink from './SmartLink';

type WorkCardProps = {
  project: WorkProject;
};

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <motion.article
      whileHover={project.featured ? { y: -7 } : { y: -4 }}
      transition={
        project.featured
          ? { type: 'spring', stiffness: 300, damping: 20 }
          : { duration: 0.3 }
      }
      className={
        project.featured
          ? 'card-priority rounded-2xl p-6'
          : 'glass-card glass-card-hover rounded-xl p-6 transition-all duration-300'
      }
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.featured && (
          <span className="flex-shrink-0 rounded-full bg-neon/10 px-2 py-0.5 font-mono text-[10px] font-medium text-neon">
            FEATURED
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.summary}</p>

      {/* What I did */}
      <div className="mt-5">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-neon/60">What I did</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-300">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/50" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="mt-5">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-electric-400/60">Impact</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-300">
          {project.impact.map((impactPoint) => (
            <li key={impactPoint} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-electric-400/50" />
              {impactPoint}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <Link
          to={project.caseStudyUrl}
          className="btn-primary inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium"
        >
          Case Study
          <ArrowUpRight size={14} />
        </Link>
        <SmartLink
          href={project.repoUrl}
          className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm"
        >
          {project.id === 'mobile-projects' ? (
            <>App Store <ArrowUpRight size={14} /></>
          ) : (
            <><Github size={14} /> Repo</>
          )}
        </SmartLink>
      </div>
    </motion.article>
  );
}
