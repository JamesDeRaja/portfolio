import { RotateCcw, Flag, RefreshCw, Shuffle, Eye } from 'lucide-react';

const files = ['a', 'b', 'c', 'd', 'e'];
const ranks = [6, 5, 4, 3, 2, 1];

const board = [
  ['♜', '♞', '♝', '♛', '♚'],
  ['', '', '', '', ''],
  ['', '', '♟', '', ''],
  ['', '', '', '♙', ''],
  ['', '', '', '', ''],
  ['♖', '♘', '♗', '♕', '♔'],
];

const moveRows: Array<{ move: number; white: string; black: string }> = [];

function squareState(row: number, col: number) {
  if (row === 5 && col === 3) return 'selected';
  if (row === 3 && col === 3) return 'lastMove';
  if (row === 2 && col === 2) return 'capture';
  if ((row === 4 && col === 3) || (row === 4 && col === 4)) return 'legal';
  if (row === 0 && col === 4) return 'check';
  return null;
}

function pieceColor(piece: string) {
  if (!piece) return '';
  return piece.charCodeAt(0) >= 9818 ? 'text-slate-950 black-chess-piece' : 'text-white white-chess-piece';
}

export default function MiniShuffleChessPage() {
  const hasMoves = moveRows.length > 0;
  const isBotThinking = false;
  const inCheck = true;
  const contextualHint = isBotThinking
    ? 'Bot is thinking...'
    : inCheck
      ? 'White is in check.'
      : 'Select a piece to move.';

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(90,147,255,0.18),transparent_34rem),linear-gradient(180deg,#07111f_0%,#020617_100%)] px-4 py-5 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4">
        <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sky-200/70">Alpha Den Games</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">Play Against Bot</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200 sm:text-sm">
            <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1.5 text-emerald-100">White to move</span>
            <span className="rounded-full border border-white/10 bg-white/7 px-3 py-1.5">You are White</span>
            <span className="rounded-full border border-white/10 bg-white/7 px-3 py-1.5">Bot: Medium</span>
            <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1.5 font-mono text-sky-100">Seed: BRKNQ</span>
          </div>
        </header>

        <section className="grid items-start gap-4 xl:grid-cols-[240px_minmax(520px,620px)_320px] xl:justify-center">
          <aside className="order-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-xl shadow-black/25 backdrop-blur xl:order-1">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-slate-300">Match</h2>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[0.65rem] font-semibold text-slate-300">One Match</span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white/[0.06] p-3">
                <p className="text-xs text-slate-400">White</p>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
              <div className="rounded-xl bg-white/[0.06] p-3">
                <p className="text-xs text-slate-400">Black</p>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Seed</p>
                <p className="mt-1 text-slate-200">daily-2026-05-09</p>
                <p className="font-mono text-lg font-semibold tracking-[0.2em] text-sky-100">BRKNQ</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Bot</p>
                <p className="mt-1 text-slate-200">Medium</p>
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                <RotateCcw className="h-4 w-4" /> Flip Board
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
                <Shuffle className="h-4 w-4" /> Theme
              </button>
            </div>
          </aside>

          <section className="order-1 flex flex-col items-center gap-3 xl:order-2">
            <div className="w-full rounded-[1.65rem] border border-white/12 bg-slate-950/70 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur sm:p-4">
              <div className="mx-auto grid aspect-[5/6] w-full max-w-[620px] grid-cols-5 overflow-hidden rounded-2xl border border-slate-900/80 bg-slate-900 shadow-2xl shadow-black/50">
                {board.map((row, rowIndex) =>
                  row.map((piece, colIndex) => {
                    const isLight = (rowIndex + colIndex) % 2 === 0;
                    const state = squareState(rowIndex, colIndex);
                    return (
                      <button
                        key={`${rowIndex}-${colIndex}`}
                        className={`group relative flex items-center justify-center ${isLight ? 'bg-[#d7e7f5]' : 'bg-[#2f5f8f]'} focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-inset`}
                        aria-label={`${files[colIndex]}${ranks[rowIndex]} ${piece || 'empty'}`}
                      >
                        {state === 'selected' && <span className="absolute inset-0 bg-amber-300/45 ring-4 ring-inset ring-amber-200/90" />}
                        {state === 'lastMove' && <span className="absolute inset-0 bg-cyan-300/28 ring-2 ring-inset ring-cyan-100/50" />}
                        {state === 'check' && <span className="absolute inset-0 bg-red-500/38 ring-4 ring-inset ring-red-200/80" />}
                        {state === 'legal' && <span className="absolute h-[24%] w-[24%] rounded-full bg-emerald-950/55 shadow-[0_0_0_3px_rgba(255,255,255,0.45)]" />}
                        {state === 'capture' && <span className="absolute inset-[13%] rounded-full border-[5px] border-rose-300/90 shadow-[0_0_18px_rgba(244,63,94,0.55)]" />}
                        <span className="absolute left-1.5 top-1 text-[0.58rem] font-bold text-slate-950/45 sm:text-[0.65rem]">{colIndex === 0 ? ranks[rowIndex] : ''}</span>
                        <span className="absolute bottom-1 right-1.5 text-[0.58rem] font-bold text-slate-950/45 sm:text-[0.65rem]">{rowIndex === 5 ? files[colIndex] : ''}</span>
                        {piece && (
                          <span className={`relative z-10 select-none text-5xl leading-none sm:text-6xl lg:text-7xl ${pieceColor(piece)}`}>
                            {piece}
                          </span>
                        )}
                      </button>
                    );
                  }),
                )}
              </div>
            </div>
            <p className={`min-h-6 text-center text-sm font-semibold ${isBotThinking ? 'text-sky-200' : inCheck ? 'text-red-200' : 'text-slate-300'}`}>
              {contextualHint}
            </p>
          </section>

          <aside className="order-2 rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-xl shadow-black/25 backdrop-blur xl:order-3">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-slate-300">Moves</h2>
                <p className="mt-1 text-xs text-slate-500">Use ← / → to review.</p>
              </div>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[0.65rem] font-semibold text-slate-300">Live</span>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-2">
              {hasMoves ? (
                <ol className="space-y-1 text-sm">
                  {moveRows.map((row) => (
                    <li key={row.move} className="grid grid-cols-[2rem_1fr_1fr] items-center gap-2 rounded-lg px-2 py-1.5 text-slate-200 hover:bg-white/7">
                      <span className="text-xs text-slate-500">{row.move}.</span>
                      <span className="font-mono">{row.white}</span>
                      <span className="font-mono text-slate-300">{row.black}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-lg border border-dashed border-white/12 px-4 py-6 text-center">
                  <p className="font-semibold text-slate-200">No moves yet.</p>
                  <p className="mt-1 text-sm text-slate-400">Select a white piece to see legal moves.</p>
                </div>
              )}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <button className="rounded-lg border border-white/10 bg-white/8 px-2 py-2 text-xs font-semibold text-slate-300 hover:bg-white/12">Start</button>
              <button className="rounded-lg border border-white/10 bg-white/8 px-2 py-2 text-xs font-semibold text-slate-300 hover:bg-white/12">Prev</button>
              <button className="rounded-lg border border-white/10 bg-white/8 px-2 py-2 text-xs font-semibold text-slate-300 hover:bg-white/12">Next</button>
            </div>
            <p className="mt-2 flex items-center gap-1 text-[0.7rem] text-slate-500">
              <Eye className="h-3 w-3" /> Keyboard review helper stays available without competing with the board.
            </p>

            <div className="mt-4 grid gap-2">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-3 py-2.5 text-sm font-bold text-emerald-950 transition hover:bg-emerald-300">
                <RefreshCw className="h-4 w-4" /> Restart Match
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-300/25 bg-rose-500/12 px-3 py-2.5 text-sm font-semibold text-rose-100 transition hover:bg-rose-500/18">
                <Flag className="h-4 w-4" /> Resign
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
