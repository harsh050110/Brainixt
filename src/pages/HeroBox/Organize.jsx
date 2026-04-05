import React from "react";

export default function CaseStudy() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Case Study: Scaling with Precision, Speed, and Impact
          </span>
        </h2>
      </section>

      {/* CLIENT CONTEXT */}
      <section className="max-w-3xl mx-auto text-gray-300 space-y-6 relative z-10">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-purple-300 font-semibold mb-3">Client Context</h3>
          <p>
            A growth-stage organization operating in a competitive digital market
            experienced rapid demand but lacked the structured systems required to
            scale efficiently.
          </p>
          <p className="mt-3">
            Despite strong market potential, the company faced operational
            bottlenecks, inconsistent revenue performance, and fragmented digital
            infrastructure. Leadership recognized the need for a structured
            transformation to enable sustainable growth.
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="max-w-5xl mx-auto mt-20 relative z-10">
        <h3 className="text-xl font-semibold text-purple-300 mb-8 text-center">
          The Challenge
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <ul className="space-y-2 text-red-300 text-sm">
              <li>• Disconnected systems across marketing, sales, and operations</li>
              <li>• Inconsistent lead generation</li>
              <li>• Low conversion predictability</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <ul className="space-y-2 text-red-300 text-sm">
              <li>• Lack of centralized data visibility</li>
              <li>• Operational inefficiencies</li>
              <li>• Non-scalable technology infrastructure</li>
            </ul>
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-4xl mx-auto mt-24 relative z-10">
        <h3 className="text-2xl font-semibold text-center text-purple-300 mb-12">
          Brainixt Transformation Model™
        </h3>

        <div className="space-y-6">

          {[
            {
              title: "1. Diagnose",
              text: "Comprehensive assessment of business model, acquisition systems, infrastructure, workflows, and data to identify scalability constraints.",
            },
            {
              title: "2. Architect",
              text: "Designed an integrated growth ecosystem including revenue systems, CRM strategy, acquisition frameworks, and analytics models.",
            },
            {
              title: "3. Deploy",
              text: "Implemented CRM, automation workflows, marketing infrastructure, and data tracking systems to translate strategy into execution.",
            },
            {
              title: "4. Drive Performance",
              text: "Continuous optimization through performance tracking, conversion improvements, and workflow refinement.",
            },
            {
              title: "5. Scale & Optimize",
              text: "Enabled expansion, improved revenue predictability, and built a scalable growth engine.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-indigo-500/40"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl p-6 rounded-2xl">
                <h4 className="text-purple-300 font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mt-24 relative z-10">
        <h3 className="text-xl font-semibold text-purple-300 mb-8 text-center">
          Impact
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <ul className="space-y-2 text-green-300 text-sm">
              <li>• 2.5× increase in qualified lead generation</li>
              <li>• 35% improvement in conversion rates</li>
              <li>• 40% increase in operational efficiency</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <ul className="space-y-2 text-green-300 text-sm">
              <li>• Significant reduction in acquisition cost</li>
              <li>• Predictable and structured revenue growth</li>
              <li>• Scalable system-driven operations</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="max-w-3xl mx-auto mt-24 relative z-10">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-purple-300 font-semibold mb-4 text-center">
            Key Takeaways
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Scaling requires systems, not isolated efforts</li>
            <li>• Integrated infrastructure replaces fragmented tools</li>
            <li>• Structured execution enables predictable growth</li>
            <li>• Alignment of strategy, tech, and operations is critical</li>
          </ul>
        </div>
      </section>

      {/* FINAL INSIGHT */}
      <section className="max-w-3xl mx-auto mt-20 text-center relative z-10">
        <p className="text-lg text-purple-200">
          Most organizations do not lack ambition. They lack structured systems.
        </p>
      </section>

    </div>
  );
}