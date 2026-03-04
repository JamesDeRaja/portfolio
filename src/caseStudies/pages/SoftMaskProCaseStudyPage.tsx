import { Link } from 'react-router-dom';
import SmartLink from '../../components/SmartLink';
import { Seo } from '../../components/Seo';

export default function SoftMaskProCaseStudyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Seo
        title="SoftMaskPro Optimization Case Study — James De Raja"
        description="SoftMaskPro profiling and patching case study focused on UI mask draw calls, render pass overhead, and frame-time stabilization in Unity."
        url="https://james.alphaden.club/case-studies/softmaskpro"
        keywords="SoftMaskPro, Unity UI optimization, draw calls, frame timing, profiling"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'SoftMaskPro Optimization Case Study',
          description:
            'SoftMaskPro profiling and patching case study focused on UI mask draw calls, render pass overhead, and frame-time stabilization in Unity.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <div style={{ marginBottom: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>

      <h1 className="text-3xl font-semibold text-slate-900">SoftMaskPro (Unity UI Rendering Tooling)</h1>
      <p className="mt-2 text-sm uppercase tracking-[0.08em] text-slate-500">UI Masking Cost Predictability</p>
      <p className="mt-4 text-slate-700">
        UI masking is often treated as a UI problem, but its cost is rendering-adjacent: it can amplify fill-rate,
        introduce extra passes, and increase redraw frequency. This case study documents measured scaling behavior and
        the patch strategy used to stabilize steady-state UI performance.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Setup</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Fixed resolution: 1920×1080</li>
          <li>UI masking tested under increasing composition complexity</li>
          <li>Main tools: Unity Profiler (CPU Timeline), Frame Debugger, and on-screen stats overlay</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Measured Scenarios</h2>

        <h3 className="text-lg font-semibold text-slate-900">Scenario A — 1 masked object (control)</h3>
        <p className="text-slate-700">
          Single masked element is cheap; Frame Debugger shows 1 Draw Mesh and profiler time is mostly
          Gfx.WaitForPresentOnGfxThread, so CPU-side UI rebuild work is not the limiter in this baseline.
        </p>
        <p className="text-slate-700">Scenario A profiler capture (wait-dominant baseline).</p>
        <img src="/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png" alt="Scenario A profiler showing wait for present" loading="lazy" />
        <p className="text-slate-700">Scenario A stats overlay at fixed resolution.</p>
        <img src="/lab/SoftMaskPro_ScenarioA_StatsOverlay_FixedRes.png" alt="Scenario A stats overlay at 1920 by 1080" loading="lazy" />
        <p className="text-slate-700">Scenario A frame debugger with 1 Draw Mesh.</p>
        <img src="/lab/SoftMaskPro_ScenarioA_FrameDebugger_1DrawMesh.png" alt="Scenario A frame debugger showing one draw mesh" loading="lazy" />

        <h3 className="text-lg font-semibold text-slate-900">Scenario B — 1 mask + 2 masked objects</h3>
        <p className="text-slate-700">
          Masking cost scales with masked draw items, not just mask count. Frame Debugger shows 3 Draw Mesh total (1
          mask + 2 masked objects), matching expected pass multiplication.
        </p>
        <p className="text-slate-700">Scenario B profiler capture.</p>
        <img src="/lab/SoftMaskPro_ScenarioB_Profiler.png" alt="Scenario B profiler capture" loading="lazy" />
        <p className="text-slate-700">Scenario B stats overlay.</p>
        <img src="/lab/SoftMaskPro_ScenarioB_StatsOverlay.png" alt="Scenario B stats overlay" loading="lazy" />

        <h3 className="text-lg font-semibold text-slate-900">
          Scenario C — 13 masked objects (each object is parent mask + child pair)
        </h3>
        <p className="text-slate-700">
          Per-mask RT allocation and per-mask overlay pass expansion creates predictable scaling cost: RT count and draw
          count grow with mask count. Observed values: Materials 13, RT 13, BufferRendering 13, and roughly 40 Draw
          Mesh under Canvas.RenderOverlays.
        </p>
        <p className="text-slate-700">Scenario C profiler capture under high mask count.</p>
        <img src="/lab/SoftMaskPro_ScenarioC_Profiler.png" alt="Scenario C profiler capture" loading="lazy" />
        <p className="text-slate-700">Scenario C stats overlay showing 13 materials, RT, and buffer rendering counts.</p>
        <img src="/lab/SoftMaskPro_ScenarioC_StatsOverlay_13Masks.png" alt="Scenario C stats overlay with thirteen masks" loading="lazy" />
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Render/Pass Evidence (Frame Debugger)</h2>
        <p className="text-slate-700">
          Frame Debugger captures confirm pass expansion: 1 Draw Mesh in Scenario A, 3 Draw Mesh in Scenario B, and
          approximately 40 Draw Mesh in Scenario C under Canvas.RenderOverlays.
        </p>
        <p className="text-slate-700">Scenario B frame debugger showing 3 Draw Mesh entries.</p>
        <img src="/lab/SoftMaskPro_ScenarioB_FrameDebugger_3DrawMesh.png" alt="Scenario B frame debugger showing three draw mesh entries" loading="lazy" />
        <p className="text-slate-700">Scenario C frame debugger showing around 40 Draw Mesh entries.</p>
        <img src="/lab/SoftMaskPro_ScenarioC_FrameDebugger_40DrawMesh.png" alt="Scenario C frame debugger showing around forty draw mesh entries" loading="lazy" />
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Dirty Trigger Diagnosis</h2>
        <p className="text-slate-700">
          Root cause for continuous redraw was DirtyVerticesCallback, indicating repeated SetVerticesDirty flow through
          the SoftMask dirty chain. This diagnosis separates dirty-source issues from GPU-only hypotheses.
        </p>
        <p className="text-slate-700">Patch 3: QueuePlayerLoopUpdate gating to avoid forced rebuild cadence when nothing changed.</p>
        <img src="/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png" alt="Patch 3 gate on QueuePlayerLoopUpdate" loading="lazy" />
        <p className="text-slate-700">Dirty log capture confirming DirtyVerticesCallback trigger source.</p>
        <img src="/lab/SoftMaskPro_DirtyLog_DirtyVerticesCallback.png" alt="Dirty log showing dirty vertices callback reason" loading="lazy" />
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Result + Operating Constraints</h2>
        <p className="text-slate-700">
          After gating rebuild cadence and stopping continuous dirty triggers, steady-state frames show minimal UI
          rebuild work; remaining spikes are intermittent rather than constant.
        </p>
        <p className="text-slate-700">After-patch profiler (good steady-state case).</p>
        <img src="/lab/SoftMaskPro_AfterPatch_Profiler_GoodCase.png" alt="After patch profiler good case" loading="lazy" />
        <p className="text-slate-700">After-patch profiler (worst captured case for transparency).</p>
        <img src="/lab/SoftMaskPro_AfterPatch_Profiler_WorstCase.png" alt="After patch profiler worst case" loading="lazy" />
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Avoid many independent SoftMask instances in the same view.</li>
          <li>Prefer one mask controlling multiple children when composition allows it.</li>
          <li>Avoid deep stacks of large masked transparent quads (fill-rate multiplier).</li>
          <li>Treat masked UI as GPU-budgeted work, not free UI.</li>
          <li>
            Constrain redraw triggers: avoid unnecessary mask geometry animation, avoid per-frame SetVerticesDirty, and
            gate QueuePlayerLoopUpdate to resolution/view changes.
          </li>
        </ul>
      </section>


      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Links</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <SmartLink href="https://github.com/JamesDeRaja/SoftMaskPro-Performance-Study" className="hover:text-cyan-700 hover:underline">
              Repository
            </SmartLink>
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Measurement Checklist</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Disable debug logs (or heavily throttle) before capture.</li>
          <li>Measure in Standalone Player as well as Editor.</li>
          <li>Record mask count, RT count, and DrawMesh count under Canvas overlay.</li>
          <li>Confirm whether dirty triggers occur during steady-state frames.</li>
        </ul>
      </section>
    </main>
  );
}
