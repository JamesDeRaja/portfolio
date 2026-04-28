import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../../components/Seo';

const BASE = '/case-studies/update-strategies';
const PARENT = '/case-studies/update-strategies-scale';

const screenshots = [
  {
    label: 'HUD',
    src: `${BASE}/D/D_ECSUpdate_10000_HighFire_HUD.png`,
    alt: 'Scene D runtime HUD — 10,000 enemies, ~1,300 bullets, frame time ~9.43 ms at ~106 FPS',
    caption:
      'HUD shows the same 10,000 enemies and maximum fire rate. Frame time has dropped to ~9.43 ms — FPS climbs to ~106. The load is identical to A, B, and C. Only the architecture has changed.',
  },
  {
    label: 'CPU Timeline',
    src: `${BASE}/D/D_ECSUpdate_10000_HighFire_ProfilerTimeline.png`,
    alt: 'Scene D Unity Profiler CPU timeline — PlayerLoop small, worker thread activity visible',
    caption:
      'Timeline shows a dramatically smaller PlayerLoop. BehaviourUpdate is nearly gone. Worker thread activity is visible — ECS job scheduling distributes work off the main thread, contributing to the lower frame time.',
  },
  {
    label: 'CPU Hierarchy (MonoBehaviour view)',
    src: `${BASE}/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy.png`,
    alt: 'Scene D Unity Profiler CPU hierarchy — ScriptRunBehaviourUpdate ~0.01 ms, StudyHUD only MonoBehaviour',
    caption:
      'Standard hierarchy confirms ScriptRunBehaviourUpdate is ~0.01 ms. The only visible MonoBehaviour is StudyHUD — the IMGUI overlay. All enemy and bullet simulation has left the MonoBehaviour system entirely.',
  },
  {
    label: 'ECS Systems Hierarchy',
    src: `${BASE}/D/D_ECSUpdate_10000_HighFire_ProfilerHierarchy_ECS.png`,
    alt: 'Scene D ECS Systems view — SimulationSystemGroup, enemy and bullet systems, 1.23 ms and 0.12 ms',
    caption:
      'The ECS-specific hierarchy shows SimulationSystemGroup containing all four systems. D_EnemyMoveSystem runs in ~1.23 ms. D_BulletMoveLifetimeSystem runs in ~0.12 ms. This is where the simulation now lives.',
  },
];

const components = [
  { name: 'EnemyTag', type: 'Tag', purpose: 'Identifies an entity as an enemy for query filtering' },
  { name: 'BulletTag', type: 'Tag', purpose: 'Identifies an entity as a bullet for query filtering' },
  { name: 'Velocity', type: 'Data', purpose: 'Stores float3 velocity for movement calculation' },
  { name: 'Lifetime', type: 'Data', purpose: 'Countdown float for bullet expiry — decremented each frame' },
  { name: 'EnemyBasePosition', type: 'Data', purpose: 'Stored initial grid position for motion offset calculation' },
  { name: 'EnemyMotion', type: 'Data', purpose: 'Accumulated motion state for sweep behavior' },
  { name: 'LocalTransform', type: 'Unity ECS', purpose: 'Built-in DOTS transform — contiguous float3/quaternion in chunk' },
];

const systems = [
  {
    name: 'D_EnemySpawnSystem',
    cost: 'startup',
    purpose: 'Creates 10,000 enemy entities at grid positions — runs once, not per frame',
  },
  {
    name: 'D_EnemyMoveSystem',
    cost: '~1.23 ms',
    purpose: 'Iterates all enemy LocalTransform components in chunks, applies forward/yaw sweep motion',
  },
  {
    name: 'D_BulletSpawnSystem',
    cost: 'low',
    purpose: 'Spawns bullet entities at muzzle position when fire timer triggers',
  },
  {
    name: 'D_BulletMoveLifetimeSystem',
    cost: '~0.12 ms',
    purpose: 'Moves all bullets by velocity, decrements lifetime, destroys expired entities via ECB',
  },
];

