import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '../components/Seo';
import HeroBentoSection from '../sections/HeroBentoSection';
import TechFocusBentoSection from '../sections/TechFocusBentoSection';
import CaseStudiesBentoSection from '../sections/CaseStudiesBentoSection';
import EvidenceBentoSection from '../sections/EvidenceBentoSection';
import ExperienceBentoSection from '../sections/ExperienceBentoSection';
import AboutSection from '../sections/AboutSection';
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
        title="James De Raja – Unity Systems Engineer | 100+ Games | Performance & Gameplay"
        description="James De Raja — Staff Software Engineer at Zoho and Unity systems engineer with 100+ titles across Supersonic, Lion Studios, and Voodoo."
        url="https://jamesderaja.com/"
        keywords="senior unity engineer, real-time performance engineer, Unity rendering, XR optimization, frame pacing, GPU bottleneck, CPU bottleneck isolation, mobile game optimization, Unity profiler, XR performance, James De Raja"
      />

      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />

      <main className="relative z-10">
        <HeroBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <TechFocusBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <CaseStudiesBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <EvidenceBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <ExperienceBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <AboutSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <SkillsBentoSection />
        <div className="divider-glow mx-auto max-w-screen-2xl" />
        <ContactBentoSection />
      </main>
    </div>
  );
}
