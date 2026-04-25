import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';

const zohoMetrics = [
  { value: '5M+', label: 'executions / day', sub: 'CRM integration' },
  { value: '8,000+', label: 'organizations', sub: 'on a single integration' },
  { value: '5 of 10', label: 'top integrations', sub: 'built by me' },
];

const alphadenMetrics = [
  { value: '100+', label: 'titles shipped', sub: 'iOS · Android · itch.io' },
  { value: '500K+', label: 'cumulative downloads', sub: 'across published titles' },
  { value: 'Round 1', label: 'Supersonic Hypercasual', sub: '$2M prize pool · winner' },
];

interface Achievement {
  title: string;
  detail: string;
  scale?: string;
}

const zohoAchievements: Achievement[] = [
  {
    title: 'Own the Zoho CRM integration for Flow',
    detail:
      'The actions and triggers I wrote run ~5M times per day across 8,000+ organizations. Currently leading a backwards-incompatible deprecation — designed a migration path that requires zero action from customers.',
    scale: '5M / day · 8,000+ orgs',
  },
  {
    title: 'Built 5 of the top 10 most-used integrations on Zoho Flow',
    detail:
      '100+ integrations shipped total on the platform. Five of the ten most-used integrations platform-wide were designed and built by me.',
    scale: '100+ integrations built',
  },
  {
    title: 'Zero-downtime environment variable system — Zoho Creator',
    detail:
      'Full design, implementation, test, and release. Went live without a single incident. No customer-reported issues post-release.',
    scale: '1M+ / day · 1,500+ orgs · zero incidents',
  },
  {
    title: 'Fixed a live production server crash',
    detail:
      'A data overload was crashing servers in production. Diagnosed the root cause, engineered a fix that reduced system load by 70–85% — without changing the customer-facing API contract at all. 2,500+ orgs stayed unaffected.',
    scale: '3M / day · 2,500+ orgs · 70–85% load reduction',
  },
  {
    title: 'Mentoring 6+ engineers · advising cross-team on API design',
    detail:
      '6 active mentees (2 direct reports). Total mentorship footprint of 20+ engineers. Also advise other Zoho product teams on API design for systems handling tens of millions of calls per day.',
    scale: '20+ engineers mentored',
  },
  {
    title: 'Built an AI-powered documentation pipeline',
    detail:
      'Reduced my personal developer support ticket load from 13+ important tickets per day to 1–2. Nearly eliminated the content team\'s app review backlog by auto-generating structured implementation docs from developer notes.',
    scale: '13+ tickets → 1–2 / day',
  },
];

interface PerformanceStudy {
  title: string;
  result: string;
  href: string;
}

const performanceStudies: PerformanceStudy[] = [
  {
    title: 'XR Performance Stress Lab',
    result: '+7.27 ms GPU isolated under overdraw stress',
    href: '/case-studies/xr-stress-lab',
  },
  {
    title: 'Update Strategies at Scale (10K entities)',
    result: '~40 ms → ~9.4 ms moving from MonoBehaviour to ECS',
    href: '/case-studies/update-strategies-scale',
  },
  {
    title: 'SoftMaskPro UI Rendering Cost',
    result: 'WaitForPresent spikes traced across 1, 3, 40 mask scenarios',
    href: '/case-studies/softmaskpro',
  },
];

const alphadenAchievements: Achievement[] = [
  {
    title: '100+ titles shipped across iOS, Android, and itch.io',
    detail:
      'Production titles including Sneaky Warrior 3D, Snake Hole Puzzle, and Bolt Pop 3D. Held stable 60 FPS on low-end Android via tiered skinned-mesh spawning, deterministic bullet pooling, and runtime voxelisation pipelines.',
    scale: '500K+ cumulative downloads',
  },
  {
    title: 'Supersonic Hypercasual Competition — Round 1 Winner',
    detail:
      'Selected from a global submission pool — judged on CPI, D1 retention, and first-time-user experience. Built 50+ commissioned prototypes for hypercasual publishers (Voodoo, Lion Studios, Supersonic).',
    scale: '$2M prize pool · 50+ paid prototypes',
  },
  {
    title: 'Real-time multiplayer netcode — 8 concurrent players',
    detail:
      'Designed client-side prediction and state reconciliation from scratch in Unity / C#. Held stable 60 FPS on target devices under worst-case input churn.',
    scale: '60 FPS held under input churn',
  },
  {
    title: 'Mesh-combining pipeline for static environment geometry',
    detail:
      'Reduced draw calls dramatically while keeping interactable objects separate. Object pooling and allocation-free update loops eliminated frame-time spikes on 2GB RAM devices.',
    scale: '~80% draw call reduction',
  },
];

const foundations = [
  'Data structures & algorithms in C#',
  'Game Programming Patterns — Sequencing, Behavioral, Decoupling, Optimization',
  'ECS / DOTS — active production projects',
  'Burst compiler & Job System for cache-friendly hot paths',
];

const sharedStrengths = [
  'Measure before touching anything — profiler or logs first, always',
  'Reproducible evidence for every performance or reliability claim',
  'Engineering discipline under production pressure — live traffic, no downtime',
  'Systems thinking: API contracts, migration paths, and customer impact built in from day one',
];

