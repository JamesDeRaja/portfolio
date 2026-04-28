import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import MiniBars from '../../components/charts/MiniBars';
import { Seo } from '../../components/Seo';

const BASE = '/case-studies/update-strategies';

interface VariantScreenshot {
  label: string;
  src: string;
  alt: string;
}

interface Variant {
  id: string;
  letter: string;
  title: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  description: string;
  screenshots: VariantScreenshot[];
  metrics: { label: string; value: string; highlight?: boolean }[];
  observation: string;
  deepDiveHref: string;
}

const variants: Variant[] = [
  {
    id: 'a',
    letter: 'A',
    title: 'Lifecycle Control',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/[0.06]',
    accentBorder: 'border-emerald-500/20',
    description:
      'Baseline using minimal Update usage. Enemies are passive — only bullets update. Establishes the scene render floor without scripting pressure.',
    screenshots: [
      { label: 'HUD', src: `${BASE}/A/A_Lifecycle_10000_HighFire_HUD.png`, alt: 'Variant A HUD showing runtime stats at high fire rate' },
      { label: 'CPU Timeline', src: `${BASE}/A/A_Lifecycle_10000_HighFire_ProfilerTimeline.png`, alt: 'Variant A Profiler CPU timeline' },
      { label: 'CPU Hierarchy', src: `${BASE}/A/A_Lifecycle_10000_HighFire_ProfilerHierarchy.png`, alt: 'Variant A Profiler CPU hierarchy' },
    ],
    metrics: [
      { label: 'Frame Time', value: '~22–30 ms' },
      { label: 'Script Cost', value: '~0.5 ms', highlight: true },
      { label: 'GC Alloc', value: '~19 KB' },
    ],
    observation:
      'System is not CPU-bound by scripts. Cost dominated by scene update and rendering. Establishes the minimum achievable cost floor for this scene.',
    deepDiveHref: '/case-studies/update-strategies-scale/variant-a',
  },
  {
    id: 'b',
    letter: 'B',
    title: 'Per-Object Update',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/[0.06]',
    accentBorder: 'border-red-500/20',
    description:
      'Each of the 10,000 enemies runs its own MonoBehaviour Update. Maximum dispatch overhead — the worst-case CPU pattern.',
    screenshots: [
      { label: 'HUD', src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_HUD.png`, alt: 'Variant B HUD showing high frame time under per-object updates' },
      { label: 'CPU Timeline', src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_ProfilerTimeline.png`, alt: 'Variant B Profiler CPU timeline' },
      { label: 'CPU Hierarchy', src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_ProfilerHierarchy.png`, alt: 'Variant B Profiler CPU hierarchy showing ScriptRunBehaviourUpdate cost' },
    ],
    metrics: [
      { label: 'Frame Time', value: '~40 ms', highlight: true },
      { label: 'ScriptRunBehaviourUpdate', value: '~8.6 ms', highlight: true },
      { label: 'Enemy Update Calls', value: '10,000' },
      { label: 'Bullet Update Calls', value: '~1,600' },
      { label: 'GC Alloc', value: '~33 KB' },
    ],
    observation:
      'Per-object Update introduces significant CPU overhead. Even minimal per-entity logic becomes expensive at scale because Unity dispatches 10,000 separate Update calls every frame.',
    deepDiveHref: '/case-studies/update-strategies-scale/variant-b',
  },
  {
    id: 'c',
    letter: 'C',
    title: 'Central Manager',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/[0.06]',
    accentBorder: 'border-amber-500/20',
    description:
      'A single manager MonoBehaviour iterates all enemies in one Update call, eliminating per-object dispatch overhead.',
    screenshots: [
      { label: 'HUD', src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_HUD.png`, alt: 'Variant C HUD with central manager update' },
      { label: 'CPU Timeline', src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_ProfilerTimeline.png`, alt: 'Variant C Profiler CPU timeline' },
      { label: 'CPU Hierarchy', src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_ProfilerHierarchy.png`, alt: 'Variant C Profiler CPU hierarchy with manager cost' },
    ],
    metrics: [
      { label: 'Frame Time', value: '~32 ms' },
      { label: 'Manager Update Cost', value: '~4.2 ms', highlight: true },
      { label: 'Script Cost', value: '~4.3 ms' },
    ],
    observation:
      'Centralized update removes MonoBehaviour dispatch overhead and cuts script cost roughly in half. However, Transform reads/writes and cache-unfriendly object iteration still limit further gains.',
    deepDiveHref: '/case-studies/update-strategies-scale/variant-c',
  },
  {
    id: 'd',
    letter: 'D',
    title: 'ECS (DOTS)',
    accent: 'text-neon',
    accentBg: 'bg-neon/[0.06]',
    accentBorder: 'border-neon/20',
    description:
      'Entities and systems replace MonoBehaviours entirely. Chunk-based iteration, contiguous memory layout, and Burst-compiled jobs eliminate all object overhead.',
    screenshots: [
      { label: 'HUD', src: `${BASE}/D/D_ECSUpdate_10000_HighFire_HUD.png`, alt: 'Variant D HUD showing ECS frame time at scale' },
      { label: 'CPU Timeline', src: `${BASE}/D/D_ECSUpdate_10000_HighFire_ProfilerTimeline.png`, alt: 'Variant D Profiler CPU timeline under ECS' },
      { label: 'CPU Hierarchy', src: `${BASE}/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy.png`, alt: 'Variant D Profiler CPU hierarchy under ECS' },
    ],
    metrics: [
      { label: 'Frame Time', value: '~9.4 ms', highlight: true },
      { label: 'CPU Frame', value: '~8 ms' },
      { label: 'ScriptRunBehaviourUpdate', value: '~0.01 ms', highlight: true },
      { label: 'Enemy System', value: '~1.2 ms' },
      { label: 'Bullet System', value: '~0.12 ms' },
    ],
    observation:
      'ECS removes per-object overhead entirely and enables efficient chunk-based iteration. Simulation cost drops to ~9 ms while handling the identical 10,000-entity workload — a 4× improvement over the manager pattern.',
    deepDiveHref: '/case-studies/update-strategies-scale/variant-d',
  },
];

