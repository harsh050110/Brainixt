import {Link } from "react-router-dom";
export default function StrategyPage() {
  const data = {
    title: "Business & Digital Strategy",
    subtitle: "Aligning Vision with Execution",
    description:
      "Growth begins with clarity in strategy. Many organizations invest heavily in technology and marketing without aligning those investments with long-term business objectives.",

    details:
      "Brainixt helps leadership teams define structured digital and operational strategies that support sustainable growth and competitive advantage.",

    points: [
      {
        title: "Business Model Evaluation",
        desc: "Evaluate and redesign business models for scalable growth.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
      {
        title: "Digital Transformation Strategy",
        desc: "Build a roadmap for digital-first business evolution.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      },
      {
        title: "Market Expansion",
        desc: "Identify opportunities and expand competitive positioning.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      },
      {
        title: "Revenue System Design",
        desc: "Create predictable and scalable revenue systems.",
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      },
      {
        title: "Strategic Technology Planning",
        desc: "Align technology decisions with business outcomes.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
    ],
  };

  return (
    <div className="relative bg-[#030712] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 overflow-hidden">

      {/* 🌈 Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 mb-2">
          {data.subtitle}
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          {data.description}
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm sm:text-base">
          {data.details}
        </p>
      </section>

      {/* GRID CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

        {data.points.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="h-40 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-20 relative z-10">
        <p className="text-gray-400 mb-4">
          Build a strategy that drives real outcomes.
        </p>
        <Link to="/contact">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:scale-105 transition">
          Get Started
        </button>
        </Link>
      </div>

    </div>
  );
}