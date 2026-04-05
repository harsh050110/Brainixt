import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Growth from "../assets/Growth.jpg";
import Technology from "../assets/tech.png";
import Operation from "../assets/operation.jpg";
import ProfessionalServices from "../assets/Professional.jpg";
import Office from "../assets/Office.jpg";
import People from "../assets/People.jpg";
import OurInsights from "../assets/Insight.jpg";
import JoinUs from "../assets/Join Us.jpg";
import Blogs from "../assets/Blog.jpg";


// cspell:ignore Ecommerce
import Ecommerce from "../assets/Ecommerce.jpg";

/* ================= DATA ================= */

const sectionsData = {
  industries: [
  {
    name: "Real Estate & PropTech",
    description:
      "Designing integrated digital ecosystems for real estate businesses, including CRM systems, lead architecture, investor platforms, and operational automation.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    slug: "/real-estate",
  },
  {
    name: "SaaS & High-Growth Startups",
    description:
      "Engineering scalable product infrastructure, growth systems, and performance analytics to support rapid expansion and market leadership.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    slug: "/saas",
  },
  {
    name: "E-commerce & Direct-to-Consumer",
    description:
      "Building high-performance commerce ecosystems with conversion-focused platforms, lifecycle systems, and omnichannel growth strategies.",
    image:
      Ecommerce,
    slug: "/e-commerce",
  },
  {
    name: "Professional Services",
    description:
      "Transforming expertise-driven firms through digital positioning, client acquisition systems, workflow digitization, and performance analytics.",
    image: ProfessionalServices,
    slug: "/professional-services",
  },
  {
    name: "Financial Services & FinTech",
    description:
      "Developing secure, scalable financial infrastructure with digital onboarding, platform integrations, analytics, and compliance-aligned systems.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    slug: "/financial",
  },
  {
    name: "Education & EdTech",
    description:
      "Creating scalable digital learning ecosystems with LMS platforms, enrollment systems, content infrastructure, and analytics-driven optimization.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    slug: "/education",
  },
],

capabilities: [
  {
    name: "Business & Digital Strategy",
    description:
      "Defining structured growth strategies, digital transformation roadmaps, and revenue systems aligned with long-term business objectives.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    slug: "/business",
  },
  {
    name: "Technology Architecture & Infrastructure",
    description:
      "Designing and deploying scalable digital infrastructure, platform architecture, system integrations, and cloud-based environments.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    slug: "/technology",
  },
  {
    name: "Growth & Market Expansion",
    description:
      "Building performance-driven acquisition, conversion, and retention systems to create predictable and scalable revenue pipelines.",
    image: Growth,
    slug: "/growth",
  },
  {
    name: "Operational & Structural Advisory",
    description:
      "Optimizing operational processes, workflows, and organizational systems to support efficient and sustainable business expansion.",
    image: Operation,
    slug: "/operations",
  },
  {
    name: "The Transfomation of Brainixt Model™",
    description : "A structured, step-by-step approach to digital transformation that combines strategic clarity, architectural design, and performance optional to drive scalable griwth.",
    image: Technology,
    slug: "/transformation",
  }
],

company: [
  {
    name: "About Brainixt",
    description:
      "Discover Brainixt’s mission, approach, and commitment to building scalable and future-ready businesses.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    slug: "/about",
  },
  
  {
    name: "Office",
    description:
      "Take a look inside our work environment, culture, and operational philosophy.",
    image: Office,
    slug: "/offices",
  },
  {
    name: "People",
    description:
      "Meet the team behind Brainixt’s strategy, technology, and growth expertise.",
    image: People,
    slug: "/people",
  }
],
ourinsights:[
 {
  name:"Blogs",
  description:"",
  image: Blogs,
   children: [
        {
        name: "The Hidden Cost of Poor Business Systems",
         description: "Explore how inefficient business systems silently drain revenue, reduce productivity, and limit scalability.",
       slug: "/blogs/hidden-cost-of-poor-business-systems",
     },
       {
        name: "The Founder’s Trap: Why Most Businesses Depend Too Much on the Owner",
         description: "Understand how founder dependency can limit growth and discover strategies to transition to system-driven operations.",
        slug: "/blogs/founders-trap",
     },
       {
         name: "The Difference Between Growth and Scalable Growth",
         description: "Learn why growth alone isn’t enough and how scalable systems drive sustainable, predictable business expansion.",
       slug: "/blogs/difference-between-growth-and-scalable-growth",
    },
      {
        name: "The 5 Systems Every Business Needs Before Scaling",
        description: "Identify the core systems essential for efficient, scalable, and sustainable business growth.",
        slug: "/blogs/five-systems-every-business-needs",
      },
      {
        name: "How to Build a Predictable Revenue Engine",
        description: "Discover the structured approach to generating consistent revenue independent of campaigns or individual performance.",
        slug: "/blogs/build-a-predictable-revenue-engine",
      },
      {
        name: "How Data-Driven Businesses Outperform Competitors",
        description: "See how structured data and analytics empower businesses to make better decisions, optimize performance, and scale predictably.",
        slug: "/blogs/data",
      },
      {
        name: "From Leads to Revenue: Designing High-Conversion Funnels",
        description: "Learn how to convert leads into predictable revenue with high-conversion funnels and structured sales systems.",
        slug: "/blogs/high",
      },
      {
        name: "Scaling Operations Without Chaos",
        description: "Explore strategies to scale operations efficiently while maintaining consistency and minimizing operational bottlenecks.",
        slug: "/blogs/scaling-operations-without-chaos",
      },
      {
        name: "Maximizing Customer Lifetime Value",
        description: "Understand how to increase customer retention, loyalty, and revenue through structured lifecycle systems.",
        slug: "/blogs/maximizing-customer-lifetime-value",
      },
      {
        name: "Optimizing Marketing ROI Through Systems",
        description: "Learn how integrated marketing systems improve lead quality, reduce costs, and maximize return on investment.",
        slug: "/blogs/optimizing-marketing-roi",
     },
    ],

 },
  {
    name: "Our Insights",
    description:
      "Access thought leadership, strategic perspectives, and insights on digital transformation and scalable growth.",
    image: OurInsights,
    slug: "/insights",
  },
  {
    name: "Case Studies",
    description:
      "Explore how Brainixt delivers measurable impact through structured transformation and growth systems.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    slug: "/case-studies",
  },

],

simplePages: [
  {
    name: "Join Us",
    description:
      "Explore career opportunities and become part of a team focused on building high-impact digital systems.",
    image: JoinUs,
    slug: "/contact",
  },
],
  
};

