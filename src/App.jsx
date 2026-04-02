import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Technology from "./pages/capabilities/Technology";
import Business from "./pages/capabilities/Business";
import Growth from "./pages/capabilities/Growth";
import OperationsPage from "./pages/capabilities/OperationsPage";

import Transformation from "./pages/Brainixt/Transformation";
import WorkingPage from "./pages/Brainixt/Working";

import Financial from "./pages/Industries/FinancialPage";
import RealEstate from "./pages/Industries/RealEstate";
import Education from "./pages/Industries/Education";
import EcommercePage from "./pages/Industries/EcommercePage";
import SaasPage from "./pages/Industries/SaasPage";
import ProfessionalServicesPage from "./pages/Industries/ProfessionalPage";

import AboutPage from "./pages/AboutUs";
import ContactPage from "./pages/ContactUs";

import PeoplePage from "./pages/Company/people";
import OfficePage from "./pages/Company/Office";
import CaseStudies from "./pages/Company/casestudies"; 

import ParthJain from "./pages/Brainixt/ParthJain";

import High from "./pages/HeroBox/High";
import GrowthPage from "./pages/HeroBox/Growth";
import BrainixtPage from "./pages/HeroBox/Brainixt";
import LeadershipInsightsPage from "./pages/HeroBox/Leadership";
import Insights from "./pages/Insights/Insights";
import DigitalEcosystemPage from "./pages/HeroBox/Digital";
import How from "./pages/HeroBox/How";

// ✅ FIXED folder name (no spaces)
import SystemPage from "./pages/Brainixt Insights/System";
import LeadershipInsights from "./pages/Brainixt Insights/Leadership";
import DigitalAlignmentInsights from "./pages/Brainixt Insights/Alignment";
import PerformanceDrivenInsights from "./pages/Brainixt Insights/Driven";

import EPage from "./pages/Outcomes/EPage";
import EcommerceGrowthPage from "./pages/Outcomes/e-commerce";
import Scaling from "./pages/Outcomes/Scaling";
import InsightsPage from "./pages/Insights/Insights";

import Privacy from "./pages/Footer/Privacy";
import Terms from "./pages/Footer/Terms";
import Cookies from "./pages/Footer/Cookies";
import Disclaimer from "./pages/Footer/Disclaimer";
import Use from "./pages/Footer/Use";

function App() {
  return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Capabilities */}
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/operations" element={<OperationsPage />} />

          {/* Brainixt */}
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/working" element={<WorkingPage />} />
          <Route path="/insights" element={<InsightsPage />}/>

          {/* Industries */}
          <Route path="/financial" element={<Financial />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/education" element={<Education />} />
          <Route path="/e-commerce" element={<EcommercePage />} />
          <Route path="/saas" element={<SaasPage />} />
          <Route path="/professional-services" element={<ProfessionalServicesPage />} />

          {/* Company */}
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/offices" element={<OfficePage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/parth-jain" element={<ParthJain />} />

          {/* Hero */}
          <Route path="/high" element={<High />} />
          <Route path="/growth-case-study" element={<GrowthPage />} />
          <Route path="/brainixt-hero" element={<BrainixtPage />} />
          <Route path="/leadership" element={<LeadershipInsightsPage />} />
          <Route path="/digitalecosystem" element={<DigitalEcosystemPage />}/>
          <Route path="/how" element={<How />}/>

          {/* Extra */}
          <Route path="/systems" element={<SystemPage />} />
          <Route path="/leadershippage" element={<LeadershipInsights />} />
          <Route path="/alignment" element={<DigitalAlignmentInsights />} />
          <Route path="/driven" element={<PerformanceDrivenInsights />} /> 

          
          <Route path="/epage" element={<EPage />} />
          <Route path="/ecommerce-optimized" element={<EcommerceGrowthPage />} />
          <Route path="/scaling" element={<Scaling />} />

          {/* Footer */}
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/cookies" element={<Cookies />}/>
          <Route path="/disclaimer" element={<Disclaimer />}/>
          <Route path="/use" element={<Use />}/>
        </Routes>


        <Footer />
      </div>
  );
}

export default App;