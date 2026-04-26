import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, ExternalLink } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';
import CountUp from '../components/CountUp';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const frameBudgets = [
  { hz: 90, ms: 11.11, pct: 67, bar: 'bg-emerald-400', text: 'text-emerald-400' },
  { hz: 72, ms: 13.88, pct: 83, bar: 'bg-neon', text: 'text-neon' },
  { hz: 60, ms: 16.67, pct: 100, bar: 'bg-electric', text: 'text-electric' },
];

const profilerRows = [
  { label: 'CPU Main Thread', dot: 'bg-neon', val: '~8–12 ms' },
  { label: 'Render Thread', dot: 'bg-electric', val: '~3–6 ms' },
  { label: 'GPU Frame Time', dot: 'bg-amber-400', val: 'measured' },
  { label: 'GC Alloc', dot: 'bg-red-400', val: '0 target' },
  { label: 'Draw Calls / SetPass', dot: 'bg-emerald-400', val: 'tracked' },
];

const proofBadges = [
  '14+ years Unity',
  'C# / Unity 6',
  'URP / OpenXR',
  'XR Interaction Toolkit',
  '1M+ installs',
  'Voodoo · Lion Studios · Supersonic',
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
    <section id="hero" className="relative mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/4 blur-[120px]" />
      </div>

      {/* ── Row 1: Main hero (8 cols) + side stack (4 cols) ── */}
      <BentoGrid>
        {/* Main hero card */}
        <motion.div
          className="lg:col-span-8 md:col-span-6"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="featured" padding="lg" elevated importance="priority" shape="soft" className="h-full flex flex-col justify-between gap-7">
            <div className="space-y-5">
              {/* Top row: badge + photo */}
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.06] px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to senior roles — Unity Rendering / XR Performance
                </span>
                <div className="hidden sm:block flex-shrink-0">
                  <img
                    src="/images/james.jpg"
                    alt="James De Raja"
                    className="h-16 w-16 rounded-xl object-cover ring-1 ring-neon/20 shadow-[0_0_16px_rgba(0,240,255,0.1)]"
                  />
                </div>
              </div>

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
                  Unity Rendering&nbsp;&bull;&nbsp;XR Frame Budgets&nbsp;&bull;&nbsp;CPU/GPU Bottleneck Isolation
                </p>
              </div>

              {/* Value prop */}
              <p className="max-w-xl text-base text-slate-300 leading-relaxed">
                I build profiler-validated real-time systems where frame stability, rendering cost, and
                reproducible performance evidence matter. Every claim on this site is backed by a profiler
                screenshot, a benchmark harness, or a shipped product.
              </p>

              {/* Proof badges */}
              <div className="flex flex-wrap gap-1.5">
                {proofBadges.map((badge) => (
                  <span key={badge} className="chip-glow rounded-full px-2.5 py-1 font-mono text-xs">
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

        {/* Side stack: Frame Budget + Profiler */}
        <div className="lg:col-span-4 md:col-span-6 flex flex-col gap-4">
          {/* Frame Budget card */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <BentoCard variant="metric" padding="md" importance="high" elevated className="h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Frame Budget
                </p>
                <span className="rounded border border-neon/15 bg-neon/[0.06] font-mono text-[10px] px-1.5 py-0.5 text-neon/70">
                  XR targets
                </span>
              </div>
              <div className="space-y-4">
                {frameBudgets.map((b, i) => (
                  <div key={b.hz}>
                    <div className="flex items-end justify-between mb-1.5">
                      <span className={`font-mono text-xs font-semibold ${b.text}`}>{b.hz} Hz</span>
                      <CountUp
                        to={b.ms}
                        decimals={2}
                        suffix=" ms"
                        duration={1.0}
                        className="font-mono text-base font-bold text-white"
                      />
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06]">
                      <motion.div
                        className={`h-full rounded-full ${b.bar} opacity-75`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
                Work measured against real frame budgets. Stable pacing over peak FPS.
              </p>
            </BentoCard>
          </motion.div>

          {/* Profiler Evidence card */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <BentoCard variant="metric" padding="md" importance="high" elevated className="h-full">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Profiler Metrics
                </p>
                <span className="rounded border border-white/[0.06] bg-white/[0.02] font-mono text-[10px] px-1.5 py-0.5 text-slate-600">
                  per-frame
                </span>
              </div>
              <div className="space-y-3">
                {profilerRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${row.dot}`} />
                      <span className="text-xs text-slate-300">{row.label}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 flex-shrink-0">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-white/[0.05] pt-3">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Profiler-first diagnosis before optimisation. Every bottleneck proved before the fix.
                </p>
              </div>
            </BentoCard>
          </motion.div>
        </div>

        {/* ── Row 2: Four bottom cards ── */}

        {/* Published Results */}
        <motion.div
          className="lg:col-span-3 md:col-span-3"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href="#experience" className="block h-full group">
            <BentoCard variant="default" padding="md" importance="normal" elevated glow="green" className="h-full flex flex-col justify-between transition-all group-hover:border-emerald-500/30">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Published Results
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-3xl font-bold text-emerald-400">
                      ~<CountUp to={1} suffix="M" duration={1.6} />
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">game installs</p>
                  </div>
                  <div>
                    <p className="font-mono text-xl font-bold text-white">
                      <CountUp to={100} suffix="+" duration={1.4} />
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">publisher-tested prototypes</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Voodoo', 'Lion Studios', 'Supersonic'].map((p) => (
                      <span
                        key={p}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                <p className="text-[11px] text-slate-500">CPI (cost per install) and D1 retention across rapid iteration</p>
                <ExternalLink size={10} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </BentoCard>
          </a>
        </motion.div>

        {/* Best Fit Roles */}
        <motion.div
          className="lg:col-span-3 md:col-span-3"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="dim" padding="md" importance="low" elevated className="h-full">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Best Fit Roles
            </p>
            <ul className="space-y-2.5">
              {bestFitRoles.map((role) => (
                <li key={role} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-xs text-slate-300">{role}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </motion.div>

        {/* Engineering posture */}
        <motion.div
          className="lg:col-span-3 md:col-span-3"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href="#evidence" className="block h-full group">
            <BentoCard variant="dim" padding="md" importance="low" elevated className="h-full flex flex-col justify-between transition-all group-hover:border-electric/20">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Engineering Posture
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Not just gameplay implementation — performance diagnosis, measurable optimisation,
                  and engineering evidence that ships.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['Profiler-validated', 'Frame budget aware', 'Deterministic benchmarks', 'Baseline vs stress'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded border border-electric/15 bg-electric/[0.05] px-2 py-0.5 font-mono text-[11px] text-electric/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-xs text-slate-500 group-hover:text-neon transition-colors">View evidence</span>
                <ExternalLink size={10} className="text-slate-600 group-hover:text-neon transition-colors" />
              </div>
            </BentoCard>
          </a>
        </motion.div>

        {/* Explore the Portfolio — site nav card */}
        <motion.div
          className="lg:col-span-3 md:col-span-3"
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <BentoCard variant="metric" padding="md" importance="high" elevated className="h-full flex flex-col">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Explore the Portfolio
            </p>
            <ul className="space-y-1.5 flex-1">
              {[
                { label: 'Case Studies', href: '#case-studies', accent: 'text-neon' },
                { label: 'Profiler Evidence', href: '#evidence', accent: 'text-amber-400' },
                { label: 'Tech Focus', href: '#tech-focus', accent: 'text-electric' },
                { label: 'Experience', href: '#experience', accent: 'text-neon' },
                { label: 'Skills', href: '#skills', accent: 'text-emerald-400' },
                { label: 'Contact', href: '#contact', accent: 'text-slate-400' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-white/[0.04] transition-colors`}
                  >
                    <span className={`text-xs font-medium text-slate-300 group-hover:${item.accent} transition-colors`}>
                      {item.label}
                    </span>
                    <ArrowRight size={11} className={`text-slate-600 group-hover:${item.accent} group-hover:translate-x-0.5 transition-all`} />
                  </a>
                </li>
              ))}
            </ul>
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
