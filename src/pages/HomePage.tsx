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
        title="James De Raja — XR Performance Engineer | Unity Rendering & Frame Pacing"
        description="Senior XR Performance Engineer with 13+ years isolating GPU/CPU bottlenecks in Unity. Specialised in stereo rendering (72/90Hz), frame pacing, overdraw, MSAA bandwidth, and OpenXR. Open to remote and relocation."
        url="https://jamesderaja.com/"
        keywords="XR performance engineer, Unity XR optimization, OpenXR performance, Meta Quest performance, stereo rendering optimization, GPU bottleneck analysis, frame pacing Unity, real-time rendering engineer, Unity 6 URP, XR frame timing, James De Raja"
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
