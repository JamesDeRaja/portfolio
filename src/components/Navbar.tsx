import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartLink from './SmartLink';

const navItems = [
  { label: 'Games', hash: 'shipped-titles' },
  { label: 'War Stories', hash: 'problems-solved' },
  { label: 'Case Studies', hash: 'work' },
  { label: 'XR Lab', hash: 'xr-lab' },
  { label: 'About', hash: 'about' },
  { label: 'Contact', hash: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-neon/10 bg-void-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon/20 bg-neon/5">
            <span className="font-mono text-sm font-bold text-neon">JD</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white/90 transition group-hover:text-neon">
            James De Raja
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.hash)}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-neon"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <SmartLink
            href="/resume/viewer.html?file=JamesDeRaja_Resume.pdf"
            className="btn-primary hidden rounded-lg px-4 py-2 text-sm font-medium sm:inline-flex"
          >
            View Resume
          </SmartLink>
          <a
            href="/resume/JamesDeRaja_Resume.pdf"
            download
            className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-neon/30 hover:text-neon"
            aria-label="Download resume PDF"
          >
            <Download size={16} />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-neon md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-void-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.hash)}
                  className="block w-full rounded-lg px-3 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-neon"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
