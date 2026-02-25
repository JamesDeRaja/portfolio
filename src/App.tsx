import { Navigate, Route, Routes } from 'react-router-dom';
import LabExperimentPage from './lab/pages/LabExperimentPage';
import LabIndexPage from './lab/pages/LabIndexPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lab" element={<LabIndexPage />} />
      <Route path="/lab/:slug" element={<LabExperimentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
