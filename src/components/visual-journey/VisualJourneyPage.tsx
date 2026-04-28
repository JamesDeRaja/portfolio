import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SmartLink from '../SmartLink';
import JourneyStage from './JourneyStage';
import ScrollProgressRail from './ScrollProgressRail';
import VisualJourneyCharacter from './VisualJourneyCharacter';
import type { JourneyStageData } from './types';

const journeyStages: JourneyStageData[] = [
  {
    id: 'journey-stage-college',
    phase: 'College & foundations',
    title: 'Learning how systems move',
    description: 'Built the foundation in programming, logic, and real-time interaction.',
    bubbles: ['C#', 'Unity', 'Game loops', 'Math', 'Problem solving'],
    visualState: 'college',
  },
  {
    id: 'journey-stage-first-games',
    phase: 'Early game development',
    title: 'From idea to playable loops',
    description: 'Shipped early prototypes and learned rapid iteration, controls, and game feel.',
    bubbles: ['Prototype', 'Iteration', 'Game feel', 'Retention'],
    visualState: 'first-games',
  },
  {
    id: 'journey-stage-mobile-production',
    phase: 'Hyper-casual production',
    title: 'Mobile production with measurable outcomes',
    description: 'Scaled prototype throughput while improving retention and reducing acquisition cost.',
    bubbles: ['Publisher prototypes', 'Fast iteration loops', 'Mobile systems'],
    metrics: ['D1 retention improved 27% → 37%', 'CPI reduced to $0.37'],
    visualState: 'hyper-casual',
  },
  {
    id: 'journey-stage-publisher',
    phase: 'Publisher collaboration',
    title: 'Market-tested gameplay delivery',
    description: 'Collaborated with major publishers and turned validated concepts into public releases.',
    bubbles: ['50+ commissioned prototypes', '100+ public releases', 'Market-tested gameplay'],
    chips: ['Voodoo', 'Lion Studios', 'Supersonic'],
    visualState: 'publisher',
  },
  {
    id: 'journey-stage-performance',
    phase: 'Performance engineering',
    title: 'Profiler-backed optimization systems',
    description: 'Focused on deterministic frame budgets, bottleneck isolation, and production-safe optimizations.',
    bubbles: ['CPU/GPU bottleneck isolation', 'GC-free systems', 'Frame pacing', 'Profiler-backed experiments'],
    metrics: ['11ms / 16.6ms frame budgets'],
    visualState: 'performance',
  },
  {
    id: 'journey-stage-xr',
    phase: 'XR rendering research',
    title: 'Rendering cost analysis under XR constraints',
    description:
      'Ran XR rendering studies to isolate overdraw amplification, stereo pipeline costs, and tile-based GPU behavior.',
    bubbles: ['Stereo rendering', 'Overdraw amplification', '+7.27ms GPU cost isolated', 'Tile-based GPU awareness'],
    visualState: 'xr',
  },
  {
    id: 'journey-stage-current',
    phase: 'Current positioning',
    title: 'Senior Real-Time Performance Engineer',
    description:
      'Now focused on Unity rendering, frame pacing, XR optimization, and evidence-driven performance engineering.',
    bubbles: ['Unity Rendering', 'Frame Pacing', 'XR Optimization', 'Performance case studies available'],
    visualState: 'current',
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  return isMobile;
}

export default function VisualJourneyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const railProgress = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const stageProgress = (activeIndex + 1) / journeyStages.length;

  return (
    <div className="mx-auto max-w-screen-2xl px-4 pb-16 sm:px-6 lg:px-8" id="journey-start">
      <div className="mt-8 grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)]">
        <ScrollProgressRail stages={journeyStages} activeIndex={activeIndex} />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_430px]">
          <div className="order-2 space-y-6 lg:order-1">
            {journeyStages.map((stage, index) => (
              <JourneyStage
                key={stage.id}
                stage={stage}
                index={index}
                isActive={index === activeIndex}
                isMobile={isMobile}
                onEnter={setActiveIndex}
                progress={stageProgress}
              />
            ))}

            <section className="rounded-3xl border border-white/10 bg-void-900/60 p-6 backdrop-blur-xl md:p-8">
              <h2 className="text-2xl font-semibold text-white">Want the standard version?</h2>
              <p className="mt-3 text-sm text-slate-300">
                Open the resume, case studies, or GitHub evidence behind the visual journey.
              </p>

              <div className="mt-6 grid gap-2 rounded-2xl border border-white/10 bg-void-950/70 p-4 text-sm text-slate-300 sm:grid-cols-2">
                <p>• 13+ years real-time systems experience</p>
                <p>• 10+ years Unity</p>
                <p>• Mobile games, rendering, XR, frame pacing</p>
                <p>• Published with Voodoo, Lion Studios, Supersonic</p>
                <p>• Performance case studies available</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <SmartLink href="/resume/viewer.html?file=James%20DeRaja%20Resume.pdf" className="rounded-lg border border-neon/40 bg-neon/15 px-4 py-2 text-sm font-semibold text-neon">
                  View Resume
                </SmartLink>
                <a href="/resume/James%20DeRaja%20Resume.pdf" download className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  Download Resume
                </a>
                <SmartLink href="/case-studies/xr-stress-lab" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  View Case Studies
                </SmartLink>
                <SmartLink href="https://github.com/JamesDeRaja" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  View GitHub
                </SmartLink>
                <SmartLink href="mailto:jamesderaja@gmail.com" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  Contact
                </SmartLink>
              </div>
            </section>
          </div>

          <motion.div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start" style={{ scale: railProgress }}>
            <VisualJourneyCharacter stage={journeyStages[activeIndex]} progress={stageProgress} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
