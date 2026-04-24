import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
  }, [light]);

  return (
    <label className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-text-secondary)] md:right-6 md:top-6">
      <span className="font-mono uppercase tracking-[0.08em]">Light</span>
      <button
        type="button"
        aria-label="Toggle light mode"
        aria-pressed={light}
        onClick={() => setLight((v) => !v)}
        className="h-5 w-9 rounded-full border border-[var(--color-border-hover)] bg-[var(--color-bg)] p-[2px]"
      >
        <span
          className="block h-3.5 w-3.5 rounded-full bg-[var(--color-accent)] transition-transform duration-200"
          style={{ transform: light ? 'translateX(16px)' : 'translateX(0)' }}
        />
      </button>
    </label>
  );
}
