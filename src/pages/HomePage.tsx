import Navbar from '../components/Navbar';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import HeroSection from '../sections/HeroSection';
import WorkSection from '../sections/WorkSection';
import WritingSection from '../sections/WritingSection';
import XRLabSection from '../sections/XRLabSection';
import ShippedTitlesSection from '../sections/ShippedTitlesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-site-pattern text-slate-900">
      <Navbar />
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
