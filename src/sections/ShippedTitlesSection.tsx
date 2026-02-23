import { shippedTitles } from '../data/shippedTitles';
import SectionHeading from '../components/SectionHeading';

export default function ShippedTitlesSection() {
  return (
    <section id="shipped-titles" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Engineering Output"
        title="Selected Shipped Titles (Runtime Stability Focus)"
        subtitle="Representative shipped mobile titles with profiling-driven runtime optimization and post-launch performance diagnostics."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {shippedTitles.map((title) => (
          <article key={title.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{title.name}</h3>
            <p className="mt-2 text-sm text-slate-700">{title.technicalFocus}</p>
            <div className="mt-4 flex gap-3 text-xs">
              {title.googlePlay ? (
                <a href={title.googlePlay} className="text-cyan-700 hover:text-cyan-800">
                  Google Play
                </a>
              ) : null}
              {title.appStore ? (
                <a href={title.appStore} className="text-cyan-700 hover:text-cyan-800">
                  App Store
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
