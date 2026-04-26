import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Seo } from '../../components/Seo';
import PageHero from '../../components/PageHero';

export default function ProfilingToolkitCaseStudyPage() {
  return (
    <div className="min-h-screen bg-void-950">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[600px] w-[600px] rounded-full bg-neon/[0.03] blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/[0.03] blur-[130px]" />
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Seo
          title="Profiling Toolkit Case Study — James De Raja"
          description="Case study on a Unity runtime profiling overlay that shortens bottleneck triage from symptom capture to mitigation-ready evidence."
          url="https://jamesderaja.com/case-studies/profiling-toolkit"
          keywords="Unity profiler toolkit, runtime overlay, bottleneck triage, performance telemetry"
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Profiling Toolkit Case Study',
            description:
              'Case study on a Unity runtime profiling overlay that shortens bottleneck triage from symptom capture to mitigation-ready evidence.',
            author: { '@type': 'Person', name: 'James De Raja' },
            datePublished: '2025-01-01',
            image: '/og-image.png',
          }}
        />
        <PageHero
          backHref="/"
          backLabel="Back to Portfolio"
          category="Case Study"
          title="Unity Performance & Profiling Toolkit"
          subtitle="Runtime Triage Instrumentation"
          description="A lightweight in-engine overlay and capture workflow to accelerate bottleneck triage during development builds. Shortens the loop from symptom to classification to evidence to mitigation."
          chips={['Unity Profiler', 'Runtime HUD', 'Frame Timing', 'Draw Calls', 'A/B Profiling']}
        />

        <div className="space-y-6 mt-6">
          {/* Top row: Problem + Approach */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="page-card rounded-2xl p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">
                Context
              </p>
              <h2 className="text-lg font-bold text-white mb-4">Problem / Context</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Performance investigation often fails because the right signals are not visible at the moment a spike
                occurs. Switching tools, reproducing conditions, and aligning captures wastes iteration time. The goal
                was to make key indicators visible in-build and standardize what gets captured for handoff.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="page-card rounded-2xl p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">
                Implementation
              </p>
              <h2 className="text-lg font-bold text-white mb-4">Engineering Approach</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Built an overlay that surfaces frame timing signals and lightweight counters during runtime. Added
                scenario presets so investigations can run controlled A/B sessions. Standardized capture notes and
                snapshot conventions so profiler traces and evidence remain comparable across runs.
              </p>
            </motion.div>
          </div>

          {/* Results — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">
              Outcomes
            </p>
            <h2 className="text-lg font-bold text-white mb-4">Measured Results</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Outcome focus: faster bottleneck classification during investigation sessions (CPU vs GPU vs variance),
              more consistent evidence quality via standardized capture protocol, and reduced ambiguity during
              engineering handoff by bundling timing context with captures.
            </p>
          </motion.div>

          {/* Evidence + Mitigation */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="page-card rounded-2xl p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">
                Captures
              </p>
              <h2 className="text-lg font-bold text-white mb-4">Evidence</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Representative outputs include overlay snapshots during spikes, profiler capture references tied to
                scenario presets, and annotated evidence bundles suitable for teammate handoff.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="page-card rounded-2xl p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon/60 mb-1">
                Workflow
              </p>
              <h2 className="text-lg font-bold text-white mb-4">Mitigation Strategy</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                The toolkit is designed to drive mitigation prioritization: classify bottleneck signature, confirm with
                capture, apply targeted fixes (submission, overdraw, bandwidth, scheduling), and re-measure under
                identical scenario preset.
              </p>
            </motion.div>
          </div>

          {/* GitHub link card */}
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
              href="https://github.com/JamesDeRaja/XRPerformanceLab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 hover:border-neon/20 hover:bg-neon/[0.03] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github size={16} className="text-slate-400 group-hover:text-neon transition-colors" />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  XRPerformanceLab
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
