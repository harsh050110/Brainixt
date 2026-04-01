import { Link } from "react-router-dom";

export default function LeadershipInsightsPage() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <p className="text-purple-400 text-sm mb-3">Brainixt Insights</p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Scaling Leadership in Modern Enterprises
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base">
          From Execution to Strategic Direction
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <p>
          As organizations grow, the nature of leadership must evolve. What works
          at an early stage often becomes a constraint at scale.
        </p>

        <p>
          Enterprises require leadership that is structured, system-driven, and
          strategically aligned.
        </p>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-purple-200">
          At Brainixt, leadership is not just a role—it is a scalable system that
          determines how effectively an organization grows.
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h2 className="text-xl text-red-300 font-semibold mb-6">
          The Leadership Gap in Scaling Organizations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Decision bottlenecks",
            "Lack of clarity across teams",
            "Inconsistent execution",
            "Overdependence on leadership",
            "Limited scalability",
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

      {/* SHIFT */}
      <section className="max-w-4xl mx-auto mt-24 text-center relative z-10">
        <h2 className="text-purple-300 font-semibold mb-6">
          The Shift: From Operator to Architect
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          {[
            "Managing tasks → Designing systems",
            "Making decisions → Enabling frameworks",
            "Driving execution → Aligning strategy",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-6xl mx-auto mt-24 relative z-10">
        <h2 className="text-2xl text-center text-purple-300 font-semibold mb-12">
          Core Pillars of Scalable Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "Strategic Clarity",
              points: [
                "Vision & growth objectives",
                "Market positioning",
                "Business priorities",
                "Success metrics",
              ],
            },
            {
              title: "Decision Systems",
              points: [
                "Decision frameworks",
                "Data-driven insights",
                "Accountability structures",
                "Clear escalation paths",
              ],
            },
            {
              title: "Organizational Alignment",
              points: [
                "Defined roles",
                "Cross-functional alignment",
                "Reporting structures",
                "Performance accountability",
              ],
            },
            {
              title: "Leadership Enablement",
              points: [
                "Delegation frameworks",
                "Leadership development",
                "Ownership at team levels",
                "Decision authority distribution",
              ],
            },
            {
              title: "Technology Enablement",
              points: [
                "Dashboards & reporting",
                "Tracking tools",
                "Collaboration platforms",
                "Workflow automation",
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

      {/* FAILURE */}
      <section className="max-w-5xl mx-auto mt-24 relative z-10">
        <h2 className="text-red-300 font-semibold mb-6 text-center">
          Why Leadership Fails to Scale
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Founder dependency",
            "Lack of systems",
            "Reactive decisions",
            "Strategy misalignment",
            "No performance measurement",
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
          Organizations scale not because leaders work harder—but because
          leadership becomes structured and system-driven.
        </p>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-3xl mx-auto mt-16 text-gray-400 text-center space-y-4 relative z-10">
        <p>
          Scaling leadership requires mindset shift, structured systems, and
          alignment between strategy and execution.
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