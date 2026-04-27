import { motion } from 'framer-motion';
import EvidenceCard from '../components/EvidenceCard';
import ExperimentAccordion from '../components/ExperimentAccordion';
import ResultsTable from '../components/ResultsTable';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { performanceResults } from '../data/performanceResults';
import { xrExperiments, xrLabConfig } from '../data/xrLab';
import { Link } from 'react-router-dom';
import SmartLink from '../components/SmartLink';
import { Github, Zap, Target, BarChart3, Search, FileText } from 'lucide-react';

const evidenceItems = [
  {
    title: 'Unity Profiler (CPU / Main Thread)',
    description: 'Main-thread frame budget and scheduling behavior capture.',
    imagePath: '/lab/Overdraw_CPU_RenderThread_Comparison.png',
    caption:
      'Baseline vs overdraw comparison. CPU remains ~0.5 ms while render thread increases from 6.37 ms to 13.64 ms under identical scene conditions.'
  },
  {
    title: 'Unity Profiler (GPU / Render Thread)',
    description: 'GPU frame cost and render-thread contribution snapshot.',
    imagePath: '/lab/Overdraw_FrameDebugger_TransparentPass.png',
    caption:
      'Render-thread dominated under overdraw stress. Transparent stacking doubled fragment workload, increasing GPU cost by ~7 ms.'
  },
  {
    title: 'Frame Debugger / RenderDoc Capture',
    description: 'Pass-level evidence for overdraw and submission behavior.',
    imagePath: '/lab/Overdraw_Experiment_Summary.png',
    caption:
      '201 sequential transparent draw calls (ZWrite Off). Fragment workload scales linearly with stacked layers.'
  },
  {
    title: 'Baseline Scene (Transparent Stack)',
    description: 'Controlled transparent-quad setup used to isolate fragment overdraw cost.',
    imagePath: '/case-studies/xr-stress-lab/overdraw-normal.png',
    caption:
      'Simple visual composition, but stacked transparency repeatedly shades the same screen region and drives fragment cost.'
  },
  {
    title: 'Overdraw Heatmap (Unity Debug View)',
    description: 'Per-pixel fragment density view used to spot transparent overlap hotspots.',
    imagePath: '/case-studies/xr-stress-lab/overdraw-heatmap.png',
    caption:
      'Blue is low overlap; yellow/red indicates heavy repeated shading from transparent layering.'
  },
  {
    title: 'Frame Debugger (Transparent Draw Loop)',
    description: 'Draw call evidence under DrawTransparentObjects for the overdraw test.',
    imagePath: '/case-studies/xr-stress-lab/overdraw-frame-debugger.png',
    caption:
      'Repeated DrawTransparentObjects / Draw Mesh entries confirm each layer is submitted separately.'
  }
];

const pipelineSteps = [
  { step: '01', label: 'Locked Baseline', sub: 'Fixed camera, controlled geometry', icon: Target },
  { step: '02', label: 'Stress Toggle', sub: 'A/B isolation per variable', icon: Zap },
  { step: '03', label: 'Frame Metrics', sub: 'CPU, GPU, render-thread timings', icon: BarChart3 },
  { step: '04', label: 'Profiler Evidence', sub: 'Pass-level validation', icon: Search },
  { step: '05', label: 'Mitigation Playbook', sub: 'Documented findings', icon: FileText },
];

export default function XRLabSection() {
  return (
    <section id="xr-lab" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-neon/3 blur-[150px]" />
      </div>

      <SectionHeading
        eyebrow="Research"
        title="XR Performance Stress Lab"
        subtitle="A deterministic Unity 6 URP + OpenXR benchmark harness. I run controlled experiments to isolate exactly what costs what — overdraw, MSAA, instancing, CPU stress, frame pacing — with profiler evidence."
      />

      {/* Top-level insight — scannable before diving into data */}
      <AnimatedSection>
        <div className="mb-8 rounded-2xl border border-neon/15 bg-neon/5 p-6 sm:p-8">
          <p className="text-base text-slate-200 leading-relaxed sm:text-lg">
            <span className="font-mono font-bold text-neon text-glow-cyan">Key insight:</span>{' '}
            Transparent overdraw in XR stereo rendering increased GPU frame cost by{' '}
            <span className="font-mono font-bold text-neon">+7.27ms</span> —
            enough to break the 11ms budget at 90Hz and trigger reprojection artifacts.
            Identified via controlled A/B stress test with profiler evidence.
          </p>
        </div>
      </AnimatedSection>

      {/* Detailed lab data */}
      <AnimatedSection>
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-neon/20 bg-neon/5 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-neon">
              {xrLabConfig.status}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
              Target: {xrLabConfig.target}
            </span>
          </div>

          {/* Detailed findings */}
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="font-mono text-2xl font-bold text-neon text-glow-cyan">+7.27ms</p>
              <p className="mt-1 text-xs text-slate-400">GPU cost from overdraw stress</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="font-mono text-2xl font-bold text-white">201</p>
              <p className="mt-1 text-xs text-slate-400">sequential transparent draw calls</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <p className="font-mono text-2xl font-bold text-electric">11ms</p>
              <p className="mt-1 text-xs text-slate-400">90Hz budget boundary crossed</p>
            </div>
          </div>

          {/* Pipeline */}
          <div className="mt-6">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-slate-500">
              Test Framework Pipeline
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {pipelineSteps.map((node) => (
                <motion.div
                  key={node.step}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card glass-card-hover rounded-lg p-3 text-center"
                >
                  <node.icon size={16} className="mx-auto text-neon/50" />
                  <span className="mt-1 block font-mono text-xs font-bold text-neon/70">{node.step}</span>
                  <span className="block text-xs font-medium text-white/80">{node.label}</span>
                  <span className="block text-[10px] text-slate-500">{node.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-12 space-y-12">
        {/* Experiments */}
        <AnimatedSection>
          <h3 className="mb-4 font-mono text-lg font-semibold text-white">
            <span className="text-neon/50">{'> '}</span>Experiments
          </h3>
          <ExperimentAccordion experiments={xrExperiments} />
        </AnimatedSection>

        {/* Results */}
        <AnimatedSection>
          <h3 className="mb-2 font-mono text-lg font-semibold text-white">
            <span className="text-neon/50">{'> '}</span>Published Results
          </h3>
          <p className="mb-4 font-mono text-xs text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
          <ResultsTable rows={performanceResults} />
          <div className="mt-4 glass-card rounded-2xl p-5 text-sm text-slate-400">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-white/60">Notes</p>
            {performanceResults.map((result) => (
              <p key={`${result.name}-notes`} className="mt-2">
                <span className="font-medium text-white/80">{result.name}:</span> {result.notes}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/case-studies/xr-stress-lab" className="font-mono text-sm font-medium text-neon hover:text-neon-300 transition">
              View full XR case study →
            </Link>
          </div>
        </AnimatedSection>

        {/* Evidence */}
        <AnimatedSection>
          <h3 className="mb-4 font-mono text-lg font-semibold text-white">
            <span className="text-neon/50">{'> '}</span>Evidence (Profiler + Captures)
          </h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceItems.map((item) => (
              <EvidenceCard key={item.title} title={item.title} description={item.description} imagePath={item.imagePath} caption={item.caption} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SmartLink
            href="https://github.com/JamesDeRaja/XRPerformanceLab"
            className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
          >
            <Github size={16} />
            View on GitHub
          </SmartLink>
        </AnimatedSection>
      </div>
    </section>
  );
}
