import { Navigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import EvidenceGallery from '../components/EvidenceGallery';
import ExperimentHeader from '../components/ExperimentHeader';
import ExperimentNav from '../components/ExperimentNav';
import MetricsSummary from '../components/MetricsSummary';
import TechnicalTakeaways from '../components/TechnicalTakeaways';
import { getExperimentBySlug } from '../data/experiments';

export default function LabExperimentPage() {
  const { slug } = useParams<{ slug: string }>();
  const experiment = slug ? getExperimentBySlug(slug) : undefined;

  if (!experiment) {
    return <Navigate to="/lab" replace />;
  }

  return (
    <div className="min-h-screen bg-site-pattern text-slate-900">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <ExperimentNav />
        <ExperimentHeader
          title={experiment.title}
          subtitle={experiment.subtitle}
          lastUpdated={experiment.lastUpdated}
          context={experiment.context}
        />
        <MetricsSummary metrics={experiment.metrics} />
        <EvidenceGallery evidence={experiment.evidence} title="Evidence (Profiler + Captures)" />
        <TechnicalTakeaways takeaways={experiment.takeaways} />
      </main>
    </div>
  );
}
