import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import WorkSection from '../sections/WorkSection';
import WritingSection from '../sections/WritingSection';
import XRLabSection from '../sections/XRLabSection';
import ShippedTitlesSection from '../sections/ShippedTitlesSection';
import ProblemsSolvedSection from '../sections/ProblemsSolvedSection';
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
        title="James De Raja — Real-Time Performance Engineer | Unity Rendering & Frame Stability"
        description="Real-time performance engineer with 13+ years in Unity. Shipped mobile titles, XR/VR optimization, GPU/CPU bottleneck isolation, and frame pacing research. Profiler-validated measurements backing every claim."
        url="https://jamesderaja.com/"
        keywords="real-time performance engineer, Unity rendering, XR optimization, frame pacing, GPU bottleneck, mobile game optimization, Unity profiler, shipped games, James De Raja"
      />

      {/* Particle background */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />

      {/* Content flow: who you are → what you shipped → what you fixed → how you think → frontier research → writing → bio → contact */}
      <main className="relative z-10">
        <HeroSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ShippedTitlesSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ProblemsSolvedSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <WorkSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <XRLabSection />
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
