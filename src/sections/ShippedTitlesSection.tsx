import { motion } from 'framer-motion';
import { shippedTitles } from '../data/shippedTitles';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SmartLink from '../components/SmartLink';
import { ExternalLink, Smartphone } from 'lucide-react';

export default function ShippedTitlesSection() {
  return (
    <section id="shipped-titles" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Shipped Games"
        title="Production titles, live on app stores"
        subtitle="Real games shipped under real constraints — tight budgets, strict frame targets, live audiences. Each one a complete journey from blank project to published product."
      />

      {/* Full-width stacked cards for more visual weight */}
      <div className="space-y-6">
        {shippedTitles.map((title, i) => (
          <AnimatedSection key={title.name} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left: Identity + Platform */}
                <div className="flex flex-col justify-between border-b border-white/5 p-6 sm:w-72 sm:flex-shrink-0 sm:border-b-0 sm:border-r sm:p-8">
                  <div>
                    <h3 className="text-xl font-bold text-white">{title.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <Smartphone size={14} className="text-slate-500" />
                      <p className="text-sm text-slate-400">{title.platform}</p>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{title.genre}</p>
                  </div>

                  {/* Store links */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {title.appStore && (
                      <SmartLink href={title.appStore} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-neon/30 hover:text-neon">
                        App Store <ExternalLink size={10} />
                      </SmartLink>
                    )}
                    {title.googlePlay && (
                      <SmartLink href={title.googlePlay} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-neon/30 hover:text-neon">
                        Google Play <ExternalLink size={10} />
                      </SmartLink>
                    )}
                  </div>
                </div>

                {/* Right: Technical story + Key metric */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <p className="text-sm text-slate-300 leading-relaxed">{title.technicalFocus}</p>

                  {/* Key metric — prominent */}
                  <div className="mt-5 rounded-xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-3">
                    <p className="font-mono text-sm font-semibold text-emerald-400">{title.keyMetric}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
