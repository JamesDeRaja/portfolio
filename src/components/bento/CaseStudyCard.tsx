import SmartLink from '../SmartLink';
import BentoCard from './BentoCard';

type CaseStudyCardProps = {
  title: string;
  description: string;
  bullets: string[];
  metric?: string;
  caseStudyUrl?: string;
  evidenceUrl?: string;
  className?: string;
};

export default function CaseStudyCard({
  title,
  description,
  bullets,
  metric,
  caseStudyUrl,
  evidenceUrl,
  className = '',
}: CaseStudyCardProps) {
  return (
    <BentoCard title={title} className={className}>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      {metric && (
        <p className="mt-3 rounded-lg border border-neon/30 bg-neon/10 px-3 py-2 text-sm font-medium text-neon">
          {metric}
        </p>
      )}
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon/80" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {(caseStudyUrl || evidenceUrl) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudyUrl && (
            <SmartLink href={caseStudyUrl} className="btn-primary rounded-lg px-3 py-2 text-xs font-medium">
              Open Case Study
            </SmartLink>
          )}
          {evidenceUrl && (
            <SmartLink href={evidenceUrl} className="btn-secondary rounded-lg px-3 py-2 text-xs font-medium">
              View Evidence
            </SmartLink>
          )}
        </div>
      )}
    </BentoCard>
  );
}
