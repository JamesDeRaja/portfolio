import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';

const strengths = [
  'Full-cycle game development — concept, prototype, art, ship, and post-launch optimization',
  'XR / VR / MR game experiences with 72–90 Hz stereo rendering',
  'Graphic design & UI/UX — game interfaces, branding, marketing assets',
  'GPU/CPU performance profiling & frame budget optimization',
  'Real-time visual effects, shaders, and rendering pipeline customization',
  'Mobile game optimization — iOS & Android shipping experience',
  'Enterprise systems integration (Zoho Corporation — 7+ years)',
];

const toolCategories = [
  {
    label: 'Game Engines & Languages',
    tools: ['Unity 6', 'URP', 'Built-in Render Pipeline', 'OpenXR', 'C#', 'ShaderLab / HLSL'],
  },
  {
    label: 'Design & Creative',
    tools: ['Photoshop', 'Figma', 'Illustrator', 'After Effects', 'UI/UX Design', 'Visual Prototyping'],
  },
  {
    label: 'Platforms',
    tools: ['Meta Quest (VR/MR)', 'PCVR', 'iOS', 'Android', 'WebGL'],
  },
  {
    label: 'Profiling & Tools',
    tools: ['Unity Profiler', 'Frame Debugger', 'RenderDoc', 'Git', 'CI/CD'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-electric/3 blur-[150px]" />
      </div>

      <SectionHeading
        eyebrow="About"
        title="Game developer, graphic designer, performance nerd"
      />

      {/* Personal narrative — the "why" */}
      <AnimatedSection>
        <div className="mb-10 glass-card rounded-2xl p-6 sm:p-8 border-l-2 border-neon/30">
          <p className="text-base text-slate-200 leading-relaxed italic">
            &ldquo;I started making games at 14 because I wanted to build the worlds I saw in my head. Thirteen years later, I still get the same rush — but now I also obsess over whether the frame time is under 16ms.&rdquo;
          </p>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            That combination — <span className="text-white font-medium">creative vision + engineering discipline</span> — is what defines me. I don&apos;t just want games to look good. I want them to <em>feel</em> good at 60fps on a cheap phone. I design the art, I write the shaders, I profile the frame, I ship it.
          </p>
        </div>
      </AnimatedSection>

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
              <p className="mt-0.5 text-xs text-slate-400">Game Developer &amp; Graphic Designer</p>
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
              I&apos;m a game developer and graphic designer with <span className="font-medium text-neon">13+ years</span> building games in Unity — from initial concept and visual design through to shipping and post-launch optimization. I love the intersection of art and engineering: making things that look great <em>and</em> run great.
            </p>
            <p>
              My shipped titles span mobile games on iOS and Android, and my current focus is on <span className="font-medium text-white">XR / VR / MR experiences</span> — building immersive worlds that maintain buttery-smooth frame rates at <span className="font-medium text-neon">72Hz and 90Hz</span> on Meta Quest and PCVR.
            </p>
            <p>
              I also bring a strong graphic design background — crafting game UI/UX, brand identities, and marketing visuals. Design thinking informs every game I build, from menu flows to in-game HUDs to promotional art.
            </p>
            <p>
              In parallel, as a Senior Systems Engineer at <span className="font-medium text-white">Zoho Corporation</span> (2017–present), I architect enterprise integrations and distributed systems — experience that gives me a unique edge when building connected, data-driven game experiences.
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
