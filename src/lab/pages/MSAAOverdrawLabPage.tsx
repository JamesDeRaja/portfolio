import { Navigate } from 'react-router-dom';
import { Seo } from '../../components/Seo';

export default function MSAAOverdrawLabPage() {
  return (
    <>
      <Seo
        title="MSAA + Overdraw Lab — James De Raja"
        description="Landing route for the MSAA-overdraw interaction study covering compounded bandwidth and fragment pressure in Unity XR rendering."
        url="https://james.alphaden.club/lab/msaa-overdraw"
        keywords="MSAA overdraw, Unity XR, bandwidth amplification, fragment bottleneck"
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: 'MSAA + Overdraw Lab',
          description:
            'Landing route for the MSAA-overdraw interaction study covering compounded bandwidth and fragment pressure in Unity XR rendering.',
          author: { '@type': 'Person', name: 'James De Raja' },
          datePublished: '2025-01-01',
          image: '/og-image.png',
        }}
      />
      <Navigate to="/lab/msaa#msaa-overdraw" replace />
    </>
  );
}
