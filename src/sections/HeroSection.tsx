import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
              Open to remote &amp; relocation — rendering, XR performance, engine optimization
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            James{' '}
            <span className="gradient-text">De Raja</span>
          </motion.h1>

          {/* Specialist title — this is what hiring managers anchor on */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl font-semibold text-neon/90 sm:text-2xl lg:text-3xl"
          >
            Real-Time Performance Engineer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-1 text-base text-slate-400 sm:text-lg"
          >
            Unity Rendering &bull; Frame Stability &bull; XR / Mobile / Shipped Titles
          </motion.p>

          {/* Value prop — one punchy line */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg text-slate-200 leading-relaxed sm:text-xl"
          >
            13+ years shipping optimized games across mobile and XR.
            I find the bottleneck, prove it with a profiler, fix it, and{' '}
            <span className="text-neon font-semibold">ship it at 60fps</span>.
          </motion.p>

          {/* Impact stats — big, scannable, with accent colors */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8"
          >
            <div>
              <p className="font-mono text-4xl font-bold text-neon text-glow-cyan sm:text-6xl">13+</p>
              <p className="mt-2 text-sm text-slate-400">years in Unity</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-bold text-white sm:text-6xl">3</p>
              <p className="mt-2 text-sm text-slate-400">shipped titles on app stores</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-bold text-electric sm:text-6xl">60<span className="text-2xl sm:text-4xl">fps</span></p>
              <p className="mt-2 text-sm text-slate-400">locked on low-end devices</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#problems-solved"
              className="btn-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
            >
              See Problems I Fixed
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#shipped-titles"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              Shipped Games
            </a>
            <a
              href="#xr-lab"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              XR Lab
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
