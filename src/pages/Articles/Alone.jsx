import { Link } from "react-router-dom";
import React from "react";

export default function Alone() {
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
          Why Technology Alone Cannot Drive Business Growth
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base">
          In today’s digital-first world, organizations invest heavily in platforms, automation tools, AI solutions, and digital infrastructure. Yet, many struggle to achieve sustainable growth. The issue is not technology—it’s the assumption that technology alone can drive results. True growth comes from aligned systems.
        </p>
      </div>

      {/* TECHNOLOGY-FIRST MISCONCEPTION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Technology-First Misconception</h2>
        <p className="text-gray-400 text-center mb-4">
          Many organizations believe: "If we implement the right tools, growth will follow." Without alignment, this results in:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-base max-w-2xl mx-auto space-y-1">
          {[
            "Fragmented systems",
            "Underutilized technology",
            "Increased complexity",
            "Limited business impact"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* WHAT DRIVES GROWTH */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">What Actually Drives Business Growth</h2>
        {[
          { title: "1. Strategy", points: ["Define market positioning", "Revenue models", "Target audiences", "Growth objectives"] },
          { title: "2. Systems", points: ["Integrate marketing, sales, operations, and customer lifecycle", "Translate effort into results"] },
          { title: "3. Execution", points: ["Process implementation", "Team alignment", "Performance tracking", "Continuous optimization"] },
          { title: "4. Technology", points: ["Supports automation", "Enables data tracking", "Scales operations", "Improves efficiency"] }
        ].map((item, i) => (
          <div key={i} className="p-5 mb-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              {item.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WHY TECH FAILS WITHOUT ALIGNMENT */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Why Technology Fails Without Alignment</h2>
        {[
          { title: "1. Tools Without Strategy", points: ["Misaligned implementation", "Poor ROI", "Confusion across teams"] },
          { title: "2. Systems Without Integration", points: ["Data silos", "Inefficient workflows", "Limited visibility"] },
          { title: "3. Automation Without Process Design", points: ["Ineffective workflows", "Increased errors", "Low efficiency gains"] },
          { title: "4. Data Without Decision Frameworks", points: ["Delayed decisions", "Lack of insights", "Missed opportunities"] }
        ].map((item, i) => (
          <div key={i} className="p-5 mb-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              {item.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* REAL ROLE OF TECHNOLOGY */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Real Role of Technology</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Enable strategy execution",
            "Support system integration",
            "Improve efficiency",
            "Provide data for decision-making"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* HIGH-PERFORMING ORGANIZATIONS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What High-Performing Organizations Do Differently</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Start with strategy",
            "Build structured systems",
            "Align teams and processes",
            "Use technology to enable and scale"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt aligns strategy, systems, and technology through a structured transformation model: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize.
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Define clear growth strategies",
            "Design integrated business systems",
            "Implement scalable technology infrastructure",
            "Enable data-driven execution",
            "Optimize performance continuously"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Technology does not create growth. Alignment does. Organizations that rely solely on technology struggle to scale, while those that align strategy, systems, and execution achieve predictable and sustainable growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your organization is investing in technology but not seeing proportional growth, the issue may not be the tools—it may be the lack of alignment.
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