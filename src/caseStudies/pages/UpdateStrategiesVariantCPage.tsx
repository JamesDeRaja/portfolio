import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../../components/Seo';

const BASE = '/case-studies/update-strategies';
const PARENT = '/case-studies/update-strategies-scale';

const screenshots = [
  {
    label: 'HUD',
    src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_HUD.png`,
    alt: 'Scene C runtime HUD — 10,000 enemies, ~1,300 bullets, frame time ~32 ms',
    caption:
      'HUD shows the same 10,000 enemies and maximum fire rate as B. Frame time has dropped to ~32 ms — an 8 ms improvement over Scene B. FPS rises from ~24 to ~30. Same entity load, different architecture.',
  },
  {
    label: 'CPU Timeline',
    src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_ProfilerTimeline.png`,
    alt: 'Scene C Unity Profiler CPU timeline — single manager update visible, BehaviourUpdate reduced',
    caption:
      'Timeline shows BehaviourUpdate is now a smaller block than in Scene B. One central manager update is visible. The frame cost is more compact but the main thread is still doing significant work processing transforms.',
  },
  {
    label: 'CPU Hierarchy',
    src: `${BASE}/C/C_ManagerUpdate_10000_HighFire_ProfilerHierarchy.png`,
    alt: 'Scene C Unity Profiler CPU hierarchy — C_Manager.Update ~4.23 ms, ScriptRunBehaviourUpdate ~4.34 ms',
    caption:
      'Hierarchy shows ScriptRunBehaviourUpdate at ~4.34 ms — roughly half of Scene B\'s 8.62 ms. C_Manager.Update accounts for ~4.23 ms as the single remaining MonoBehaviour doing all the work.',
  },
];

const dataStructures = [
  { name: 'List<Transform> enemyTransforms', purpose: 'References to enemy Transform components for position writes' },
  { name: 'List<Vector3> enemyBasePositions', purpose: 'Stored initial grid positions for motion calculation' },
  { name: 'List<Transform> bulletTransforms', purpose: 'References to bullet Transform components' },
  { name: 'List<Vector3> bulletVelocities', purpose: 'Per-bullet velocity vectors updated each frame' },
  { name: 'List<float> bulletLifetimes', purpose: 'Per-bullet lifetime countdown for expiry checks' },
];

const systems = [
  { name: 'Enemy update loop', detail: 'Iterates all enemy transforms in a single for loop — no per-object dispatch' },
  { name: 'Bullet movement', detail: 'Updates all bullet positions from stored velocity data in one pass' },
  { name: 'Bullet lifetime', detail: 'Checks and decrements lifetime for all bullets — marks expired' },
  { name: 'Bullet spawn', detail: 'Calls Instantiate when new bullets are due — registers in lists' },
  { name: 'Bullet destroy', detail: 'Calls Destroy on expired bullets — removes from lists' },
  { name: 'Count tracking', detail: 'Reports current enemy/bullet counts to HUD for display' },
];

const comparisonRows = [
  { label: 'ScriptRunBehaviourUpdate', b: '~8.62 ms', c: '~4.34 ms', delta: '−4.28 ms' },
  { label: 'Enemy Update Cost', b: '~3.32 ms (10,000 calls)', c: '~4.23 ms (1 manager)', delta: 'Different method, similar cost' },
  { label: 'Bullet Update Cost', b: '~1.17 ms', c: 'inside manager', delta: 'Consolidated' },
  { label: 'Frame Time', b: '~40 ms', c: '~32 ms', delta: '−8 ms' },
  { label: 'GC Alloc', b: '~33 KB', c: 'low/moderate', delta: 'Reduced' },
];

const teaches = [
  {
    id: '01',
    title: 'Eliminating callbacks is a meaningful win',
    body: 'Removing 10,000 per-object Update dispatches halves ScriptRunBehaviourUpdate from ~8.62 ms to ~4.34 ms. The gain is real and measurable — but it is only half the problem.',
  },
  {
    id: '02',
    title: 'Transform iteration remains expensive',
    body: 'The manager still writes transform.position for 10,000 enemies every frame. Each write is a scattered memory access — GameObject Transforms are not stored contiguously. This is the ceiling Scene C cannot escape.',
  },
  {
    id: '03',
    title: 'Central Manager is a valid intermediate step',
    body: 'This is the right refactor to reach for first when per-object Update is identified as the bottleneck. It is low-risk, familiar, and produces a measurable improvement without adopting ECS.',
  },
  {
    id: '04',
    title: 'Instantiate/Destroy cost remains',
    body: 'The manager still spawns and destroys bullet GameObjects. The GC pressure from lifecycle churn persists. Only ECS (via entity creation/destruction) fully escapes this pattern.',
  },
];

