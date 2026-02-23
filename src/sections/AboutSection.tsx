import SectionHeading from '../components/SectionHeading';

const tools = ['Unity Profiler', 'RenderDoc', 'OVR Metrics Tool', 'Frame Debugger', 'URP', 'OpenXR'];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Systems-focused engineer for real-time frame budgets"
        subtitle="I work on real-time performance where frame budgets and stability matter more than peak FPS — profiling CPU/GPU bottlenecks, reducing rendering cost, and improving frame pacing under load. My focus is reproducible measurement: baseline vs stress deltas, bottleneck classification (CPU-bound vs GPU-bound), and mitigation strategies teams can apply repeatedly. Current work centers on an XR Performance Stress Lab in Unity (URP/OpenXR) to quantify overdraw amplification, MSAA bandwidth tradeoffs, instancing/submission overhead, and main-thread scheduling jitter."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Core strengths</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Frame timing + pacing discipline (11ms / 16ms budgets)</li>
            <li>GPU/CPU bottleneck isolation and root-cause analysis</li>
            <li>Rendering cost control (overdraw, transparency, MSAA)</li>
            <li>Submission optimization (batching vs instancing, state changes)</li>
            <li>Tooling + documentation (Profiler, Frame Debugger, measured writeups)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
