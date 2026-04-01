import { Link } from "react-router-dom";

export default function Growth() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Driving Enterprise Growth Through Structured Systems
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          Strategic Alignment. Scalable Infrastructure. Measurable Enterprise Impact.
        </p>
      </section>

      {/* CLIENT CONTEXT */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <h2 className="text-xl text-purple-300 font-semibold">Client Context</h2>
        <p>
          A mid-to-large scale enterprise operating across multiple business
          verticals was experiencing growth stagnation despite strong market
          presence and established operations.
        </p>
        <p>
          Leadership aimed to transition from operational growth to strategic,
          system-driven expansion.
        </p>
      </section>

      {/* CHALLENGE */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h2 className="text-xl text-red-300 font-semibold mb-6">
          The Challenge
        </h2>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <ul className="space-y-3 text-gray-300">
            <li>• Disconnected systems across departments</li>
            <li>• Limited performance visibility</li>
            <li>• Inefficient processes</li>
            <li>• High operational complexity</li>
            <li>• Lack of unified growth strategy</li>
          </ul>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-2xl text-center text-purple-300 font-semibold mb-12">
          Brainixt Transformation Approach
        </h2>

        <div className="space-y-10">

          {[
            {
              title: "Diagnose",
              points: [
                "Business units & structure analysis",
                "Revenue & growth performance",
                "Technology systems review",
                "Data visibility assessment",
                "Workflow efficiency evaluation",
              ],
            },
            {
              title: "Architect",
              points: [
                "Centralized ecosystem design",
                "CRM & data integration strategy",
                "Performance analytics framework",
                "Workflow alignment model",
                "Growth roadmap",
              ],
            },
            {
              title: "Deploy",
              points: [
                "CRM & data system integration",
                "Unified dashboards",
                "Workflow automation",
                "Cross-functional alignment",
                "Process standardization",
              ],
            },
            {
              title: "Drive Performance",
              points: [
                "Real-time analytics",
                "Conversion optimization",
                "Operational efficiency improvements",
                "Data-driven decision systems",
              ],
            },
            {
              title: "Scale & Optimize",
              points: [
                "Market expansion",
                "Improved coordination",
                "Efficiency at scale",
                "Predictable growth systems",
              ],
            },
          ].map((phase, i) => (
            <div
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-indigo-500/40"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl rounded-2xl p-6">

                <h3 className="text-purple-300 font-semibold mb-3">
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

        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-4xl mx-auto mt-24 relative z-10">
        <h2 className="text-xl text-green-300 font-semibold mb-6 text-center">
          Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "30–45% improvement in operational efficiency",
            "Stronger cross-functional coordination",
            "Improved KPI visibility",
            "Better decision-making through data",
            "Scalable multi-market expansion",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-green-500/10 border border-green-400/20 text-green-200 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="max-w-3xl mx-auto mt-24 text-gray-300 space-y-6 text-center relative z-10">
        <h2 className="text-purple-300 font-semibold">Key Takeaways</h2>
        <p>
          Enterprise growth requires alignment between strategy, systems, and
          execution—not just resources.
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <ul className="space-y-2 text-sm">
            <li>• Strategy & execution alignment</li>
            <li>• Integrated cross-functional systems</li>
            <li>• Structured operational frameworks</li>
            <li>• Data-driven decision-making</li>
          </ul>
        </div>
      </section>

      {/* STRATEGIC INSIGHT */}
      <section className="max-w-3xl mx-auto mt-20 text-center relative z-10">
        <h2 className="text-purple-300 mb-4">Strategic Insight</h2>
        <p className="text-lg text-gray-300">
          At the enterprise level, growth is not limited by opportunity—it is
          limited by structure.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-12 relative z-10">
        <Link to="/contact">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-black font-medium hover:scale-105 transition">
          Start a Strategic Conversation
        </button>
        </Link>
      </div>

    </div>
  );
}