import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import WorkSection from '../sections/WorkSection';
import WritingSection from '../sections/WritingSection';
import XRLabSection from '../sections/XRLabSection';
import ShippedTitlesSection from '../sections/ShippedTitlesSection';
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
    <div className="min-h-screen bg-site-pattern text-slate-900">
      <Seo
        title="James De Raja — Real-Time Performance Engineer"
        description="Portfolio of James De Raja, senior real-time performance engineer specializing in Unity rendering, frame pacing discipline, and XR optimization."
        url="https://james.alphaden.club/"
        keywords="James De Raja, real-time performance engineer, Unity performance, XR optimization, frame pacing"
      />
      <main>
        <HeroSection />
        <WorkSection />
        <XRLabSection />
        <ShippedTitlesSection />
        <WritingSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
