import { motion } from 'framer-motion';
import { Cpu, Timer, Layers, Trash2, RotateCcw, Activity, Terminal, GitMerge } from 'lucide-react';
import type { ElementType } from 'react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';

type Accent = 'cyan' | 'purple' | 'green' | 'amber';

interface TechCard {
  title: string;
  body: string;
  keywords: string[];
  accent: Accent;
  icon: ElementType;
  colSpan: string;
}

const accentText: Record<Accent, string> = {
  cyan: 'text-neon',
  purple: 'text-electric',
  green: 'text-emerald-400',
  amber: 'text-amber-400',
};

const accentIconBg: Record<Accent, string> = {
  cyan: 'bg-neon/[0.08] border border-neon/15',
  purple: 'bg-electric/[0.08] border border-electric/15',
  green: 'bg-emerald-500/[0.08] border border-emerald-500/15',
  amber: 'bg-amber-500/[0.08] border border-amber-500/15',
};

const accentKeyword: Record<Accent, string> = {
  cyan: 'border-neon/15 bg-neon/[0.05] text-neon/70',
  purple: 'border-electric/15 bg-electric/[0.05] text-electric/70',
  green: 'border-emerald-500/15 bg-emerald-500/[0.05] text-emerald-400/70',
  amber: 'border-amber-500/15 bg-amber-500/[0.05] text-amber-400/70',
};

const techCards: TechCard[] = [
  {
    title: 'CPU / GPU Bottleneck Isolation',
    body: 'Classify a scene as CPU-bound (submission, animation, physics) or GPU-bound (fragment, vertex, fill-rate) using Unity Profiler, Frame Debugger, and GPU timing queries. Reproduce the bottleneck deterministically before writing a fix.',
    keywords: ['Unity Profiler', 'GPU timing', 'CPU-bound', 'draw call submission'],
    accent: 'cyan',
    icon: Cpu,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'XR Frame Pacing',
    body: 'Maintain compositor deadline discipline at 72 Hz and 90 Hz. Frame drops in XR cause reprojection artifacts — measure prediction window variance and frame cadence, not just average FPS.',
    keywords: ['72 Hz / 90 Hz', 'compositor deadline', 'reprojection', 'OpenXR'],
    accent: 'purple',
    icon: Timer,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Unity Rendering / URP',
    body: 'Profiler-led rendering cost analysis — pass ordering, render feature overhead, shader complexity, MSAA bandwidth, and overdraw hotspots. Validated on mobile tile-based GPUs and desktop rasterisers.',
    keywords: ['URP', 'render pass', 'overdraw', 'MSAA', 'tile-based GPU'],
    accent: 'cyan',
    icon: Layers,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'GC / Allocation Discipline',
    body: 'Zero-allocation hot paths via object pooling, struct-over-class discipline, and Span<T> / NativeArray usage. Eliminate GC spikes that appear as unpredictable frame hitches rather than sustained overhead.',
    keywords: ['object pooling', 'zero allocation', 'GC pressure', 'Span<T>'],
    accent: 'amber',
    icon: Trash2,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Object Lifecycle Optimisation',
    body: 'Replace Instantiate/Destroy patterns with deterministic pre-warmed pools. LOD-aware spawning, visibility gating, and skeleton update culling eliminate off-screen frame budget waste.',
    keywords: ['object pooling', 'LOD', 'visibility gating', 'skeleton culling'],
    accent: 'green',
    icon: RotateCcw,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Profiling Pipelines & Harnesses',
    body: 'Deterministic benchmark scenes that isolate one variable at a time — geometry count, overdraw depth, skinned mesh count, or UI mask complexity — producing reproducible, comparable measurements across builds.',
    keywords: ['deterministic benchmark', 'A/B profiling', 'baseline vs stress'],
    accent: 'cyan',
    icon: Activity,
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Runtime Tools & HUDs',
    body: 'Lightweight development overlays capturing frame time, memory, draw call counts, and GC pressure in real-time. Standardised capture snapshots accelerate handoff between profiling sessions.',
    keywords: ['runtime HUD', 'frame-time overlay', 'draw call counter'],
    accent: 'purple',
    icon: Terminal,
    colSpan: 'lg:col-span-6 md:col-span-3',
  },
  {
    title: 'ECS / DOTS Direction',
    body: 'Data-oriented design applied to game object management — structure-of-arrays memory layout, job system parallelism, and Burst-compiled hot paths for agent-dense scenarios where MonoBehaviour update budgets become inadequate.',
    keywords: ['ECS', 'DOTS', 'Burst compiler', 'Job System', 'data-oriented'],
    accent: 'green',
    icon: GitMerge,
    colSpan: 'lg:col-span-6 md:col-span-3',
  },
];

export default function TechFocusBentoSection() {
  return (
    <section id="tech-focus" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Technical Focus
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Engineering depth across the rendering stack
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Each area is backed by measurement, not intuition. Isolate the variable, prove the cost,
          then fix it.
        </p>
      </motion.div>

      <BentoGrid>
        {techCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              className={card.colSpan}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <BentoCard
                variant="default"
                padding="md"
                importance="normal"
                shape="rect"
                elevated
                className="h-full flex flex-col gap-3.5"
              >
                {/* Icon display zone — Flowbase-inspired */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentIconBg[card.accent]}`}
                >
                  <Icon size={20} className={accentText[card.accent]} />
                </div>

                {/* Title */}
                <h3 className={`text-sm font-semibold ${accentText[card.accent]}`}>
                  {card.title}
                </h3>

                {/* Body */}
                <p className="text-xs text-slate-400 leading-relaxed flex-1">{card.body}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {card.keywords.map((kw) => (
                    <span
                      key={kw}
                      className={`rounded border font-mono text-[10px] px-1.5 py-0.5 ${accentKeyword[card.accent]}`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          );
        })}
      </BentoGrid>
    </section>
  );
}
