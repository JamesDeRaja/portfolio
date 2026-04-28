import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-void-950 px-4 text-center">
      <Seo
        title="Page Not Found — James De Raja"
        description="The page you're looking for doesn't exist."
        url="https://james.alphaden.club/404"
      />
      <p className="font-mono text-8xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-slate-400">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium">
        <ArrowLeft size={14} />
        Back to Home
      </Link>
    </div>
  );
}
