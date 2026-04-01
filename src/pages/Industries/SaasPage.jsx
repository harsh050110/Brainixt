import { Link } from "react-router-dom";
export default function SaasPage() {
  const data = {
    title: "SaaS & High-Growth Startups",
    subtitle: "Engineering Systems for Rapid Scaling",

    description:
      "Technology startups operate in highly competitive environments where speed, scalability, and operational efficiency determine success.",

    details:
      "Brainixt partners with SaaS companies and venture-backed startups to build the infrastructure and growth systems required for rapid expansion.",

    focus: [
      {
        title: "Product Growth Strategy",
        desc: "Design scalable product-led growth systems and digital infrastructure.",
      },
      {
        title: "Customer Lifecycle Systems",
        desc: "Optimize acquisition, activation, retention, and expansion flows.",
      },
      {
        title: "Platform Architecture",
        desc: "Build high-performance, scalable backend and system architecture.",
      },
      {
        title: "Performance Analytics",
        desc: "Leverage data-driven frameworks for smarter decision making.",
      },
      {
        title: "Market Expansion",
        desc: "Strategically scale into new markets with structured systems.",
      },
    ],

    metrics: [
      { value: "3x", label: "Faster Growth" },
      { value: "60%", label: "Improved Retention" },
      { value: "2x", label: "Scaling Efficiency" },
    ],

    closing:
      "Our goal is to help technology companies move from early traction to structured, sustainable scale.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-2">
          {data.subtitle}
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 text-xs sm:text-sm md:text-base px-2">
          {data.description}
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-4 text-sm md:text-base px-2">
          {data.details}
        </p>
      </section>

      {/* ⚡ METRICS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 text-center">
        {data.metrics.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h3 className="text-xl font-bold text-blue-300">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* 🧩 FOCUS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
        {data.focus.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition hover:scale-[1.02]"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔄 GROWTH FLOW (NEW STRUCTURE) */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Startup Growth System
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          {["Acquire", "Activate", "Retain", "Scale"].map((step, i) => (
            <div key={i} className="w-full md:flex-1 flex flex-col items-center">

              <div className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-sm">
                {step}
              </div>

              {/* mobile arrow */}
              {i !== 3 && (
                <div className="md:hidden text-blue-400 my-2">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base px-2">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to ="/parth-jain">
  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-black font-medium hover:scale-105 transition">
    Scale Your Startup
  </button>
</Link>
      </div>

    </div>
  );
}