export default function UpdateStrategiesVariantCPage() {
  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Variant C — Central Manager | Update Strategies at Scale"
        description="Deep dive into Scene C: a single manager MonoBehaviour replaces 10,000 per-object Updates. Script cost drops from 8.62 ms to 4.34 ms, but Transform iteration remains the bottleneck."
        url="https://jamesderaja.com/case-studies/update-strategies-scale/variant-c"
        keywords="Unity central manager, MonoBehaviour optimization, Transform iteration, Unity performance, update pattern"
        type="article"
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back nav */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to={PARENT} className="hover:text-neon transition-colors">
            Update Strategies at Scale
          </Link>
          <span>/</span>
          <span className="text-slate-300">Variant C</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/[0.06]">
              <span className="font-mono text-xl font-bold text-amber-400">C</span>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-400/70">Variant C</p>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Central Manager</h1>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            The intelligent middle ground. A single C_Manager MonoBehaviour iterates all 10,000 enemies in one Update
            call — eliminating per-object dispatch overhead entirely. Script cost drops by ~50% vs Scene B,
            but <span className="font-medium text-white">Transform-based memory access</span> remains the hard ceiling.
          </p>

          <div className="flex flex-wrap gap-2">
            {['1 Manager Update', '~4.3 ms Script Cost', 'No Per-Object Callbacks', 'Transform Bottleneck', 'Intermediate Optimization'].map((chip) => (
              <span key={chip} className="rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1 text-xs font-medium text-amber-300">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Purpose */}
        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-white">Study Purpose</h2>
          <div className="page-card-accent rounded-2xl border-2 border-amber-500/20 bg-amber-500/[0.05] p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene C answers:{' '}
              <span className="font-medium text-white">how much of Scene B's cost was dispatch, vs. actual data work?</span>{' '}
              By replacing all per-object Updates with a single manager loop, per-callback overhead is removed.
              Whatever cost remains must come from the actual simulation work — primarily Transform reads and writes —
              which is the ceiling that Scene D's ECS architecture solves.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Remove per-object MonoBehaviour dispatch',
                'Centralize enemy and bullet simulation',
                'Prove dispatch overhead is separable from data cost',
                'Identify Transform iteration as remaining bottleneck',
                'Measure practical gain from the manager pattern',
                'Establish the ceiling before ECS is needed',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/50" />
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
            Scene C (Scene_C_CentralManager) keeps the same visual scene as A and B. The enemy and bullet
            prefabs no longer have Update() methods. A single C_Manager component runs the entire simulation.
          </p>

          {/* Manager responsibilities */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">Manager Responsibilities</p>
            {systems.map((s) => (
              <div key={s.name} className="flex items-start gap-3 page-card-sm rounded-xl px-4 py-3">
                <span className="mt-0.5 font-mono text-xs font-bold text-amber-400/70">›</span>
                <div>
                  <p className="text-sm font-medium text-white">{s.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Data shape */}
          <div className="mt-4 rounded-2xl border border-amber-500/15 bg-amber-500/[0.04] p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Manager Data Structures</p>
            <div className="space-y-2">
              {dataStructures.map((ds) => (
                <div key={ds.name} className="flex items-start gap-3">
                  <code className="flex-shrink-0 font-mono text-[10px] text-amber-400/80 bg-amber-500/[0.08] px-2 py-0.5 rounded mt-0.5">
                    {ds.name.split(' ')[0]}
                  </code>
                  <div>
                    <p className="font-mono text-xs text-amber-300">{ds.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{ds.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="page-card rounded-2xl p-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">Why it still has a ceiling</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Even though iteration is centralized, the manager must call{' '}
              <code className="font-mono text-amber-400/80">transform.position = ...</code> for each of 10,000 enemies
              every frame. Unity's Transform component is not stored in contiguous memory — each access follows a
              pointer to a separate object. This scattered memory access pattern prevents CPU cache efficiency and
              is the fundamental limit of any GameObject-based simulation at this scale.
            </p>
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
                  className="block overflow-hidden page-card-sm rounded-lg bg-black/40 transition"
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full object-cover" />
                </a>
                <p className="text-xs text-slate-400 leading-relaxed">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* B vs C comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Scene B → Scene C Comparison</h2>
          <div className="overflow-x-auto page-card rounded-2xl">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Metric</th>
                  <th className="px-4 py-3 text-red-400">B (Per-Object)</th>
                  <th className="px-4 py-3 text-amber-400">C (Manager)</th>
                  <th className="px-4 py-3">Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-2.5 text-xs text-slate-400">{row.label}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-red-400">{row.b}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-amber-400">{row.c}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-300">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What C teaches */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">What Scene C Teaches</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {teaches.map((item) => (
              <motion.div
                key={item.id}
                className="page-card rounded-2xl p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="font-mono text-xs font-bold text-amber-400/60">{item.id}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interpretation */}
        <section className="mt-8">
          <div className="page-card-accent rounded-2xl border-2 border-amber-500/20 bg-amber-500/[0.05] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-amber-400/60 mb-3">Interpretation</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene C proves that the manager pattern is a real and practical optimization — it halves script cost
              and is achievable without adopting new tech. But it also proves that{' '}
              <span className="text-white font-medium">callback removal is not the full solution</span>.
              The remaining ~4.34 ms is the cost of iterating and writing 10,000 non-contiguous Transforms.
              That access pattern is a property of the GameObject model. Scene D removes it entirely
              by moving to contiguous ECS component data.
            </p>
          </div>
        </section>

        {/* Variant navigation */}
        <nav className="mt-10 flex items-center justify-between gap-4">
          <Link
            to={`${PARENT}/variant-b`}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500/40"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Variant B — Per-Object
          </Link>
          <Link
            to={`${PARENT}/variant-d`}
            className="flex items-center gap-2 rounded-xl border border-neon/20 bg-neon/[0.06] px-4 py-2.5 text-sm font-medium text-neon transition hover:border-neon/40"
          >
            Variant D — ECS
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </main>
    </div>
  );
}
