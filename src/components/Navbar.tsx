import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartLink from './SmartLink';

const navItems = [
  { label: 'Impact', hash: 'impact' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Featured Proof', hash: 'featured-proof' },
  { label: 'Skills', hash: 'skills' },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-[#CBD5E1] bg-[#F8FAFC]/95 backdrop-blur' : 'bg-[#F8FAFC]'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBD5E1] bg-white">
            <span className="text-sm font-bold text-[#0F172A]">JD</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-[#0F172A] transition group-hover:text-[#1D4ED8]">
            James De Raja
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.hash)}
              className="rounded-lg px-3 py-2 text-sm text-[#334155] transition-colors hover:bg-[#EFF6FF] hover:text-[#1D4ED8]"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SmartLink
            href="/resume/viewer.html?file=JamesDeRaja_Resume_Unity-Rendering-Performance.pdf"
            className="hidden rounded-lg bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1E40AF] sm:inline-flex"
          >
            View Resume
          </SmartLink>
          <a
            href="/resume/JamesDeRaja_Resume_Unity-Rendering-Performance.pdf"
            download
            className="rounded-lg border border-[#CBD5E1] p-2 text-[#334155] transition hover:bg-white hover:text-[#1D4ED8]"
            aria-label="Download resume PDF"
          >
            <Download size={16} />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[#334155] hover:bg-white hover:text-[#1D4ED8] md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[#CBD5E1] bg-[#F8FAFC] md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.hash)}
                  className="block w-full rounded-lg px-3 py-3 text-left text-sm text-[#334155] transition hover:bg-white hover:text-[#1D4ED8]"
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
