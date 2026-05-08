import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BentoGrid from '../components/bento/BentoGrid';
import BentoCard from '../components/bento/BentoCard';
import SmartLink from '../components/SmartLink';
import { unityGameDevYearsLabel } from '../utils/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const zohoMetrics = [
  { value: '5M+', label: 'daily executions', sub: 'Zoho Flow · Zoho CRM triggers/actions' },
  { value: '8,000+', label: 'organizations served', sub: 'Zoho Flow · Zoho CRM integration' },
  { value: '3M+', label: 'executions / day', sub: 'Zoho Creator affected subsystem' },
];

const alphadenMetrics = [
  { value: '500K+', label: 'total downloads', sub: 'across published mobile games' },
  { value: '100+', label: 'released mobile titles', sub: 'publisher-style pipelines' },
  { value: '~10', label: 'live-ops titles', sub: 'post-launch improvement work' },
];

interface Achievement {
  title: string;
  detail: string;
  scale: string;
}

const zohoAchievements: Achievement[] = [
  {
    title: 'Own Zoho Flow triggers and actions across major integrations',
    detail: 'Developed Zoho Flow triggers and actions for Zoho CRM, Zoho Creator, Microsoft, Google, Shopify, and other integrations; the Zoho CRM integration alone handles 5M+ daily executions across 8,000+ organizations. Leading a backwards-incompatible deprecation designed with a migration path that requires zero action from customers.',
    scale: '5M+ / day · 8,000+ orgs',
  },
  {
    title: 'Built 5 of the top 10 most-used integrations on Zoho Flow',
    detail: '100+ integrations shipped total on the platform. Five of the ten most-used integrations platform-wide were designed and built by me.',
    scale: '100+ integrations built',
  },
  {
    title: 'Zero-downtime environment variable system — Zoho Creator',
    detail: 'Full design, implementation, test, and release. Went live without a single incident. No customer-reported issues post-release.',
    scale: 'zero incidents',
  },
  {
    title: 'Diagnosed production crash impact in Zoho Creator',
    detail: 'Diagnosed production crash impact in Zoho Creator subsystem handling 3M+ executions/day across 2,500+ organizations; reduced system load by 70–85% without changing the customer-facing API contract.',
    scale: '3M+ / day · 2,500+ orgs',
  },
  {
    title: 'Mentoring 6+ engineers · advising cross-team on API design',
    detail: '6 active mentees (2 direct reports). Total mentorship footprint of 20+ engineers. Also advise other Zoho product teams on integration design for systems at tens of millions of calls per day.',
    scale: '20+ engineers',
  },
  {
    title: 'Built an AI-powered documentation pipeline',
    detail: "Reduced personal developer support ticket load from 13+ important tickets per day to 1–2. Nearly eliminated the content team's app review backlog by auto-generating structured implementation docs.",
    scale: '13+ → 1–2 tickets/day',
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
    result: 'Isolated +7.27 ms GPU cost under MSAA 4× transparent overdraw',
    href: '/case-studies/xr-stress-lab',
  },
  {
    title: 'Update Strategies at Scale (10K entities)',
    result: '40 ms → 9.4 ms · 24 FPS → 106 FPS under matched workload',
    href: '/case-studies/update-strategies-scale',
  },
  {
    title: 'SoftMaskPro UI Rendering Cost',
    result: 'WaitForPresent spikes traced across 1, 3, 40 masks',
    href: '/case-studies/softmaskpro',
  },
];

const alphadenAchievements: Achievement[] = [
  {
    title: '500K+ total downloads across published mobile games',
    detail: '100+ released mobile titles through publisher-style production and testing pipelines, including Sneaky Warrior 3D, Snake Hole Puzzle, and Bolt Pop 3D.',
    scale: '100+ released titles',
  },
  {
    title: 'Advanced in Supersonic’s Hypercasual Competition',
    detail: 'Advanced in Supersonic’s Hypercasual Competition, selected on CPI, D1 retention, and FTUE performance. Built 50+ commissioned prototypes for hypercasual publishers (Voodoo, Lion Studios, Supersonic).',
    scale: 'CPI · D1 · FTUE',
  },
  {
    title: 'Real-time multiplayer netcode — 8 concurrent players',
    detail: 'Designed client-side prediction and state reconciliation from scratch in Unity / C#. Held stable 60 FPS on target devices under worst-case input churn.',
    scale: '60 FPS held',
  },
  {
    title: 'Mesh-combining pipeline for static environment geometry',
    detail: 'Reduced draw calls dramatically while keeping interactable objects separate. Object pooling and allocation-free update loops eliminated frame-time spikes on 2 GB RAM devices.',
    scale: '~80% draw call reduction',
  },
];

const foundations = [
  'Unity Profiler, Frame Debugger, and RenderDoc',
  'URP, XR frame pacing, and OVR Metrics Tool',
  'ECS / DOTS, Burst / Jobs, and NativeArray',
  'Android Profiler and Xcode Instruments',
];

const zohoContext = [
  'Zoho Flow execution platform — triggers/actions across Zoho CRM, Zoho Creator, Microsoft, Google, Shopify, and other integrations',
  'Zoho CRM integration alone handles 5M+ executions/day across 8,000+ organizations',
  'Backwards-compatible deprecation strategy across 8,000+ live organizations — zero forced migrations',
  'API versioning and migration path design under live production traffic — no downtime, no API breaks',
];

const sharedStrengths = [
  'Measure before touching anything — profiler or logs first, always',
  'Reproducible evidence for every performance or reliability claim',
  'Engineering discipline under production pressure — live traffic, no downtime',
  'Systems thinking: API contracts, migration paths, and customer impact built in from day one',
];

