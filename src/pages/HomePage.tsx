import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '../components/Seo';
import SmartLink from '../components/SmartLink';

const impactMetrics = [
  { value: '13+ years', label: 'Unity performance engineering' },
  { value: '72/90 Hz', label: 'XR frame budget discipline' },
  { value: '100+', label: 'Rapid prototypes delivered' },
];

const skills = [
  'Unity',
  'C#',
  'Rendering Optimization',
  'XR / VR / AR',
  'Frame Pacing',
  'Unity Profiler',
  'Frame Debugger',
  'CPU/GPU Bottleneck Isolation',
  'Overdraw Analysis',
  'MSAA',
  'URP',
  'Performance Benchmarking',
  'Mobile Optimization',
];

const experience = [
  {
    role: 'Independent Unity Rendering Performance Engineer',
    company: 'Independent',
    date: '2024–Present',
  },
  {
    role: 'Senior Unity Engineer (Mobile + Real-Time Rendering)',
    company: 'Company pending',
    date: '2014–2024',
  },
];

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Seo
        title="James De Raja — Senior Unity Developer | Performance Optimization, AR/VR/XR"
        description="Recruiter-first performance resume for James De Raja: Unity rendering optimization, XR frame stability, profiler-led diagnostics, and proof-based case studies."
        url="https://james.alphaden.club/"
        keywords="James De Raja, senior unity developer, unity performance optimization, xr frame pacing, rendering optimization, unity profiler"
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section id="hero" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-8 lg:p-8">
            <p className="text-sm font-semibold text-[#1D4ED8]">Recruiter-first performance resume</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">James De Raja</h1>
            <p className="mt-3 text-lg font-semibold text-[#0F172A]">
              Senior Unity Developer — Performance Optimization, AR/VR/XR, Rendering, Frame Stability
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#334155]">
              Senior Unity performance engineer with 13+ years optimizing Unity rendering pipelines, frame pacing,
              and CPU/GPU bottlenecks for mobile and XR under strict 11 ms / 72–90 Hz budgets.
            </p>

            <div className="mt-6 flex flex-wrap gap-3" id="contact">
              <a
                href="/resume/JamesDeRaja_Resume_Unity-Rendering-Performance.pdf"
                download
                className="inline-flex items-center rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1E40AF]"
              >
                Download Resume PDF
              </a>
              <a
                href="#featured-proof"
                className="inline-flex items-center rounded-lg border border-[#CBD5E1] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-[#F1F5F9]"
              >
                View Case Studies
              </a>
              <SmartLink href="mailto:jamesderaja@gmail.com" className="inline-flex items-center rounded-lg border border-[#CBD5E1] px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9]">Email</SmartLink>
              <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="inline-flex items-center rounded-lg border border-[#CBD5E1] px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9]">LinkedIn</SmartLink>
              <SmartLink href="https://github.com/JamesDeRaja" className="inline-flex items-center rounded-lg border border-[#CBD5E1] px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F1F5F9]">GitHub</SmartLink>
            </div>
          </section>

          <section id="impact" className="rounded-2xl border border-[#CBD5E1] bg-[#EFF6FF] p-6 lg:col-span-4 lg:p-8">
            <h2 className="text-lg font-semibold">Impact Metrics</h2>
            <div className="mt-5 space-y-4">
              {impactMetrics.map((metric) => (
                <article key={metric.value} className="rounded-xl border border-[#CBD5E1] bg-white p-4">
                  <p className="text-xl font-bold text-[#0F172A]">{metric.value}</p>
                  <p className="text-sm text-[#475569]">{metric.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-6">
            <h2 className="text-lg font-semibold">Experience Timeline</h2>
            <ol className="mt-5 space-y-4">
              {experience.map((item) => (
                <li key={item.role} className="rounded-xl border border-[#CBD5E1] p-4">
                  <p className="text-base font-semibold">{item.role}</p>
                  <p className="text-sm text-[#475569]">{item.company}</p>
                  <p className="text-sm text-[#64748B]">{item.date}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="featured-proof" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-6">
            <h2 className="text-lg font-semibold">XR Performance Stress Lab</h2>
            <p className="mt-1 text-sm text-[#475569]">Profiler-led XR frame-budget isolation and frame pacing analysis.</p>
            <dl className="mt-4 space-y-3 text-sm leading-6">
              <div>
                <dt className="font-semibold text-[#0F172A]">Problem</dt>
                <dd className="text-[#334155]">XR rendering scenarios can exceed strict 11 ms / 72–90 Hz frame budgets when overdraw, transparency, MSAA, or submission overhead increases.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Diagnosis</dt>
                <dd className="text-[#334155]">Unity Profiler, Frame Debugger, CPU/GPU frame timing, overdraw validation.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Action</dt>
                <dd className="text-[#334155]">Controlled stress tests, bottleneck classification, visibility-aware control, rendering-cost isolation.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Result</dt>
                <dd className="text-[#334155]">Verified +7.27 ms GPU RenderLoop growth isolated under layered transparency stress conditions.</dd>
              </div>
            </dl>
            <SmartLink href="/case-studies/xr-stress-lab" className="mt-4 inline-flex text-sm font-semibold text-[#1D4ED8] underline underline-offset-2">Open case study</SmartLink>
          </section>

          <section id="work" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-6">
            <h2 className="text-lg font-semibold">SoftMaskPro — UI Rendering Cost Study</h2>
            <p className="mt-1 text-sm text-[#475569]">UI masking, fill-rate cost isolation, redraw-path reduction, and predictable cost under load.</p>
            <dl className="mt-4 space-y-3 text-sm leading-6">
              <div>
                <dt className="font-semibold text-[#0F172A]">Problem</dt>
                <dd className="text-[#334155]">Fill-rate-heavy UI scenes and masking paths can create expensive passes and unnecessary redraw work.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Diagnosis</dt>
                <dd className="text-[#334155]">Profiler-guided UI rendering analysis, Frame Debugger pass inspection, URP rendering review.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Action</dt>
                <dd className="text-[#334155]">Targeted update logic, mask-cost isolation, redraw reduction, and controlled profiling.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0F172A]">Result</dt>
                <dd className="text-[#334155]">Measured result pending.</dd>
              </div>
            </dl>
            <SmartLink href="/case-studies/softmaskpro" className="mt-4 inline-flex text-sm font-semibold text-[#1D4ED8] underline underline-offset-2">Open case study</SmartLink>
          </section>

          <section id="skills" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-6">
            <h2 className="text-lg font-semibold">Skills & Profiler Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-[#0F172A]">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section id="selected-work" className="rounded-2xl border border-[#CBD5E1] bg-white p-6 lg:col-span-6">
            <h2 className="text-lg font-semibold">Selected Work</h2>
            <ul className="mt-4 space-y-4 text-sm text-[#334155]">
              <li className="rounded-xl border border-[#CBD5E1] p-4">
                <p className="font-semibold text-[#0F172A]">Rapid Prototyping at Scale</p>
                <p>100+ rapid prototypes for major hyper-casual publishers.</p>
              </li>
              <li className="rounded-xl border border-[#CBD5E1] p-4">
                <p className="font-semibold text-[#0F172A]">Sneaky Warrior 3D</p>
                <p>Skinned-mesh chunking, visibility gating, and workload control for enemy-heavy scenarios.</p>
              </li>
            </ul>
          </section>

          <section id="cta" className="rounded-2xl border border-[#CBD5E1] bg-[#EFF6FF] p-6 lg:col-span-12">
            <h2 className="text-lg font-semibold">Ready for deep Unity performance ownership?</h2>
            <p className="mt-2 max-w-3xl text-sm text-[#334155]">
              For senior Unity performance, rendering optimization, and XR frame-budget reliability work, reach out directly.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <SmartLink href="mailto:jamesderaja@gmail.com" className="inline-flex items-center rounded-lg bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#115E59]">Email James</SmartLink>
              <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="inline-flex items-center rounded-lg border border-[#CBD5E1] px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-white">Message on LinkedIn</SmartLink>
              <SmartLink href="https://github.com/JamesDeRaja" className="inline-flex items-center rounded-lg border border-[#CBD5E1] px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-white">Review GitHub</SmartLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