const architectureComparison = [
  { aspect: 'Entity representation', b: 'GameObject per enemy', c: 'GameObject per enemy', d: 'Entity (struct) per enemy' },
  { aspect: 'Update dispatch', b: '10,000 MonoBehaviour.Update()', c: '1 manager Update()', d: 'ECS system iterates chunks' },
  { aspect: 'Memory layout', b: 'Scattered (per-object heap)', c: 'Scattered (Transform pointers)', d: 'Contiguous (component chunks)' },
  { aspect: 'Transform writes', b: 'transform.position per object', c: 'transform.position per object', d: 'LocalTransform in-chunk write' },
  { aspect: 'Bullet lifecycle', b: 'Instantiate/Destroy', c: 'Instantiate/Destroy', d: 'Entity create/ECB destroy' },
  { aspect: 'Frame Time', b: '~40 ms', c: '~32 ms', d: '~9.4 ms' },
];

const teaches = [
  {
    id: '01',
    title: 'Chunk-based iteration enables cache efficiency',
    body: "ECS stores component data in 'chunks' — contiguous memory blocks holding all entities with the same component layout. The CPU processes entity data sequentially, achieving cache-line efficiency that scattered GameObject Transforms cannot match.",
  },
  {
    id: '02',
    title: 'MonoBehaviour cost disappears from the profiler',
    body: 'ScriptRunBehaviourUpdate drops to ~0.01 ms — only the HUD MonoBehaviour remains. This is the profiler proof that the simulation has fully moved out of the MonoBehaviour system.',
  },
  {
    id: '03',
    title: 'Entity creation/destruction replaces Instantiate/Destroy',
    body: 'ECS entity operations are structural changes to chunk data — no heap allocation, no GC pressure from bullet lifecycle. The EntityCommandBuffer (ECB) batches these changes for safe deferred execution.',
  },
  {
    id: '04',
    title: '4× frame time improvement under identical load',
    body: 'B → D is a ~31 ms frame time reduction under the same 10,000-enemy, high-fire-rate workload. No visual change. No gameplay change. Pure architecture change.',
  },
];

