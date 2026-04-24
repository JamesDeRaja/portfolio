import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, ExternalLink } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const frameBudgets = [
  { hz: 90, ms: '11.11', pct: 67, color: 'bg-emerald-400', textColor: 'text-emerald-400' },
  { hz: 72, ms: '13.88', pct: 83, color: 'bg-neon', textColor: 'text-neon' },
  { hz: 60, ms: '16.67', pct: 100, color: 'bg-electric', textColor: 'text-electric' },
];

const profilerRows = [
  { label: 'CPU Main Thread', dot: 'bg-neon' },
  { label: 'Render Thread', dot: 'bg-electric' },
  { label: 'GPU Frame Time', dot: 'bg-amber-400' },
  { label: 'GC Alloc', dot: 'bg-red-400' },
  { label: 'Draw Calls / SetPass', dot: 'bg-emerald-400' },
];

const proofBadges = [
  '13+ years Unity',
  'C# / Unity 6',
  'URP / OpenXR',
  'XR Interaction Toolkit',
  '1M+ installs',
  'Voodoo • Lion Studios • Supersonic',
];

const bestFitRoles = [
  'Senior Unity Engineer',
  'Unity Performance Engineer',
  'XR Performance Engineer',
  'Rendering Engineer',
  'Real-Time Systems Engineer',
  'Technical Lead, Unity',
];

export default function HeroBentoSection() {
  return (
    <section id="hero" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/4 blur-[120px]" />
      </div>

      {/* ── Row 1: Main hero + side stack ── */}
      <BentoGrid>
        {/* Main hero card — 8 / 12 cols */}
        <motion.div
          className="lg:col-span-8 md:col-span-6"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="featured" padding="lg" className="h-full flex flex-col justify-between gap-8">
            <div className="space-y-5">
              {/* Status badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to senior roles — Unity Rendering / XR Performance / Real-Time Systems
              </span>

              {/* Name + title */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  James{' '}
                  <span className="gradient-text">De Raja</span>
                </h1>
                <p className="mt-3 text-xl font-semibold text-white/90 sm:text-2xl">
                  Senior Real-Time Performance Engineer
                </p>
                <p className="mt-1.5 font-mono text-sm text-neon/80">
                  Unity Rendering&nbsp;•&nbsp;XR Frame Budgets&nbsp;•&nbsp;CPU/GPU Bottleneck Isolation
                </p>
              </div>

              {/* Value prop */}
              <p className="max-w-xl text-base text-slate-300 leading-relaxed">
                I build profiler-validated real-time systems where frame stability, rendering cost, and
                reproducible performance evidence matter. Every claim on this site is backed by a profiler
                screenshot, a benchmark harness, or a shipped product.
              </p>

              {/* Proof badges */}
              <div className="flex flex-wrap gap-2">
                {proofBadges.map((badge) => (
                  <span
                    key={badge}
                    className="chip-glow rounded-full px-3 py-1 font-mono text-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              >
                View Case Studies
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </a>
              <SmartLink
                href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf"
                className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              >
                <FileText size={14} />
                View Resume
              </SmartLink>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              >
                <Mail size={14} />
                Contact
              </a>
            </div>
          </BentoCard>
        </motion.div>

        {/* Side column — 4 / 12 cols, stacked cards */}
        <div className="lg:col-span-4 md:col-span-6 flex flex-col gap-4">
          {/* Frame Budget Card */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <BentoCard variant="metric" padding="md" className="h-full">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Frame Budget
              </p>
              <div className="space-y-3">
                {frameBudgets.map((b) => (
                  <div key={b.hz}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-mono text-xs font-semibold ${b.textColor}`}>
                        {b.hz} Hz
                      </span>
                      <span className="font-mono text-sm font-bold text-white">{b.ms} ms</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div
                        className={`h-full rounded-full ${b.color} opacity-70`}
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                Performance work measured against real frame budgets, not vague FPS claims.
              </p>
            </BentoCard>
          </motion.div>

          {/* Profiler Evidence Card */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <BentoCard variant="metric" padding="md" className="h-full">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Profiler Metrics
              </p>
              <div className="space-y-2.5">
                {profilerRows.map((row) => (
                  <div key={row.label} className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${row.dot}`} />
                    <span className="text-xs text-slate-300">{row.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-white/[0.06] pt-3">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Profiler-first diagnosis before optimisation. Every bottleneck proved before the fix.
                </p>
              </div>
            </BentoCard>
          </motion.div>
        </div>

        {/* ── Row 2: Three bottom cards ── */}

        {/* Published Results */}
        <motion.div
          className="lg:col-span-4 md:col-span-2"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="default" padding="md" glow="green" className="h-full">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Published Results
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-mono text-2xl font-bold text-emerald-400">~1M</p>
                <p className="text-xs text-slate-400 mt-0.5">game installs</p>
              </div>
              <div>
                <p className="font-mono text-lg font-bold text-white">100+</p>
                <p className="text-xs text-slate-400 mt-0.5">publisher-tested prototypes</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Voodoo', 'Lion Studios', 'Supersonic'].map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                CPI and D1 retention optimisation across rapid prototype cycles.
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* Recruiter Scan Card */}
        <motion.div
          className="lg:col-span-4 md:col-span-2"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="dim" padding="md" glow="cyan" className="h-full">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Best Fit Roles
            </p>
            <ul className="space-y-2">
              {bestFitRoles.map((role) => (
                <li key={role} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-xs text-slate-300">{role}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </motion.div>

        {/* Not-just-gameplay card */}
        <motion.div
          className="lg:col-span-4 md:col-span-2"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="dim" padding="md" glow="purple" className="h-full flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Engineering posture
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Not just gameplay implementation — performance diagnosis, measurable optimisation,
                and engineering evidence.
              </p>
              <div className="mt-4 space-y-1.5">
                {[
                  'Profiler-validated',
                  'Frame-budget aware',
                  'Deterministic benchmarks',
                  'Baseline vs stress comparisons',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="mr-1.5 inline-block rounded border border-electric/15 bg-electric/[0.05] px-2 py-0.5 font-mono text-[11px] text-electric/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.05]">
              <a
                href="#evidence"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-neon transition-colors"
              >
                View evidence <ExternalLink size={10} />
              </a>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
