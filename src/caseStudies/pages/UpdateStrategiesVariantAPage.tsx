import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../../components/Seo';

const BASE = '/case-studies/update-strategies';
const PARENT = '/case-studies/update-strategies-scale';

const screenshots = [
  {
    label: 'HUD',
    src: `${BASE}/A/A_Lifecycle_10000_HighFire_HUD.png`,
    alt: 'Scene A runtime HUD — 10,000 enemies, high fire rate, frame time ~22–30 ms',
    caption:
      'Runtime HUD confirms the live load: 10,000 enemies active, maximum fire rate, bullets tracked in real time. Frame time hovers around 22–30 ms despite no script-side enemy update.',
  },
  {
    label: 'CPU Timeline',
    src: `${BASE}/A/A_Lifecycle_10000_HighFire_ProfilerTimeline.png`,
    alt: 'Scene A Unity Profiler CPU timeline showing render and scene update dominance',
    caption:
      'Timeline shows main thread activity spread across PlayerLoop, UpdateScene, and render-related work. BehaviourUpdate is a small slice — scene and rendering cost is the primary consumer.',
  },
  {
    label: 'CPU Hierarchy',
    src: `${BASE}/A/A_Lifecycle_10000_HighFire_ProfilerHierarchy.png`,
    alt: 'Scene A Unity Profiler CPU hierarchy — low script cost, lifecycle and render overhead visible',
    caption:
      'Hierarchy confirms ScriptRunBehaviourUpdate is minimal (~0.5 ms). Instantiate and Destroy calls for bullets are visible, along with GC allocations around 19 KB — the lifecycle churn baseline.',
  },
];

const setupItems = [
  { label: 'Study root GameObject', detail: 'Scene anchor — contains HUD, camera, and controller references' },
  { label: 'StudyHUD (IMGUI overlay)', detail: 'Runtime metrics: FPS, frame time, worst frame, bullet count, fire rate controls' },
  { label: 'Player capsule + gun cube', detail: 'White capsule body, dark cube gun, muzzle transform for bullet spawn origin' },
  { label: 'Enemy grid spawner', detail: 'Deterministic grid layout — places 10,000 red capsule enemies at fixed positions' },
  { label: 'Bullet shooter', detail: 'Fires forward/yaw sweep pattern at a fixed rate; manages bullet instantiation' },
  { label: 'Bullet prefab (yellow sphere)', detail: 'Moves forward, expires on timeout — uses Instantiate/Destroy lifecycle' },
  { label: 'Enemy prefab (red capsule)', detail: 'No Update(). Placed visually. No per-frame script execution.' },
];

const metrics = [
  { label: 'Frame Time', value: '~22–30 ms', accent: true },
  { label: 'ScriptRunBehaviourUpdate', value: '~0.5 ms', accent: false },
  { label: 'Enemy Update Calls', value: '0', accent: false },
  { label: 'Bullet Lifecycle', value: 'Instantiate / Destroy', accent: false },
  { label: 'GC Alloc', value: '~19 KB', accent: false },
];

const teaches = [
  {
    id: '01',
    title: 'Visible object count alone is expensive',
    body: '10,000 GameObjects in the scene create real cost before any script runs. Unity must process transforms, manage rendering state, and handle the scene graph every frame. This is the unavoidable floor.',
  },
  {
    id: '02',
    title: 'Lifecycle churn creates GC pressure',
    body: 'Bullets are instantiated and destroyed every frame at high fire rate. Even without per-object Update logic, Instantiate/Destroy generates ~19 KB of GC allocation per frame — visible in the hierarchy.',
  },
  {
    id: '03',
    title: 'Passive objects do not spike ScriptRunBehaviourUpdate',
    body: 'Because enemies have no Update(), the engine never dispatches per-entity callbacks for them. Script cost stays near zero. This proves that the later cost in Scene B comes entirely from those dispatches.',
  },
  {
    id: '04',
    title: 'This is the minimum achievable frame cost',
    body: 'Scene A represents what a scene of this visual complexity will always cost at minimum. Any architecture that adds scripting, more logic, or worse memory access patterns will pay additional cost on top of this.',
  },
];