export default function UpdateStrategiesVariantDPage() {
  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Variant D — ECS (DOTS) | Update Strategies at Scale"
        description="Deep dive into Scene D: Unity ECS replaces MonoBehaviours entirely. Frame time drops from ~40 ms to ~9.4 ms — a 4× improvement under 10,000 enemies and maximum bullet pressure."
        url="https://james.alphaden.club/case-studies/update-strategies-scale/variant-d"
        keywords="Unity ECS, DOTS, entity component system, Burst compiler, chunk iteration, MonoBehaviour replacement, Unity performance"
        type="article"
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back nav */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to={PARENT} className="hover:text-neon transition-colors">
            Update Strategies at Scale
          </Link>
          <span>/</span>
          <span className="text-slate-300">Variant D</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-neon/20 bg-neon/[0.06]">
              <span className="font-mono text-xl font-bold text-neon">D</span>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/70">Variant D</p>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">ECS (DOTS)</h1>
            </div>
          </div>

          {/* Headline metric */}
          <div className="rounded-2xl border border-neon/20 bg-neon/[0.04] px-5 py-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Result</p>
            <p className="text-2xl font-bold text-white">
              ~40 ms <span className="text-neon">→</span> ~9.4 ms
            </p>
            <p className="mt-1 text-sm text-slate-400">Frame time under 10,000 enemies + maximum fire rate</p>
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            MonoBehaviours are replaced entirely by ECS entities and systems. Data lives in contiguous chunks.
            Simulation runs in cache-friendly loops, optionally Burst-compiled. Frame time drops 4× vs. Scene B
            with an identical visible simulation.
          </p>

          <div className="flex flex-wrap gap-2">
            {['ECS / DOTS', 'Chunk Iteration', 'No MonoBehaviour Update', '~9.4 ms Frame Time', '4× Improvement vs B'].map((chip) => (
              <span key={chip} className="rounded-full border border-neon/20 bg-neon/[0.06] px-3 py-1 text-xs font-medium text-neon">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Purpose */}
        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-white">Study Purpose</h2>
          <div className="rounded-2xl border border-neon/15 bg-neon/[0.04] p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene D answers:{' '}
              <span className="font-medium text-white">what is left when you remove both MonoBehaviour dispatch overhead and GameObject Transform iteration?</span>{' '}
              By replacing the GameObject simulation with ECS systems operating on contiguous component data,
              the bottlenecks identified in B and C are eliminated. The result isolates how much of the original
              ~40 ms frame time was architectural waste.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Eliminate MonoBehaviour Update dispatch',
                'Eliminate scattered Transform memory access',
                'Replace Instantiate/Destroy with entity operations',
                'Prove chunk-based iteration at 10,000 scale',
                'Quantify full architecture improvement (B→D)',
                'Show ECS system profiler breakdown',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon/50" />
                  <span className="text-xs text-slate-400">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECS Architecture */}
        <section className="mt-10 space-y-5">
          <h2 className="text-lg font-semibold text-white">ECS Architecture</h2>
          <p className="text-sm text-slate-400">
            Scene D (Scene_D_ECS) replaces the GameObject simulation with four ECS systems operating on
            tagged entities. The visual result — red capsule enemies, yellow sphere bullets, same camera — is identical.
          </p>

          {/* Components */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">ECS Components</p>
            <div className="space-y-2">
              {components.map((c) => (
                <div key={c.name} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className={`inline-block font-mono text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      c.type === 'Tag' ? 'bg-neon/10 text-neon/80' : c.type === 'Data' ? 'bg-white/10 text-slate-400' : 'bg-blue-500/10 text-blue-400'
                    }`}>
                      {c.type}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-neon/90">{c.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{c.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Systems */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">ECS Systems</p>
            <div className="space-y-2">
              {systems.map((s) => (
                <div key={s.name} className="flex items-start gap-3 rounded-xl border border-neon/[0.08] bg-neon/[0.03] px-4 py-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-mono text-sm text-neon/90">{s.name}</p>
                      <span className="font-mono text-xs text-slate-500">{s.cost}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">{s.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How chunk iteration works */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">How Chunk Iteration Works</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              ECS groups entities into 'chunks' — fixed 16 KB blocks containing all components for entities
              with the same archetype. When D_EnemyMoveSystem runs, it iterates chunks sequentially, reading
              and writing LocalTransform data in order. The CPU prefetcher can see ahead, cache lines stay hot,
              and SIMD-width instructions become possible. This is fundamentally different from writing
              to 10,000 <code className="font-mono text-neon/70">transform.position</code> fields spread across heap memory.
            </p>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-10 space-y-5">
          <h2 className="text-lg font-semibold text-white">Profiler Evidence</h2>
          <p className="text-sm text-slate-400">
            Scene D requires two views to fully understand the profiler: the standard CPU Hierarchy (which shows
            MonoBehaviour cost gone) and the ECS Systems Hierarchy (which shows where the simulation cost now lives).
          </p>
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
                  className="block overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-neon/30"
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full object-cover" />
                </a>
                <p className="text-xs text-slate-400 leading-relaxed">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full architecture comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Architecture Comparison (B / C / D)</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Aspect</th>
                  <th className="px-4 py-3 text-red-400">B</th>
                  <th className="px-4 py-3 text-amber-400">C</th>
                  <th className="px-4 py-3 text-neon">D</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {architectureComparison.map((row) => (
                  <tr key={row.aspect} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-2.5 text-xs text-slate-400">{row.aspect}</td>
                    <td className="px-4 py-2.5 text-xs text-red-400/80">{row.b}</td>
                    <td className="px-4 py-2.5 text-xs text-amber-400/80">{row.c}</td>
                    <td className="px-4 py-2.5 text-xs font-medium text-neon">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What D teaches */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">What Scene D Teaches</h2>
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
                  <span className="font-mono text-xs font-bold text-neon/60">{item.id}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final interpretation */}
        <section className="mt-8">
          <div className="rounded-2xl border border-neon/15 bg-neon/[0.04] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-3">Interpretation</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              ECS is not magic — it is a different memory layout and execution model. The 4× improvement comes from
              removing two layers of overhead that the GameObject model imposes: per-object MonoBehaviour dispatch
              (shown in B) and scattered Transform memory access (shown in C). When both are removed and simulation
              runs on contiguous chunk data, the same 10,000-entity workload fits comfortably inside a single frame
              at over 100 FPS.{' '}
              <span className="text-white font-medium">
                The bottleneck was never the simulation complexity — it was always the execution model.
              </span>
            </p>
          </div>
        </section>

        {/* Variant navigation */}
        <nav className="mt-10 flex items-center justify-between gap-4">
          <Link
            to={`${PARENT}/variant-c`}
            className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-2.5 text-sm font-medium text-amber-400 transition hover:border-amber-500/40"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Variant C — Manager
          </Link>
          <Link
            to={PARENT}
            className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-400 transition hover:border-white/20 hover:text-white"
          >
            Back to Overview
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </main>
    </div>
  );
}
