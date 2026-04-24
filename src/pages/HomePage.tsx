import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ParticleField from '../components/ParticleField';
import { Seo } from '../components/Seo';
import HeroBentoSection from '../sections/HeroBentoSection';
import TechFocusBentoSection from '../sections/TechFocusBentoSection';
import CaseStudiesBentoSection from '../sections/CaseStudiesBentoSection';
import EvidenceBentoSection from '../sections/EvidenceBentoSection';
import ExperienceBentoSection from '../sections/ExperienceBentoSection';
import SkillsBentoSection from '../sections/SkillsBentoSection';
import ContactBentoSection from '../sections/ContactBentoSection';

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
        title="James De Raja — Senior Real-Time Performance Engineer | Unity Rendering & XR Performance"
        description="Senior Unity and real-time performance engineer focused on XR frame budgets, rendering optimisation, CPU/GPU bottleneck isolation, and profiler-validated case studies."
        url="https://jamesderaja.com/"
        keywords="senior unity engineer, real-time performance engineer, Unity rendering, XR optimization, frame pacing, GPU bottleneck, CPU bottleneck isolation, mobile game optimization, Unity profiler, XR performance, James De Raja"
      />

      {/* Particle background */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />

      <main className="relative z-10">
        <HeroBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <TechFocusBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <CaseStudiesBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <EvidenceBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ExperienceBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <SkillsBentoSection />
        <div className="divider-glow mx-auto max-w-7xl" />
        <ContactBentoSection />
      </main>
    </div>
  );
}
