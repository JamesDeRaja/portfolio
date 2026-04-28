import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Seo } from '../../components/Seo';

const BASE = '/case-studies/update-strategies';
const PARENT = '/case-studies/update-strategies-scale';

const screenshots = [
  {
    label: 'HUD',
    src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_HUD.png`,
    alt: 'Scene B runtime HUD — 10,000 enemies, ~1,600 bullets, frame time ~40 ms',
    caption:
      'HUD confirms the same load as Scene A: 10,000 enemies, ~1,600 bullets alive, fire rate at 1.00. Frame time has climbed to ~40 ms — nearly double Scene A — with no change to the visible scene.',
  },
  {
    label: 'CPU Timeline',
    src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_ProfilerTimeline.png`,
    alt: 'Scene B Unity Profiler CPU timeline — BehaviourUpdate dominates main thread',
    caption:
      'Timeline shows BehaviourUpdate now takes a significant portion of main thread time. The scripting block is clearly visible as a large consecutive segment — not render, not physics, but script dispatch.',
  },
  {
    label: 'CPU Hierarchy',
    src: `${BASE}/B/B_PerObjectUpdate_10000_HighFire_ProfilerHierarchy.png`,
    alt: 'Scene B Unity Profiler CPU hierarchy — ScriptRunBehaviourUpdate ~8.62 ms, 10,000 calls',
    caption:
      'Hierarchy shows ScriptRunBehaviourUpdate at ~8.62 ms with 10,000 calls under B_Enemy.Update (~3.32 ms) and ~1,600 under B_Bullet.Update (~1.17 ms). GC allocation rises to ~33 KB.',
  },
];

const setupItems = [
  { label: 'Scene base', detail: 'Identical to Scene A — same player, camera, HUD, ground, bullet shooter' },
  { label: 'B_Enemy.cs', detail: 'MonoBehaviour with Update(). Called 10,000 times per frame. Logic is intentionally minimal.' },
  { label: 'B_Bullet.cs', detail: 'MonoBehaviour with Update(). Called once per live bullet (~1,300–1,600 per frame).' },
  { label: 'Enemy grid spawner', detail: 'Same deterministic grid as A — positions are identical, prefab is different' },
  { label: 'Bullet prefab', detail: 'Same yellow sphere, now with B_Bullet.Update() for movement and lifetime' },
];

const profilerBreakdown = [
  { name: 'ScriptRunBehaviourUpdate', value: '~8.62 ms', calls: '—', note: 'Total engine Update dispatch budget' },
  { name: 'B_Enemy.Update()', value: '~3.32 ms', calls: '10,000', note: 'Per-enemy update — minimal logic, maximum calls' },
  { name: 'B_Bullet.Update()', value: '~1.17 ms', calls: '~1,600', note: 'Per-bullet update — movement + lifetime check' },
  { name: 'GC Alloc', value: '~33 KB', calls: '—', note: 'Up from ~19 KB in Scene A' },
  { name: 'Frame Time', value: '~40 ms', calls: '—', note: 'vs. ~22–30 ms in Scene A' },
];

const teaches = [
  {
    id: '01',
    title: 'Update dispatch scales linearly with object count',
    body: 'Each MonoBehaviour.Update() adds an engine-to-script dispatch. At 10,000 enemies, this costs ~3.32 ms — not because the logic is heavy, but because the engine must call each object individually every frame.',
  },
  {
    id: '02',
    title: 'Overhead is not logic cost — it is dispatch cost',
    body: "B_Enemy.Update() does minimal work by design. The ~8.62 ms ScriptRunBehaviourUpdate includes the engine's per-object call overhead, function dispatch, and cache-unfriendly access patterns — not expensive logic.",
  },
  {
    id: '03',
    title: 'This is the most common Unity anti-pattern at scale',
    body: 'Per-object Update is the default Unity pattern. For small entity counts it is fine. At 10,000 objects it becomes the dominant frame cost. This is the mistake that C and D exist to solve.',
  },
  {
    id: '04',
    title: 'Even bullets contribute significantly',
    body: '~1,600 bullet Updates add ~1.17 ms. Bullets represent only ~16% of entity count but contribute ~13% of script cost. Combined with enemy dispatch, B is fully script-bound.',
  },
];

