import { Link } from 'react-router-dom';

const metrics = [
  { value: '+7.27 ms', label: 'GPU cost isolated via overdraw stress test' },
  { value: '72 / 90 Hz', label: 'XR stereo frame budget targets (11ms / 16ms)' },
  { value: '13+ yrs', label: 'Unity & real-time systems engineering' },
];

const chips = [
  'XR Stereo Rendering',
  'GPU/CPU Bottleneck Isolation',
  'Frame Pacing Discipline',
  'OpenXR · URP',
  'Unity 6',
];

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Open to remote &amp; relocation — XR / VR / MR performance roles
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          James De Raja
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-700">
          Senior Real-Time Performance Engineer
        </p>
        <p className="mt-1 text-base text-slate-500">
          XR Rendering &bull; GPU/CPU Bottleneck Analysis &bull; Frame Pacing
        </p>

        <p className="mt-5 text-base text-slate-700 leading-relaxed">
          I design deterministic frameworks to isolate rendering bottlenecks in real-time XR systems.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-slate-600">
          <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">·</span> XR rendering performance &amp; stereo frame budget discipline</li>
          <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">·</span> CPU/GPU bottleneck isolation via controlled A/B stress tests</li>
          <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">·</span> Frame pacing stability — variance, spikes, compositor deadline adherence</li>
          <li className="flex items-center gap-2"><span className="text-cyan-600 font-bold">·</span> Overdraw &amp; MSAA bandwidth quantification with profiler evidence</li>
        </ul>

        {/* Key metrics */}
        <div className="mt-7 grid grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.value} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-xl font-bold text-cyan-700">{m.value}</p>
              <p className="mt-1 text-xs text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
            Contact Me
          </a>
          <a href="#xr-lab" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
            View XR Lab
          </a>
          <Link to="/case-studies/xr-stress-lab" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
            Case Studies
          </Link>
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Validated via Unity Profiler &amp; Frame Debugger &bull; Unity 6 URP + OpenXR &bull; Chennai, India
        </p>
      </div>
    </section>
  );
}
