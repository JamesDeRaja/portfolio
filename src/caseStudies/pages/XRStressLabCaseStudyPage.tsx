import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SmartLink from '../../components/SmartLink';
import MiniBars from '../../components/charts/MiniBars';
import { getResultDelta, xrStressLabResults } from '../../data/xrStressLabResults';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

function formatDelta(value: number | null) {
  if (value === null) {
    return '—';
  }

  return `${value >= 0 ? '+' : ''}${value.toFixed(2)} ms`;
}

const card = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
  className: 'rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8',
};

export default function XRStressLabCaseStudyPage() {
  const overdrawEvidence = [
    {
      title: 'Scene Setup',
      label: 'Baseline Scene',
      imagePath: '/case-studies/xr-stress-lab/overdraw-normal.png',
      alt: 'XR stress lab baseline scene with stacked transparent quads',
      description:
        'A controlled test scene using stacked transparent quads to create repeated fragment shading in the same screen region. Visually the scene appears simple, but transparent overlap increases fragment workload significantly.',
    },
    {
      title: 'Overdraw Visualization',
      label: 'Overdraw Heatmap',
      imagePath: '/case-studies/xr-stress-lab/overdraw-heatmap.png',
      alt: 'Unity overdraw heatmap showing fragment stacking in transparent layers',
      description:
        'Unity\'s overdraw debug view shows fragment density per pixel. Blue indicates low overlap, while yellow/red highlights areas where the same pixels are shaded repeatedly across multiple transparent layers.',
    },
    {
      title: 'Pipeline Evidence',
      label: 'Frame Debugger',
      imagePath: '/case-studies/xr-stress-lab/overdraw-frame-debugger.png',
      alt: 'Unity Frame Debugger showing repeated DrawTransparentObjects calls for overdraw test',
      description:
        'The Frame Debugger confirms repeated transparent draw submission under DrawTransparentObjects, showing each overlapping layer being rendered separately. This is the core reason transparent overdraw becomes expensive.',
    },
  ];

  return (
    <div className="min-h-screen bg-void-950">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-neon/[0.03] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/[0.03] blur-[130px]" />
      </div>

      <Seo
        title="XR Stress Lab Case Study — James De Raja"
        description="Controlled XR stress tests isolating overdraw, MSAA bandwidth, submission overhead, and frame pacing variance with profiler-backed evidence."
        url="https://james.alphaden.club/case-studies/xr-stress-lab"
        keywords="XR stress lab, overdraw, MSAA, instancing, frame pacing, Unity profiling"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'XR Stress Lab Case Study',
          description:
            'Controlled XR stress tests isolating overdraw, MSAA bandwidth, submission overhead, and frame pacing variance with profiler-backed evidence.',
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
          title="XR Performance Stress Lab"
          subtitle="Profiler-led XR Rendering Analysis"
          description="A controlled XR test harness built to isolate fragment overdraw, MSAA bandwidth amplification, submission pressure, and frame pacing variance under repeatable runtime conditions. Each stress path is toggled in isolation and measured with profiler captures and pass-level evidence."
          chips={['Unity 6', 'URP', 'OpenXR', 'GPU Profiling', 'Frame Budget']}
          metric="+7.27 ms"
          metricLabel="GPU delta under overdraw stress"
        />

        <div className="mt-8 space-y-4">

          {/* Problem / Context */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Problem / Context</p>
            <h2 className="text-lg font-bold text-white mb-4">Deadline-Driven XR Frame Budgets</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              XR rendering budgets are deadline-driven: missed frames trigger reprojection and perceived judder even when
              average FPS looks acceptable. The goal was to build a repeatable harness that produces clear bottleneck
              signatures (GPU fragment, bandwidth, submission, or variance) and generates evidence that can be shared as a
              mitigation playbook.
            </p>
          </motion.div>

          {/* Engineering Approach */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Engineering Approach</p>
            <h2 className="text-lg font-bold text-white mb-4">Controlled A/B Stress Methodology</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Implemented controlled A/B stress toggles with a locked baseline scene. For each stress path, captures are
              taken in identical conditions (same camera, same scene state) and compared by delta. Profiling focuses on
              frame time stability (variance/spikes), CPU main-thread scheduling, and GPU RenderLoop cost. Pass-level
              validation uses Frame Debugger / capture tools to confirm draw counts, blend modes, and depth behavior.
            </p>
          </motion.div>

          {/* Overdraw Investigation */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Overdraw Investigation</p>
            <h2 className="text-lg font-bold text-white mb-4">Fragment Cost from Stacked Transparent Geometry</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              This controlled Unity URP experiment isolates fragment cost from stacked transparent geometry and validates the bottleneck using three views: the normal scene setup, the overdraw debug heatmap, and Frame Debugger draw evidence.
            </p>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {overdrawEvidence.map((item, index) => (
                <article
                  key={item.label}
                  className={[
                    'rounded-xl border border-white/[0.07] bg-white/[0.02] p-4',
                    index === 2 ? 'md:col-span-2 xl:col-span-1' : '',
                  ]
                    .join(' ')
                    .trim()}
                >
                  <h3 className="text-sm font-semibold text-white/90 mb-1">{item.title}</h3>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-3">{item.label}</p>
                  <a
                    href={item.imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-white/[0.08] transition hover:border-white/20"
                  >
                    <img src={item.imagePath} alt={item.alt} loading="lazy" className="w-full object-cover" />
                  </a>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>

            {/* Why this matters callout */}
            <div className="mt-4 rounded-xl border border-neon/20 bg-neon/[0.03] p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-2">Why this matters in XR</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Transparent overdraw scales badly in XR because fragment work is amplified by stereo rendering, high eye-buffer resolutions, and optional MSAA. A scene that looks visually simple can still become fragment-bound if many transparent layers cover the same pixels.
              </p>
            </div>

            {/* Key observations */}
            <div className="mt-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-3">Key observations</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  'Transparent layers bypass efficient occlusion benefits available to opaque surfaces.',
                  'Overdraw is visible in the debug heatmap before it becomes obvious visually.',
                  'Frame Debugger validates that the hotspot corresponds to repeated transparent draws.',
                ].map((obs) => (
                  <p key={obs} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-xs text-slate-400 leading-relaxed">
                    {obs}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Measured Results */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Measured Results</p>
            <h2 className="text-lg font-bold text-white mb-4">Per-Stress-Path Delta Table</h2>

            <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.02]">
              <table className="min-w-full divide-y divide-white/[0.06] text-left text-sm">
                <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-4 py-3">Experiment</th>
                    <th className="px-4 py-3">Baseline CPU/GPU (ms)</th>
                    <th className="px-4 py-3">Stress CPU/GPU (ms)</th>
                    <th className="px-4 py-3">Δ CPU</th>
                    <th className="px-4 py-3">Δ GPU</th>
                    <th className="px-4 py-3">Bottleneck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-slate-300">
                  {xrStressLabResults.map((result) => {
                    const { deltaCpu, deltaGpu } = getResultDelta(result);
                    const experimentLabel = result.labPath ? (
                      <Link to={result.labPath} className="hover:text-neon hover:underline">
                        {result.experiment}
                      </Link>
                    ) : (
                      result.experiment
                    );

                    return (
                      <tr key={result.id}>
                        <td className="px-4 py-3 font-medium text-white">{experimentLabel}</td>
                        <td className="px-4 py-3 text-sm text-slate-400">
                          {result.baselineCpu.toFixed(2)} / {result.baselineGpu.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-400">
                          {result.stressCpu === null || result.stressGpu === null
                            ? 'N/A'
                            : `${result.stressCpu.toFixed(2)} / ${result.stressGpu.toFixed(2)}`}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-400">{formatDelta(deltaCpu)}</td>
                        <td className="px-4 py-3 text-sm text-slate-400">{formatDelta(deltaGpu)}</td>
                        <td className="px-4 py-3 text-sm text-slate-400">{result.bottleneck}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white/90 mb-3">GPU Delta Visualization</h3>
              <div className="space-y-2">
                <MiniBars title="Overdraw Stress Toggle" baselineMs={6.88} stressMs={12.03} maxMs={12.03} variant="gpu" />
                <MiniBars title="MSAA Cost (Edge Density)" baselineMs={3.5} stressMs={4.36} maxMs={12.03} variant="gpu" />
                <MiniBars title="MSAA × Overdraw Interaction" baselineMs={4.36} stressMs={8.75} maxMs={12.03} variant="gpu" />
                <MiniBars title="Instancing vs Non-Instancing" baselineMs={7.09} stressMs={5.34} maxMs={12.03} variant="gpu" />
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {[
                'Overdraw doubles GPU time under stable CPU behavior, matching a fragment-bound signature.',
                'MSAA increases GPU cost, while this setup remains CPU/pacing-limited at frame level.',
                'MSAA plus overdraw compounds bandwidth and fragment work, amplifying GPU delta.',
                'Instancing reduces submission overhead, with both CPU and GPU moving toward a near-balanced frame.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Key measured deltas are tracked per stress path and classified by bottleneck signature: Overdraw Stress —
              RenderLoop (GPU) 6.37 ms to 13.64 ms (Δ +7.27 ms), CPU stable around 0.5 ms, indicating GPU-bound fragment
              cost. MSAA Scaling — measured as a GPU/bandwidth amplification stress path with results tracked per MSAA
              step. Instancing vs Non-Instancing — measured as submission pressure across CPU and render thread
              contribution with draw call deltas. Frame Pacing — measured as variance and spike behavior under controlled
              workload changes.
            </p>
          </motion.div>

          {/* Evidence */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Evidence</p>
            <h2 className="text-lg font-bold text-white mb-4">Profiler Capture Methodology</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Evidence is captured via Unity Profiler comparisons and Frame Debugger validation:
            </p>
            <ul className="space-y-2">
              {[
                'Unity Profiler comparisons (CPU Main Thread + GPU RenderLoop) for baseline versus stress deltas.',
                'Frame Debugger validation of pass composition and render state (including 201 transparent draws with ZWrite Off and SrcAlpha/OneMinusSrcAlpha in overdraw stress).',
                'Annotated experiment captures linked per test case, stored under /public/lab and linked from each experiment page.',
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
            <h2 className="text-lg font-bold text-white mb-4">Bottleneck-Mapped Playbook</h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">GPU Fragment / Overdraw</h3>
                <ul className="space-y-2">
                  {[
                    'Reduce transparent stacking — prefer opaque or cutout where possible.',
                    'Limit full-screen transparent layers and constrain UI layering.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">Bandwidth Amplification (MSAA)</h3>
                <ul className="space-y-2">
                  {[
                    'Step MSAA down and reduce resolution where appropriate.',
                    'Avoid combining MSAA with heavy transparency or post-processing.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">Submission Pressure</h3>
                <ul className="space-y-2">
                  {[
                    'Reduce unique materials and state changes, improve batching/instancing strategy.',
                    'Reduce per-frame renderer churn.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                      <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">Frame Pacing Variance</h3>
                <ul className="space-y-2">
                  {[
                    'Remove spikes (GC, sync points, expensive intermittent work).',
                    'Stabilize scheduling and workload cadence.',
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

          {/* Experiments Conducted */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Experiments Conducted</p>
            <h2 className="text-lg font-bold text-white mb-4">Lab Stress Paths</h2>
            <ul className="space-y-2">
              {[
                { to: '/lab/overdraw', label: 'Overdraw Stress (GPU-bound fragment)' },
                { to: '/lab/msaa', label: 'MSAA Scaling (bandwidth amplification)' },
                { to: '/lab/instancing', label: 'Instancing vs Non-Instancing (submission cost)' },
                { to: '/lab/frame-pacing', label: 'Frame Pacing Variance Capture' },
              ].map((item) => (
                <li key={item.to} className="flex items-start gap-2.5">
                  <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-neon/40" />
                  <Link to={item.to} className="text-sm text-slate-300 leading-relaxed hover:text-neon hover:underline transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div {...card}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">Links</p>
            <h2 className="text-lg font-bold text-white mb-4">Repository & Lab Pages</h2>

            <div className="space-y-2">
              <SmartLink
                href="https://github.com/JamesDeRaja/XRPerformanceLab"
                className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 hover:border-neon/20 hover:bg-neon/[0.03] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-slate-400 group-hover:text-neon transition-colors" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">XRPerformanceLab Repository</span>
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-neon transition-colors" />
              </SmartLink>

              {[
                { to: '/lab/overdraw', label: 'Overdraw Lab' },
                { to: '/lab/msaa', label: 'MSAA Lab' },
                { to: '/lab/instancing', label: 'Instancing Lab' },
                { to: '/lab/frame-pacing', label: 'Frame Pacing Lab' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 hover:border-neon/20 hover:bg-neon/[0.03] transition-all group"
                >
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                  <ExternalLink size={12} className="text-slate-600 group-hover:text-neon transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
