import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-[var(--color-accent-fg)]"
      >
        Skip to main content
      </a>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
