import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { writingPosts } from '../data/writing';

function getPostHref(slug: string) {
  if (slug === 'understanding-xr-frame-timing-and-performance-constraints') {
    return '/lab/xr-frame-timing';
  }

  return `/writing/${slug}`;
}

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
            <h3 className="text-lg font-semibold text-slate-900">
              <Link to={getPostHref(post.slug)} className="hover:text-cyan-700">
                {post.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm text-slate-700">{post.excerpt}</p>
            <p className="mt-3 text-xs text-slate-500">Includes diagrams, profiler screenshots, and measured examples.</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>{post.readTime}</span>
              <Link className="font-medium text-cyan-700 hover:text-cyan-800" to={getPostHref(post.slug)}>
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
