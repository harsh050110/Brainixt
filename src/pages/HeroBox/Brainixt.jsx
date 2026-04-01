import { Link } from "react-router-dom";

export default function GrowthCaseStudyPage() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Scaling with Precision, Speed & Impact
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          How Brainixt transforms fragmented growth into structured, scalable systems.
        </p>
      </section>

      {/* CONTEXT */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <h2 className="text-purple-300 font-semibold">Client Context</h2>
        <p>
          A growth-stage organization in a competitive digital market experienced
          rapid demand but lacked structured systems to scale efficiently.
        </p>
        <p>
          Operational bottlenecks, inconsistent revenue, and fragmented infrastructure
          limited its ability to grow sustainably.
        </p>
      </section>

      {/* CHALLENGE */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h2 className="text-red-300 font-semibold mb-6">The Challenge</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Disconnected systems across teams",
            "Inconsistent lead generation",
            "No centralized data visibility",
            "Operational inefficiencies",
            "Unscalable infrastructure",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-red-500/10 border border-red-400/20 text-red-200 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-2xl text-center text-purple-300 font-semibold mb-12">
          Brainixt Transformation Model™
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          {[
            "Diagnose",
            "Architect",
            "Deploy",
            "Drive Performance",
            "Scale & Optimize",
          ].map((step, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm text-gray-300">{step}</p>
            </div>
          ))}

        </div>
      </section>

      {/* DETAILED STEPS */}
      <section className="max-w-5xl mx-auto mt-20 space-y-8 relative z-10">
        {[
          {
            title: "Diagnose",
            points: [
              "Business model & revenue analysis",
              "Customer acquisition systems",
              "Technology infrastructure",
              "Operational workflows",
              "Data & reporting",
            ],
          },
          {
            title: "Architect",
            points: [
              "Digital infrastructure blueprint",
              "Revenue system design",
              "Acquisition & conversion framework",
              "CRM & automation strategy",
              "Analytics model",
            ],
          },
          {
            title: "Deploy",
            points: [
              "CRM & lead system integration",
              "Marketing infrastructure",
              "Workflow automation",
              "Data tracking systems",
            ],
          },
          {
            title: "Drive Performance",
            points: [
              "Performance monitoring",
              "Conversion optimization",
              "Workflow improvements",
              "Data-driven decisions",
            ],
          },
          {
            title: "Scale & Optimize",
            points: [
              "Market expansion",
              "Increased capacity",
              "Revenue predictability",
              "Scalable growth engine",
            ],
          },
        ].map((phase, i) => (
          <div
            key={i}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/40 to-purple-500/40"
          >
            <div className="bg-[#020617]/80 backdrop-blur-xl rounded-2xl p-6">
              <h3 className="text-indigo-300 font-semibold mb-3">
                {i + 1}. {phase.title}
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {phase.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* IMPACT (🔥 HERO SECTION) */}
      <section className="max-w-5xl mx-auto mt-24 relative z-10 text-center">
        <h2 className="text-green-300 font-semibold mb-10 text-xl">
          Measurable Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "2.5× increase in qualified leads",
            "35% improvement in conversion",
            "40% increase in efficiency",
            "Reduced acquisition cost",
            "Predictable revenue growth",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-green-500/10 border border-green-400/20 text-green-200 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="max-w-3xl mx-auto mt-24 text-center text-gray-300 space-y-6 relative z-10">
        <h2 className="text-purple-300 font-semibold">Key Takeaways</h2>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-sm">
          <ul className="space-y-2">
            <li>• Structured execution over reactive operations</li>
            <li>• Integrated systems over fragmented tools</li>
            <li>• Long-term scalability over short-term gains</li>
            <li>• Alignment across strategy, tech, and performance</li>
          </ul>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="max-w-3xl mx-auto mt-20 text-center relative z-10">
        <h2 className="text-purple-300 mb-4">Strategic Insight</h2>
        <p className="text-lg text-gray-300">
          Most organizations do not lack ambition. They lack structured systems.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-12 relative z-10">
        <Link to="/contact">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Start a Strategic Conversation
        </button>
        </Link>
      </div>

    </div>
  );
}