/* ================= COMPONENT ================= */

const SidebarMenu = ({ open, setOpen }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[#020617] z-50 text-white overflow-y-auto">

      {/* TOP BAR */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-white/10">
        <button onClick={() => setOpen(false)}>✕</button>
        <img
  src={logo}
  alt="Brainixt Logo"
  className="h-14 md:h-16 lg:h-20 object-contain cursor-pointer"
  onClick={() => {
  navigate("/");
  setOpen(false);        // close sidebar
  setActiveSection(null); // reset section
  setActiveItem(null);    // reset item
}}
/>

        <input
          placeholder="Type to search"
          className="ml-2 sm:ml-6 flex-1 px-4 py-2 text-black rounded-full outline-none text-sm"
        />
      </div>

      {/* MAIN */}
      <div className="flex flex-col md:flex-row min-h-[calc(100%-70px)]">

        {/* LEFT MENU */}
        <div className="w-full md:w-[260px] border-r border-white/10 px-4 sm:px-6 py-6">

          {/* MAIN MENU */}
          {!activeSection && (
            <div className="space-y-4">

              <p className="text-gray-400 text-sm">Our Services</p>

              <div
                onClick={() => {
                  setActiveSection("industries");
                  setActiveItem(sectionsData.industries[0]);
                }}
                className="cursor-pointer py-2 border-b border-white/10"
              >
                Industries →
              </div>

              <div
                onClick={() => {
                  setActiveSection("capabilities");
                  setActiveItem(sectionsData.capabilities[0]);
                }}
                className="cursor-pointer py-2 border-b border-white/10"
              >
                Capabilities →
              </div>

              <div
                onClick={() => {
                  setActiveSection("company");
                  setActiveItem(sectionsData.company[0]);
                }}
                className="cursor-pointer py-2 border-b border-white/10"
              >
                Company →
              </div>

              {/* Insight Links */}
            <div
                onClick={() => {
                  setActiveSection("ourinsights");
                  setActiveItem(sectionsData.ourinsights[0]);
                }}
                className="cursor-pointer py-2 border-b border-white/10"
              >
                Our Insights →
              </div>

              {/* SIMPLE LINKS */}
              <div className="pt-4 space-y-2">
                {sectionsData.simplePages.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      navigate(item.slug);
                      setOpen(false);
                    }}
                    className="cursor-pointer bg-white text-black px-3 py-2 rounded-lg flex justify-between"
                  >
                    {item.name}
                    <span>→</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BACK BUTTON */}
          {activeSection && (
            <button
              onClick={() => {
                setActiveSection(null);
                setActiveItem(null);
              }}
              className="text-sm text-gray-400"
            >
              ← Back
            </button>
          )}
        </div>

{/* SECTION ITEMS */}
{activeSection && (
  <div className="w-full md:w-[300px] px-4 sm:px-6 py-6 space-y-2">
    {sectionsData[activeSection].map((item, index) => (
      <div
        key={index}
        onClick={() => setActiveItem(item)}
        className={`px-4 py-3 rounded-lg cursor-pointer ${
          activeItem?.name === item.name ? "bg-white text-black" : "hover:bg-white/10"
        }`}
      >
        {item.name}
      </div>
    ))}
  </div>
)}
{/* PREVIEW */}
{activeItem && (
  <div className="flex-1 px-4 sm:px-8 py-6 border-t md:border-t-0 md:border-l border-white/10">

  <img
    src={activeItem.image}
    alt=""
    className="w-full h-[180px] sm:h-[220px] object-cover rounded-xl"
  />

  <h2 className="text-xl sm:text-2xl font-semibold mt-5">
    {activeItem.name}
  </h2>

  <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-md">
    {activeItem.description}
  </p>

  {/* If the active item has children, render them here */}
  {activeItem.children && (
    <div className="mt-6 space-y-3">
      {activeItem.children.map((child, index) => (
        <div
          key={index}
          className="px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20"
        >
          <h3 className="font-semibold">{child.name}</h3>
          <p className="text-gray-300 text-sm">{child.description}</p>
          <button
            onClick={() => {
              navigate(child.slug); // navigate to child
              setOpen(false);       // close sidebar
            }}
            className="mt-2 px-4 py-1 bg-green-500 rounded-full text-sm"
          >
            → VISIT PAGE
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Only show visit page button if no children */}
  {!activeItem.children && activeItem.slug && (
    <button
      onClick={() => {
        navigate(activeItem.slug);
        setOpen(false);
      }}
      className="mt-5 px-6 py-2 bg-green-500 rounded-full"
    >
      → VISIT PAGE
    </button>
  )}
</div>
)}

      </div>
    </div>
  );
};

export default SidebarMenu;