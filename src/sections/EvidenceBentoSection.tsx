import { motion } from 'framer-motion';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import MetricBadge from '../components/bento/MetricBadge';

interface EvidenceImage {
  src: string;
  alt: string;
  label: string;
  badge?: string;
  badgeColor?: 'cyan' | 'green' | 'purple' | 'amber' | 'red';
}

const evidenceImages: EvidenceImage[] = [
  {
    src: '/lab/Overdraw_CPU_RenderThread_Comparison.png',
    alt: 'Unity Profiler CPU and Render Thread comparison under overdraw stress',
    label: 'CPU / Render Thread — Overdraw Stress',
    badge: 'Profiler',
    badgeColor: 'cyan',
  },
  {
    src: '/lab/Overdraw_FrameDebugger_TransparentPass.png',
    alt: 'Frame Debugger showing transparent pass draw calls',
    label: 'Frame Debugger — Transparent Pass',
    badge: 'Frame Debugger',
    badgeColor: 'purple',
  },
  {
    src: '/case-studies/overdraw-heatmap.png',
    alt: 'Unity overdraw heatmap showing fragment pressure hotspots',
    label: 'Overdraw Heatmap — Fragment Pressure',
    badge: 'Scene View',
    badgeColor: 'amber',
  },
  {
    src: '/lab/SoftMaskPro_ScenarioC_Profiler.png',
    alt: 'Unity Profiler showing SoftMaskPro scenario C with 40 masks',
    label: 'SoftMaskPro — 40 Mask Scenario Profiler',
    badge: 'Profiler',
    badgeColor: 'cyan',
  },
  {
    src: '/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png',
    alt: 'Profiler showing WaitForPresent spike in SoftMaskPro scenario A',
    label: 'WaitForPresent Spike — UI Render Cost',
    badge: 'GPU Bound',
    badgeColor: 'red',
  },
  {
    src: '/lab/FramePacing_OnTarget_72FPS.png',
    alt: 'Frame pacing profiler view showing stable 72 FPS target',
    label: 'Frame Pacing — On Target @ 72 Hz',
    badge: 'On Target',
    badgeColor: 'green',
  },
];

const bottleneckTable = [
  { experiment: 'Overdraw — 201 transparent draws', baseline: '3.84 ms', stress: '11.11 ms', delta: '+7.27 ms', classification: 'GPU-bound (fragment)' },
  { experiment: 'SoftMaskPro — 1 mask (Scenario A)', baseline: 'GPU idle', stress: 'WaitForPresent', delta: 'Present spike', classification: 'GPU-bound (fill-rate)' },
  { experiment: 'Frame pacing — 72 Hz target', baseline: '13.88 ms budget', stress: 'On target', delta: 'Validated', classification: 'CPU budget discipline' },
];

export default function EvidenceBentoSection() {
  return (
    <section id="evidence" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-electric/3 blur-[120px]" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Evidence, Not Claims
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Profiler screenshots and measured data
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Every performance statement on this site is backed by a profiler screenshot, a Frame Debugger
          capture, or a reproducible benchmark result. Below is a selection of real evidence from the lab.
        </p>
      </motion.div>

      {/* Screenshot grid */}
      <BentoGrid className="mb-4">
        {/* Large featured screenshot */}
        <motion.div
          className="lg:col-span-8 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden h-full">
            <div className="relative">
              <img
                src="/lab/Overdraw_CPU_RenderThread_Comparison.png"
                alt="Unity Profiler CPU and Render Thread comparison under overdraw stress"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-white">
                    CPU / Render Thread — Overdraw Stress
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    Unity Profiler — baseline vs 201 transparent draw calls
                  </p>
                </div>
                <MetricBadge value="+7.27 ms" color="amber" size="sm" />
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Overdraw heatmap */}
        <motion.div
          className="lg:col-span-4 md:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden h-full">
            <div className="relative">
              <img
                src="/case-studies/overdraw-heatmap.png"
                alt="Unity overdraw heatmap showing fragment pressure hotspots"
                className="w-full h-40 object-cover md:h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-semibold text-white">Overdraw Heatmap</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Fragment pressure hotspots — scene view</p>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Frame Debugger */}
        <motion.div
          className="lg:col-span-4 md:col-span-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden h-full">
            <div className="relative">
              <img
                src="/lab/Overdraw_FrameDebugger_TransparentPass.png"
                alt="Frame Debugger showing transparent pass draw calls"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-white">Frame Debugger</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">Transparent pass draw calls</p>
                </div>
                <MetricBadge value="Frame Debugger" color="purple" size="sm" />
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* SoftMaskPro profiler */}
        <motion.div
          className="lg:col-span-4 md:col-span-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden h-full">
            <div className="relative">
              <img
                src="/lab/SoftMaskPro_ScenarioA_Profiler_WaitForPresent.png"
                alt="Profiler showing WaitForPresent spike"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-white">WaitForPresent Spike</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">SoftMaskPro — GPU-bound UI</p>
                </div>
                <MetricBadge value="GPU Bound" color="red" size="sm" />
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Frame pacing */}
        <motion.div
          className="lg:col-span-4 md:col-span-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.13 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden h-full">
            <div className="relative">
              <img
                src="/lab/FramePacing_OnTarget_72FPS.png"
                alt="Frame pacing profiler showing stable 72 FPS"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-white">Frame Pacing — On Target @ 72 Hz</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">13.88 ms budget — consistent delivery</p>
                </div>
                <MetricBadge value="On Target" color="green" size="sm" />
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>

      {/* Additional small evidence cards */}
      <BentoGrid className="mb-6">
        {evidenceImages.slice(3, 6).map((img, i) => (
          <motion.div
            key={img.src}
            className="lg:col-span-4 md:col-span-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <BentoCard variant="dim" padding="none" importance="low" className="overflow-hidden">
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover max-h-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between gap-2">
                  <p className="text-[11px] font-medium text-white/90">{img.label}</p>
                  {img.badge && (
                    <MetricBadge value={img.badge} color={img.badgeColor ?? 'cyan'} size="sm" />
                  )}
                </div>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>

      {/* Bottleneck classification table */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <BentoCard variant="default" padding="none" importance="normal" className="overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">
              Baseline vs Stress — Bottleneck Classification
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="px-6 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-slate-600">Experiment</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-slate-600">Baseline</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-slate-600">Under Stress</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-slate-600">Delta</th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-wider text-slate-600">Classification</th>
                </tr>
              </thead>
              <tbody>
                {bottleneckTable.map((row, i) => (
                  <tr
                    key={row.experiment}
                    className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                  >
                    <td className="px-6 py-3 text-slate-300">{row.experiment}</td>
                    <td className="px-4 py-3 font-mono text-slate-400">{row.baseline}</td>
                    <td className="px-4 py-3 font-mono text-amber-400">{row.stress}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-red-400">{row.delta}</td>
                    <td className="px-4 py-3 text-slate-500">{row.classification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BentoCard>
      </motion.div>
    </section>
  );
}
