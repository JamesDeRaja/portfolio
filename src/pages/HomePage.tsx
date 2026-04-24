import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SmartLink from '../components/SmartLink';
import { Seo } from '../components/Seo';
import ParticleField from '../components/ParticleField';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import MetricBadge from '../components/bento/MetricBadge';
import ProofCard from '../components/bento/ProofCard';
import CaseStudyCard from '../components/bento/CaseStudyCard';
import SkillClusterCard from '../components/bento/SkillClusterCard';

const technicalFocus = [
  {
    title: 'CPU/GPU Bottleneck Isolation',
    body: 'Use Unity Profiler, Frame Debugger, and controlled toggles to classify bottlenecks before fixes. ATS: GPU-bound, CPU-bound, frame-time delta.',
  },
  {
    title: 'XR Frame Pacing',
    body: 'Target 90Hz/72Hz budgets using frame-time variance tracking, spike classification, and frame-budget aware mitigation.',
  },
  {
    title: 'Unity Rendering / URP',
    body: 'Optimise transparent passes, overdraw hotspots, and render-path setup with reproducible URP benchmark scenes.',
  },
  {
    title: 'ECS / DOTS Direction',
    body: 'Compare manager-driven Update workflows vs ECS patterns for large agent counts and deterministic behavior under stress.',
  },
  {
    title: 'Object Lifecycle Optimisation',
    body: 'Minimise instantiation/destruction overhead with pooling, lifecycle gates, and measured allocation discipline.',
  },
  {
    title: 'Tools & Deterministic Test Scenes',
    body: 'Build profiler HUDs, fixed camera paths, and controlled scenario toggles for baseline vs stress comparison.',
  },
  {
    title: 'GC / Allocation Discipline',
    body: 'Track GC alloc per frame, remove runtime churn paths, and validate memory behavior across long captures.',
  },
  {
    title: 'Profiling Pipelines',
    body: 'Standardise capture notes, bottleneck labels, and mitigation logs so optimisation decisions are auditable.',
  },
];