export default function ExperienceBentoSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          14+ years building systems that run under real load
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Enterprise API infrastructure at Zoho — millions of executions per day, thousands of organizations.
          Game and XR performance engineering at AlphaDen — 100+ shipped titles, hypercasual publisher work,
          and three published performance case studies. The discipline runs through both: measure, prove, fix.
        </p>
      </motion.div>

      <BentoGrid className="mb-4">
        {/* ── Zoho card ── */}
        <motion.div
          className="lg:col-span-6 md:col-span-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="default" padding="none" glow="cyan" className="h-full flex flex-col">
            {/* Header */}
            <div className="border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Enterprise Systems · Integration Platform
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">Zoho Corporation</h3>
                  <p className="mt-0.5 text-sm text-neon/80">Senior Systems Engineer</p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">2017 – Present · 9+ years</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-neon/15 bg-neon/[0.05] px-3 py-2 text-center">
                  <p className="font-mono text-lg font-bold text-neon">9+</p>
                  <p className="text-[11px] text-slate-500">years</p>
                </div>
              </div>

              {/* Top-line scale metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {zohoMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-neon/10 bg-neon/[0.04] px-2.5 py-2 text-center"
                  >
                    <p className="font-mono text-sm font-bold text-neon">{m.value}</p>
                    <p className="text-[10px] text-slate-400 leading-snug">{m.label}</p>
                    <p className="text-[10px] text-slate-600 leading-snug">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="divide-y divide-white/[0.04] flex-1">
              {zohoAchievements.map((item) => (
                <div key={item.title} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold text-white leading-snug">{item.title}</p>
                    {item.scale && (
                      <span className="flex-shrink-0 font-mono text-[10px] text-neon/60 text-right leading-snug">
                        {item.scale}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="border-t border-white/[0.05] px-6 py-3">
              <div className="flex flex-wrap gap-1.5">
                {['REST APIs', 'distributed systems', 'zero-downtime releases', 'AI tooling', 'async workflows', 'mentorship'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.07] bg-white/[0.03] font-mono text-[10px] px-1.5 py-0.5 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* ── AlphaDen card ── */}
        <motion.div
          className="lg:col-span-6 md:col-span-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <BentoCard variant="highlight" padding="none" glow="purple" className="h-full flex flex-col">
            {/* Header */}
            <div className="border-b border-electric/10 px-6 py-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Game Studio · XR Performance Research
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-white">AlphaDen</h3>
                  <p className="mt-0.5 text-sm text-electric/80">Founder · Performance Engineer</p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500">2012 – Present · 14+ years</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-electric/20 bg-electric/[0.07] px-3 py-2 text-center">
                  <p className="font-mono text-lg font-bold text-electric">14+</p>
                  <p className="text-[11px] text-slate-500">years</p>
                </div>
              </div>

              {/* Top-line metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {alphadenMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-electric/15 bg-electric/[0.04] px-2.5 py-2 text-center"
                  >
                    <p className="font-mono text-sm font-bold text-electric">{m.value}</p>
                    <p className="text-[10px] text-slate-400 leading-snug">{m.label}</p>
                    <p className="text-[10px] text-slate-600 leading-snug">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Studies — featured row */}
            <div className="border-b border-electric/[0.08] px-6 py-4">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-electric/60">
                Published Performance Studies
              </p>
              <div className="space-y-1.5">
                {performanceStudies.map((s) => (
                  <SmartLink
                    key={s.href}
                    href={s.href}
                    className="group flex items-start justify-between gap-3 rounded-lg border border-electric/10 bg-electric/[0.03] px-3 py-2 hover:border-electric/25 hover:bg-electric/[0.06] transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white group-hover:text-electric transition-colors leading-snug">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400 leading-snug">{s.result}</p>
                    </div>
                    <ArrowRight size={12} className="mt-1 flex-shrink-0 text-electric/40 group-hover:text-electric group-hover:translate-x-0.5 transition-all" />
                  </SmartLink>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="divide-y divide-white/[0.04] flex-1">
              {alphadenAchievements.map((item) => (
                <div key={item.title} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold text-white leading-snug">{item.title}</p>
                    {item.scale && (
                      <span className="flex-shrink-0 font-mono text-[10px] text-electric/60 text-right leading-snug">
                        {item.scale}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Always Studying / Foundations */}
            <div className="border-t border-electric/[0.08] px-6 py-4">
              <p className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-electric/60">
                Foundations · Always Studying
              </p>
              <ul className="space-y-1.5">
                {foundations.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-electric/50" />
                    <span className="text-xs text-slate-400 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="border-t border-electric/[0.07] px-6 py-3">
              <div className="flex flex-wrap gap-1.5">
                {['Unity 6', 'URP', 'OpenXR', 'ECS / DOTS', 'Burst', 'mobile', 'publisher PPP'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-electric/10 bg-electric/[0.04] font-mono text-[10px] px-1.5 py-0.5 text-electric/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </BentoGrid>

      {/* Shared discipline statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <BentoCard variant="dim" padding="md" glow="none" className="border-dashed">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            Shared Engineering Discipline
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sharedStrengths.map((s) => (
              <div key={s} className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-neon/30" />
                <span className="text-xs text-slate-400 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 italic">
            Whether it's a 3M-execution-per-day API system or a 16.67 ms XR frame budget —
            the approach is the same. Diagnose with evidence. Fix without breaking what works. Verify the result.
          </p>
        </BentoCard>
      </motion.div>
    </section>
  );
}
