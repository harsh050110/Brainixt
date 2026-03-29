export default function RealEstatePage() {
  const data = {
    title: "Real Estate & PropTech",
    subtitle:
      "Building Digital Infrastructure for Modern Real Estate Businesses",

    description:
      "The real estate industry is undergoing a rapid digital shift. Property developers, brokerages, and advisory firms must manage complex sales cycles, fragmented lead sources, and evolving investor expectations.",

    details:
      "Brainixt helps real estate organizations design integrated digital ecosystems that improve acquisition efficiency, enhance client engagement, and enable scalable growth.",

    pipeline: [
      "Lead Acquisition",
      "Lead Qualification",
      "Client Engagement",
      "Deal Conversion",
      "Investor Reporting",
    ],

    capabilities: [
      {
        title: "Digital Sales Infrastructure",
        desc: "CRM integration and centralized sales pipelines.",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
      {
        title: "Lead Acquisition & Conversion",
        desc: "Structured systems to capture and convert high-quality leads.",
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      },
      {
        title: "Property Marketing Systems",
        desc: "Performance-driven marketing for real estate assets.",
        img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      },
      {
        title: "Investor Communication Platforms",
        desc: "Transparent reporting and engagement systems.",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      },
      {
        title: "Operational Automation",
        desc: "Automate workflows for efficiency and scalability.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
    ],

    closing:
      "By aligning technology with sales strategy, we help real estate organizations create predictable and scalable growth pipelines.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 mb-2 text-sm sm:text-base">
          {data.subtitle}
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 text-xs sm:text-sm md:text-base px-2">
          {data.description}
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-4 text-sm md:text-base px-2">
          {data.details}
        </p>
      </section>

      {/* PIPELINE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Real Estate Growth Pipeline
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          {data.pipeline.map((step, i) => (
            <div key={i} className="w-full md:flex-1 flex flex-col items-center">

              {/* STEP */}
              <div className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-emerald-400/40 transition">
                <p className="text-gray-300">{step}</p>
              </div>

              {/* MOBILE ARROW */}
              {i !== data.pipeline.length - 1 && (
                <div className="md:hidden text-emerald-400 my-2 text-lg">↓</div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
        {data.capabilities.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-emerald-400/40 transition hover:scale-[1.02]"
          >
            {/* IMAGE */}
            <div className="h-36 sm:h-40 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-emerald-300 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20 text-center">
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-bold text-emerald-300">2x</h3>
          <p className="text-gray-400 text-sm">Lead Conversion</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-bold text-emerald-300">40%</h3>
          <p className="text-gray-400 text-sm">Faster Sales Cycles</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-xl font-bold text-emerald-300">3x</h3>
          <p className="text-gray-400 text-sm">Pipeline Visibility</p>
        </div>
      </div>

      {/* CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base px-2">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-medium hover:scale-105 transition">
          Build Your Infrastructure
        </button>
      </div>

    </div>
  );
}