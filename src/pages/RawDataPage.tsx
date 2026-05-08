import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export default function RawDataPage() {
  const [content, setContent] = useState('Loading raw dataset...');

  useEffect(() => {
    fetch('/raw-data.md')
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent('Unable to load raw dataset file.'));
  }, []);

  return (
    <div className="min-h-screen bg-void-950">
      <Seo
        title="Profiler Captures & Benchmark Data | James De Raja"
        description="Machine-readable raw route/data/media inventory for the james.alphaden.club portfolio."
        canonicalPath="https://james.alphaden.club/raw-data"
      />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Profiler Captures & Benchmark Data</h1>
          <Link to="/" className="text-sm text-neon hover:text-neon-300">Back to Home</Link>
        </div>
        <p className="mb-4 text-sm text-slate-400">
          This page is intentionally plain-text friendly so AI crawlers/tools can parse routes, metrics, links, and media quickly.
        </p>
        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-5 text-slate-200 whitespace-pre-wrap">{content}</pre>
      </main>
    </div>
  );
}
