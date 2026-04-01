import { Link } from "react-router-dom";

export default function DigitalEcosystemPage() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Building Scalable Digital Ecosystems
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          The Foundation of Modern Business Growth
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <p>
          In today’s digital economy, businesses are no longer defined by products
          alone. They are defined by the systems that support them.
        </p>

        <p>
          Organizations that scale successfully build **digital ecosystems**—
          integrated environments where technology, data, operations, and growth
          systems work together seamlessly.
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-purple-200">
          At Brainixt, we view scalable digital ecosystems as the foundation of
          precision, speed, and long-term competitive advantage.
        </div>
      </section>

      {/* SHIFT */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h2 className="text-xl text-red-300 font-semibold mb-6">
          The Shift from Tools to Ecosystems
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "CRM platforms",
            "Marketing automation software",
            "Analytics dashboards",
            "E-commerce systems",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-red-500/10 border border-red-400/20 text-red-200 text-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-300 mt-6">
          These tools, while essential, often operate in isolation, leading to:
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <ul className="space-y-3 text-gray-300">
            <li>• Disconnected data</li>
            <li>• Inefficient workflows</li>
            <li>• Inconsistent customer experiences</li>
            <li>• Limited scalability</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-300">
          A scalable organization moves beyond individual tools to build an **integrated ecosystem**.
        </p>
      </section>

      {/* WHAT IS AN ECOSYSTEM */}
      <section className="max-w-3xl mx-auto mt-24 text-center relative z-10">
        <h2 className="text-2xl text-purple-300 font-semibold mb-12">
          What Is a Scalable Digital Ecosystem?
        </h2>

        <p className="text-gray-300 mb-6">
          A scalable digital ecosystem is a structured network of interconnected systems
          that support every stage of business operations and growth. It aligns:
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Business strategy</li>
            <li>• Technology infrastructure</li>
            <li>• Customer acquisition and engagement</li>
            <li>• Operational workflows</li>
            <li>• Data and decision-making systems</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-300">
          When designed correctly, this ecosystem enables businesses to grow without
          increasing complexity.
        </p>
      </section>

      {/* CORE COMPONENTS */}
      <section className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-2xl text-center text-purple-300 font-semibold mb-12">
          Core Components of a Scalable Digital Ecosystem
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Strategic Alignment",
              points: [
                "Business objectives & growth targets",
                "Market positioning",
                "Revenue models",
                "Expansion strategy",
              ],
            },
            {
              title: "Integrated Technology Architecture",
              points: [
                "Centralized CRM systems",
                "Unified data architecture",
                "API-driven connections",
                "Integrated marketing & sales platforms",
              ],
            },
            {
              title: "Customer-Centric Infrastructure",
              points: [
                "Lead acquisition systems",
                "Conversion & sales processes",
                "Customer onboarding",
                "Retention & engagement systems",
              ],
            },
            {
              title: "Operational Efficiency Systems",
              points: [
                "Automated workflows",
                "Process standardization",
                "Task management systems",
                "Cross-functional coordination",
              ],
            },
            {
              title: "Data & Performance Intelligence",
              points: [
                "Real-time dashboards",
                "Centralized data tracking",
                "Predictive analytics",
                "Decision-making frameworks",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/40 to-purple-500/40"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl p-6 rounded-2xl">
                <h3 className="text-purple-300 font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FAILURE */}
      <section className="max-w-5xl mx-auto mt-24 relative z-10">
        <h2 className="text-red-300 font-semibold mb-6 text-center">
          Why Ecosystems Fail
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Lack of strategic planning",
            "Over-reliance on tools over design",
            "Poor platform integration",
            "Absence of performance measurement",
            "Scaling execution without scalable systems",
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
      <section className="max-w-4xl mx-auto mt-24 text-center relative z-10">
        <h2 className="text-purple-300 font-semibold mb-6">
          The Brainixt Approach
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          {[
            "Diagnose",
            "Architect",
            "Deploy",
            "Drive Performance",
            "Scale & Optimize",
          ].map((step, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              {step}
            </span>
          ))}
        </div>
      </section>

      {/* INSIGHT */}
      <section className="max-w-3xl mx-auto mt-20 text-center relative z-10">
        <h2 className="text-purple-300 mb-4">Strategic Insight</h2>
        <p className="text-lg text-gray-300">
          Scalability is not about doing more. It’s about building systems that
          handle growth without friction.
        </p>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-3xl mx-auto mt-16 text-gray-400 text-center space-y-4 relative z-10">
        <p>
          The future of business belongs to organizations that can design and manage
          complex systems with simplicity and precision.
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