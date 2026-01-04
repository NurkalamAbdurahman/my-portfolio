import { Routes, Route, Navigate } from "react-router-dom";
import Home from './page/Home';
import CaseStudy from './component/casestudy/CaseStudy';
import Layout from './component/layouts/Layout';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        {/* Route dengan Layout utama */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
          
          {/* Redirect untuk rute yang tidak ada - OPSIONAL */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;