import { motion } from 'framer-motion';
import type { JourneyStageData } from './types';

type ScrollProgressRailProps = {
  stages: JourneyStageData[];
  activeIndex: number;
};

export default function ScrollProgressRail({ stages, activeIndex }: ScrollProgressRailProps) {
  return (
    <aside className="sticky top-24 hidden w-56 self-start rounded-2xl border border-white/10 bg-void-900/70 p-4 backdrop-blur-xl xl:block">
      <p className="mb-4 text-xs font-mono uppercase tracking-[0.18em] text-slate-400">Journey Progress</p>
      <div className="relative pl-4">
        <div className="absolute left-1.5 top-1 h-[calc(100%-8px)] w-px bg-white/10" />
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => document.getElementById(stage.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="relative mb-3 block w-full text-left"
          >
            <motion.span
              className={`absolute -left-[0.6rem] top-1.5 h-2.5 w-2.5 rounded-full ${
                index <= activeIndex ? 'bg-neon' : 'bg-white/20'
              }`}
              animate={{ scale: index === activeIndex ? 1.2 : 1 }}
            />
            <span className={`text-xs ${index === activeIndex ? 'text-neon' : 'text-slate-400'}`}>{stage.phase}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
