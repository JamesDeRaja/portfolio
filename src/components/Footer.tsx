export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-[var(--color-text-muted)]">
        <p className="font-mono">© {new Date().getFullYear()} James De Raja</p>
        <p>Built for performance-focused roles.</p>
      </div>
    </footer>
  );
}
