import { Link } from "react-router-dom";
export default function ProfessionalServicesPage() {
  const data = {
    title: "Professional Services Firms",
    subtitle: "Digitally Transforming Expertise-Driven Businesses",

    description:
      "Professional services firms — including consultants, legal advisors, financial professionals, and advisory organizations — rely heavily on reputation, expertise, and client relationships.",

    details:
      "Brainixt supports these firms in modernizing their digital infrastructure while strengthening brand authority and client acquisition systems.",

    features: [
      "Digital positioning and authority building",
      "Client acquisition infrastructure",
      "Operational workflow digitization",
      "Knowledge and service delivery platforms",
      "Performance and analytics systems",
    ],

    closing:
      "By integrating strategy and technology, professional services firms can scale their expertise while maintaining credibility and client trust.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 mb-2">{data.subtitle}</p>

        <p className="max-w-3xl mx-auto text-gray-500 text-sm px-2">
          {data.description}
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-3 text-sm px-2">
          {data.details}
        </p>
      </section>

      {/* FEATURES */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
        {data.features.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
          >
            <p className="text-gray-300 text-sm">{item}</p>
          </div>
        ))}
      </div>

      {/* CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm px-2">{data.closing}</p>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <Link to ="/parth-jain">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Transform Your Firm
        </button>
        </Link>
      </div>

    </div>
  );
}