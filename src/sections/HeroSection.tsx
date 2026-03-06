import { Link } from 'react-router-dom';

const proofChips = ['Frame Timing Discipline', 'GPU/CPU Bottleneck Isolation', 'XR Rendering Constraints'];

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Open to remote &amp; relocation roles
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          James De Raja
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-700">
          Senior Real-Time Performance Engineer
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Unity rendering, frame pacing, and XR performance research with profiler-backed measurements.
        </p>
        <p className="mt-3 text-sm text-slate-600">
          Profiler-validated GPU bottleneck isolation (<span className="font-semibold">+7.27 ms</span>{' '}
          <Link to="/lab/overdraw" className="text-cyan-700 hover:text-cyan-800">
            overdraw case study
          </Link>
          ). Chennai, India.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {proofChips.map((chip) => (
            <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
            Contact Me
          </a>
          <a href="#xr-lab" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
            View XR Lab
          </a>
          <a href="#writing" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-cyan-600 hover:text-cyan-700">
            Read Writing
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          13+ years in interactive systems &bull; Unity 10+ years &bull; Shipped mobile titles &bull; Technical leadership at Zoho
        </p>
      </div>
    </section>
  );
}
