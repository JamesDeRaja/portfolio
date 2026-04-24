import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-bg)/0.88] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Main navigation">
        <Link to="/" className="font-mono text-sm tracking-[0.08em] text-[var(--color-text-secondary)]">
          JAMES DE RAJA
        </Link>
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <a href="/work/orbit-raiders" className="hover:text-[var(--color-accent)]">Work</a>
          <a href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf" className="hover:text-[var(--color-accent)]">Resume</a>
        </div>
      </nav>
    </header>
  );
}
