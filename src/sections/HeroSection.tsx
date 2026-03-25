import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Palette, Clock } from 'lucide-react';

const metrics = [
  { value: '10+', label: 'Shipped mobile & XR game titles', icon: Gamepad2 },
  { value: '13+ yrs', label: 'Unity game development & real-time graphics', icon: Clock },
  { value: '72/90Hz', label: 'XR performance targets hit consistently', icon: Palette },
];

const chips = [
  'Unity Game Development',
  'XR / VR / MR',
  'Real-Time Graphics',
  'UI/UX Design',
  'Visual Effects',
  'Performance Optimization',
  'C# / Shaders',
  'Mobile Games',
  'Photoshop',
  'Figma',
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
              Open to remote &amp; relocation — Game Development &amp; XR roles
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
            Game Developer &amp; Graphic Designer
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-2 text-base text-slate-400"
          >
            Unity &bull; XR / VR / MR &bull; Mobile Games &bull; Real-Time Graphics &bull; Visual Design
          </motion.p>

          {/* Mission statement */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-2xl"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I build immersive games and craft compelling visuals — from concept art to shipped titles.
              With 13+ years in Unity, I combine{' '}
              <span className="text-neon font-medium">creative design instincts</span> with{' '}
              <span className="text-neon font-medium">deep technical expertise</span> to deliver
              polished, high-performance experiences across mobile, XR, and desktop.
            </p>
          </motion.div>

          {/* Key capabilities */}
          <motion.ul
            variants={itemVariants}
            className="mt-6 space-y-2 text-sm text-slate-400"
          >
            {[
              'End-to-end game development — design, prototype, build, ship, and optimize',
              'XR / VR / MR experiences with buttery-smooth 72–90 Hz rendering',
              'Graphic design & UI/UX — from game interfaces to brand identity',
              'Performance engineering — profiling, GPU/CPU optimization, frame budget discipline',
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

          {/* Footer */}
          <motion.p
            variants={itemVariants}
            className="mt-8 font-mono text-xs text-slate-600"
          >
            Unity 6 &bull; C# &bull; URP + OpenXR &bull; Photoshop &bull; Figma &bull; Chennai, India
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
