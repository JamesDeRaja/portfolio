import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

const strengths = [
  'XR stereo frame timing (72/90 Hz) and compositor deadline discipline',
  'GPU/CPU bottleneck isolation — tile-based mobile GPU & PC rasterization pipelines',
  'Overdraw, fragment pressure & MSAA bandwidth cost quantification',
  'Draw call / SetPass reduction via GPU Instancing and state batching',
  'Full-cycle mobile game development — concept through App Store / Play Store',
  'Runtime profiling tooling & deterministic benchmark harnesses',
  'Enterprise API integration & distributed systems (Zoho Corporation — 7+ years)',
];

const toolCategories = [
  {
    label: 'Profiling & Debugging',
    tools: ['Unity Profiler', 'Frame Debugger', 'RenderDoc', 'OVR Metrics Tool', 'Xcode Instruments', 'Android Profiler'],
  },
  {
    label: 'Engines & Pipelines',
    tools: ['Unity 6', 'URP', 'Built-in Render Pipeline', 'OpenXR', 'C#', 'ShaderLab / HLSL'],
  },
  {
    label: 'XR & Platforms',
    tools: ['Meta Quest (VR/MR)', 'PCVR', 'iOS', 'Android', 'XR Interaction Toolkit'],
  },
  {
    label: 'Design & Dev',
    tools: ['Git', 'REST APIs', 'CI/CD', 'Android Profiler', 'Xcode Instruments'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-electric/3 blur-[150px]" />
      </div>

      <SectionHeading
        eyebrow="About"
        title="I ship real products, optimize them to the bone, and push into what's next"
      />

      {/* Career details */}
      <AnimatedSection>
        <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Photo + identity */}
          <div className="flex flex-shrink-0 flex-col items-center gap-4 sm:w-44 sm:items-start">
            <div className="relative">
              <img
                src="/images/james.jpg"
                alt="James De Raja"
                className="h-36 w-36 rounded-2xl object-cover ring-2 ring-neon/20"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-white">James De Raja</p>
              <p className="mt-0.5 text-xs text-slate-400">Performance Engineer &bull; Game Developer</p>
              <p className="mt-0.5 text-xs text-slate-500">Chennai &bull; Open to relocation</p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-xs font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              I&apos;m a real-time performance engineer with <span className="font-medium text-neon">13+ years</span> optimizing Unity rendering pipelines, frame pacing, and CPU/GPU bottleneck behaviour under strict 11ms / 16ms frame budgets. I find the problem, prove it with profiler evidence, fix it, and verify the fix holds.
            </p>
            <p>
              My current focus is the <span className="font-medium text-white">XR Performance Stress Lab</span> — a deterministic Unity 6 URP + OpenXR benchmark harness targeting Meta Quest / PCVR rendering constraints at <span className="font-medium text-neon">72Hz and 90Hz</span>. Before that, I shipped multiple mobile titles on iOS and Android where frame budget discipline was the difference between a 4-star and 2-star review.
            </p>
            <p>
              In parallel, as a Senior Systems Engineer at <span className="font-medium text-white">Zoho Corporation</span> (2017–present), I architect enterprise API integrations and distributed systems — directly transferable to production-scale game backends and live service infrastructure.
            </p>
            <p className="text-slate-400">
              Open to remote roles and international relocation. <span className="font-medium text-white/80">B.E., Electrical &amp; Electronics — SSN College of Engineering, Chennai.</span>
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Core strengths */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card rounded-2xl p-6 h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-neon/60">Core Strengths</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/50" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Tools */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card rounded-2xl p-6 h-full">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-neon/60">Tools &amp; Technologies</h3>
            <div className="mt-4 space-y-5">
              {toolCategories.map((cat) => (
                <div key={cat.label}>
                  <p className="mb-2 text-xs font-medium text-slate-500">{cat.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05 }}
                        className="chip-glow rounded-full px-3 py-1 font-mono text-[11px]"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
