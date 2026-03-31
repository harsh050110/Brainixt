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
import ContactPage from "./pages/ContactUs";
import PeoplePage from "./pages/Company/people";
import OfficePage from "./pages/Company/Office";
import CompanyStudies from "./pages/Company/companystudies";
import ParthJain from "./pages/Brainixt/ParthJain";

function App() {
  return ( 
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />

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
        {/* Companies */}
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/offices" element={<OfficePage />} />
        <Route path="/company-studies" element={<CompanyStudies />} />
        <Route path="/parth-jain" element={<ParthJain />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;