import { MotionConfig } from 'framer-motion';
import BentoGrid from '../components/bento/BentoGrid';
import ContactCard from '../components/bento/cards/ContactCard';
import ExperienceCard from '../components/bento/cards/ExperienceCard';
import HeroCard from '../components/bento/cards/HeroCard';
import PerformanceCard from '../components/bento/cards/PerformanceCard';
import RecognitionCard from '../components/bento/cards/RecognitionCard';
import ShippedCard from '../components/bento/cards/ShippedCard';
import StatusCard from '../components/bento/cards/StatusCard';
import XRStackCard from '../components/bento/cards/XRStackCard';
import ThemeToggle from '../components/primitives/ThemeToggle';
import { Seo } from '../components/Seo';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Seo
        title="James De Raja — Staff Unity/XR Performance Engineer"
        description="Staff-level Unity/XR engineer focused on frame-time reliability, draw-call reductions, and production-ready multiplayer systems."
        url="https://jamesderaja.com/"
      />
      <ThemeToggle />
      <MotionConfig reducedMotion="user" transition={{ duration: 0.25 }}>
        <BentoGrid>
          <HeroCard />
          <StatusCard />
          <PerformanceCard />
          <ShippedCard />
          <XRStackCard />
          <RecognitionCard />
          <ExperienceCard />
          <ContactCard />
        </BentoGrid>
      </MotionConfig>
    </div>
  );
}
