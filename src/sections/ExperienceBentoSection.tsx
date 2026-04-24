import { motion } from 'framer-motion';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';

const zohoHighlights = [
  'Scalable REST API integration systems serving enterprise-scale data workflows',
  'Latency reduction through non-blocking I/O and async pipeline redesign',
  'Structured observability and logging for distributed service debugging',
  'Mentoring engineers on architecture discipline and production debugging practices',
  'High-concurrency backend systems with deterministic failure-mode handling',
  'Cross-team technical leadership on integration platform stability',
];

const alphadenHighlights = [
  'Unity production titles shipped on iOS App Store and Google Play',
  'Publisher prototype programs: Voodoo, Lion Studios, Supersonic',
  'Mobile game performance optimisation — frame pacing, GC discipline, draw call reduction',
  'Performance-aware gameplay systems designed within 16.6ms frame budgets',
  'CPI and D1 retention improvement through rapid gameplay iteration',
  'XR Performance Stress Lab — deterministic benchmarking framework',
];

const sharedStrengths = [
  'Profiler-led diagnosis before any optimisation',
  'Reproducible evidence for every performance claim',
  'Engineering discipline across enterprise and real-time systems',
  'Production debugging under live-audience pressure',
];

export default function ExperienceBentoSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Real-time performance across enterprise systems and XR rendering
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          13+ years building production systems under strict performance constraints — from enterprise
          API infrastructure to XR frame budgets. The discipline is the same: measure, isolate, fix,
          verify.
        </p>
      </motion.div>

      <BentoGrid className="mb-4">
        {/* Zoho card */}
        <motion.div
          className="lg:col-span-6 md:col-span-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="default" padding="none" glow="cyan" className="h-full">
            {/* Header */}
            <div className="border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Enterprise Systems
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">Zoho Corporation</h3>
                  <p className="mt-0.5 text-sm text-neon/80">Senior Systems Engineer</p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">2017 – Present · 7+ years</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-neon/15 bg-neon/[0.05] px-3 py-2 text-center">
                  <p className="font-mono text-lg font-bold text-neon">7+</p>
                  <p className="text-[11px] text-slate-500">years</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="px-6 py-5">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                Technical Contributions
              </p>
              <ul className="space-y-2.5">
                {zohoHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                    <span className="text-xs text-slate-300 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer tag */}
            <div className="border-t border-white/[0.05] px-6 py-3">
              <div className="flex flex-wrap gap-1.5">
                {['REST APIs', 'distributed systems', 'observability', 'async workflows', 'scalable architecture'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.07] bg-white/[0.03] font-mono text-[10px] px-1.5 py-0.5 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* AlphaDen card */}
        <motion.div
          className="lg:col-span-6 md:col-span-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="highlight" padding="none" glow="purple" className="h-full">
            {/* Header */}
            <div className="border-b border-electric/10 px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Game Studio / XR Research
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">AlphaDen</h3>
                  <p className="mt-0.5 text-sm text-electric/80">Founder · Performance Engineer</p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">2012 – Present · 13+ years</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-electric/20 bg-electric/[0.07] px-3 py-2 text-center">
                  <p className="font-mono text-lg font-bold text-electric">13+</p>
                  <p className="text-[11px] text-slate-500">years</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="px-6 py-5">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                Technical Contributions
              </p>
              <ul className="space-y-2.5">
                {alphadenHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-electric/50" />
                    <span className="text-xs text-slate-300 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer tag */}
            <div className="border-t border-electric/[0.07] px-6 py-3">
              <div className="flex flex-wrap gap-1.5">
                {['Unity 6', 'URP', 'OpenXR', 'mobile games', 'frame budget', 'publisher PPP'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-electric/10 bg-electric/[0.04] font-mono text-[10px] px-1.5 py-0.5 text-electric/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>

      {/* Connecting statement card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <BentoCard variant="dim" padding="md" glow="none" className="border-dashed">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            Shared Engineering Discipline
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sharedStrengths.map((s) => (
              <div key={s} className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/30" />
                <span className="text-xs text-slate-400 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">
            Real-time performance engineering across enterprise integration systems, mobile games, and XR rendering —
            the measurement discipline is consistent.
          </p>
        </BentoCard>
      </motion.div>
    </section>
  );
}
