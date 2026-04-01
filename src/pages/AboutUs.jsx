// src/pages/AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const data = {
    title: "About Brainixt",
    tagline: "We Exist to Architect Scalable Growth.",

    intro: [
      "Brainixt was founded on a simple but critical observation:",
      "Most organizations do not fail because of lack of effort. They fail because strategy, technology, and growth execution operate in isolation.",
      "In today’s digital economy, scaling requires structured alignment between business vision, infrastructure, performance systems, and operational clarity.",
      "Brainixt was built to create that alignment.",
    ],

    philosophy: [
      "Technology without strategy creates complexity",
      "Marketing without infrastructure creates volatility",
      "Execution without structure creates inefficiency",
    ],

    scaleTruth: [
      "Business objectives are clearly defined",
      "Digital systems are architected for performance",
      "Revenue mechanisms are predictable",
      "Operations are structured for expansion",
    ],

    whatWeDo: [
      "We do not operate as a traditional service provider",
      "We do not deliver isolated projects",
      "We design integrated growth systems",
      "Every engagement is approached through a consulting lens",
      "Our focus is long-term enterprise value, not short-term execution",
    ],

    approach: [
      "Diagnose systemic constraints",
      "Architect scalable frameworks",
      "Deploy structured solutions",
      "Drive measurable performance",
      "Enable sustainable expansion",
    ],

    sectors: [
      "Real Estate & PropTech",
      "SaaS & Venture-Backed Startups",
      "E-commerce & D2C Brands",
      "Professional Services Firms",
      "Financial Services & FinTech",
      "Education & EdTech",
    ],

    model: ["Diagnose", "Architect", "Deploy", "Drive Performance", "Scale & Optimize"],

    manifesto: {
      intro:
        "The world of business is evolving faster than ever. Markets shift rapidly. Technologies advance continuously. Competition intensifies. Growth is no longer driven by isolated initiatives — but by structured systems.",

      problem: [
        "Strategy is developed separately from execution",
        "Technology is implemented without long-term thinking",
        "Marketing operates independently from operations",
        "Organizations invest in tools but lack coordination",
        "Complexity increases, but scalability does not",
      ],

      belief:
        "Growth should not be accidental. It should be designed. True scale happens when strategy, technology, and operational systems are aligned into a cohesive ecosystem.",

      system: [
        "Business strategy",
        "Digital infrastructure",
        "Customer acquisition systems",
        "Operational processes",
        "Data and decision frameworks",
      ],

      discipline:
        "Transformation does not come from chasing trends. It comes from disciplined thinking, structured execution, and long-term architectural design.",

      future: [
        "Design scalable digital ecosystems",
        "Operate with clarity and discipline",
        "Leverage technology as strategic infrastructure",
        "Adapt continuously in dynamic markets",
      ],
    },

    founder: {
      name: "Parth Jain",
      role: "Founder & Managing Partner",
      desc: [
        "Brainixt was founded with the vision of bridging the gap between strategic ambition and structured execution.",
        "With experience across technology, digital growth systems, and enterprise scaling environments, leadership is driven by a consulting-first mindset.",
        "Focused on long-term impact, disciplined thinking, and scalable architecture.",
      ],
    },

    ambition:
      "Brainixt is building a global consulting firm positioned at the intersection of strategy, technology, and growth systems. Our ambition is not to be the largest — but the most structurally disciplined and strategically aligned growth partner.",

    closing:
      "If you are building for long-term scale, structured growth, and sustainable competitive advantage — Brainixt is designed for you.",
  };

  const cardClass =
    "p-4 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:cursor-pointer active:scale-[0.98]";

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>
        <p className="text-gray-400 mb-6">{data.tagline}</p>

        <div className="space-y-3 max-w-3xl mx-auto text-gray-500 text-sm">
          {data.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-lg font-semibold mb-6 text-center">Our Philosophy</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {data.philosophy.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SCALE */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-6">What Drives True Scale</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.scaleTruth.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-6">What We Do Differently</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.whatWeDo.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-6">Our Approach</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          {data.approach.map((step, i) => (
            <div key={i} className={cardClass}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-6">Sector Focus</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.sectors.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* MODEL */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Transformation Model</h2>
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          {data.model.map((step, i) => (
            <div key={i} className={cardClass}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">The Brainixt Manifesto</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-3xl mx-auto">{data.manifesto.intro}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {data.manifesto.problem.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>

        <div className={`${cardClass} mb-6`}>{data.manifesto.belief}</div>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {data.manifesto.system.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>

        <div className={`${cardClass} mb-6`}>{data.manifesto.discipline}</div>

        <div className="grid sm:grid-cols-2 gap-3">
          {data.manifesto.future.map((item, i) => (
            <div key={i} className={cardClass}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-3">Founder Leadership</h2>
        <p className="text-white font-medium">{data.founder.name}</p>
        <p className="text-gray-400 text-sm mb-3">{data.founder.role}</p>
        <div className="space-y-2 text-gray-500 text-sm">
          {data.founder.desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </section>

      {/* AMBITION */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-gray-400 text-sm">{data.ambition}</p>
      </section>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm">{data.closing}</p>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-black font-medium hover:scale-105 transition">
            Work With Brainixt
          </button>
        </Link>
      </div>
    </div>
  );
}