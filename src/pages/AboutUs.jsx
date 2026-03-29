export default function AboutPage() {
  const data = {
    title: "About Brainixt",
    tagline: "We Exist to Architect Scalable Growth.",

    intro:
      "Most organizations do not fail due to lack of effort — they fail because strategy, technology, and execution operate in isolation. Brainixt was built to align these systems for scalable growth.",

    philosophy: [
      "Technology without strategy creates complexity",
      "Marketing without infrastructure creates volatility",
      "Execution without structure creates inefficiency",
    ],

    pillars: [
      "Clear business objectives",
      "Performance-driven digital systems",
      "Predictable revenue mechanisms",
      "Structured operations for expansion",
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
      "SaaS & Startups",
      "E-commerce & D2C",
      "Professional Services",
      "FinTech",
      "EdTech",
    ],

    model: [
      "Diagnose",
      "Architect",
      "Deploy",
      "Drive Performance",
      "Scale & Optimize",
    ],

    founder: {
      name: "Parth Jain",
      role: "Founder & Managing Partner",
      desc: "Leads Brainixt with a consulting-first mindset focused on structured execution, scalable systems, and long-term impact.",
    },

    closing:
      "Brainixt partners with organizations building for long-term scale, structured growth, and competitive advantage.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>
        <p className="text-gray-400 mb-4">{data.tagline}</p>
        <p className="max-w-3xl mx-auto text-gray-500 text-sm px-2">
          {data.intro}
        </p>
      </section>

      {/* PHILOSOPHY */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Our Philosophy
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {data.philosophy.map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-4">What Drives Scale</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {data.pillars.map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* APPROACH */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-4">Our Approach</h2>
        <div className="flex flex-col md:flex-row gap-3">
          {data.approach.map((step, i) => (
            <div key={i} className="flex-1 p-3 bg-white/5 border border-white/10 rounded text-sm">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* SECTORS */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-4">Sector Focus</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {data.sectors.map((item, i) => (
            <div key={i} className="p-3 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* MODEL */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-lg font-semibold mb-4">
          Transformation Model
        </h2>
        <div className="flex flex-col md:flex-row gap-3">
          {data.model.map((step, i) => (
            <div key={i} className="flex-1 p-3 bg-white/5 border border-white/10 rounded text-sm">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* FOUNDER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-2">Founder Leadership</h2>
        <p className="text-white font-medium">{data.founder.name}</p>
        <p className="text-gray-400 text-sm mb-2">{data.founder.role}</p>
        <p className="text-gray-500 text-sm">{data.founder.desc}</p>
      </div>

      {/* CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm">{data.closing}</p>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Work With Brainixt
        </button>
      </div>

    </div>
  );
}