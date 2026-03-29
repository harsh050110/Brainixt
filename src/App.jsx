import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Insights from "./pages/Insights/Insights";
import Technology from "./pages/capabilities/Technology";
import Business from "./pages/capabilities/Business";
import Growth from "./pages/capabilities/Growth";
import OperationsPage from "./pages/capabilities/OperationsPage";

import Transformation from "./pages/Brainixt/Transformation";
import WorkingPage from "./pages/Brainixt/Working";

import Financial from "./pages/Industries/FinancialPage";
import RealEstate from "./pages/Industries/RealEstate";
import Education from "./pages/Industries/Education";
import EcommercePage from "./pages/Industries/E-commercePage";
import SaasPage from "./pages/Industries/SaasPage";
import ProfessionalServicesPage from "./pages/Industries/ProfessionalPage";
import AboutPage from "./pages/AboutUs";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Capabilities */}
        <Route path="/insights" element={<Insights />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/operations" element={<OperationsPage />} />

        {/* Brainixt */}
        <Route path="/transformation" element={<Transformation />} />
        <Route path="/working" element={<WorkingPage />} />

        {/* Industries */}
        <Route path="/financial" element={<Financial />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/education" element={<Education />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/saas" element={<SaasPage />} />
        <Route path="/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;