import { motion } from 'framer-motion';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';

interface SkillCluster {
  label: string;
  accent: string;
  dotColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  skills: string[];
}

const clusters: SkillCluster[] = [
  {
    label: 'Rendering / XR',
    accent: 'text-neon',
    dotColor: 'bg-neon',
    borderColor: 'border-neon/15',
    bgColor: 'bg-neon/[0.05]',
    textColor: 'text-neon/70',
    skills: [
      'Unity 6',
      'URP',
      'Built-in Render Pipeline',
      'OpenXR',
      'XR Interaction Toolkit',
      'Meta Quest (VR/MR)',
      'PCVR',
      'Frame Debugger',
      'ShaderLab / HLSL',
      'RenderDoc-style pass analysis',
      'Overdraw analysis',
      'MSAA cost profiling',
    ],
  },
  {
    label: 'Performance',
    accent: 'text-amber-400',
    dotColor: 'bg-amber-400',
    borderColor: 'border-amber-500/15',
    bgColor: 'bg-amber-500/[0.05]',
    textColor: 'text-amber-400/70',
    skills: [
      'Unity Profiler',
      'CPU / GPU analysis',
      'Frame pacing',
      'GC allocation profiling',
      'Draw calls / SetPass reduction',
      'GPU instancing / batching',
      'Overdraw / fill-rate',
      'MSAA bandwidth',
      'Skinned mesh culling',
      'LOD-aware spawning',
      'Object pooling',
      'Deterministic benchmarks',
    ],
  },
  {
    label: 'Programming',
    accent: 'text-electric',
    dotColor: 'bg-electric',
    borderColor: 'border-electric/15',
    bgColor: 'bg-electric/[0.05]',
    textColor: 'text-electric/70',
    skills: [
      'C#',
      'Unity architecture',
      'Data-oriented design',
      'ECS / DOTS',
      'Burst compiler',
      'Job System',
      'NativeArray / Span<T>',
      'Runtime HUD tooling',
      'Deterministic test harnesses',
      'Profiling pipelines',
      'A/B benchmark design',
      'Git',
    ],
  },
  {
    label: 'Systems',
    accent: 'text-emerald-400',
    dotColor: 'bg-emerald-400',
    borderColor: 'border-emerald-500/15',
    bgColor: 'bg-emerald-500/[0.05]',
    textColor: 'text-emerald-400/70',
    skills: [
      'REST APIs',
      'Scalable architecture',
      'Observability / structured logging',
      'Async / non-blocking I/O',
      'Distributed systems',
      'CI/CD',
      'Production debugging',
      'Xcode Instruments',
      'Android Profiler',
      'OVR Metrics Tool',
      'Figma',
      'Photoshop',
    ],
  },
];

export default function SkillsBentoSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Tools used in production, not on a resume checkbox list
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Grouped by technical domain. Each tool or technique has been applied in a shipped product or
          documented benchmark.
        </p>
      </motion.div>

      <BentoGrid>
        {clusters.map((cluster, i) => (
          <motion.div
            key={cluster.label}
            className="lg:col-span-3 md:col-span-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <BentoCard variant="default" rounded="xl" padding="md" className="h-full">
              {/* Cluster header */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`h-2 w-2 rounded-full ${cluster.dotColor}`} />
                <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${cluster.accent}`}>
                  {cluster.label}
                </p>
              </div>

              {/* Skills chips */}
              <div className="flex flex-wrap gap-1.5">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded border font-mono text-[11px] px-2 py-0.5 ${cluster.borderColor} ${cluster.bgColor} ${cluster.textColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
}