const comparisonRows = [
  { letter: 'A', title: 'Lifecycle Control', frameTime: '~25 ms', scriptCost: '~0.5 ms', updateCalls: 'Minimal', bottleneck: 'Render', accentBg: 'bg-emerald-500/10', accentText: 'text-emerald-400' },
  { letter: 'B', title: 'Per-Object Update', frameTime: '~40 ms', scriptCost: '~8.6 ms', updateCalls: '10,000+', bottleneck: 'Scripts (dispatch)', accentBg: 'bg-red-500/10', accentText: 'text-red-400' },
  { letter: 'C', title: 'Central Manager',  frameTime: '~32 ms', scriptCost: '~4.3 ms', updateCalls: '1 manager', bottleneck: 'Transform iteration', accentBg: 'bg-amber-500/10', accentText: 'text-amber-400' },
  { letter: 'D', title: 'ECS (DOTS)',        frameTime: '~9.4 ms', scriptCost: '~0.01 ms', updateCalls: 'ECS systems', bottleneck: 'Rendering', accentBg: 'bg-neon/10', accentText: 'text-neon' },
];

const insights = [
  {
    title: 'Per-object Update does not scale',
    body: '10,000 MonoBehaviour Update calls add ~8.6 ms of pure dispatch overhead — before any logic runs. Scaling entity counts with this pattern is a dead end.',
  },
  {
    title: 'Manager pattern reduces overhead, not data cost',
    body: 'Centralizing to a single Update call eliminates dispatch but Transform reads/writes and cache-inefficient object layout still impose ~4 ms. It scales better, but hits a ceiling.',
  },
  {
    title: 'Transform-based workflows remain expensive at scale',
    body: "Any pattern that reads or writes Unity's Transform per entity per frame pays scattered memory access costs. This is the shared bottleneck for both B and C.",
  },
  {
    title: 'ECS enables true data-oriented scaling',
    body: 'Contiguous component data in chunks means the CPU processes 10,000 entities with cache-friendly access and Burst-compiled tight loops. Frame time drops 4× without changing the visible simulation.',
  },
];