const evidenceCards = [
  {
    title: 'Profiler screenshot',
    image: '/lab/SoftMaskPro_ScenarioB_Profiler.png',
    note: 'SoftMaskPro worst-case profiling capture.',
  },
  {
    title: 'Frame Debugger screenshot',
    image: '/lab/Overdraw_FrameDebugger_TransparentPass.png',
    note: 'Transparent pass inspection for overdraw pressure.',
  },
  {
    title: 'Baseline vs stress table',
    image: '/lab/Overdraw_Experiment_Summary.png',
    note: 'Baseline vs overdraw stress comparison.',
  },
  {
    title: 'Bottleneck classification',
    image: '/lab/Overdraw_CPU_RenderThread_Comparison.png',
    note: 'CPU vs render thread classification evidence.',
  },
  {
    title: 'Mitigation notes',
    image: '/lab/SoftMaskPro_Patch3_GateQueuePlayerLoopUpdate.png',
    note: 'Patch-level mitigation log in context.',
  },
  {
    title: 'Before/after measurements',
    image: '',
    note: 'Evidence image pending',
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
    <div className="relative min-h-screen bg-void-950 text-slate-200">
      <Seo
        title="James De Raja — Senior Real-Time Performance Engineer | Unity Rendering & XR Performance"
        description="Senior Unity and real-time performance engineer focused on XR frame budgets, rendering optimisation, CPU/GPU bottleneck isolation, and profiler-validated case studies."
        url="https://james.alphaden.club/"
        keywords="senior unity engineer, unity performance engineer, xr performance engineer, rendering engineer, real-time systems engineer, unity profiler"
      />

      <ParticleField />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />

      <main className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section aria-labelledby="hero-title">
          <BentoGrid>
            <BentoCard className="lg:col-span-8 md:col-span-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-neon">Senior Unity / Real-Time Systems</p>
              <h1 id="hero-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Senior Real-Time Performance Engineer
              </h1>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                Unity Rendering • XR Frame Budgets • CPU/GPU Bottleneck Isolation
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
                I build profiler-validated real-time systems where frame stability, rendering cost, and reproducible performance evidence matter.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <SmartLink href="#work" className="btn-primary rounded-lg px-4 py-2 text-sm font-medium">View Case Studies</SmartLink>
                <SmartLink href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf" className="btn-secondary rounded-lg px-4 py-2 text-sm font-medium">View Resume</SmartLink>
                <SmartLink href="#contact" className="btn-secondary rounded-lg px-4 py-2 text-sm font-medium">Contact</SmartLink>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['13+ years', 'Unity / C#', 'XR / URP / OpenXR', '1M+ game installs', 'Published with Voodoo, Lion Studios, Supersonic'].map((badge) => (
                  <MetricBadge key={badge} label={badge} />
                ))}
              </div>
            </BentoCard>

            <ProofCard
              className="lg:col-span-4 md:col-span-3"
              title="Frame Budget Card"
              items={['11.11 ms / 90Hz', '13.88 ms / 72Hz', '16.67 ms / 60Hz']}
              caption="Performance work measured against real frame budgets, not vague FPS claims."
            />

            <ProofCard
              className="lg:col-span-4 md:col-span-3"
              title="Profiler Evidence Card"
              items={['CPU Main Thread', 'Render Thread', 'GPU Frame Time', 'GC Alloc', 'Draw Calls / SetPass']}
              caption="Profiler-first diagnosis before optimisation."
            />

            <ProofCard
              className="lg:col-span-4 md:col-span-3"
              title="Published Results"
              items={['~1M installs', 'Publisher-tested prototypes', 'CPI and retention optimisation experience']}
              caption="Production outcomes and publishing feedback loops."
            />

            <BentoCard className="lg:col-span-4 md:col-span-3" title="Best fit roles">
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {[
                  'Senior Unity Engineer',
                  'Unity Performance Engineer',
                  'XR Performance Engineer',
                  'Rendering Engineer',
                  'Real-Time Systems Engineer',
                  'Technical Lead, Unity',
                ].map((role) => (
                  <li key={role}>• {role}</li>
                ))}
              </ul>
            </BentoCard>

            <BentoCard className="lg:col-span-4 md:col-span-6" title="Recruiter scan note">
              <p className="mt-3 text-sm text-slate-300">
                Not just gameplay implementation — performance diagnosis, measurable optimisation, and engineering evidence.
              </p>
            </BentoCard>
          </BentoGrid>
        </section>

        <section id="problems-solved" aria-labelledby="technical-focus-title">
          <h2 id="technical-focus-title" className="mb-4 text-2xl font-semibold tracking-tight text-white">Technical Focus</h2>
          <BentoGrid>
            {technicalFocus.map((item) => (
              <BentoCard key={item.title} className="lg:col-span-3 md:col-span-3" title={item.title}>
                <p className="mt-3 text-sm text-slate-300">{item.body}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </section>

        <section id="work" aria-labelledby="case-studies-title">
          <h2 id="case-studies-title" className="mb-4 text-2xl font-semibold tracking-tight text-white">Case Studies</h2>
          <BentoGrid>
            <CaseStudyCard
              className="lg:col-span-8 md:col-span-6"
              title="XR Performance Stress Lab"
              description="Deterministic Unity 6 URP benchmarking framework for isolating GPU fragment bottlenecks, stereo rendering cost, overdraw, and frame timing pressure."
              metric="+7.27 ms GPU cost under heavy transparent overdraw stress"
              bullets={[
                'Profiler-validated frame-time deltas under controlled toggles.',
                'Baseline vs stress methodology for reproducible optimisation.',
              ]}
              caseStudyUrl="/case-studies/xr-stress-lab"
              evidenceUrl="#xr-lab"
            />
            <CaseStudyCard
              className="lg:col-span-4 md:col-span-3"
              title="Overdraw / Transparency Stress"
              description="ZWrite Off, alpha blending, transparent draw order, stereo cost, and GPU-bound behaviour under layered transparency."
              bullets={['Focused on fragment pressure and transparent pass amplification.']}
              caseStudyUrl="/lab/overdraw-stereo"
            />
            <CaseStudyCard
              className="lg:col-span-4 md:col-span-3"
              title="CPU vs Manager Update vs ECS Study"
              description="10,000 enemies across prefab lifecycle, manager-driven updates, and ECS comparison to quantify Update overhead and creation/destruction cost."
              bullets={['Built to classify scheduling and lifecycle bottlenecks with deterministic runs.']}
              caseStudyUrl="/case-studies/profiling-toolkit"
            />
            <CaseStudyCard
              className="lg:col-span-4 md:col-span-3"
              title="SoftMaskPro UI Rendering Cost Study"
              description="UI masking, transparency, canvas rebuilds, XR stereo amplification, and pass-level GPU cost analysis."
              bullets={['Frame Debugger and profiler captures attached in study.']}
              caseStudyUrl="/case-studies/softmaskpro"
            />
            <CaseStudyCard
              className="lg:col-span-4 md:col-span-3"
              title="Published Mobile Games"
              description="Production game development, publisher feedback loops, CPI/retention iteration, and performance-aware playable systems."
              bullets={['Published with Voodoo, Lion Studios, and Supersonic.']}
              caseStudyUrl="/case-studies/published-mobile-projects"
            />
          </BentoGrid>
        </section>

        <section id="xr-lab" aria-labelledby="evidence-title">
          <h2 id="evidence-title" className="mb-4 text-2xl font-semibold tracking-tight text-white">Evidence, Not Claims</h2>
          <BentoGrid>
            {evidenceCards.map((card) => (
              <BentoCard key={card.title} className="lg:col-span-4 md:col-span-3" title={card.title}>
                {card.image ? (
                  <img src={card.image} alt={card.title} className="mt-3 h-44 w-full rounded-lg border border-white/10 object-cover" loading="lazy" />
                ) : (
                  <div className="mt-3 flex h-44 items-center justify-center rounded-lg border border-dashed border-white/20 bg-black/20 text-sm text-slate-400">
                    Evidence image pending
                  </div>
                )}
                <p className="mt-3 text-xs text-slate-400">{card.note}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </section>

        <section id="about" aria-labelledby="experience-title">
          <h2 id="experience-title" className="mb-4 text-2xl font-semibold tracking-tight text-white">Experience</h2>
          <BentoGrid>
            <BentoCard className="lg:col-span-6 md:col-span-3" title="Zoho / Technical Lead">
              <p className="mt-3 text-sm text-slate-300">
                Built scalable integration systems, reduced latency, removed blocking I/O paths, improved observability, mentored engineers, and solved production debugging issues in high-concurrency backend systems.
              </p>
            </BentoCard>
            <BentoCard className="lg:col-span-6 md:col-span-3" title="AlphaDen / Game Studio">
              <p className="mt-3 text-sm text-slate-300">
                Led Unity production across publisher prototypes and shipped titles, with mobile optimisation, performance-aware gameplay systems, and profiler-driven iteration.
              </p>
            </BentoCard>
            <BentoCard className="lg:col-span-12 md:col-span-6">
              <p className="text-sm text-slate-300">
                Real-time performance engineering across enterprise systems, mobile games, and XR rendering.
              </p>
            </BentoCard>
          </BentoGrid>
        </section>

        <section id="shipped-titles" aria-labelledby="skills-title">
          <h2 id="skills-title" className="mb-4 text-2xl font-semibold tracking-tight text-white">Skills</h2>
          <BentoGrid>
            <SkillClusterCard
              className="lg:col-span-3 md:col-span-3"
              title="Rendering / XR"
              skills={['Unity 6', 'URP', 'OpenXR', 'XR Interaction Toolkit', 'Frame Debugger', 'Render pass analysis']}
            />
            <SkillClusterCard
              className="lg:col-span-3 md:col-span-3"
              title="Performance"
              skills={['Unity Profiler', 'CPU/GPU analysis', 'Frame pacing', 'GC allocations', 'Draw calls', 'Batching', 'Instancing', 'Overdraw', 'MSAA']}
            />
            <SkillClusterCard
              className="lg:col-span-3 md:col-span-3"
              title="Programming"
              skills={['C#', 'Unity architecture', 'Data-oriented design', 'ECS/DOTS', 'Tooling', 'Deterministic test harnesses']}
            />
            <SkillClusterCard
              className="lg:col-span-3 md:col-span-3"
              title="Systems"
              skills={['REST APIs', 'Scalable architecture', 'Observability', 'Async workflows', 'Structured logging']}
            />
          </BentoGrid>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <BentoCard title="Contact">
            <h2 id="contact-title" className="sr-only">Contact</h2>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <SmartLink href="mailto:jamesderaja@gmail.com" className="btn-secondary rounded-lg px-3 py-2">Email</SmartLink>
              <SmartLink href="https://www.linkedin.com/in/james-de-raja/" className="btn-secondary rounded-lg px-3 py-2">LinkedIn</SmartLink>
              <SmartLink href="https://github.com/JamesDeRaja" className="btn-secondary rounded-lg px-3 py-2">GitHub</SmartLink>
              <SmartLink href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf" className="btn-primary rounded-lg px-3 py-2">Resume</SmartLink>
              <SmartLink href="/case-studies/xr-stress-lab" className="btn-secondary rounded-lg px-3 py-2">Portfolio links</SmartLink>
            </div>
          </BentoCard>
        </section>
      </main>
    </div>
  );
}
