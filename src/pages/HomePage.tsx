import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import WorkSection from '../sections/WorkSection';
import WritingSection from '../sections/WritingSection';
import XRLabSection from '../sections/XRLabSection';
import ShippedTitlesSection from '../sections/ShippedTitlesSection';
import ParticleField from '../components/ParticleField';
import { Seo } from '../components/Seo';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-void-950 text-slate-200">
      <Seo
        title="James De Raja — Game Developer & Graphic Designer | Unity, XR, Mobile Games"
        description="Game developer and graphic designer with 13+ years in Unity. Shipped mobile titles, XR/VR experiences, and performance-optimized real-time graphics. Strong visual design background with expertise in UI/UX, branding, and game art."
        url="https://jamesderaja.com/"
        keywords="game developer, graphic designer, Unity game developer, XR game development, mobile game developer, VR developer, game designer, UI UX design, real-time graphics, shipped games, James De Raja"
      />

      {/* Particle background */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />

      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <WorkSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <XRLabSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ShippedTitlesSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <WritingSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <AboutSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ContactSection />
      </main>
    </div>
  );
}
