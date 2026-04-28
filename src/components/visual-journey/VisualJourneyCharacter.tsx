import { motion, useReducedMotion } from 'framer-motion';
import type { JourneyStageData } from './types';

type VisualJourneyCharacterProps = {
  stage: JourneyStageData;
  progress: number;
  mobile?: boolean;
};

const stageTints: Record<JourneyStageData['visualState'], string> = {
  college: 'from-neon/20 via-electric/20 to-transparent',
  'first-games': 'from-electric/20 via-neon/15 to-transparent',
  'hyper-casual': 'from-neon/30 via-neon/5 to-transparent',
  publisher: 'from-electric/30 via-neon/15 to-transparent',
  performance: 'from-neon/30 via-cyan-500/20 to-transparent',
  xr: 'from-fuchsia-500/25 via-neon/15 to-transparent',
  current: 'from-neon/35 via-electric/15 to-transparent',
};

function StageOverlay({ visualState }: { visualState: JourneyStageData['visualState'] }) {
  if (visualState === 'xr') {
    return (
      <>
        <div className="absolute inset-x-10 top-16 h-8 rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/10" />
        <div className="absolute inset-x-14 top-20 h-8 rounded-lg border border-neon/30 bg-neon/10" />
        <div className="absolute right-12 top-10 h-3 w-3 rounded-full bg-red-400 animate-pulse" />
      </>
    );
  }

  if (visualState === 'performance' || visualState === 'current') {
    return (
      <>
        <div className="absolute left-8 top-12 h-16 w-20 rounded-xl border border-neon/20 bg-void-900/80 p-2">
          <div className="mb-1 h-1.5 w-1/2 rounded bg-neon/60" />
          <div className="h-1.5 w-4/5 rounded bg-emerald-300/70" />
          <div className="mt-2 h-6 rounded bg-gradient-to-r from-neon/50 to-electric/60" />
        </div>
        <div className="absolute right-8 top-12 h-16 w-20 rounded-xl border border-neon/20 bg-void-900/80 p-2">
          <div className="mb-2 h-1.5 w-2/3 rounded bg-red-300/80" />
          <div className="h-7 rounded border border-white/10">
            <div className="h-full w-3/5 rounded bg-red-400/60" />
          </div>
        </div>
      </>
    );
  }

  if (visualState === 'publisher') {
    return (
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-2">
        {['Voodoo', 'Lion Studios', 'Supersonic'].map((chip) => (
          <span key={chip} className="rounded-full border border-white/15 bg-void-900/80 px-3 py-1 text-[10px] font-mono text-slate-300">
            {chip}
          </span>
        ))}
      </div>
    );
  }

  if (visualState === 'hyper-casual' || visualState === 'first-games') {
    return (
      <>
        <div className="absolute left-12 top-16 h-10 w-6 rounded-md border border-neon/20 bg-void-900/80" />
        <div className="absolute left-24 top-24 h-6 w-6 rounded-md bg-neon/20" />
        <div className="absolute right-16 top-20 h-5 w-5 rounded-full bg-electric/30" />
      </>
    );
  }

  return (
    <>
      <div className="absolute left-10 top-14 h-9 w-14 rounded-md border border-neon/20 bg-void-900/80" />
      <div className="absolute right-14 top-20 h-8 w-10 rounded-md border border-neon/20 bg-void-900/80" />
    </>
  );
}

export default function VisualJourneyCharacter({ stage, progress, mobile = false }: VisualJourneyCharacterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-void-900/70 p-6 backdrop-blur-xl">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stageTints[stage.visualState]}`} />
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-40" />

      <StageOverlay visualState={stage.visualState} />

      <motion.div
        className="relative mx-auto mt-14 flex h-48 w-40 flex-col items-center"
        animate={
          reduceMotion
            ? undefined
            : {
                y: mobile ? [0, -2, 0] : [0, -4, 0],
                rotate: [0, 0.5, -0.5, 0],
              }
        }
        transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <div className="h-14 w-14 rounded-full border border-white/15 bg-gradient-to-br from-slate-300/80 to-slate-500/80" />
        <div className="mt-2 h-20 w-24 rounded-2xl border border-white/15 bg-gradient-to-br from-neon/30 to-electric/30" />
        <div className="mt-2 flex w-full justify-between px-2">
          <div className="h-10 w-7 rounded-full border border-white/15 bg-slate-400/60" />
          <div className="h-10 w-7 rounded-full border border-white/15 bg-slate-400/60" />
        </div>
      </motion.div>

      <motion.div
        className="relative mt-3 h-2 rounded-full bg-white/10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
      >
        <motion.div className="h-full rounded-full bg-gradient-to-r from-neon to-electric" style={{ width: `${Math.max(8, progress * 100)}%` }} />
      </motion.div>
      <p className="mt-3 text-center text-xs font-mono uppercase tracking-[0.2em] text-slate-400">{stage.phase}</p>
    </div>
  );
}
