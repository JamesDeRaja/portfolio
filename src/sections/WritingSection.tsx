import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { writingPosts } from '../data/writing';
import { ArrowRight, Clock } from 'lucide-react';

function getPostHref(slug: string) {
  if (slug === 'understanding-xr-frame-timing-and-performance-constraints') {
    return '/lab/xr-frame-timing';
  }
  if (slug === 'why-overdraw-kills-performance-in-stereo-rendering') {
    return '/lab/overdraw-stereo';
  }
  if (slug === 'frame-pacing-vs-fps-what-engineers-get-wrong') {
    return '/lab/frame-pacing-vs-fps';
  }
  return `/writing/${slug}`;
}

export default function WritingSection() {
  const navigate = useNavigate();

  return (
    <section id="writing" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Writing"
        title="Engineering Notes"
        subtitle="Technical writing focused on practical XR and real-time systems performance patterns — frame timing, rendering cost, and XR constraints."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {writingPosts.map((post, i) => {
          const target = getPostHref(post.slug);
          const cardIsLabRoute = target.startsWith('/lab/');

          return (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (cardIsLabRoute) {
                    navigate(target);
                  }
                }}
                onKeyDown={(event) => {
                  if (cardIsLabRoute && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    navigate(target);
                  }
                }}
                role={cardIsLabRoute ? 'link' : undefined}
                tabIndex={cardIsLabRoute ? 0 : undefined}
              >
                <h3 className="text-lg font-semibold text-white transition group-hover:text-neon">
                  <Link to={target}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm text-slate-400 leading-relaxed">{post.excerpt}</p>
                <p className="mt-3 text-xs text-slate-500">
                  Includes diagrams, profiler screenshots, and measured examples.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span>{post.date} &bull; {post.readTime}</span>
                  </div>
                  <Link
                    className="inline-flex items-center gap-1 font-medium text-neon/70 transition group-hover:text-neon"
                    to={target}
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
