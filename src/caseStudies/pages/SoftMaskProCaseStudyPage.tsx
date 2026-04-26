import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

function SectionCard({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">{label}</p>
      <h2 className="text-lg font-bold text-white mb-4">{title}</h2>
      {children}
    </motion.div>
  );
}

function ScenarioCard({
  badge,
  heading,
  children,
}: {
  badge: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-neon/10 border border-neon/20 px-2.5 py-0.5 font-mono text-xs text-neon">
          {badge}
        </span>
        <span className="text-sm font-semibold text-white">{heading}</span>
      </div>
      {children}
    </motion.div>
  );
}

function CaptionedImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/[0.08]">
      <img src={src} alt={alt} loading="lazy" className="w-full" />
      <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-2 font-mono text-[11px] text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function SoftMaskProCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-neon/[0.03] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/[0.03] blur-[130px]" />
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Seo
          title="SoftMaskPro Optimization Case Study — James De Raja"
          description="SoftMaskPro profiling and patching case study focused on UI mask draw calls, render pass overhead, and frame-time stabilization in Unity."
          url="https://jamesderaja.com/case-studies/softmaskpro"
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
        <PageHero
          backHref="/"
          backLabel="Back to Portfolio"
          category="Case Study"
          title="SoftMaskPro — Unity UI Rendering Cost"
          subtitle="UI Masking Cost Predictability"
          description="UI masking is rendering-adjacent: it amplifies fill-rate, introduces extra passes, and increases redraw frequency. This case study documents measured scaling behaviour and the patch strategy used to stabilise steady-state UI performance."
          chips={['Unity URP', 'UI Rendering', 'Canvas Rebuild', 'Draw Calls', 'GPU Profiling']}
        />

        <div className="space-y-6 mt-6">
          {/* Setup */}
          <SectionCard label="Environment" title="Setup">
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">Fixed resolution: 1920×1080</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  UI masking tested under increasing composition complexity
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Main tools: Unity Profiler (CPU Timeline), Frame Debugger, and on-screen stats overlay
                </span>
              </li>
            </ul>
          </SectionCard>

          {/* Scenario A */}
          <ScenarioCard badge="Scenario A" heading="1 masked object (control)">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Single masked element is cheap; Frame Debugger shows 1 Draw Mesh and profiler time is mostly
              Gfx.WaitForPresentOnGfxThread, so CPU-side UI rebuild work is not the limiter in this baseline.
            </p>
            <div className="space-y-4">
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png"
                alt="Scenario A profiler showing wait for present"
                caption="Scenario A profiler capture (wait-dominant baseline)."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioA_StatsOverlay_FixedRes.png"
                alt="Scenario A stats overlay at 1920 by 1080"
                caption="Scenario A stats overlay at fixed resolution."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioA_FrameDebugger_1DrawMesh.png"
                alt="Scenario A frame debugger showing one draw mesh"
                caption="Scenario A frame debugger with 1 Draw Mesh."
              />
            </div>
          </ScenarioCard>

          {/* Scenario B */}
          <ScenarioCard badge="Scenario B" heading="1 mask + 2 masked objects">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Masking cost scales with masked draw items, not just mask count. Frame Debugger shows 3 Draw Mesh total
              (1 mask + 2 masked objects), matching expected pass multiplication.
            </p>
            <div className="space-y-4">
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioB_Profiler.png"
                alt="Scenario B profiler capture"
                caption="Scenario B profiler capture."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioB_StatsOverlay.png"
                alt="Scenario B stats overlay"
                caption="Scenario B stats overlay."
              />
            </div>
          </ScenarioCard>

          {/* Scenario C */}
          <ScenarioCard badge="Scenario C" heading="13 masked objects (each object is parent mask + child pair)">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Per-mask RT allocation and per-mask overlay pass expansion creates predictable scaling cost: RT count and
              draw count grow with mask count. Observed values: Materials 13, RT 13, BufferRendering 13, and roughly 40
              Draw Mesh under Canvas.RenderOverlays.
            </p>
            <div className="space-y-4">
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioC_Profiler.png"
                alt="Scenario C profiler capture"
                caption="Scenario C profiler capture under high mask count."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioC_StatsOverlay_13Masks.png"
                alt="Scenario C stats overlay with thirteen masks"
                caption="Scenario C stats overlay showing 13 materials, RT, and buffer rendering counts."
              />
            </div>
          </ScenarioCard>

          {/* Render/Pass Evidence */}
          <SectionCard label="Frame Debugger" title="Render / Pass Evidence">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Frame Debugger captures confirm pass expansion: 1 Draw Mesh in Scenario A, 3 Draw Mesh in Scenario B,
              and approximately 40 Draw Mesh in Scenario C under Canvas.RenderOverlays.
            </p>
            <div className="space-y-4">
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioB_FrameDebugger_3DrawMesh.png"
                alt="Scenario B frame debugger showing three draw mesh entries"
                caption="Scenario B frame debugger showing 3 Draw Mesh entries."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_ScenarioC_FrameDebugger_40DrawMesh.png"
                alt="Scenario C frame debugger showing around forty draw mesh entries"
                caption="Scenario C frame debugger showing around 40 Draw Mesh entries."
              />
            </div>
          </SectionCard>

          {/* Dirty Trigger Diagnosis */}
          <SectionCard label="Root Cause" title="Dirty Trigger Diagnosis">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Root cause for continuous redraw was DirtyVerticesCallback, indicating repeated SetVerticesDirty flow
              through the SoftMask dirty chain. This diagnosis separates dirty-source issues from GPU-only hypotheses.
            </p>
            <div className="space-y-4">
              <CaptionedImage
                src="/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png"
                alt="Patch 3 gate on QueuePlayerLoopUpdate"
                caption="Patch 3: QueuePlayerLoopUpdate gating to avoid forced rebuild cadence when nothing changed."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_DirtyLog_DirtyVerticesCallback.png"
                alt="Dirty log showing dirty vertices callback reason"
                caption="Dirty log capture confirming DirtyVerticesCallback trigger source."
              />
            </div>
          </SectionCard>

          {/* Result + Operating Constraints */}
          <SectionCard label="Outcome" title="Result + Operating Constraints">
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              After gating rebuild cadence and stopping continuous dirty triggers, steady-state frames show minimal UI
              rebuild work; remaining spikes are intermittent rather than constant.
            </p>
            <div className="space-y-4 mb-6">
              <CaptionedImage
                src="/lab/SoftMaskPro_AfterPatch_Profiler_GoodCase.png"
                alt="After patch profiler good case"
                caption="After-patch profiler (good steady-state case)."
              />
              <CaptionedImage
                src="/lab/SoftMaskPro_AfterPatch_Profiler_WorstCase.png"
                alt="After patch profiler worst case"
                caption="After-patch profiler (worst captured case for transparency)."
              />
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Avoid many independent SoftMask instances in the same view.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Prefer one mask controlling multiple children when composition allows it.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Avoid deep stacks of large masked transparent quads (fill-rate multiplier).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Treat masked UI as GPU-budgeted work, not free UI.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Constrain redraw triggers: avoid unnecessary mask geometry animation, avoid per-frame
                  SetVerticesDirty, and gate QueuePlayerLoopUpdate to resolution/view changes.
                </span>
              </li>
            </ul>
          </SectionCard>

          {/* Measurement Checklist */}
          <SectionCard label="Checklist" title="Measurement Checklist">
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Disable debug logs (or heavily throttle) before capture.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Measure in Standalone Player as well as Editor.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Record mask count, RT count, and DrawMesh count under Canvas overlay.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  Confirm whether dirty triggers occur during steady-state frames.
                </span>
              </li>
            </ul>
          </SectionCard>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-3">
              Repository
            </p>
            <a
              href="https://github.com/JamesDeRaja/SoftMaskPro-Performance-Study"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 hover:border-neon/20 hover:bg-neon/[0.03] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github size={16} className="text-slate-400 group-hover:text-neon transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  SoftMaskPro-Performance-Study
                </span>
              </div>
              <ExternalLink size={12} className="text-slate-600 group-hover:text-neon transition-colors" />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
