import { Link } from "react-router-dom";

export default function GrowthSystemsPage() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            High-Performance Growth Systems
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          The Foundation of Scalable Business Success
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <p>
          Most organizations believe growth is driven by marketing, sales effort,
          or product innovation. In reality, sustainable growth is not the result
          of isolated initiatives—it is the outcome of a well-structured system.
        </p>

        <p>
          High-performing companies do not rely on campaigns. They rely on
          systems.
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-purple-200">
          At Brainixt, a high-performance growth system is an integrated framework
          where strategy, technology, operations, and revenue mechanisms work in
          alignment to deliver predictable and scalable results.
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h2 className="text-xl font-semibold text-purple-300 mb-6">
          The Problem with Traditional Growth Approaches
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">

          <div>
            <p className="mb-4">Many businesses attempt to scale through:</p>
            <ul className="space-y-2">
              <li>• Increased marketing spend</li>
              <li>• Expansion of sales teams</li>
              <li>• Adoption of tools and platforms</li>
            </ul>
          </div>

          <div>
            <p className="mb-4">Common issues include:</p>
            <ul className="space-y-2 text-red-300">
              <li>• Fragmented systems</li>
              <li>• Lack of data visibility</li>
              <li>• Inefficient conversion</li>
              <li>• Disconnected customer journeys</li>
              <li>• Operational bottlenecks</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DEFINITION */}
      <section className="max-w-3xl mx-auto mt-20 text-gray-300 space-y-6 relative z-10">
        <h2 className="text-xl font-semibold text-purple-300">
          What Is a High-Performance Growth System?
        </h2>

        <p>
          A high-performance growth system is not a single tool—it is a cohesive
          ecosystem that supports the entire growth lifecycle.
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <ul className="space-y-2">
            <li>• Customer acquisition</li>
            <li>• Conversion & sales</li>
            <li>• Lifecycle & retention</li>
            <li>• Technology infrastructure</li>
            <li>• Data & analytics</li>
            <li>• Operational workflows</li>
          </ul>
        </div>

        <p className="text-green-300">
          When aligned, businesses achieve predictable growth, efficiency, and
          better decision-making.
        </p>
      </section>

      {/* COMPONENTS */}
      <section className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-2xl font-semibold text-center text-purple-300 mb-12">
          Core Components of a High-Performance Growth System
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Strategic Foundation",
              points: [
                "Target market & positioning",
                "Revenue model",
                "Growth objectives",
                "Competitive advantage",
              ],
            },
            {
              title: "Customer Acquisition",
              points: [
                "Channel strategy",
                "Lead generation systems",
                "Performance tracking",
                "Budget frameworks",
              ],
            },
            {
              title: "Conversion & Sales",
              points: [
                "Funnel architecture",
                "CRM integration",
                "Lead qualification",
                "Sales automation",
              ],
            },
            {
              title: "Lifecycle & Retention",
              points: [
                "Onboarding systems",
                "Engagement workflows",
                "Retention strategies",
                "Customer experience",
              ],
            },
            {
              title: "Technology Infrastructure",
              points: [
                "CRM platforms",
                "Automation tools",
                "Data integration",
                "Analytics dashboards",
              ],
            },
            {
              title: "Data & Intelligence",
              points: [
                "Acquisition metrics",
                "Conversion tracking",
                "Customer lifetime value",
                "Operational efficiency",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-indigo-500/40"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl p-6 rounded-2xl">
                <h3 className="text-purple-300 font-semibold mb-3">
                  {item.title}
                </h3>
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

      {/* INSIGHT */}
      <section className="max-w-3xl mx-auto mt-24 text-center text-gray-300 relative z-10">
        <h2 className="text-xl text-purple-300 mb-4">Strategic Insight</h2>
        <p className="text-lg">
          Growth is not driven by effort alone. It is driven by systems designed
          for performance.
        </p>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-3xl mx-auto mt-16 text-gray-400 space-y-4 text-center relative z-10">
        <p>
          A high-performance growth system transforms complexity into clarity,
          effort into efficiency, and activity into measurable outcomes.
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