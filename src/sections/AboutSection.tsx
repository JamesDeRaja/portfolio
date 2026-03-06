import SectionHeading from '../components/SectionHeading';

const strengths = [
  'XR stereo frame timing (72 / 90 Hz) and compositor deadline discipline',
  'GPU/CPU bottleneck isolation — tile-based mobile GPU & PC rasterization pipeline',
  'Overdraw, fragment pressure & MSAA bandwidth cost quantification',
  'Draw call / SetPass reduction via GPU Instancing and state batching',
  'Skinned mesh cost optimization and LOD-aware spawning',
  'Deterministic pooling systems, zero-runtime-allocation update loops',
  'Enterprise API integration & distributed systems (Zoho — scalable to enterprise XR backends)',
];

const toolCategories = [
  {
    label: 'Profiling & Debugging',
    tools: ['Unity Profiler', 'Frame Debugger', 'RenderDoc', 'OVR Metrics Tool', 'Xcode Instruments', 'Android Profiler'],
  },
  {
    label: 'Engines & Pipelines',
    tools: ['Unity 6', 'URP', 'Built-in Render Pipeline', 'OpenXR', 'C#'],
  },
  {
    label: 'XR & Platforms',
    tools: ['Meta Quest (Android/OpenXR)', 'PCVR', 'iOS', 'Android', 'XR Interaction Toolkit'],
  },
  {
    label: 'Systems & Dev',
    tools: ['Git', 'REST APIs', 'Distributed Systems', 'CI/CD'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Deterministic performance engineering for XR systems"
      />

      {/* Career narrative */}
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Left column: photo + identity */}
        <div className="flex flex-shrink-0 flex-col items-center gap-3 sm:w-40 sm:items-start">
          <img
            src="/images/james.jpg"
            alt="James De Raja"
            className="h-36 w-36 rounded-full object-cover shadow-md ring-2 ring-slate-200"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">James De Raja</p>
            <p className="text-xs text-slate-500 mt-0.5">Senior Performance Engineer</p>
            <p className="text-xs text-slate-500 mt-0.5">Chennai · Open to relocation</p>
            <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              Available
            </span>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <p>
          I'm a Senior Real-Time Performance Engineer with 13+ years optimizing Unity rendering pipelines, frame pacing, and CPU/GPU bottleneck behaviour under strict <strong>11ms / 16ms frame budgets</strong>. My focus is reproducible measurement: baseline vs stress deltas, bottleneck classification (CPU-bound vs GPU-bound), and mitigation strategies teams can apply repeatedly.
        </p>
        <p>
          Current work centres on the <strong>XR Performance Stress Lab</strong> — a deterministic Unity 6 URP + OpenXR benchmark harness targeting Meta Quest / PCVR rendering constraints at <strong>72 Hz and 90 Hz</strong>. I quantify overdraw fragment amplification, MSAA bandwidth tradeoffs, GPU instancing submission savings, and main-thread scheduling jitter with profiler-validated evidence.
        </p>
        <p>
          In parallel, as a Senior Systems Engineer at <strong>Zoho Corporation</strong> (2017–present), I architect enterprise API integrations and distributed systems across major SaaS platforms — a skill set directly transferable to enterprise XR backends that bridge spatial front-ends with live data sources.
        </p>
        <p>
          Open to remote roles and international relocation. <span className="font-medium text-slate-900">B.E., Electrical &amp; Electronics — SSN College of Engineering, Chennai.</span>
        </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Core strengths */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Core strengths</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Tools by category */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Tools &amp; Technologies</h3>
          <div className="mt-3 space-y-3">
            {toolCategories.map((cat) => (
              <div key={cat.label}>
                <p className="mb-1 text-xs font-medium text-slate-500">{cat.label}</p>
                <div className="flex flex-wrap gap-1">
                  {cat.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
