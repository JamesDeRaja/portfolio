import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-void-950 text-slate-200">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-neon/20 focus:px-4 focus:py-2 focus:text-neon">
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
