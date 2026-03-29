export default function OperationsPage() {
  const data = {
    title: "Operational & Structural Advisory",
    subtitle: "Building Foundations for Sustainable Expansion",
    description:
      "As organizations scale, operational complexity increases. Without structured systems and processes, growth often leads to inefficiency.",

    details:
      "Brainixt supports leadership teams in strengthening operational foundations and building systems that support long-term expansion.",

    capabilities: [
      "Operational process optimization",
      "Digital workflow and automation systems",
      "Compliance and structural advisory",
      "Organizational performance systems",
      "Scalable operational frameworks",
    ],

    pillars: [
      {
        title: "Efficiency",
        desc: "Streamline operations to reduce friction and redundancy.",
      },
      {
        title: "Control",
        desc: "Maintain visibility and governance across systems.",
      },
      {
        title: "Scalability",
        desc: "Build processes that grow with the organization.",
      },
    ],

    closing:
      "By creating operational clarity and structured systems, we help businesses scale without compromising efficiency or control.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 mb-2">{data.subtitle}</p>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
          {data.description}
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm md:text-base">
          {data.details}
        </p>
      </section>

      {/* 🧱 PILLARS (CORE CONCEPT UI) */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
        {data.pillars.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-green-400/40 transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-green-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ⚙️ PROCESS GRID (LIKE SYSTEM MODULES) */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-6">
          Operational Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.capabilities.map((item, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl bg-[#0f172a] border border-white/10 hover:border-green-400/40 transition group"
            >
              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/10 blur-xl rounded-xl"></div>

              <p className="relative z-10 text-gray-300 text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 STRUCTURE VISUAL (NEW STYLE SECTION) */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Structured Operational System
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10 w-full">
            Input Systems
          </div>

          <div className="hidden md:block text-green-400">→</div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10 w-full">
            Process Optimization
          </div>

          <div className="hidden md:block text-green-400">→</div>

          <div className="p-4 rounded-lg bg-white/5 border border-white/10 w-full">
            Scalable Output
          </div>
        </div>
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base">
          {data.closing}
        </p>
      </div>



    </div>
  );
}