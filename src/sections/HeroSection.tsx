import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Monitor, Clock } from 'lucide-react';

const metrics = [
  { value: '+7.27ms', label: 'GPU cost isolated via overdraw stress', icon: Activity },
  { value: '72/90Hz', label: 'XR stereo frame budget targets', icon: Monitor },
  { value: '13+ yrs', label: 'Unity & real-time systems', icon: Clock },
];

const chips = [
  'XR Stereo Rendering',
  'GPU/CPU Bottleneck Isolation',
  'Frame Pacing',
  'OpenXR',
  'URP',
  'Unity 6',
  'RenderDoc',
  'Frame Debugger',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/3 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to remote &amp; relocation — XR / VR / MR performance roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            James{' '}
            <span className="gradient-text">De Raja</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="mt-4 font-mono text-lg text-neon/80 sm:text-xl"
          >
            Senior Real-Time Performance Engineer
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-2 text-base text-slate-400"
          >
            XR Rendering &bull; GPU/CPU Bottleneck Analysis &bull; Frame Pacing Discipline
          </motion.p>

          {/* Mission statement */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-2xl"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I design deterministic frameworks to isolate rendering bottlenecks in real-time XR systems.
              Every claim is backed by{' '}
              <span className="text-neon font-medium">profiler-validated measurements</span>.
            </p>
          </motion.div>

          {/* Key capabilities */}
          <motion.ul
            variants={itemVariants}
            className="mt-6 space-y-2 text-sm text-slate-400"
          >
            {[
              'XR rendering performance & stereo frame budget discipline',
              'CPU/GPU bottleneck isolation via controlled A/B stress tests',
              'Frame pacing stability — variance, spikes, compositor deadline adherence',
              'Overdraw & MSAA bandwidth quantification with profiler evidence',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {metrics.map((m) => (
              <div
                key={m.value}
                className="glass-card glass-card-hover metric-ring rounded-xl p-4 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <m.icon size={18} className="text-neon/60" />
                  <p className="font-mono text-2xl font-bold text-neon text-glow-cyan">{m.value}</p>
                </div>
                <p className="mt-2 text-xs text-slate-400">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Skill chips */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <span key={chip} className="chip-glow rounded-full px-3 py-1 font-mono text-xs">
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
            >
              Contact Me
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#xr-lab"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              View XR Lab
            </a>
            <Link
              to="/case-studies/xr-stress-lab"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              Case Studies
            </Link>
          </motion.div>

          {/* Validation footer */}
          <motion.p
            variants={itemVariants}
            className="mt-8 font-mono text-xs text-slate-600"
          >
            Validated via Unity Profiler &amp; Frame Debugger &bull; Unity 6 URP + OpenXR &bull; Chennai, India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
