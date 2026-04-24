import BentoCard from './BentoCard';

type SkillClusterCardProps = {
  title: string;
  skills: string[];
  className?: string;
};

export default function SkillClusterCard({ title, skills, className = '' }: SkillClusterCardProps) {
  return (
    <BentoCard title={title} className={className}>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs text-slate-300">
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
