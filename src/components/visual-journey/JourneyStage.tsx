import { motion, useReducedMotion } from 'framer-motion';
import FloatingMetric from './FloatingMetric';
import ThoughtBubble from './ThoughtBubble';
import VisualJourneyCharacter from './VisualJourneyCharacter';
import type { JourneyStageData } from './types';

type JourneyStageProps = {
  stage: JourneyStageData;
  index: number;
  isActive: boolean;
  isMobile: boolean;
  onEnter: (index: number) => void;
  progress: number;
};

export default function JourneyStage({
  stage,
  index,
  isActive,
  isMobile,
  onEnter,
  progress,
}: JourneyStageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={stage.id}
      className="scroll-mt-24 rounded-3xl border border-white/10 bg-void-900/60 p-6 backdrop-blur-xl md:p-8"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.45 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      onViewportEnter={() => onEnter(index)}
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-mono uppercase tracking-wide text-neon">
          Phase {index + 1}
        </span>
        <h3 className="text-xl font-semibold text-white">{stage.title}</h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-slate-300">{stage.description}</p>

      {isMobile && (
        <div className="mb-6 md:hidden">
          <VisualJourneyCharacter stage={stage} progress={progress} mobile />
        </div>
      )}

      {!!stage.chips?.length && (
        <div className="mb-4 flex flex-wrap gap-2">
          {stage.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {stage.bubbles.map((bubble, bubbleIndex) => (
          <ThoughtBubble key={bubble} text={bubble} index={bubbleIndex} />
        ))}
      </div>

      {!!stage.metrics?.length && (
        <div className="grid gap-2 sm:grid-cols-2">
          {stage.metrics.map((metric, metricIndex) => (
            <FloatingMetric key={metric} text={metric} index={metricIndex} />
          ))}
        </div>
      )}

      {isActive && <div className="mt-6 h-px bg-gradient-to-r from-neon/80 via-electric/70 to-transparent" />}
    </motion.section>
  );
}
