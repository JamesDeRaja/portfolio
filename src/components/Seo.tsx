import { Helmet } from 'react-helmet-async';

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  noindex?: boolean;
  structuredData?: JsonLd;
};

export function Seo({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  noindex = false,
  structuredData,
}: SEOProps) {
  const siteUrl = 'https://james.alphaden.club';
  const canonicalUrl = new URL(canonicalPath, siteUrl).toString();
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
  const resolvedImage = new URL(ogImage, siteUrl).toString();
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'James De Raja',
    jobTitle: 'Senior Real-Time Performance Engineer',
    url: 'https://james.alphaden.club',
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
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content="James De Raja" />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content="James De Raja Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
