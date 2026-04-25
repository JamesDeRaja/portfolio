import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import MetricBadge from '../components/bento/MetricBadge';
import SmartLink from '../components/SmartLink';

interface SecondaryCard {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  metric?: string;
  metricColor?: 'cyan' | 'green' | 'purple' | 'amber';
}

const secondaryCards: SecondaryCard[] = [
  {
    title: 'Overdraw / Transparency Stress',
    summary:
      'Isolated stereo rendering cost amplification from transparent draw calls with ZWrite Off. Documented +7.27 ms GPU delta under 201 sequential transparent passes.',
    tags: ['ZWrite Off', 'alpha blending', 'transparent draw order', 'stereo cost', 'GPU-bound'],
    href: '/lab/overdraw-stereo',
    metric: '+7.27 ms GPU',
    metricColor: 'amber',
  },
  {
    title: 'CPU / Manager Update / ECS Study',
    summary:
      'Benchmarked 10,000 simultaneous agent updates across three architectures: MonoBehaviour Update, centralised manager tick, and ECS job system. Quantified per-architecture overhead and instantiation cost.',
    tags: ['10K agents', 'MonoBehaviour', 'ECS comparison', 'Update overhead', 'job system'],
    href: '/lab/instancing',
    metric: 'ECS vs classic',
    metricColor: 'cyan',
  },
  {
    title: 'SoftMaskPro UI Rendering Cost',
    summary:
      'Profiled UI masking cost across three scenarios — 1, 3, and 40 masked elements — under URP with XR stereo. Documented canvas rebuild frequency, GPU pass cost, and WaitForPresent spikes.',
    tags: ['UI masking', 'canvas rebuild', 'XR stereo amplification', 'GPU pass cost', 'transparency'],
    href: '/case-studies/softmaskpro',
    metric: '40 masks profiled',
    metricColor: 'purple',
  },
  {
    title: 'Update Strategies at Scale',
    summary:
      'Profiler-driven comparison of 4 Unity update architectures under 10,000 entities: per-object MonoBehaviour, central manager, and ECS. Frame time reduced from ~40 ms to ~9.4 ms.',
    tags: ['ECS / DOTS', 'MonoBehaviour', 'Burst', '10K entities', 'CPU profiling'],
    href: '/case-studies/update-strategies-scale',
    metric: '~40 ms → ~9.4 ms',
    metricColor: 'cyan',
  },
  {
    title: 'Published Mobile Games',
    summary:
      'Production game development with publisher feedback loops — CPI and D1 retention iteration under real audience data. Shipped Sneaky Warrior 3D on iOS at stable 60 FPS.',
    tags: ['iOS/Android', 'publisher PPP', 'CPI optimisation', 'D1 retention', '60 FPS shipped'],
    href: '/case-studies/published-mobile-projects',
    metric: '~1M installs',
    metricColor: 'green',
  },
];

export default function CaseStudiesBentoSection() {
  return (
    <section id="case-studies" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-neon/3 blur-[150px]" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Case Studies
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Deep dives with profiler evidence
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Profiler-validated breakdowns of XR rendering bottlenecks, UI overdraw cost, runtime diagnostics,
          and frame budget stabilisation. Evidence included.
        </p>
      </motion.div>

      <BentoGrid className="mb-4">
        {/* Primary large card — XR Stress Lab */}
        <motion.div
          className="lg:col-span-8 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="featured" padding="none" className="h-full overflow-hidden">
            {/* Header band */}
            <div className="border-b border-neon/10 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-2">
                    Primary Case Study
                  </p>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    XR Performance Stress Lab
                  </h3>
                </div>
                <MetricBadge value="Featured" color="cyan" />
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <p className="text-sm text-slate-300 leading-relaxed">
                Deterministic Unity 6 URP + OpenXR benchmarking framework for isolating GPU fragment
                bottlenecks, stereo rendering cost, overdraw, and frame timing pressure on Meta Quest
                hardware. Every experiment is reproducible: a single toggle introduces the variable;
                all other scene parameters remain fixed.
              </p>

              {/* Key metric */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
                <p className="font-mono text-xs font-semibold text-amber-400">
                  Measured result: +7.27 ms GPU cost under heavy transparent overdraw stress
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  201 transparent draw calls with ZWrite Off at stereo 90 Hz — GPU frame time delta
                  measured against clean baseline scene.
                </p>
              </div>

              {/* Experiment highlights */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: 'Overdraw stereo cost', val: '+7.27 ms' },
                  { label: 'MSAA 2x vs 4x delta', val: 'measured' },
                  { label: 'Frame pacing @ 72 Hz', val: 'validated' },
                  { label: 'Instancing vs draw', val: 'compared' },
                  { label: 'UI mask GPU cost', val: '3 scenarios' },
                  { label: 'Baseline vs stress', val: 'reproducible' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                  >
                    <p className="font-mono text-xs font-semibold text-neon">{item.val}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <SmartLink
                  href="/case-studies/xr-stress-lab"
                  className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Case Study
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </SmartLink>
                <a
                  href="#evidence"
                  className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  View Evidence
                </a>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Quick-stats sidebar */}
        <motion.div
          className="lg:col-span-4 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="metric" padding="md" className="h-full flex flex-col gap-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Lab Experiments
            </p>

            {[
              { label: 'Overdraw — stereo vs mono', href: '/lab/overdraw-stereo', badge: 'XR' },
              { label: 'MSAA cost study', href: '/lab/msaa', badge: 'GPU' },
              { label: 'MSAA + Overdraw combined', href: '/lab/msaa-overdraw', badge: 'GPU' },
              { label: 'GPU Instancing analysis', href: '/lab/instancing', badge: 'CPU' },
              { label: 'Frame pacing methodology', href: '/lab/frame-pacing', badge: 'Timing' },
              { label: 'Frame pacing vs FPS', href: '/lab/frame-pacing-vs-fps', badge: 'Timing' },
              { label: 'XR frame timing', href: '/lab/xr-frame-timing', badge: 'XR' },
              { label: 'Overdraw baseline', href: '/lab/overdraw', badge: 'GPU' },
            ].map((exp) => (
              <SmartLink
                key={exp.href}
                href={exp.href}
                className="group flex items-center justify-between gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 hover:border-neon/20 hover:bg-neon/[0.03] transition-all duration-200"
              >
                <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                  {exp.label}
                </span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[10px] text-slate-600">{exp.badge}</span>
                  <ExternalLink size={10} className="text-slate-600 group-hover:text-neon transition-colors" />
                </div>
              </SmartLink>
            ))}
          </BentoCard>
        </motion.div>
      </BentoGrid>

      {/* Secondary case study cards */}
      <BentoGrid>
        {secondaryCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="lg:col-span-3 md:col-span-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <BentoCard variant="default" padding="md" className="h-full flex flex-col gap-3">
              {card.metric && (
                <MetricBadge
                  value={card.metric}
                  color={card.metricColor ?? 'cyan'}
                  size="sm"
                />
              )}
              <h3 className="text-sm font-semibold text-white">{card.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{card.summary}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.07] bg-white/[0.03] font-mono text-[10px] px-1.5 py-0.5 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <SmartLink
                href={card.href}
                className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-neon transition-colors"
              >
                Open case study <ArrowRight size={10} />
              </SmartLink>
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
}
