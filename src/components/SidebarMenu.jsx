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


// cspell:ignore Ecommerce
import Ecommerce from "../assets/Ecommerce.jpg";

/* ================= DATA ================= */

const sectionsData = {
  industries: [
    {
      name: "Financial Service & FinTech",
      description:
        "Digital infrastructure, compliance alignment, performance systems, scalable platforms.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      slug: "/financial",
    },
    {
      name: "Real Estate & PropTech",
      description:
        "Lead systems, CRM integration, investor reporting, digital sales architecture.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      slug: "/real-estate",
    },
    {
      name: "Education & EdTech",
      description: "Scalable LMS platforms and growth systems.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      slug: "/education",
    },
    {
      name: "E-commerce & Retail",
      description: "Conversion systems and omnichannel strategy.",
      image:
        Ecommerce,
      slug: "/ecommerce",
    },
    {
      name: "SaaS & Technology Startups",
      description: "Growth loops and technical architecture optimization.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      slug: "/saas",
    },
    {
      name:"Professional Services & B2B",
      description: "Lead generation systems and digital client experiences.",
      image: ProfessionalServices,
      slug: "/professional-services",
    }
  ],

  capabilities: [
    {
      name: "Business & Digital Strategy",
      description: "Growth begins with clarity in strategy.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      slug: "/business",
    },
    {
      name: "Technology Architecture & Infrastructure",
      description:
        "Designing scalable and efficient digital systems.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      slug: "/technology",
    },
    {
      name: "Growth Systems & Performance Marketing",
      description:"Driving customer acquistion and retention through data-driven growth loops.",
      image: Growth,
      slug: "/growth",
    },
    {
      name: "Operations & Organizational Design",
      description:"Building operational systems and organizational structures for scale.",
      image: Operation,
      slug: "/operations",
    }

  ],

  company: [
    {
      name: "About Brainixt",
      description: "Learn about Brainixt's history and mission.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      slug: "/about",
    },
    {
      name: "Case Studies",
      description: "See how Brainixt drives impact.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      slug: "/company-studies",
    },
    {
      name:"Office",
      description: "Explore our office and culture.",
      image: Office,
      slug: "/offices",
    },
    {
      name:"People",
      description: "Meet the Brainixt team.",
      image: People,
      slug: "/people",
    }
  ],

  simplePages: [
    {
      name: "Our Insights",
      description: "Explore our latest insights and thought  leadership.",
      image: OurInsights,
      slug: "/insights",
    },
    {
      name: "Join Us",
      description: "Explore Careers at Brainixt and join our mission.",
      image: JoinUs,
      slug: "/contact",
    },
  ],
  Brainixt: [
    {
      name: "Transformation",
      description: "Our approach to driving transformative growth.",
      image: Transformation,
      slug: "/transformation",
    },
    {
      name: "Founder",
      description: "Meet Parth Jain, Founder of Brainixt.",
      image: ParthJain,
      slug: "/parth-jain",
    },
    {
      name: "Working at Brainixt",
      description: "Discover our culture and what it's like to work at Brainixt.",
      image: JoinUs,
      slug: "/working",
    }
  ]
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

        <img src={logo} alt="logo" className="h-8 sm:h-10" />

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
                  activeItem?.name === item.name
                    ? "bg-white text-black"
                    : "hover:bg-white/10"
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

            <button
              onClick={() => {
                navigate(activeItem.slug);
                setOpen(false);
              }}
              className="mt-5 px-6 py-2 bg-green-500 rounded-full"
            >
              → VISIT PAGE
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default SidebarMenu;