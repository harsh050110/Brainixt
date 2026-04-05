import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import DigitalEcosystemPage from "./pages/HeroBox/Digital";
// import Blog from "./pages/HeroBox/Blog";

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
import Organize from "./pages/HeroBox/Organize";
import SubscribeBox from "./components/Subscribe";
// about
import Firm from "./pages/Studies/firm";
import Ed from "./pages/Studies/Edtech";
import D2C from "./pages/Studies/D2C";
import Saas from "./pages/Studies/infra";
import Enterprise from "./pages/Studies/enterprise";
import InnovationPage from "./pages/Articles/Innovation";
import BalancingCompliance from "./pages/Articles/Balancing";
import Learning from "./pages/Articles/Learning";
import ArticlePage from "./pages/Articles/ArticlePage";
import DigitalEcosystem from "./pages/Articles/Startups";
import Customer from "./pages/Articles/Customer";
import Chaos from "./pages/Articles/Chaos";
import Product from "./pages/Articles/Product";
import BlogPageA from "./pages/Blogs/BlogA";
import BlogPageB from "./pages/Blogs/BlogB";
import BlogPageC from "./pages/Blogs/BlogC";
import BlogPageD from "./pages/Blogs/BlogD";
import BlogPageE from "./pages/Blogs/BlogE";
import BlogPageF from "./pages/Blogs/BlogPageF";
import BlogPageG from "./pages/Blogs/BlogPageG";
import BlogPageH from "./pages/Blogs/BlogH";
import BlogPageI from "./pages/Blogs/BlogI";
import BlogPageJ from "./pages/Blogs/BlogJ";
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
          {/* <Route path="/blog" element={<Blog />}/> */}

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
        ```
                  <Route path="/use" element={<Use />}/>
                  <Route path="/organize" element={<Organize />}/>
                  <Route path="/subscribe" element={<SubscribeBox />}/>
                  {/* About */}
                   <Route path="/case-study/real-estate-scaling" element={<Firm />} />
          <Route path="/case-study/d2c-revenue-system" element={<D2C />} />
          <Route path="/case-study/saas-scalability" element={<Saas />} />
          <Route path="/case-study/enterprise-system-alignment" element={<Enterprise />} />
          <Route path="/case-study/edtech-platform-growth" element={<Ed />} />
          {/* Articles */}
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/articles/:slug" element={<InnovationPage />}/>
          <Route path="/articles/:slug" element={<BalancingCompliance />}/>
          <Route path="/articles/:slug" element={<Learning />}/>
          <Route path="/articles/:slug" element={<DigitalEcosystem />}/>
          <Route path="/articles/:slug" element={<Customer />}/>
          <Route path="/articles/:slug" element={<Chaos />}/>
          <Route path="/articles/:slug" element={<Product />}/>
          {/* Blog */}
          <Route path="/blogs/hidden-cost-of-poor-business-systems" element={< BlogPageA />}/>
          <Route path="/blogs/founders-trap" element={<BlogPageB />}/>
          <Route path="/blogs/difference-between-growth-and-scalable-growth" element={<BlogPageC />}/>
          <Route path="/blogs/five-systems-every-business-needs" element={<BlogPageD/>}/>
          <Route path="blogs/build-a-predictable-revenue-engine" element={<BlogPageE/>}/>
          <Route path="/blogs/data" element={<BlogPageF />}/>
          <Route path="/blogs/high" element={<BlogPageG/>}/>
          <Route path="/blogs/scaling-operations-without-chaos" element={<BlogPageH/>}/>
          <Route path="/blogs/maximizing-customer-lifetime-value" element={<BlogPageI/>}/>
          <Route path="/blogs/optimizing-marketing-roi" element={<BlogPageJ/>}/>
                </Routes>


        <Footer />
      </div>
  );
}

export default App;