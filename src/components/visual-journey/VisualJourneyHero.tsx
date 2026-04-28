import { motion } from 'framer-motion';
import SmartLink from '../SmartLink';

export default function VisualJourneyHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-10 pt-12 md:pb-14 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neon/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-neon">
            Visual Journey
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            An Interactive Resume Through Real-Time Systems
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            From game prototypes to profiler-backed XR performance engineering — a visual journey through 13+ years of
            Unity, rendering, and frame-time optimization.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <SmartLink
              href="#journey-start"
              className="rounded-lg border border-neon/40 bg-neon/15 px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon/20"
            >
              Start the journey
            </SmartLink>
            <SmartLink
              href="/resume/viewer.html?file=James%20DeRaja%20Resume.pdf"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-neon/30 hover:text-neon"
            >
              View standard resume
            </SmartLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
