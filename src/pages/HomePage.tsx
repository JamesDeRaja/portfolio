import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import WorkSection from '../sections/WorkSection';
import WritingSection from '../sections/WritingSection';
import XRLabSection from '../sections/XRLabSection';
import ShippedTitlesSection from '../sections/ShippedTitlesSection';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (!section) {
      return;
    }

    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-site-pattern text-slate-900">
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