function AchievementRow({
  item,
  accentColor,
}: {
  item: Achievement;
  accentColor: 'neon' | 'electric';
}) {
  const scaleClass = accentColor === 'neon' ? 'text-neon/70 border-neon/15 bg-neon/[0.05]' : 'text-electric/70 border-electric/15 bg-electric/[0.05]';
  const dotClass = accentColor === 'neon' ? 'bg-neon/50' : 'bg-electric/50';

  return (
    <div className="px-6 py-4 group">
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotClass}`} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
            <span className={`flex-shrink-0 rounded-full border font-mono text-[10px] px-2 py-0.5 ${scaleClass}`}>
              {item.scale}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{item.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceBentoSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-neon/[0.04] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-electric/[0.04] blur-[110px]" />
      </div>

      {/* Section header */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon/60">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {unityGameDevYearsLabel} years building games and systems that run under real load
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
          Enterprise API infrastructure at Zoho — millions of executions per day, thousands of
          organizations. Unity game development and performance research at AlphaDen — 100+ released mobile titles,
          500K+ total downloads across published mobile games, and profiler-validated results.
        </p>
      </motion.div>

      <BentoGrid className="mb-4">
        {/* ── Zoho card ── */}
        <motion.div
          className="lg:col-span-6 md:col-span-3"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BentoCard variant="default" padding="none" glow="cyan" className="h-full flex flex-col">
            {/* Header */}
            <div className="px-6 pt-6 pb-5 border-b border-white/[0.06]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Enterprise Systems · Integration Platform
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">Member Leadership Staff — Zoho</h3>
                  <p className="mt-0.5 text-sm font-medium text-neon/80">Since 2017 · Distributed systems, production reliability, API execution platforms</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-neon/20 bg-neon/[0.07] px-4 py-2.5 text-center">
                  <p className="font-mono text-xl font-bold text-neon">2017</p>
                  <p className="text-[11px] text-slate-500">since</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {zohoMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-neon/10 bg-neon/[0.04] px-2.5 py-2.5 text-center"
                  >
                    <p className="font-mono text-base font-bold text-neon">{m.value}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400 leading-snug">{m.label}</p>
                    <p className="text-[10px] text-slate-600 leading-snug">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="divide-y divide-white/[0.04]">
              {zohoAchievements.map((item) => (
                <AchievementRow key={item.title} item={item} accentColor="neon" />
              ))}
            </div>

            {/* Scale & Systems Context */}
            <div className="border-t border-white/[0.06] px-6 py-4">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Scale & Systems Context
              </p>
              <ul className="space-y-2">
                {zohoContext.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neon/30" />
                    <span className="text-xs text-slate-400 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Tags */}
            <div className="border-t border-white/[0.06] px-6 py-3.5">
              <div className="flex flex-wrap gap-1.5">
                {['REST APIs', 'distributed systems', 'zero-downtime', 'AI tooling', 'async workflows', 'mentorship'].map((tag) => (
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
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BentoCard variant="highlight" padding="none" glow="purple" className="h-full flex flex-col">
            {/* Header */}
            <div className="px-6 pt-6 pb-5 border-b border-electric/[0.10]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Game Studio · XR Performance Research
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">AlphaDen — Independent Unity R&D</h3>
                  <p className="mt-0.5 text-sm font-medium text-electric/80">2013–Present · Unity game development, mobile publishing pipelines, performance research</p>
                </div>
                <div className="flex-shrink-0 rounded-xl border border-electric/20 bg-electric/[0.07] px-4 py-2.5 text-center">
                  <p className="font-mono text-xl font-bold text-electric">{unityGameDevYearsLabel}</p>
                  <p className="text-[11px] text-slate-500">years</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {alphadenMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-electric/15 bg-electric/[0.04] px-2.5 py-2.5 text-center"
                  >
                    <p className="font-mono text-base font-bold text-electric">{m.value}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400 leading-snug">{m.label}</p>
                    <p className="text-[10px] text-slate-600 leading-snug">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Published Performance Studies */}
            <div className="px-6 py-5 border-b border-electric/[0.08]">
              <p className="mb-3.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-electric/60">
                Published Performance Studies
              </p>
              <div className="space-y-2">
                {performanceStudies.map((s) => (
                  <SmartLink
                    key={s.href}
                    href={s.href}
                    className="group flex items-start justify-between gap-3 rounded-lg border border-electric/10 bg-electric/[0.03] px-3.5 py-3 hover:border-electric/30 hover:bg-electric/[0.07] transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white group-hover:text-electric transition-colors leading-snug">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-400 leading-snug">{s.result}</p>
                    </div>
                    <ArrowRight size={12} className="mt-0.5 flex-shrink-0 text-electric/40 group-hover:text-electric group-hover:translate-x-0.5 transition-all" />
                  </SmartLink>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="divide-y divide-white/[0.04]">
              {alphadenAchievements.map((item) => (
                <AchievementRow key={item.title} item={item} accentColor="electric" />
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Foundations */}
            <div className="border-t border-electric/[0.08] px-6 py-4">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-electric/60">
                Current Technical Focus
              </p>
              <ul className="space-y-1.5">
                {foundations.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-electric/40" />
                    <span className="text-xs text-slate-400 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="border-t border-electric/[0.07] px-6 py-3.5">
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
        custom={3}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
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
            Whether it's an affected 3M-execution-per-day subsystem or a 16.67 ms XR frame budget —
            the approach is the same. Diagnose with evidence. Fix without breaking what works. Verify the result.
          </p>
        </BentoCard>
      </motion.div>
    </section>
  );
}
