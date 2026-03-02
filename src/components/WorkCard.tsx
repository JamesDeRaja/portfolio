import type { WorkProject } from '../types';
import { Link } from 'react-router-dom';

type WorkCardProps = {
  project: WorkProject;
};

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <article className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${project.featured ? 'ring-1 ring-cyan-100' : ''}`}>
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
        <a href={project.repoUrl} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          {project.id === 'mobile-projects' ? 'App Store' : 'Repo'}
        </a>
      </div>
    </article>
  );
}
