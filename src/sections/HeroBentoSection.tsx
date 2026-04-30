import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const capabilityBadges = [
  'Frame-time variance controlled',
  'Predictable frame delivery',
  'GPU bottlenecks isolated',
  'Deterministic frame budget control',
];

export default function HeroBentoSection() {
  return (
    <section id="hero" className="hero-hud relative mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-0 h-[520px] w-[520px] rounded-full bg-neon/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-neon/8 blur-[140px]" />
      </div>

      <BentoGrid>
        <motion.div className="lg:col-span-8 md:col-span-6" custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <BentoCard variant="featured" padding="lg" elevated className="h-full flex flex-col justify-between gap-7">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <span className="hud-label inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
                  Deterministic
                </span>
              </div>

              <div>
                <h1 className="text-4xl font-black uppercase tracking-[0.03em] text-white sm:text-5xl lg:text-6xl">
                  Performance Engineering
                </h1>
                <p className="mt-3 text-xl font-semibold text-neon sm:text-2xl">
                  James De Raja — Senior Real-Time Performance Engineer
                </p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-300">
                  Real-time systems built for predictable frame delivery under load, with profiler evidence from XR and shipped production pipelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {capabilityBadges.map((badge) => (
                  <span key={badge} className="chip-glow rounded-full px-2.5 py-1 font-mono text-xs">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#case-studies" className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium">
                View Case Studies
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </a>
              <SmartLink
                href="/resume/viewer.html?file=James%20De%20Raja%20Resume.pdf"
                className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              >
                <FileText size={14} />
                View Resume
              </SmartLink>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium">
                <Mail size={14} />
                Contact
              </a>
            </div>
          </BentoCard>
        </motion.div>

        <div className="lg:col-span-4 md:col-span-6 flex flex-col gap-4">
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <BentoCard variant="metric" padding="md" elevated className="metric-panel h-full">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-400">Primary metric</p>
                <span className="rounded border border-neon/40 bg-neon/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-neon">GPU pipeline</span>
              </div>
              <p className="text-sm text-slate-300">Draw calls</p>
              <p className="mt-2 font-mono text-4xl font-black text-white sm:text-5xl">
                1250 <span className="text-slate-500">→</span> <span className="text-neon text-glow-cyan">412</span>
              </p>
              <p className="mt-3 font-mono text-xl font-bold text-neon">-67% GPU overhead</p>
              <div className="mt-5 h-2 rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-neon"
                  initial={{ width: 0 }}
                  whileInView={{ width: '67%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Bottleneck isolated using frame debugger + GPU profiler, then validated against frame-time budget stability.
              </p>
            </BentoCard>
          </motion.div>
        </div>
      </BentoGrid>
    </section>
  );
}
