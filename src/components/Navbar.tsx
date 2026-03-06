import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import SmartLink from './SmartLink';

const navItems = [
  { label: 'Work', hash: 'work' },
  { label: 'XR Lab', hash: 'xr-lab' },
  { label: 'Writing', hash: 'writing' },
  { label: 'About', hash: 'about' },
  { label: 'Contact', hash: 'contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function handleNavClick(hash: string) {
    setMobileOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${hash}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold tracking-tight text-slate-900">
          James De Raja
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.hash)}
              className="text-sm text-slate-700 transition hover:text-cyan-700"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <SmartLink
            href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf"
            className="hidden rounded-xl border border-cyan-700 bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700 sm:inline-flex"
          >
            View Resume
          </SmartLink>
          <a
            href="/resume/JamesDeRaja_Resume.pdf"
            download
            className="rounded-xl border border-slate-300 p-2 text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700"
            aria-label="Download resume PDF"
          >
            <Download size={18} />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.hash)}
              className="block w-full py-2 text-left text-sm text-slate-700 hover:text-cyan-700"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
