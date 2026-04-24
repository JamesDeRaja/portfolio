import AnimatedSection from './AnimatedSection';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
          {'// '}{eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
          {subtitle}
        </p>
      )}
      <div className="divider-glow mt-6 w-24" />
    </AnimatedSection>
  );
}
