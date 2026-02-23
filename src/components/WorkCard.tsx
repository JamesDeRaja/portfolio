import type { WorkProject } from '../types';

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
      <p className="mt-4 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">Impact:</span> {project.impact}
      </p>
      <div className="mt-5 flex gap-3">
        <a href={project.caseStudyUrl} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          Case Study
        </a>
        <a href={project.repoUrl} className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
          Repo
        </a>
      </div>
    </article>
  );
}
