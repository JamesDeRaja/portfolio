import { motion } from 'framer-motion';
import { shippedTitles } from '../data/shippedTitles';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import SmartLink from '../components/SmartLink';
import { ExternalLink, Smartphone, Zap, Users, Timer, TrendingUp } from 'lucide-react';
import StoreMetricsCard from '../components/StoreMetricsCard';

export default function ShippedTitlesSection() {
  return (
    <section id="shipped-titles" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Shipped Games"
        title="Production titles, live on app stores"
        subtitle="Real games shipped under real constraints — tight budgets, strict frame targets, live audiences. Each one a complete journey from blank project to published product."
      />

      {/* Industry execution — PPP prototype experience */}
      <AnimatedSection>
        <div className="mb-8 glass-card rounded-2xl overflow-hidden">
          <div className="border-b border-white/5 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-neon/60">Industry Execution</p>
                <h3 className="mt-2 text-xl font-bold text-white">Rapid Prototyping at Scale</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Delivered 100+ rapid prototypes for major hyper-casual publishers through paid prototype programs (PPP),
                  optimizing gameplay feel, frame stability, and test-ready performance under aggressive iteration cycles.
                </p>
              </div>
              <div className="flex-shrink-0 rounded-xl border border-neon/15 bg-neon/5 px-5 py-3 text-center">
                <p className="font-mono text-3xl font-bold text-neon text-glow-cyan">100+</p>
                <p className="mt-1 text-xs text-slate-400">prototypes delivered</p>
              </div>
            </div>
          </div>
          {/* Measurable impact row */}
          <div className="border-b border-white/5 px-6 py-5 sm:px-8">
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">Measurable Impact</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="font-mono text-lg font-bold text-emerald-400 sm:text-xl">25% → 38%</p>
                <p className="mt-0.5 text-xs text-slate-400">D1 retention improvement</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-emerald-400 sm:text-xl">2x</p>
                <p className="mt-0.5 text-xs text-slate-400">D1 playtime (1500s → 3000s)</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-neon sm:text-xl">$5k–$10k</p>
                <p className="mt-0.5 text-xs text-slate-400">per prototype engagement</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-neon sm:text-xl">60fps</p>
                <p className="mt-0.5 text-xs text-slate-400">from first prototype build</p>
              </div>
            </div>
          </div>

          {/* Capability pillars */}
          <div className="grid grid-cols-2 gap-0 border-b border-white/5 sm:grid-cols-4">
            {[
              { icon: Users, label: 'Multi-publisher collaboration', sub: 'Global studios' },
              { icon: Timer, label: 'Rapid iteration cycles', sub: 'Days, not months' },
              { icon: TrendingUp, label: 'Retention & engagement tuning', sub: 'Data-driven iteration' },
              { icon: Zap, label: 'Performance-ready delivery', sub: 'Optimized from day one' },
            ].map((item, idx) => (
              <div key={item.label} className={`p-4 sm:p-5 ${idx < 3 ? 'border-r border-white/5' : ''}`}>
                <item.icon size={16} className="text-neon/50" />
                <p className="mt-2 text-xs font-medium text-white/80">{item.label}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Best improvement — store funnel proof */}
          <div className="p-6 sm:p-8">
            <StoreMetricsCard
              visitorsImg="/metrics/best_improvement_visitors.png"
              acquisitionsImg="/metrics/best_improvement_acquisitions.png"
              summary="Gameplay optimization and retention tuning across rapid prototype iterations led to a measurable store funnel improvement. Listing engagement peaked at ~70K visitors with ~16K acquisitions during the optimization window, demonstrating how runtime performance work directly translates to better install economics."
              metrics={[
                { label: 'peak visitors', value: '~70K' },
                { label: 'peak acquisitions', value: '~16K' },
                { label: 'conversion stabilized during optimization window', value: '\u2713' },
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured published titles */}
      <AnimatedSection>
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500">
          Featured published titles
        </p>
      </AnimatedSection>
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
