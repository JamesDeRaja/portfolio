import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import MetricBadge from '../components/bento/MetricBadge';
import SmartLink from '../components/SmartLink';

const labLinks = [
  { label: 'Overdraw — stereo vs mono', href: '/lab/overdraw-stereo', badge: 'XR' },
  { label: 'MSAA cost study', href: '/lab/msaa', badge: 'GPU' },
  { label: 'MSAA + Overdraw combined', href: '/lab/msaa-overdraw', badge: 'GPU' },
  { label: 'GPU Instancing analysis', href: '/lab/instancing', badge: 'CPU' },
  { label: 'Frame pacing methodology', href: '/lab/frame-pacing', badge: 'Timing' },
  { label: 'Frame pacing vs FPS', href: '/lab/frame-pacing-vs-fps', badge: 'Timing' },
  { label: 'XR frame timing', href: '/lab/xr-frame-timing', badge: 'XR' },
  { label: 'Overdraw baseline', href: '/lab/overdraw', badge: 'GPU' },
];

interface SupportCard {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  metric?: string;
  metricColor?: 'cyan' | 'green' | 'purple' | 'amber';
}

const supportCards: SupportCard[] = [
  {
    title: 'Overdraw & Transparency Cost',
    summary:
      'Measured the real GPU cost of transparent draw calls in XR stereo — 201 draws, ZWrite Off, stereo 90 Hz. Documented a +7.27 ms GPU delta against a clean baseline.',
    tags: ['ZWrite Off', 'alpha blending', 'stereo cost', 'GPU-bound'],
    href: '/lab/overdraw-stereo',
    metric: '+7.27 ms GPU',
    metricColor: 'amber',
  },
  {
    title: 'SoftMaskPro UI Rendering Cost',
    summary:
      'Profiled Unity UI masking overhead at 1, 3, and 40 masked elements under XR stereo. Found WaitForPresent spikes and GPU pass cost that are invisible without a profiler.',
    tags: ['UI masking', 'canvas rebuild', 'XR stereo', 'GPU pass cost'],
    href: '/case-studies/softmaskpro',
    metric: '40 masks profiled',
    metricColor: 'purple',
  },
  {
    title: 'Shipped Mobile Games',
    summary:
      'Production titles published on iOS and Google Play. Went through publisher feedback loops with Voodoo, Lion Studios, and Supersonic — iterating on CPI and Day-1 retention.',
    tags: ['iOS / Android', 'publisher PPP', 'CPI', 'D1 retention', '60 FPS shipped'],
    href: '/case-studies/published-mobile-projects',
    metric: '~1M installs',
    metricColor: 'green',
  },
];

export default function CaseStudiesBentoSection() {
  return (
    <section id="case-studies" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
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
          Real problems. Measured results. Profiler evidence.
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Every case study here starts with a profiler screenshot, not a hypothesis. XR rendering bottlenecks,
          CPU update architecture at scale, UI masking cost — documented with numbers you can reproduce.
        </p>
      </motion.div>

      {/* ── Two primary featured cards ── */}
      <BentoGrid className="mb-4">

        {/* Primary 1 — XR Performance Stress Lab */}
        <motion.div
          className="lg:col-span-6 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="featured" padding="none" className="h-full overflow-hidden flex flex-col">
            <div className="border-b border-neon/10 px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1.5">
                    XR Rendering · GPU Profiling
                  </p>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    XR Performance Stress Lab
                  </h3>
                </div>
                <MetricBadge value="Featured" color="cyan" />
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-4 p-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                A controlled Unity 6 / URP / OpenXR benchmarking framework. One toggle introduces
                the variable — everything else stays locked. Built to prove bottleneck type (GPU fragment,
                bandwidth, or submission) with profiler captures, not guesses.
              </p>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
                <p className="font-mono text-xs font-semibold text-amber-400">
                  +7.27 ms GPU — overdraw stress at stereo 90 Hz
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  201 transparent draws, ZWrite Off. Measured delta against a clean baseline.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { label: 'Overdraw stereo cost', val: '+7.27 ms' },
                  { label: 'MSAA 2× vs 4×', val: 'measured' },
                  { label: 'Frame pacing @ 72 Hz', val: 'validated' },
                  { label: 'Instancing vs draws', val: 'compared' },
                  { label: 'UI mask GPU cost', val: '3 scenarios' },
                  { label: 'Baseline vs stress', val: 'reproducible' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                    <p className="font-mono text-xs font-semibold text-neon">{item.val}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-1">
                <SmartLink
                  href="/case-studies/xr-stress-lab"
                  className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Case Study
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </SmartLink>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Primary 2 — Update Strategies at Scale */}
        <motion.div
          className="lg:col-span-6 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="highlight" padding="none" className="h-full overflow-hidden flex flex-col">
            <div className="border-b border-electric/10 px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-electric/60 mb-1.5">
                    CPU Architecture · ECS / DOTS
                  </p>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Update Strategies at Scale
                  </h3>
                </div>
                <MetricBadge value="Featured" color="purple" />
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-4 p-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                Four Unity update architectures stress-tested at 10,000 simultaneous entities —
                same scene, same workload, only the update model changes. Shows exactly why
                MonoBehaviour Update doesn't scale and what ECS actually delivers in numbers.
              </p>

              <div className="rounded-xl border border-electric/20 bg-electric/[0.05] px-4 py-3">
                <p className="font-mono text-xs font-semibold text-electric">
                  ~40 ms → ~9.4 ms — per-object Update to ECS
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Same 10,000 entities. ScriptRunBehaviourUpdate went from ~8.6 ms to ~0.01 ms.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { label: 'Lifecycle Control', val: '~25 ms' },
                  { label: 'Per-Object Update', val: '~40 ms' },
                  { label: 'Central Manager', val: '~32 ms' },
                  { label: 'ECS (DOTS)', val: '~9.4 ms' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                    <p className="font-mono text-xs font-semibold text-electric">{item.val}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-1">
                <SmartLink
                  href="/case-studies/update-strategies-scale"
                  className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Case Study
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </SmartLink>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>

      {/* ── Supporting cards + Lab list ── */}
      <BentoGrid className="mb-4">
        {/* Support case study cards */}
        {supportCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="lg:col-span-3 md:col-span-2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <BentoCard variant="default" padding="md" className="h-full flex flex-col gap-3">
              {card.metric && (
                <MetricBadge value={card.metric} color={card.metricColor ?? 'cyan'} size="sm" />
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
                Open <ArrowRight size={10} />
              </SmartLink>
            </BentoCard>
          </motion.div>
        ))}

        {/* Lab experiments compact list */}
        <motion.div
          className="lg:col-span-3 md:col-span-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.21 }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <BentoCard variant="dim" padding="md" className="h-full flex flex-col">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Lab Experiments
            </p>
            <div className="space-y-1.5 flex-1">
              {labLinks.map((exp) => (
                <SmartLink
                  key={exp.href}
                  href={exp.href}
                  className="group flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors leading-snug">
                    {exp.label}
                  </span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-mono text-[10px] text-slate-600">{exp.badge}</span>
                    <ExternalLink size={9} className="text-slate-700 group-hover:text-neon/60 transition-colors" />
                  </div>
                </SmartLink>
              ))}
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