export default function UpdateStrategiesCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Update Strategies at Scale — James De Raja"
        description="Profiler-driven comparison of 4 Unity update architectures (MonoBehaviour, Manager, ECS) across 10,000 entities. Frame time reduced from ~40 ms to ~9.4 ms."
        url="https://jamesderaja.com/case-studies/update-strategies-scale"
        keywords="Unity ECS, MonoBehaviour update, central manager, DOTS, performance, 10000 entities, Unity profiling"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Update Strategies at Scale (10,000 Entities)',
          description: 'Profiler-driven comparison of 4 Unity update architectures across 10,000 entities.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          backHref="/"
          backLabel="Back to Portfolio"
          category="Case Study"
          title="Update Strategies at Scale"
          subtitle="10,000 Entities — MonoBehaviour vs Manager vs ECS"
          description="Profiler-driven comparison of four Unity update architectures under identical load. Same scene, same entity count, same bullet system — only the update model changes."
          chips={['Unity', 'C#', 'ECS / DOTS', 'Burst', 'CPU Profiling']}
          metric="~40 ms → ~9.4 ms"
          metricLabel="frame time: per-object Update → ECS"
        />

        

        <section className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <h2 className="text-lg font-semibold text-white">Problem</h2>
          <p className="mt-2 text-sm text-slate-300">Large-entity Unity scenes can collapse frame budgets when update architecture and memory access patterns are not controlled.</p>
          <h2 className="mt-4 text-lg font-semibold text-white">What you did</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Designed controlled scenarios with fixed scene load and one architecture variable at a time.</li>
            <li>Captured Unity Profiler and runtime metrics to isolate CPU and GPU behavior.</li>
            <li>Validated changes against frame budget targets before recording outcomes.</li>
          </ul>
          <h2 className="mt-4 text-lg font-semibold text-white">Result</h2>
          <p className="mt-2 text-sm text-slate-300">Reduced 10,000-entity frame time from ~40 ms to ~9.4 ms through architecture changes.</p>
        </section>
{/* Test Setup */}
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-white">Test Setup</h2>
          <p className="text-slate-300 leading-relaxed">
            Each variant runs the exact same scene: 10,000 enemy entities, the same bullet system firing at the same rate, identical
            prefabs, transforms, rendering, and batching configuration. The <em className="text-white not-italic font-medium">only</em> variable
            is how entities receive their per-frame update.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Identical prefabs and transforms',
              'Same spawn rate and destruction logic',
              'Same camera angle and draw call batching',
              'Same enemy count — 10,000 active entities',
              'Same bullet system — up to ~1,300 bullets',
              'No logic differences except update model',
            ].map((point) => (
              <div key={point} className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon/50" />
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Variant Sections */}
        {variants.map((v, vi) => (
          <motion.section
            key={v.id}
            className="mt-12 space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            {/* Variant header */}
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${v.accentBorder} ${v.accentBg}`}>
                <span className={`font-mono text-lg font-bold ${v.accent}`}>{v.letter}</span>
              </div>
              <div>
                <h2 className={`text-xl font-bold ${v.accent}`}>Variant {v.letter} — {v.title}</h2>
                <p className="mt-0.5 text-sm text-slate-400">{v.description}</p>
              </div>
            </div>

            {/* Screenshots */}
            <div className={`grid gap-3 ${v.screenshots.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
              {v.screenshots.map((shot) => (
                <div key={shot.label} className="space-y-1.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">{shot.label}</p>
                  <a
                    href={shot.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-white/20"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading={vi === 0 ? 'eager' : 'lazy'}
                      className="w-full object-cover"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Metrics + Observation */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Metrics */}
              <div className={`rounded-2xl border ${v.accentBorder} ${v.accentBg} p-4 space-y-2`}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">Key Metrics</p>
                <div className="space-y-1.5">
                  {v.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-slate-400">{m.label}</span>
                      <span className={`font-mono text-sm font-semibold ${m.highlight ? v.accent : 'text-slate-300'}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observation */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 flex flex-col justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">Observation</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{v.observation}</p>
                </div>
                <Link
                  to={v.deepDiveHref}
                  className={`self-start flex items-center gap-1.5 rounded-lg border ${v.accentBorder} ${v.accentBg} px-3 py-1.5 text-xs font-medium ${v.accent} transition hover:opacity-80`}
                >
                  Explore Setup
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Frame time bar visualization */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-white">Frame Time Comparison</h2>
          <div className="glass-card rounded-2xl p-4 space-y-2">
            <MiniBars title="Variant A — Lifecycle Control" baselineMs={25} maxMs={40} labelLeft="Frame" variant="cpu" />
            <MiniBars title="Variant B — Per-Object Update" baselineMs={40} maxMs={40} labelLeft="Frame" variant="cpu" />
            <MiniBars title="Variant C — Central Manager"   baselineMs={32} maxMs={40} labelLeft="Frame" variant="cpu" />
            <MiniBars title="Variant D — ECS (DOTS)"        baselineMs={9.4} maxMs={40} labelLeft="Frame" variant="gpu" />
          </div>
        </section>

        {/* Comparison table */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-white">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Variant</th>
                  <th className="px-4 py-3">Frame Time</th>
                  <th className="px-4 py-3">Script Cost</th>
                  <th className="px-4 py-3">Update Calls</th>
                  <th className="px-4 py-3">Bottleneck</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row) => (
                  <tr key={row.letter} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${row.accentBg} ${row.accentText}`}>
                          {row.letter}
                        </span>
                        <span className="text-slate-300">{row.title}</span>
                      </div>
                    </td>
                    <td className={`px-4 py-3 font-mono font-semibold ${row.accentText}`}>{row.frameTime}</td>
                    <td className="px-4 py-3 font-mono text-slate-300">{row.scriptCost}</td>
                    <td className="px-4 py-3 text-slate-400">{row.updateCalls}</td>
                    <td className="px-4 py-3 text-slate-500">{row.bottleneck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-white">Key Insights</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {insights.map((insight, i) => (
              <motion.div
                key={insight.title}
                className="rounded-2xl border border-neon/10 bg-neon/[0.03] p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="mt-0.5 font-mono text-xs font-bold text-neon/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-semibold text-white">{insight.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{insight.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <div className="rounded-2xl border border-neon/15 bg-neon/[0.04] p-6">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-3">Conclusion</p>
            <p className="text-base text-slate-200 leading-relaxed">
              At scale, the primary cost is not individual logic complexity — it is{' '}
              <span className="font-semibold text-white">how often and how it is executed</span>.
              Moving from object-oriented Update patterns to data-oriented systems provides the largest
              performance gains: a 4× frame time reduction with identical simulation results. The manager
              pattern is a meaningful intermediate step, but Transform-based memory access remains a hard ceiling.
              ECS removes that ceiling entirely.
            </p>
          </div>
        </section>

        {/* Variant subpage links */}
        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold text-white">Explore Each Variant</h2>
          <p className="text-sm text-slate-400">Each variant has a dedicated deep-dive page covering the scene setup, architecture, annotated profiler screenshots, and what it proves.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {variants.map((v) => (
              <Link
                key={v.id}
                to={v.deepDiveHref}
                className={`group flex items-center justify-between gap-3 rounded-2xl border ${v.accentBorder} ${v.accentBg} px-4 py-3.5 transition hover:opacity-90`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border ${v.accentBorder} ${v.accentBg}`}>
                    <span className={`font-mono text-sm font-bold ${v.accent}`}>{v.letter}</span>
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold ${v.accent}`}>{v.title}</p>
                    <p className="text-xs text-slate-500 truncate">{v.description.split('.')[0]}.</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className={`h-4 w-4 flex-shrink-0 fill-none stroke-current ${v.accent} opacity-60 group-hover:opacity-100 transition-opacity`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* Repository */}
        <section className="mt-8">
          <a
            href="https://github.com/JamesDeRaja/ECS-Performance-Improvement"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition hover:border-neon/25 hover:bg-neon/[0.03]"
          >
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 fill-slate-400 group-hover:fill-neon transition-colors" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-neon transition-colors">ECS-Performance-Improvement</p>
                <p className="text-xs text-slate-500">github.com/JamesDeRaja</p>
              </div>
            </div>
            <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0 stroke-slate-600 group-hover:stroke-neon transition-colors fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </section>
      </main>
    </div>
  );
}
