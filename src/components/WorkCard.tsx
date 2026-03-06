import type { WorkProject } from '../types';
import { Link } from 'react-router-dom';
import SmartLink from './SmartLink';

type WorkCardProps = {
  project: WorkProject;
};

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <article className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${project.featured ? 'ring-1 ring-cyan-100' : ''}`}>
      {project.images && project.images.length > 0 && (
        <div className="flex gap-2 rounded-t-2xl bg-slate-50 p-4 border-b border-slate-200">
          {project.images.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-14 w-14 rounded-xl object-cover shadow-sm"
            />
          ))}
        </div>
      )}
      <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">What I did</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-900">Impact:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {project.impact.map((impactPoint) => (
            <li key={impactPoint}>{impactPoint}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex gap-3">
        <Link to={project.caseStudyUrl} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          Case Study
        </Link>
        <SmartLink href={project.repoUrl} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          {project.id === 'mobile-projects' ? 'App Store' : 'Repo'}
        </SmartLink>
      </div>
      </div>
    </article>
  );
}
