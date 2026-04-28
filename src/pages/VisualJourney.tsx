import { Seo } from '../components/Seo';
import VisualJourneyHero from '../components/visual-journey/VisualJourneyHero';
import VisualJourneyPage from '../components/visual-journey/VisualJourneyPage';

export default function VisualJourney() {
  return (
    <div className="relative min-h-screen bg-void-950 text-slate-200">
      <Seo
        title="Visual Journey — James De Raja | Interactive Resume Through Real-Time Systems"
        description="Scroll-driven interactive resume following James De Raja's path from Unity prototypes to XR rendering and frame-budget performance engineering."
        url="https://james.alphaden.club/visual-journey"
        keywords="interactive resume, Unity performance engineer, XR optimization, frame pacing, rendering optimization"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <VisualJourneyHero />
        <VisualJourneyPage />
      </div>
    </div>
  );
}
