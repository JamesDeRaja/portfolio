type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm text-slate-700 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