export default function UpdateStrategiesVariantAPage() {
  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Variant A — Lifecycle Control | Update Strategies at Scale"
        description="Deep dive into Scene A of the Unity update architecture study: 10,000 passive enemies with bullet lifecycle churn. Establishes the render and GC baseline."
        url="https://james.alphaden.club/case-studies/update-strategies-scale/variant-a"
        keywords="Unity lifecycle, MonoBehaviour baseline, Instantiate Destroy, GC alloc, Unity profiling, 10000 entities"
        type="article"
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back nav */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to={PARENT} className="hover:text-neon transition-colors">
            Update Strategies at Scale
          </Link>
          <span>/</span>
          <span className="text-slate-300">Variant A</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06]">
              <span className="font-mono text-xl font-bold text-emerald-400">A</span>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400/70">Variant A</p>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Lifecycle Control</h1>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            The control case. Enemies are entirely passive — no per-frame logic, no Update calls. Only bullets carry lifecycle
            cost through Instantiate and Destroy. This scene establishes the rendering and GC floor that all other
            variants build on top of.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Baseline', 'Passive Enemies', 'Instantiate/Destroy', 'GC Baseline', 'No Script Update'].map((chip) => (
              <span key={chip} className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 text-xs font-medium text-emerald-300">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Purpose */}
        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-white">Study Purpose</h2>
          <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene A answers one question:{' '}
              <span className="font-medium text-white">what does this scene cost when scripts are not the bottleneck?</span>{' '}
              By running 10,000 visible enemies with no Update() and a bullet system that uses Instantiate/Destroy,
              it captures the pure render cost, scene update cost, and lifecycle GC pressure. Every other variant measures
              overhead on top of this floor.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Render and scene update baseline',
                'Bullet Instantiate/Destroy lifecycle cost',
                'GC allocation from bullet spawning',
                '10,000 visible object transform pressure',
                'Minimum achievable frame cost for this scene',
                'Proof that Update dispatch is the later culprit',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/50" />
                  <span className="text-xs text-slate-400">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scene Setup */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Scene Setup</h2>
          <p className="text-sm text-slate-400">
            Scene A (Scene_A_Lifecycle) uses the same hierarchy as all variants. The critical difference is what
            the enemy and bullet prefabs <em className="not-italic text-slate-300">do not have</em>: enemy prefabs
            carry no Update() method.
          </p>
          <div className="space-y-2">
            {setupItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
                <span className="mt-0.5 font-mono text-xs font-bold text-emerald-400/70">›</span>
                <div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enemy vs Bullet behavior */}
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Enemy Behavior</p>
              <div className="space-y-2">
                {['No Update() method on enemy prefab', 'Placed in deterministic grid at spawn', 'Exist as visual load only', 'No per-frame C# execution', 'No transform writes per frame'].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400/40" />
                    <span className="text-xs text-slate-400">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Bullet Behavior</p>
              <div className="space-y-2">
                {['Instantiated from muzzle on fire', 'Moves forward each frame', 'Has lifetime timer', 'Destroyed on timeout or collision', 'GC allocation from Instantiate/Destroy'].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400/40" />
                    <span className="text-xs text-slate-400">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HUD Fields */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">HUD Fields Explained</h2>
          <p className="text-sm text-slate-400">
            Every screenshot includes an IMGUI overlay. These fields appear in all four variants with the same meaning.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Field</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {[
                  ['FPS', 'Current smoothed framerate'],
                  ['Frame Time', 'Current smoothed frame duration in milliseconds'],
                  ['Worst Frame', 'Largest frame spike recorded since last reset'],
                  ['Elapsed', 'Total runtime of the current test session'],
                  ['Target Enemies', 'Requested enemy count (10,000 in this study)'],
                  ['Bullets Alive', 'Currently active bullets in the scene'],
                  ['Shots Fired', 'Total bullet spawn count since session start'],
                  ['Fire Rate', '1.00 = maximum bullet pressure throughout study'],
                ].map(([field, meaning]) => (
                  <tr key={field} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-2.5 text-emerald-400 text-xs">{field}</td>
                    <td className="px-4 py-2.5 text-slate-400 text-xs">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-10 space-y-5">
          <h2 className="text-lg font-semibold text-white">Profiler Evidence</h2>
          <div className="space-y-6">
            {screenshots.map((shot) => (
              <motion.div
                key={shot.label}
                className="space-y-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">{shot.label}</p>
                <a
                  href={shot.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-emerald-500/30"
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full object-cover" />
                </a>
                <p className="text-xs text-slate-400 leading-relaxed">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Captured Metrics</h2>
          <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">
            <div className="space-y-2.5">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-2 border-b border-white/[0.04] pb-2.5 last:border-0 last:pb-0">
                  <span className="text-sm text-slate-400">{m.label}</span>
                  <span className={`font-mono text-sm font-semibold ${m.accent ? 'text-emerald-400' : 'text-slate-300'}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What A teaches */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">What Scene A Teaches</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {teaches.map((item) => (
              <motion.div
                key={item.id}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-400/60">{item.id}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interpretation */}
        <section className="mt-8">
          <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-emerald-400/60 mb-3">Interpretation</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene A is not "good performance" — 22–30 ms is already a heavy scene. The point is that this cost is{' '}
              <span className="text-white font-medium">unavoidable</span> given 10,000 visible objects and bullet lifecycle
              churn. The cost is real, measured, and repeatable. Any architecture that adds Update logic on top of this
              will show that additional scripting cost as a direct delta against Scene A's numbers.
            </p>
          </div>
        </section>

        {/* Variant navigation */}
        <nav className="mt-10 flex items-center justify-between gap-4">
          <Link
            to={PARENT}
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-400 transition hover:border-white/20 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Overview
          </Link>
          <Link
            to={`${PARENT}/variant-b`}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500/40"
          >
            Variant B — Per-Object Update
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </main>
    </div>
  );
}
