import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Seo
        title="Page Not Found — James De Raja"
        description="The page you're looking for doesn't exist."
        url="https://james.alphaden.club/404"
      />
      <div className="text-center">
        <p className="text-6xl font-bold text-slate-300">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-cyan-600 px-5 py-3 text-sm font-medium text-white hover:bg-cyan-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
