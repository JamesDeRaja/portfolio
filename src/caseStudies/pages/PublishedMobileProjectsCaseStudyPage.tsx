import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SmartLink from '../../components/SmartLink';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

const card = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
  className: 'rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8',
};

export default function PublishedMobileProjectsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-neon/[0.03] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/[0.03] blur-[130px]" />
      </div>

      <Seo
        title="Sneaky Warrior 3D Case Study — James De Raja"
        description="Mobile performance case study covering frame budget stabilization for Sneaky Warrior 3D under heavy AI, ragdoll, and projectile load."
        canonicalPath="https://james.alphaden.club/case-studies/published-mobile-projects"
        ogType="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Sneaky Warrior 3D Frame Budget Stabilization',
          description:
            'Mobile performance case study covering frame budget stabilization for Sneaky Warrior 3D under heavy AI, ragdoll, and projectile load.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHero
          backHref="/"
          backLabel="Back to Portfolio"
          category="Case Study"
          title="Sneaky Warrior 3D — Frame Budget Stabilization"
          subtitle="Frame Budget Stability Across Device Tiers"
          description="Production mobile performance work focused on stable frame pacing under heavy runtime load: 100+ animated enemies, ragdolls, active navigation, and high projectile throughput. Target: consistent 16 ms pacing across device tiers including tile-based GPUs."
          chips={['iOS / Android', '60 FPS shipped', 'Mobile GPU', 'GC Discipline', 'LOD Optimisation']}
          metric="45 → 60+ FPS"
          metricLabel="frame recovery under peak combat load"
        />

        <div className="mt-8 space-y-4">

          {/* Problem / Context */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Problem / Context</p>
            <h2 className="text-lg font-bold text-white mb-4">Peak-Load Combat Risks</h2>

            <h3 className="text-sm font-semibold text-white/90 mb-2">At peak moments, combat scenes could include:</h3>
            <ul className="space-y-2">
              {[
                '100+ complex enemy skinned mesh renderers active concurrently',
                'Full city environment with active NavMesh agents',
                'Ragdoll activation on death events',
                'Thousands of pooled projectiles during bursts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white/90 mb-2 mt-5">Primary risks:</h3>
            <ul className="space-y-2">
              {[
                'CPU overload from skinning/animation updates and render submission',
                'GPU fill/tile pressure from poor occlusion behavior and large bounds',
                'Frame-time variance (stutter) during burst moments (ragdolls + projectiles)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white/90 mb-2 mt-5">Goal:</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Keep frame time within budget by reducing per-frame work, preserving culling effectiveness, and eliminating
              off-screen animation cost.
            </p>
          </motion.div>

          {/* Engineering Approach */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Engineering Approach</p>
            <h2 className="text-lg font-bold text-white mb-4">Four-Part Optimisation Strategy</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-neon/10 border border-neon/20 w-6 h-6 flex items-center justify-center font-mono text-xs text-neon">1</span>
                  <p className="text-sm font-semibold text-white">Dynamic Skinned-Mesh Chunking</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enemies were combined into runtime-calculated chunks sized by density (5 / 10 / 25 / 25 / 50). This reduced
                  renderer/submission pressure while avoiding over-large combined bounds that break culling and increase overdraw.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-neon/10 border border-neon/20 w-6 h-6 flex items-center justify-center font-mono text-xs text-neon">2</span>
                  <p className="text-sm font-semibold text-white">Spatially Coherent Grouping</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Chunk membership was based on spatial proximity so occlusion and frustum culling remained effective. Critical on
                  tile-based mobile GPUs where large visible bounds can force unnecessary tile memory writes even when most of the
                  chunk is actually hidden.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-neon/10 border border-neon/20 w-6 h-6 flex items-center justify-center font-mono text-xs text-neon">3</span>
                  <p className="text-sm font-semibold text-white">Visibility-Driven Animation Suppression</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Combining meshes can keep a chunk's bounds intersecting the frustum even when most members are off-screen.
                  Animation updates were explicitly disabled for enemies not contributing to the current view, even if the parent
                  chunk remained technically visible.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-neon/10 border border-neon/20 w-6 h-6 flex items-center justify-center font-mono text-xs text-neon">4</span>
                  <p className="text-sm font-semibold text-white">Burst Stability Validation</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ragdoll activation and projectile bursts were treated as stutter sources. These moments were profiled explicitly
                  to ensure frame pacing stayed stable during the burst itself, not just in steady-state.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Measured Results */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Measured Results</p>
            <h2 className="text-lg font-bold text-white mb-4">Stability Improvements Under Peak Gameplay</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Results reported as stability improvements under representative peak gameplay:
            </p>
            <ul className="space-y-2">
              {[
                'Reduced CPU pressure by lowering render submission overhead and suppressing off-screen animation work.',
                'Improved culling/occlusion effectiveness by keeping combined bounds spatially tight.',
                'Reduced GPU waste (fill/tile pressure) by preventing large-bounds visibility from forcing unnecessary work.',
                'Maintained smooth pacing during ragdoll + projectile burst moments, reducing visible stutter.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Evidence */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Evidence</p>
            <h2 className="text-lg font-bold text-white mb-4">Profiler Capture Methodology</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Evidence was collected using repeatable capture scenarios:
            </p>
            <ul className="space-y-2">
              {[
                'Unity Profiler captures focusing on main thread cost (animation/skin updates, burst spikes) and render submission behavior.',
                'Camera-angle validation passes to confirm chunk bounds improved occlusion/culling effectiveness.',
                'Before/after capture bundles comparing spike signatures during dense combat and burst events.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mitigation Strategy */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Mitigation Strategy</p>
            <h2 className="text-lg font-bold text-white mb-4">Device-Tier Playbook</h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">GPU-bound (fill / overdraw / tile pressure)</h3>
                <ul className="space-y-2">
                  {[
                    'Keep bounds tight via spatial grouping so occlusion can actually cull work.',
                    "Avoid 'giant bounds' that remain visible and force tile writes.",
                    'Reduce overdraw sources during peak combat camera angles.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">CPU-bound (animation / submission / spikes)</h3>
                <ul className="space-y-2">
                  {[
                    'Batch skinned meshes to reduce renderer overhead without destroying culling.',
                    'Gate animation/skin updates per enemy when not visible, even under combined bounds.',
                    'Treat ragdoll/projectile bursts as spike events and validate pacing under burst.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">Variance-bound (stutter / cadence)</h3>
                <ul className="space-y-2">
                  {[
                    'Optimize for spike frequency and worst-case cadence, not average FPS.',
                    'Validate across representative scenes and camera paths, not a single lane.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Links</p>
            <h2 className="text-lg font-bold text-white mb-4">App Store</h2>
            <SmartLink
              href="https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884"
              className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 hover:border-emerald-400/20 hover:bg-emerald-400/[0.03] transition-all group"
            >
              <div className="flex items-center gap-3">
                <ExternalLink size={16} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Sneaky Warrior 3D — App Store</span>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </SmartLink>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
