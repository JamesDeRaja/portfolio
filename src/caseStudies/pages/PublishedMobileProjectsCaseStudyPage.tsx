import SmartLink from '../../components/SmartLink';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function PublishedMobileProjectsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="Sneaky Warrior 3D Case Study — James De Raja"
        description="Mobile performance case study covering frame budget stabilization for Sneaky Warrior 3D under heavy AI, ragdoll, and projectile load."
        url="https://jamesderaja.com/case-studies/published-mobile-projects"
        keywords="mobile performance, Unity optimization, frame budget, Sneaky Warrior 3D, frame pacing"
        type="article"
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

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Problem / Context</h2>
        <p className="text-slate-300">At peak moments, combat scenes could include:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>100+ complex enemy skinned mesh renderers active concurrently</li>
          <li>Full city environment with active NavMesh agents</li>
          <li>Ragdoll activation on death events</li>
          <li>Thousands of pooled projectiles during bursts</li>
        </ul>
        <p className="text-slate-300">Primary risks:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>CPU overload from skinning/animation updates and render submission</li>
          <li>GPU fill/tile pressure from poor occlusion behavior and large bounds</li>
          <li>Frame-time variance (stutter) during burst moments (ragdolls + projectiles)</li>
        </ul>
        <p className="text-slate-300">Goal:</p>
        <p className="text-slate-300">
          Keep frame time within budget by reducing per-frame work, preserving culling effectiveness, and eliminating
          off-screen animation cost.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Engineering Approach</h2>
        <p className="text-slate-300">1) Dynamic skinned-mesh chunking</p>
        <p className="text-slate-300">
          Enemies were combined into runtime-calculated chunks sized by density (5 / 10 / 25 / 25 / 50). This reduced
          renderer/submission pressure while avoiding over-large combined bounds that break culling and increase
          overdraw.
        </p>
        <p className="text-slate-300">2) Spatially coherent grouping (occlusion-aware)</p>
        <p className="text-slate-300">
          Chunk membership was based on spatial proximity so occlusion and frustum culling remained effective. This is
          critical on tile-based mobile GPUs where large visible bounds can force unnecessary tile memory writes even
          when most of the chunk is actually hidden.
        </p>
        <p className="text-slate-300">3) Visibility-driven animation suppression (combined-bounds edge case)</p>
        <p className="text-slate-300">
          Combining meshes can keep a chunk's bounds intersecting the camera frustum even when most members are
          off-screen. To prevent wasted CPU skinning/bone updates, animation updates were explicitly disabled for
          enemies not contributing to the current view, even if the parent chunk remained technically visible.
        </p>
        <p className="text-slate-300">4) Burst stability validation</p>
        <p className="text-slate-300">
          Ragdoll activation and projectile bursts were treated as stutter sources. These moments were profiled
          explicitly to ensure frame pacing stayed stable during the burst itself, not just in steady-state.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Measured Results</h2>
        <p className="text-slate-300">Results are reported as stability improvements under representative peak gameplay:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Reduced CPU pressure by lowering render submission overhead and suppressing off-screen animation work.</li>
          <li>Improved culling/occlusion effectiveness by keeping combined bounds spatially tight.</li>
          <li>Reduced GPU waste (fill/tile pressure) by preventing large-bounds visibility from forcing unnecessary work.</li>
          <li>Maintained smooth pacing during ragdoll + projectile burst moments, reducing visible stutter.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Evidence</h2>
        <p className="text-slate-300">Evidence was collected using repeatable capture scenarios:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            Unity Profiler captures focusing on main thread cost (animation/skin updates, burst spikes) and render
            submission behavior.
          </li>
          <li>Camera-angle validation passes to confirm chunk bounds improved occlusion/culling effectiveness.</li>
          <li>Before/after capture bundles comparing spike signatures during dense combat and burst events.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Mitigation Strategy</h2>
        <p className="text-slate-300">Device-tier playbook:</p>
        <p className="text-slate-300">GPU-bound (fill / overdraw / tile pressure)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Keep bounds tight via spatial grouping so occlusion can actually cull work.</li>
          <li>Avoid 'giant bounds' that remain visible and force tile writes.</li>
          <li>Reduce overdraw sources during peak combat camera angles.</li>
        </ul>
        <p className="text-slate-300">CPU-bound (animation / submission / spikes)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Batch skinned meshes to reduce renderer overhead without destroying culling.</li>
          <li>Gate animation/skin updates per enemy when not visible, even under combined bounds.</li>
          <li>Treat ragdoll/projectile bursts as spike events and validate pacing under burst.</li>
        </ul>
        <p className="text-slate-300">Variance-bound (stutter / cadence)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Optimize for spike frequency and worst-case cadence, not average FPS.</li>
          <li>Validate across representative scenes and camera paths, not a single lane.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-white">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <SmartLink
              href="https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884"
              className="hover:text-neon hover:underline"
            >
              App Store
            </SmartLink>
          </li>
        </ul>
      </section>
    </main>
    </div>
  );
}
