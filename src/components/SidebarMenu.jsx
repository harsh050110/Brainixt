import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import logo from "../assets/logo.png";

/* ================= DATA ================= */

const sectionsData = {
  industries: [
    {
      name: "Financial Service & FinTech",
      description: "Digital infrastructure, compliance alignment, performance systems, scalable platforms.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      slug:"/financial",
    },
    {
      name: "Real Estate & PropTech",
      description: "Lead systems, CRM integration, investor reporting, digital sales architecture.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      slug:"/real-estate",
    },
    {
      name: "Healthcare & HealthTech",
      description: "Patient management systems, digital transformation, automation.",
      image: "https://images.unsplash.com/photo-1580281657527-47c1d72b3c54",
      slug:"/healthcare",
    },
    {
      name: "Education & EdTech",
      description: "Scalable LMS platforms and growth systems.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      slug:"/education",
    },
    {
      name: "E-commerce & Retail",
      description: "Conversion systems and omnichannel strategy.",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
      slug:"/ecommerce",
    },
    {
      name: "SaaS & Technology Startups",
      description: "Growth loops and technical architecture optimization.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      slug:"/saas",
    },
    {
      name: "Manufacturing & Industrial",
      description: "Process automation and operational efficiency.",
      image: "https://images.unsplash.com/photo-1581090700227-1e8c7f3b7f4f",
    },
  ],
capabilities: [
  {
    name: "Business & Digital Strategy",
    description: "Growth begins with clarity in strategy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    slug:"/business",
  },
  {
    name: "Technology Architecture & Infrastructure",
    description: "Brainixt designs and deploy digital infrastructure that supports operational efficiency, seamless customer experience and long-term scalability.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    slug:"/technology",
  },
  {
    name: "Growth & Market Expansion",
    description: "Brainixt engineers performance-driven growth ecosystems that combine strategic positioning, digital marketing infrastructure, and data-driven optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    slug:"/growth",
  },
  {
    name: "Operational & Structural Advisory",
    description: "Brainixt supports leadership teams in strengthening operational foundations and building systems that support long-term expansion.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    slug:"/operations",
  }
],

  brainixtx: [ 
    {
    name: "The Brainixt Transformation Model™",
    description: "Every engagement at Brainixt follows a disciplined transformation framework designed to deliver measurable outcomes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    slug:"/transformation",
  },
  {
    name: "Working with Brainixt",
    description: "Brainixt is not a vendor delivering isolated services.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    slug:"/working",
  }
  ],

  company: [
    {
      name: "About Brainixt",
      description: "Learn about Brainixt's history and mission.",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      name: "Client Impact",
      description: "See how Brainixt drives impact.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      name: "People",
      description: "Meet the people behind Brainixt.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      name: "Offices",
      description: "Explore Brainixt offices worldwide.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
  ],

  simplePages: [
    {
      name: "Our Insights",
      description: "Latest insights and research from BCG.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      slug: "/insights",
    },
        {
      name: "Brainixt in India",
      description: "Explore BCG’s work in India.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    },
    {
      name: "Brainixt Alumni",
      description: "Access alumni network.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      name: "Join Us",
      description: "Careers and opportunities at BCG.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ],
};

/* ================= COMPONENT ================= */

const SidebarMenu = ({ open, setOpen }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate(); // ✅ added

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-[#2b5d76] z-50">

      {/* TOP BAR */}
      <div className="flex items-center gap-4 px-6 py-4 border-b">
        <button onClick={() => setOpen(false)}>✕</button>

        <img src={logo} alt="Brainixt Logo" className="h-10 object-contain" />

        <input
          placeholder="Type to search"
          className="ml-6 flex-1 px-5 py-2 border rounded-full outline-none"
        />

        <button className="ml-4 font-medium text-white">LOG IN</button>
      </div>

      {/* MAIN */}
      <div className="flex h-[calc(100%-70px)]">

        {/* LEFT MENU */}
        <div className="w-[260px] border-r px-6 py-6 space-y-5">

          <div>
            <p className="text-gray-300 text-sm mb-2">Our Services</p>

            <p
              onClick={() => {
                setActiveSection("industries");
                setActiveItem(sectionsData.industries[0]);
              }}
              className="cursor-pointer hover:underline text-white"
            >
              Industries
            </p>

            <p
              onClick={() => {
                setActiveSection("capabilities");
                setActiveItem(sectionsData.capabilities[0]);
              }}
              className="mt-2 cursor-pointer hover:underline text-white"
            >
              Capabilities
            </p>

            <p
              onClick={() => {
                setActiveSection("brainixtx");
                setActiveItem(sectionsData.brainixtx[0]);
              }}
              className="mt-2 cursor-pointer hover:underline text-white"
            >
              Brainixt X
            </p>
          </div>

          {sectionsData.simplePages.map((item, i) => (
            <div
              key={i}
              onClick={() => {
  setActiveSection("simple");
  setActiveItem(item);
}}
              className="pt-4 border-t cursor-pointer bg-white hover:bg-green-400 px-2 py-2 rounded-lg flex justify-between items-center"
            >
              {item.name}
              <span>→</span>
            </div>
          ))}

          <div
            onClick={() => {
              setActiveSection("company");
              setActiveItem(sectionsData.company[0]);
            }}
            className="pt-4 border-t cursor-pointer bg-white hover:bg-green-400 px-2 py-2 rounded-lg flex justify-between items-center"
          >
            Our Company
            <span>→</span>
          </div>

        </div>

        {/* PANEL */}
        {activeSection && (
          <>
            {activeSection !== "simple" && (
              <div className="w-[420px] px-6 py-6 space-y-2">

                <button
                  onClick={() => setActiveSection(null)}
                  className="mb-4 text-sm text-gray-500 hover:text-black"
                >
                  ← Back
                </button>

                {(activeSection === "company"
                  ? sectionsData.company
                  : sectionsData[activeSection]
                ).map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveItem(item)}
                    className={`px-4 py-3 rounded-lg cursor-pointer ${
                      activeItem?.name === item.name
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}

            {activeItem && activeItem.image && (
              <div className="flex-1 px-8 py-6 border-l">

                <img
                  src={activeItem.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-xl"
                />

                <h2 className="text-2xl font-semibold mt-5 text-white">
                  {activeItem.name}
                </h2>

                <p className="text-gray-300 mt-3 max-w-md">
                  {activeItem.description}
                </p>

                <button
                  onClick={() => {
                    if (activeItem?.slug) {
                      navigate(activeItem.slug);
                      setOpen(false);
                    }
                  }}
                  className="mt-5 px-6 py-2 bg-green-500 text-white rounded-full"
                >
                  → VISIT PAGE
                </button>

              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default SidebarMenu;