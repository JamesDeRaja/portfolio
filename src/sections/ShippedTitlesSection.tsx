import { shippedTitles } from '../data/shippedTitles';
import SectionHeading from '../components/SectionHeading';
import SmartLink from '../components/SmartLink';

export default function ShippedTitlesSection() {
  return (
    <section id="shipped-titles" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Production Evidence"
        title="Shipped Titles — Runtime Performance Results"
        subtitle="Published mobile titles where profiling-driven optimisation produced measurable frame-budget improvements. Games as engineering evidence, not portfolio decoration."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {shippedTitles.map((title) => (
          <article key={title.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-900">{title.name}</h3>
            </div>
            <p className="mt-1 text-xs text-slate-500">{title.genre} &bull; {title.platform}</p>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{title.technicalFocus}</p>
            <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2">
              <p className="text-xs font-medium text-emerald-800">{title.keyMetric}</p>
            </div>
            <div className="mt-4 flex gap-3 text-xs">
              {title.googlePlay ? (
                <SmartLink href={title.googlePlay} className="text-cyan-700 hover:text-cyan-800">
                  Google Play
                </SmartLink>
              ) : null}
              {title.appStore ? (
                <SmartLink href={title.appStore} className="text-cyan-700 hover:text-cyan-800">
                  App Store
                </SmartLink>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