export default function UpdateStrategiesVariantBPage() {
  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Variant B — Per-Object Update | Update Strategies at Scale"
        description="Deep dive into Scene B: 10,000 MonoBehaviour Update calls, 8.62 ms ScriptRunBehaviourUpdate, and why per-object update does not scale in Unity."
        url="https://james.alphaden.club/case-studies/update-strategies-scale/variant-b"
        keywords="MonoBehaviour Update, ScriptRunBehaviourUpdate, Unity performance, 10000 entities, update dispatch overhead"
        type="article"
      />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back nav */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to={PARENT} className="hover:text-neon transition-colors">
            Update Strategies at Scale
          </Link>
          <span>/</span>
          <span className="text-slate-300">Variant B</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.06]">
              <span className="font-mono text-xl font-bold text-red-400">B</span>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red-400/70">Variant B</p>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Per-Object Update</h1>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            The worst-case architecture. Every one of the 10,000 enemies runs its own MonoBehaviour Update()
            every frame. The logic inside is deliberately minimal — the measured cost is{' '}
            <span className="font-medium text-white">pure dispatch overhead</span>, not computation.
            Frame time jumps to ~40 ms.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Worst-Case Pattern', '10,000 Update Calls', 'Dispatch Overhead', '~8.6 ms Script Cost', 'Classic Anti-Pattern'].map((chip) => (
              <span key={chip} className="rounded-full border border-red-500/20 bg-red-500/[0.06] px-3 py-1 text-xs font-medium text-red-300">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Purpose */}
        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-semibold text-white">Study Purpose</h2>
          <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-5">
            <p className="text-sm text-slate-300 leading-relaxed">
              Scene B isolates the cost of{' '}
              <span className="font-medium text-white">per-object MonoBehaviour Update dispatch</span> at scale.
              By keeping all other variables identical to Scene A and adding only B_Enemy.Update() and B_Bullet.Update(),
              any frame time increase is directly attributable to those Update calls. The result is the benchmark
              for "bad scaling" that C and D are measured against.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Isolate MonoBehaviour dispatch cost',
                'Prove Update does not scale linearly with logic',
                'Establish "worst case" frame time for this workload',
                'Show cost breakdown per Update method',
                'Demonstrate GC increase from added lifecycle churn',
                'Create the baseline for C and D comparisons',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400/50" />
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
            Scene B (Scene_B_PerObjectUpdate) is architecturally identical to A except both the enemy and
            bullet prefabs now carry their own Update() scripts. The grid, player, camera, HUD, and
            fire rate are unchanged.
          </p>
          <div className="space-y-2">
            {setupItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3">
                <span className="mt-0.5 font-mono text-xs font-bold text-red-400/70">›</span>
                <div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enemy vs Bullet */}
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">B_Enemy — Update Logic</p>
              <div className="space-y-2">
                {[
                  'Runs every frame — 10,000 calls',
                  'Intentionally minimal logic',
                  'Dispatched individually by Unity engine',
                  'Non-contiguous memory access pattern',
                  'Full MonoBehaviour lifecycle overhead',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-red-400/40" />
                    <span className="text-xs text-slate-400">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">B_Bullet — Update Logic</p>
              <div className="space-y-2">
                {[
                  'Runs every frame — ~1,300–1,600 calls',
                  'Handles movement via transform.Translate',
                  'Checks lifetime timer, destroys on expiry',
                  'Same Instantiate/Destroy churn as Scene A',
                  'Adds bullet-side dispatch overhead',
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400/40" />
                    <span className="text-xs text-slate-400">{line}</span>
                  </div>
                ))}
              </div>
            </div>
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
                  className="block overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-red-500/30"
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full object-cover" />
                </a>
                <p className="text-xs text-slate-400 leading-relaxed">{shot.caption}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Profiler Breakdown Table */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Profiler Breakdown</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Function</th>
                  <th className="px-4 py-3">Cost</th>
                  <th className="px-4 py-3">Calls</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {profilerBreakdown.map((row) => (
                  <tr key={row.name} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-red-400">{row.name}</td>
                    <td className="px-4 py-2.5 font-mono text-sm font-semibold text-white">{row.value}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-400">{row.calls}</td>
                    <td className="px-4 py-2.5 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What B teaches */}
        <section className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">What Scene B Teaches</h2>
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
                  <span className="font-mono text-xs font-bold text-red-400/60">{item.id}</span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key callout */}
        <section className="mt-8">
          <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.04] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-red-400/60 mb-3">Core Finding</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              The logic inside B_Enemy.Update() is{' '}
              <span className="text-white font-medium">intentionally trivial</span>. The ~8.62 ms of ScriptRunBehaviourUpdate
              is not the cost of what the code <em className="not-italic">does</em> — it is the cost of the engine
              calling 10,000 separate functions every frame. This is the proof that per-object Update is an
              execution model problem, not a logic problem. Scene C addresses this directly.
            </p>
          </div>
        </section>

        {/* Variant navigation */}
        <nav className="mt-10 flex items-center justify-between gap-4">
          <Link
            to={`${PARENT}/variant-a`}
            className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2.5 text-sm font-medium text-emerald-400 transition hover:border-emerald-500/40"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Variant A — Lifecycle
          </Link>
          <Link
            to={`${PARENT}/variant-c`}
            className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-2.5 text-sm font-medium text-amber-400 transition hover:border-amber-500/40"
          >
            Variant C — Central Manager
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </main>
    </div>
  );
}
