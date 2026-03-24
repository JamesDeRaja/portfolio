import { motion } from 'framer-motion';
import { shippedTitles } from '../data/shippedTitles';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SmartLink from '../components/SmartLink';
import { ExternalLink, Smartphone, Gamepad2 } from 'lucide-react';

export default function ShippedTitlesSection() {
  return (
    <section id="shipped-titles" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Production Evidence"
        title="Shipped Titles — Runtime Performance Results"
        subtitle="Published mobile titles where profiling-driven optimisation produced measurable frame-budget improvements. Games as engineering evidence, not portfolio decoration."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {shippedTitles.map((title, i) => (
          <AnimatedSection key={title.name} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-card glass-card-hover flex h-full flex-col rounded-2xl p-6 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Gamepad2 size={16} className="text-neon/50" />
                  <h3 className="text-base font-semibold text-white">{title.name}</h3>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Smartphone size={12} className="text-slate-500" />
                <p className="text-xs text-slate-500">{title.genre} &bull; {title.platform}</p>
              </div>

              {/* Technical focus */}
              <p className="mt-4 flex-1 text-sm text-slate-300 leading-relaxed">{title.technicalFocus}</p>

              {/* Key metric */}
              <div className="mt-4 rounded-lg border border-emerald-500/15 bg-emerald-500/5 px-3 py-2">
                <p className="font-mono text-xs font-medium text-emerald-400">{title.keyMetric}</p>
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-3 text-xs">
                {title.googlePlay && (
                  <SmartLink href={title.googlePlay} className="inline-flex items-center gap-1 text-neon/70 transition hover:text-neon">
                    Google Play <ExternalLink size={10} />
                  </SmartLink>
                )}
                {title.appStore && (
                  <SmartLink href={title.appStore} className="inline-flex items-center gap-1 text-neon/70 transition hover:text-neon">
                    App Store <ExternalLink size={10} />
                  </SmartLink>
                )}
              </div>
            </motion.article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
