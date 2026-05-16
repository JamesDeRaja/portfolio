import { Route, Routes } from 'react-router-dom';
import ProfilingToolkitCaseStudyPage from './caseStudies/pages/ProfilingToolkitCaseStudyPage';
import PublishedMobileProjectsCaseStudyPage from './caseStudies/pages/PublishedMobileProjectsCaseStudyPage';
import SoftMaskProCaseStudyPage from './caseStudies/pages/SoftMaskProCaseStudyPage';
import UpdateStrategiesCaseStudyPage from './caseStudies/pages/UpdateStrategiesCaseStudyPage';
import UpdateStrategiesVariantAPage from './caseStudies/pages/UpdateStrategiesVariantAPage';
import UpdateStrategiesVariantBPage from './caseStudies/pages/UpdateStrategiesVariantBPage';
import UpdateStrategiesVariantCPage from './caseStudies/pages/UpdateStrategiesVariantCPage';
import UpdateStrategiesVariantDPage from './caseStudies/pages/UpdateStrategiesVariantDPage';
import XRStressLabCaseStudyPage from './caseStudies/pages/XRStressLabCaseStudyPage';
import FramePacingLabPage from './lab/pages/FramePacingLabPage';
import FramePacingVsFPSLabPage from './lab/pages/FramePacingVsFPSLabPage';
import InstancingLabPage from './lab/pages/InstancingLabPage';
import MSAALabPage from './lab/pages/MSAALabPage';
import MSAAOverdrawLabPage from './lab/pages/MSAAOverdrawLabPage';
import OverdrawLabPage from './lab/pages/OverdrawLabPage';
import OverdrawStereoLabPage from './lab/pages/OverdrawStereoLabPage';
import XRFrameTimingLabPage from './lab/pages/XRFrameTimingLabPage';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MiniShuffleChessPage from './pages/MiniShuffleChessPage';
import RawDataPage from './pages/RawDataPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/raw-data" element={<RawDataPage />} />
        <Route path="/case-studies/xr-stress-lab" element={<XRStressLabCaseStudyPage />} />
        <Route path="/case-studies/softmaskpro" element={<SoftMaskProCaseStudyPage />} />
        <Route path="/case-studies/profiling-toolkit" element={<ProfilingToolkitCaseStudyPage />} />
        <Route path="/case-studies/update-strategies-scale" element={<UpdateStrategiesCaseStudyPage />} />
        <Route path="/case-studies/update-strategies-scale/variant-a" element={<UpdateStrategiesVariantAPage />} />
        <Route path="/case-studies/update-strategies-scale/variant-b" element={<UpdateStrategiesVariantBPage />} />
        <Route path="/case-studies/update-strategies-scale/variant-c" element={<UpdateStrategiesVariantCPage />} />
        <Route path="/case-studies/update-strategies-scale/variant-d" element={<UpdateStrategiesVariantDPage />} />
        <Route path="/case-studies/sneaky-warrior-3d" element={<PublishedMobileProjectsCaseStudyPage />} />
        <Route path="/case-studies/published-mobile-projects" element={<PublishedMobileProjectsCaseStudyPage />} />
        <Route path="/lab/overdraw" element={<OverdrawLabPage />} />
        <Route path="/lab/msaa" element={<MSAALabPage />} />
        <Route path="/lab/msaa-overdraw" element={<MSAAOverdrawLabPage />} />
        <Route path="/lab/instancing" element={<InstancingLabPage />} />
        <Route path="/lab/frame-pacing" element={<FramePacingLabPage />} />
        <Route path="/lab/frame-pacing-vs-fps" element={<FramePacingVsFPSLabPage />} />
        <Route path="/lab/xr-frame-timing" element={<XRFrameTimingLabPage />} />
        <Route path="/lab/overdraw-stereo" element={<OverdrawStereoLabPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/mini-shuffle-chess" element={<MiniShuffleChessPage />} />
      <Route path="/games/mini-shuffle-chess" element={<MiniShuffleChessPage />} />
    </Routes>
  );
}

export default App;
