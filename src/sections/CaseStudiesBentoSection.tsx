import { useEffect, useRef, useState, type WheelEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
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

const variantLinks = [
  { letter: 'A', label: 'Lifecycle', href: '/case-studies/update-strategies-scale/variant-a', accent: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/[0.06]' },
  { letter: 'B', label: 'Per-Object', href: '/case-studies/update-strategies-scale/variant-b', accent: 'text-red-400', border: 'border-red-500/20', bg: 'bg-red-500/[0.06]' },
  { letter: 'C', label: 'Manager', href: '/case-studies/update-strategies-scale/variant-c', accent: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/[0.06]' },
  { letter: 'D', label: 'ECS', href: '/case-studies/update-strategies-scale/variant-d', accent: 'text-neon', border: 'border-neon/20', bg: 'bg-neon/[0.06]' },
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

function LabTicker() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWheelInteracting, setIsWheelInteracting] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const wheelTimeoutRef = useRef<number | null>(null);
  const doubled = [...labLinks, ...labLinks];

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    let rafId = 0;
    let previousTs = performance.now();
    const pixelsPerSecond = 34;

    const wrapScrollPosition = () => {
      const loopHeight = viewport.scrollHeight / 2;

      if (loopHeight <= 0) {
        return;
      }

      if (viewport.scrollTop >= loopHeight) {
        viewport.scrollTop -= loopHeight;
      } else if (viewport.scrollTop < 0) {
        viewport.scrollTop += loopHeight;
      }
    };

    const tick = (timestamp: number) => {
      const delta = Math.max(0, timestamp - previousTs);
      previousTs = timestamp;

      if (!isHovered && !isWheelInteracting) {
        viewport.scrollTop += (pixelsPerSecond * delta) / 1000;
        wrapScrollPosition();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isHovered, isWheelInteracting]);

  useEffect(() => {
    return () => {
      if (wheelTimeoutRef.current) {
        window.clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    event.preventDefault();
    setIsWheelInteracting(true);
    viewport.scrollTop += event.deltaY;

    const loopHeight = viewport.scrollHeight / 2;

    if (viewport.scrollTop >= loopHeight) {
      viewport.scrollTop -= loopHeight;
    } else if (viewport.scrollTop < 0) {
      viewport.scrollTop += loopHeight;
    }

    if (wheelTimeoutRef.current) {
      window.clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = window.setTimeout(() => {
      setIsWheelInteracting(false);
      wheelTimeoutRef.current = null;
    }, 900);
  };

  return (
    <div
      ref={viewportRef}
      className="h-[360px] overflow-hidden relative cursor-default"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
    >
      <div className="py-1">
        {doubled.map((exp, i) => (
          <SmartLink
            key={`${exp.href}-${i}`}
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
    </div>
  );
}

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

              <div className="mt-auto pt-1 flex flex-wrap items-center gap-3">
                <SmartLink
                  href="/case-studies/xr-stress-lab"
                  className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Case Study
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </SmartLink>
                <a
                  href="https://github.com/JamesDeRaja/XRPerformanceLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium"
                >
                  <Github size={13} />
                  Source
                </a>
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

              {/* Architecture frame times */}
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

              {/* Scale & methodology stats */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'entities — same scene, same load', val: '10,000' },
                  { label: 'architectures — isolated A / B / C / D', val: '4 variants' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-electric/[0.10] bg-electric/[0.03] px-3 py-2">
                    <p className="font-mono text-xs font-semibold text-electric/80">{item.val}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Variant deep-dive quick links */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  Variants
                </span>
                {variantLinks.map((v) => (
                  <SmartLink
                    key={v.letter}
                    href={v.href}
                    className={`inline-flex items-center gap-1.5 rounded-lg border ${v.border} ${v.bg} px-2.5 py-1 transition hover:opacity-80`}
                  >
                    <span className={`font-mono text-xs font-bold ${v.accent}`}>{v.letter}</span>
                    <span className={`text-xs ${v.accent} opacity-80`}>{v.label}</span>
                  </SmartLink>
                ))}
              </div>

              <div className="mt-auto pt-1 flex flex-wrap items-center gap-3">
                <SmartLink
                  href="/case-studies/update-strategies-scale"
                  className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                >
                  Open Case Study
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </SmartLink>
                <a
                  href="https://github.com/JamesDeRaja/ECS-Performance-Improvement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium"
                >
                  <Github size={13} />
                  Source
                </a>
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

        {/* Lab experiments — auto-scrolling ticker */}
        <motion.div
          className="lg:col-span-3 md:col-span-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.21 }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <BentoCard variant="dim" padding="md" className="h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Lab Experiments
              </p>
              <p className="font-mono text-[9px] text-slate-700 italic">hover to pause</p>
            </div>
            <LabTicker />
          </BentoCard>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
