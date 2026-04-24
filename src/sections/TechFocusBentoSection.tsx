import { motion } from 'framer-motion';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';

interface TechCard {
  title: string;
  body: string;
  keywords: string[];
  accent: 'cyan' | 'purple' | 'green' | 'amber';
  colSpan: string;
}

const accentColors: Record<string, string> = {
  cyan: 'text-neon',
  purple: 'text-electric',
  green: 'text-emerald-400',
  amber: 'text-amber-400',
};

const keywordColors: Record<string, string> = {
  cyan: 'border-neon/15 bg-neon/[0.05] text-neon/70',
  purple: 'border-electric/15 bg-electric/[0.05] text-electric/70',
  green: 'border-emerald-500/15 bg-emerald-500/[0.05] text-emerald-400/70',
  amber: 'border-amber-500/15 bg-amber-500/[0.05] text-amber-400/70',
};

const techCards: TechCard[] = [
  {
    title: 'CPU / GPU Bottleneck Isolation',
    body: 'Identify whether a scene is CPU-bound (submission, update, physics) or GPU-bound (fragment, vertex, fill-rate) using Unity Profiler, Frame Debugger, and GPU timing queries. Reproduce the bottleneck deterministically before touching a line of code.',
    keywords: ['Unity Profiler', 'GPU timing', 'CPU bound', 'draw call submission', 'bottleneck classification'],
    accent: 'cyan',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'XR Frame Pacing',
    body: 'Maintain compositor deadline discipline at 72 Hz and 90 Hz for Meta Quest / PCVR. Frame drops in XR do not feel like mild stutters — they cause reprojection artifacts that break immersion. Measure prediction window variance, not just average FPS.',
    keywords: ['72 Hz / 90 Hz', 'compositor deadline', 'reprojection', 'OpenXR', 'frame variance'],
    accent: 'purple',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Unity Rendering / URP',
    body: 'Profiler-led rendering cost analysis on the Universal Render Pipeline — pass ordering, render feature overhead, shader complexity, MSAA bandwidth, and overdraw hotspots. Validated on mobile tile-based GPUs and desktop rasterisers.',
    keywords: ['URP', 'render pass', 'overdraw', 'MSAA', 'shader complexity', 'tile-based GPU'],
    accent: 'cyan',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'GC / Allocation Discipline',
    body: 'Zero-allocation hot paths via object pooling, struct-over-class discipline, and Span<T> / NativeArray usage where appropriate. Eliminate GC spikes that appear as unpredictable frame hitches rather than sustained overhead.',
    keywords: ['object pooling', 'zero allocation', 'GC pressure', 'Span<T>', 'NativeArray'],
    accent: 'amber',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Object Lifecycle Optimisation',
    body: 'Replace Instantiate/Destroy patterns with deterministic pre-warmed pools. LOD-aware spawning, visibility gating, and skeleton update culling to keep off-screen agents from burning frame budget.',
    keywords: ['object pooling', 'LOD', 'visibility gating', 'skeleton culling', 'spawn budget'],
    accent: 'green',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Profiling Pipelines & Test Harnesses',
    body: 'Deterministic benchmark scenes that isolate a single variable — geometry count, overdraw depth, skinned mesh count, or UI mask complexity — to produce reproducible, comparable measurements across builds.',
    keywords: ['deterministic benchmark', 'A/B profiling', 'baseline vs stress', 'reproducible measurements'],
    accent: 'cyan',
    colSpan: 'lg:col-span-4 md:col-span-3',
  },
  {
    title: 'Runtime Tools & HUDs',
    body: 'Lightweight development overlays capturing frame time, memory, draw call counts, and GC pressure in real-time. Standardised capture snapshots accelerate handoff between profiling sessions and engineering reviews.',
    keywords: ['runtime HUD', 'frame-time overlay', 'draw call counter', 'profiling tooling'],
    accent: 'purple',
    colSpan: 'lg:col-span-6 md:col-span-3',
  },
  {
    title: 'ECS / DOTS Direction',
    body: 'Data-oriented design principles applied to game object management — structure-of-arrays memory layout, job system parallelism, and Burst-compiled hot paths for agent-dense scenarios where classic MonoBehaviour update budgets collapse.',
    keywords: ['ECS', 'DOTS', 'Burst compiler', 'Job System', 'data-oriented design', 'SoA'],
    accent: 'green',
    colSpan: 'lg:col-span-6 md:col-span-3',
  },
];

export default function TechFocusBentoSection() {
  return (
    <section id="tech-focus" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
          Each area is backed by measurement, not intuition. Isolation-first, profiler-driven, then fix.
        </p>
      </motion.div>

      <BentoGrid>
        {techCards.map((card, i) => (
          <motion.div
            key={card.title}
            className={card.colSpan}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <BentoCard variant="default" padding="md" glow={card.accent === 'amber' ? 'cyan' : card.accent === 'green' ? 'green' : card.accent} className="h-full flex flex-col gap-3">
              <h3 className={`text-sm font-semibold ${accentColors[card.accent]}`}>
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{card.body}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card.keywords.map((kw) => (
                  <span
                    key={kw}
                    className={`rounded border font-mono text-[10px] px-1.5 py-0.5 ${keywordColors[card.accent]}`}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
}
