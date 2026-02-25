import { Route, Routes } from 'react-router-dom';
import ProfilingToolkitCaseStudyPage from './caseStudies/pages/ProfilingToolkitCaseStudyPage';
import PublishedMobileProjectsCaseStudyPage from './caseStudies/pages/PublishedMobileProjectsCaseStudyPage';
import SoftMaskProCaseStudyPage from './caseStudies/pages/SoftMaskProCaseStudyPage';
import XRStressLabCaseStudyPage from './caseStudies/pages/XRStressLabCaseStudyPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-studies/xr-stress-lab" element={<XRStressLabCaseStudyPage />} />
      <Route path="/case-studies/softmaskpro" element={<SoftMaskProCaseStudyPage />} />
      <Route path="/case-studies/profiling-toolkit" element={<ProfilingToolkitCaseStudyPage />} />
      <Route path="/case-studies/published-mobile-projects" element={<PublishedMobileProjectsCaseStudyPage />} />
    </Routes>
  );
}

export default App;
