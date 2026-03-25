import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { AlertTriangle, Search, Wrench, TrendingUp } from 'lucide-react';

const problems = [
  {
    title: 'Sneaky Warrior 3D — Sub-60 FPS During Combat',
    problem: 'Game dropped to ~45 FPS when 50+ skinned enemies spawned simultaneously. Players experienced visible stuttering during peak combat.',
    diagnosis: 'Unity Profiler revealed skeleton updates and draw calls scaling linearly with enemy count. Every off-screen enemy was still being animated and submitted.',
    fix: 'Built a tiered skinned-mesh chunking system — groups of 5–50 enemies with LOD-aware spawning and visibility gating. Off-screen units skip animation and draw submission entirely.',
    result: 'Sustained 60 FPS on target devices. Frame time locked under 16.6ms even at peak density. Shipped on iOS App Store.',
  },
  {
    title: 'Snake Hole Puzzle — GC Spikes During Destruction',
    problem: 'Random frame hitches (50ms+ spikes) every few seconds during block destruction sequences with 100+ projectiles.',
    diagnosis: 'Profiler showed garbage collection spikes from projectile instantiation/destruction. Each bullet was Instantiate/Destroy every frame.',
    fix: 'Replaced with deterministic bullet pooling — zero runtime allocations. Pre-warmed pool handles 100+ concurrent projectiles without any GC pressure.',
    result: 'Eliminated all GC spikes. Stable 60 FPS on low-end Android during peak particle + rigidbody counts.',
  },
  {
    title: 'XR Overdraw — Stereo Rendering Budget Blown',
    problem: 'Transparent UI layers in VR were causing the frame to exceed the 11ms budget at 90Hz, triggering reprojection artifacts.',
    diagnosis: 'Frame Debugger revealed 201 sequential transparent draw calls with ZWrite Off. Each layer re-shaded the same pixels, doubling fragment workload in stereo.',
    fix: 'Documented the +7.27ms GPU cost delta. Mitigation: reduce transparent layer count, use opaque approximations where possible, batch transparent geometry.',
    result: 'Published as a reproducible benchmark in the XR Performance Stress Lab with profiler evidence.',
  },
];

const stepIcons = [
  { icon: AlertTriangle, label: 'Problem', color: 'text-red-400' },
  { icon: Search, label: 'Diagnosis', color: 'text-amber-400' },
  { icon: Wrench, label: 'Fix', color: 'text-neon' },
  { icon: TrendingUp, label: 'Result', color: 'text-emerald-400' },
];

export default function ProblemsSolvedSection() {
  return (
    <section id="problems-solved" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-electric/3 blur-[150px]" />
      </div>

      <SectionHeading
        eyebrow="War Stories"
        title="Performance problems I diagnosed &amp; fixed"
        subtitle="Real bugs from real projects. Each one follows the same discipline: measure, isolate, fix, verify."
      />

      {/* Step legend */}
      <AnimatedSection>
        <div className="mb-10 flex flex-wrap gap-6">
          {stepIcons.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-xs text-slate-400">
              <s.icon size={14} className={s.color} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <div className="space-y-6">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -2 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Problem */}
                <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-red-400">
                    <AlertTriangle size={12} />
                    Problem
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{p.problem}</p>
                </div>

                {/* Diagnosis */}
                <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-400">
                    <Search size={12} />
                    Diagnosis
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{p.diagnosis}</p>
                </div>

                {/* Fix */}
                <div className="rounded-xl border border-neon/10 bg-neon/5 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neon">
                    <Wrench size={12} />
                    Fix
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{p.fix}</p>
                </div>

                {/* Result */}
                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                    <TrendingUp size={12} />
                    Result
                  </div>
                  <p className="mt-2 text-sm font-medium text-emerald-300">{p.result}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
