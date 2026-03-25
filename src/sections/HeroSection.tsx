import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Palette, Sparkles } from 'lucide-react';

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
              Open to remote &amp; relocation — Game Development &amp; XR roles
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

          {/* Title — large and clear */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-2xl font-semibold text-neon/90 sm:text-3xl"
          >
            Game Developer &amp; Graphic Designer
          </motion.p>

          {/* Value headline — what you deliver */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-2xl"
          >
            <p className="text-xl text-slate-200 leading-relaxed sm:text-2xl">
              I take games from{' '}
              <span className="text-neon font-semibold">concept to app store</span> —
              designing the art, building the systems, and shipping at{' '}
              <span className="text-neon font-semibold">rock-solid frame rates</span>.
            </p>
          </motion.div>

          {/* Impact numbers — big, scannable */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            <div>
              <p className="font-mono text-4xl font-bold text-neon text-glow-cyan sm:text-5xl">13+</p>
              <p className="mt-1 text-sm text-slate-400">years in Unity</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-bold text-white sm:text-5xl">3</p>
              <p className="mt-1 text-sm text-slate-400">shipped titles on app stores</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-bold text-electric sm:text-5xl">60fps</p>
              <p className="mt-1 text-sm text-slate-400">locked on low-end devices</p>
            </div>
          </motion.div>

          {/* Three pillars — what makes you different */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <div className="glass-card glass-card-hover rounded-xl p-5">
              <Gamepad2 size={20} className="text-neon" />
              <p className="mt-3 text-sm font-semibold text-white">Game Development</p>
              <p className="mt-1 text-xs text-slate-400">
                Full-cycle Unity dev — gameplay, AI, physics, optimization. Mobile &amp; XR.
              </p>
            </div>
            <div className="glass-card glass-card-hover rounded-xl p-5">
              <Palette size={20} className="text-electric" />
              <p className="mt-3 text-sm font-semibold text-white">Graphic Design</p>
              <p className="mt-1 text-xs text-slate-400">
                Game UI/UX, brand identity, marketing art, visual prototyping in Photoshop &amp; Figma.
              </p>
            </div>
            <div className="glass-card glass-card-hover rounded-xl p-5">
              <Sparkles size={20} className="text-amber-400" />
              <p className="mt-3 text-sm font-semibold text-white">Performance Engineering</p>
              <p className="mt-1 text-xs text-slate-400">
                GPU/CPU profiling, frame budget discipline, XR stereo rendering at 72–90 Hz.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#shipped-titles"
              className="btn-primary group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
            >
              View My Games
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="btn-secondary rounded-xl px-6 py-3 text-sm font-medium"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
