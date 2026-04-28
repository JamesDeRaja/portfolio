import { Helmet } from 'react-helmet-async';

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string;
  type?: string;
  structuredData?: JsonLd;
};

export function Seo({
  title,
  description,
  url,
  image = '/og-image.png',
  keywords,
  type = 'website',
  structuredData,
}: SEOProps) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'James De Raja',
    jobTitle: 'Staff Software Engineer',
    url: 'https://jamesderaja.com',
    email: 'jamesderaja@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/JamesDeRaja',
      'https://www.linkedin.com/in/james-de-raja/',
    ],
    knowsAbout: [
      'XR Performance Engineering',
      'Unity XR Optimization',
      'OpenXR Stereo Rendering',
      'Meta Quest Performance',
      'GPU/CPU Bottleneck Analysis',
      'Frame Pacing and Frame Timing',
      'MSAA Bandwidth Optimization',
      'Overdraw Reduction',
      'Unity 6 URP',
      'Real-Time Rendering',
      'Mobile Game Performance',
      'GPU Instancing',
      'Deterministic Profiling Workflows',
    ],
  };

  const schemas = structuredData
    ? [personSchema, ...(Array.isArray(structuredData) ? structuredData : [structuredData])]
    : [personSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="James De Raja" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="James De Raja Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
