import { Link } from "react-router-dom";
import React from "react";

export default function Transformation() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Brainixt Insights
          </span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold max-w-3xl mx-auto">
          The Brainixt Transformation Model™: A Structured Approach to Scalable Business Growth
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Most organizations do not struggle from lack of ambition. They struggle because growth is often driven by isolated efforts rather than structured systems.</p>
          <p>Marketing operates independently. Technology evolves without alignment. Operations scale without clarity. Brainixt developed the <strong>Brainixt Transformation Model™</strong> to unify strategy, technology, and execution into a system for scalable performance.</p>
        </div>
      </div>

      {/* CORE PROBLEM */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Core Problem: Growth Without Structure</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Systems become disconnected",
            "Data remains fragmented",
            "Execution becomes inconsistent",
            "Decision-making slows down",
            "Tools and teams expand without alignment",
            "Processes multiply without clarity"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          Without structure, growth becomes difficult to sustain.
        </p>
      </div>

      {/* MODEL OVERVIEW */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Need for a Structured Transformation Model</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Scaling a business is not about doing more—it is about building systems that enable growth. This requires a clear understanding of limitations, alignment across functions, and continuous optimization.
        </p>
      </div>

      {/* BRAINIXT TRANSFORMATION MODEL */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Brainixt Transformation Model™</h2>
        {[
          {
            title: "1. Diagnose",
            desc: "Understanding the Current State",
            points: [
              "Identify business model inefficiencies",
              "Find gaps in acquisition and conversion",
              "Evaluate technology limitations",
              "Detect operational bottlenecks",
              "Improve data visibility"
            ],
          },
          {
            title: "2. Architect",
            desc: "Designing the Future System",
            points: [
              "Digital ecosystem design",
              "Revenue system architecture",
              "Technology infrastructure planning",
              "Customer journey mapping",
              "Operational alignment"
            ],
          },
          {
            title: "3. Deploy",
            desc: "Translating Strategy into Execution",
            points: [
              "Technology integration",
              "CRM and automation setup",
              "Workflow and process deployment",
              "Performance tracking systems"
            ],
          },
          {
            title: "4. Drive Performance",
            desc: "Optimizing for Efficiency and Growth",
            points: [
              "Monitor performance metrics",
              "Improve conversion rates",
              "Enhance operational efficiency",
              "Refine acquisition and retention strategies"
            ],
          },
          {
            title: "5. Scale & Optimize",
            desc: "Enabling Long-Term Expansion",
            points: [
              "Market expansion",
              "Advanced automation",
              "System optimization",
              "Long-term growth planning"
            ],
          },
        ].map((item, i) => (
          <div key={i} className="p-5 mb-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
            <ul className="text-gray-400 text-sm space-y-1">
              {item.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WHY IT WORKS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why the Model Works</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Systems Over Activities: Growth is driven by structured systems—not isolated actions",
            "Integration Over Fragmentation: All functions operate as a unified ecosystem",
            "Data Over Assumptions: Decisions based on real-time performance insights",
            "Structure Over Chaos: Scalability requires defined processes and workflows",
            "Performance Over Effort: Success is measured by outcomes, not activity"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* IMPACT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Where the Model Creates Impact</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Startups transitioning from early growth to scale",
            "Real estate firms improving lead conversion systems",
            "SaaS companies building scalable platforms",
            "D2C brands optimizing customer lifecycle and retention",
            "Enterprises aligning operations and infrastructure"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with organizations to design and implement scalable systems that enable long-term growth and measurable impact.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
}