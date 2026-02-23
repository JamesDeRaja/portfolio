import SectionHeading from '../components/SectionHeading';
import { writingPosts } from '../data/writing';

export default function WritingSection() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Writing"
        title="Engineering Notes: frame timing, rendering cost, XR constraints"
        subtitle="Technical writing focused on practical XR and real-time systems performance patterns."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {writingPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{post.excerpt}</p>
            <p className="mt-3 text-xs text-slate-500">Includes diagrams, profiler screenshots, and measured examples.</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>{post.readTime}</span>
              <a className="font-medium text-cyan-700 hover:text-cyan-800" href={`/writing/${post.slug}`}>
                Read article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
