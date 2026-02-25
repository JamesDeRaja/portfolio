import { Link } from 'react-router-dom';

export default function ExperimentNav() {
  return (
    <div>
      <Link to="/lab" className="text-sm text-slate-600 underline-offset-2 hover:text-cyan-700 hover:underline">
        ← Back to Lab
      </Link>
    </div>
  );
}
