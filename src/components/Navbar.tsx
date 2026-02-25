const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'XR Performance Lab', href: '/lab' },
  { label: 'Writing', href: '/#writing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/#work" className="text-sm font-semibold tracking-tight text-slate-900">
          Real-Time Performance
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-700 transition hover:text-cyan-700">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          className="rounded-xl border border-cyan-700 bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
}
