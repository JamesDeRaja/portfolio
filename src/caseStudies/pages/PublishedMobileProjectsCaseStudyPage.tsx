import { Link } from 'react-router-dom';

export default function PublishedMobileProjectsCaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div style={{ marginBottom: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">Sneaky Warrior 3D — Frame Budget Stabilization on Mobile</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">FRAME BUDGET STABILITY ACROSS DEVICE TIERS</p>
      <p className="mt-4 text-slate-700">
        This case study summarizes production performance work on Sneaky Warrior 3D focused on frame-time stability
        under heavy runtime load: 100+ animated enemies, ragdolls, active navigation, and high projectile throughput.
        The objective was stable pacing across device tiers (tile-based GPUs included), not peak FPS.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Problem / Context</h2>
        <p className="text-slate-700">Combat moments could exceed typical mobile scene complexity:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>100+ complex enemy skinned meshes active concurrently</li>
          <li>Full city environment with navigation running</li>
          <li>Ragdoll activation on death events</li>
          <li>Thousands of pooled projectiles in-flight during bursts</li>
        </ul>
        <p className="text-slate-700">
          The core risk was variance: builds that look fine on a desk test but fail under real player density spikes,
          camera angles, and thermal/device-tier constraints. The goal was to protect the 16ms frame-time target by
          reducing submission pressure, minimizing tile-memory waste, and eliminating CPU-side animation work that
          provided no on-screen value.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Engineering Approach</h2>
        <p className="text-slate-700">1) Dynamic skinned-mesh chunking (runtime batching)</p>
        <p className="text-slate-700">
          Enemies were grouped into dynamically sized chunks (5 / 10 / 25 / 25 / 50) based on scene density. This
          reduced renderer overhead while avoiding the failure mode of over-large batches (poor culling, increased
          overdraw, and large bounds).
        </p>
        <p className="text-slate-700">2) Spatially coherent grouping (occlusion-aware)</p>
        <p className="text-slate-700">
          Chunks were constructed from spatially close enemies so that occlusion/culling remained effective. On
          tile-based mobile GPUs, large bounding volumes can force unnecessary tile writes. Spatial coherence improved
          cull effectiveness and reduced fill pressure during dense camera angles.
        </p>
        <p className="text-slate-700">3) Visibility-driven animation suppression</p>
        <p className="text-slate-700">
          Combined meshes can keep a chunk’s bounding box intersecting the camera frustum even when many enemies
          inside the chunk are off-screen. To avoid wasted CPU skinning/bone updates, animation updates were explicitly
          stopped for enemies not contributing to the current view, even when their parent chunk remained technically
          visible.
        </p>
        <p className="text-slate-700">4) Spike containment during bursts</p>
        <p className="text-slate-700">
          Ragdoll activation and projectile bursts were treated as spike sources. Systems were validated under
          representative ‘worst moments’ to ensure frame-time cadence did not collapse during combat peaks.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measured Results</h2>
        <p className="text-slate-700">
          Outcomes were evaluated as frame-time stability under representative combat moments rather than a single
          best-case FPS value:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Reduced render submission pressure by batching skinned meshes into density-appropriate chunks.</li>
          <li>Improved culling/occlusion effectiveness by keeping chunk bounds tight and spatially coherent.</li>
          <li>Removed wasted CPU skinning work by gating animation updates when enemies were off-screen.</li>
          <li>
            Maintained smooth frame pacing even during ragdoll + projectile burst events, keeping gameplay free of
            visible stutter on mobile GPU targets.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Evidence</h2>
        <p className="text-slate-700">Evidence was gathered through repeatable capture comparisons around dense combat scenarios:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Unity Profiler captures focused on main thread timing, animation/skin update cost, and spike signatures.</li>
          <li>
            Render/culling validation using representative camera angles to confirm chunk bounds improved occlusion
            behavior.
          </li>
          <li>
            Before/after comparisons for: submission behavior, animation update workload, and burst stability (ragdoll
            + projectiles).
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Mitigation Strategy</h2>
        <p className="text-slate-700">Device-tier playbook used during tuning:</p>
        <p className="text-slate-700">GPU-bound (fill / overdraw / tile pressure)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Keep batch bounds tight; enforce spatial grouping so occlusion can actually work.</li>
          <li>Avoid ‘giant bounds’ that force unnecessary tile writes.</li>
          <li>Reduce alpha/overdraw sources during peak combat camera angles.</li>
        </ul>
        <p className="text-slate-700">CPU-bound (animation / submission / spikes)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Batch skinned meshes to reduce renderer overhead without destroying culling.</li>
          <li>Explicitly gate animation/skin updates for enemies not contributing to the view.</li>
          <li>Treat ragdoll and projectile bursts as spike events; validate stability during the burst, not outside it.</li>
        </ul>
        <p className="text-slate-700">Variance-bound (stutter / cadence)</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Focus on frame pacing and spike frequency reduction, not average FPS.</li>
          <li>Validate across representative scenes and camera angles, not a single test lane.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <a
              href="https://apps.apple.com/us/app/sneaky-warriour-3d/id1626719884"
              className="hover:text-cyan-700 hover:underline"
            >
              App Store
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
