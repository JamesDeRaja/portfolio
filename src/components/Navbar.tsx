import { Link } from 'react-router-dom';
import SmartLink from './SmartLink';

const navItems = [
  { label: 'Work', to: '/?section=work' },
  { label: 'XR Performance Lab', to: '/?section=xr-lab' },
  { label: 'Writing', to: '/?section=writing' },
  { label: 'About', to: '/?section=about' },
  { label: 'Contact', to: '/?section=contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm font-semibold tracking-tight text-slate-900">
          Real-Time Performance
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="text-sm text-slate-700 transition hover:text-cyan-700">
              {item.label}
            </Link>
          ))}
        </div>
        <SmartLink
          href="/resume/JamesDeRaja_Resume.pdf"
          className="rounded-xl border border-cyan-700 bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700"
        >
          View Resume (PDF)
        </SmartLink>
      </nav>
    </header>
  );
}
