import { Link } from "react-router-dom";
import React from "react";

export default function ChaosToStructure() {
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
          From Chaos to Structure: Designing a Scalable Business Model
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Every growing business goes through a phase of chaos.</p>
          <p>Rapid expansion. Increasing demand. More customers, more teams, more activity.</p>
          <p>At first, this chaos is often mistaken for growth. But over time, it reveals deeper issues:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Inconsistent performance</li>
            <li>Operational inefficiencies</li>
            <li>Lack of clarity</li>
            <li>Difficulty scaling</li>
          </ul>
          <p className="text-white font-medium">
            The problem is not growth. It is the absence of structure.
          </p>
          <p>At Brainixt, we see that sustainable growth begins when businesses transition from chaotic execution to structured systems.</p>
        </div>
      </div>

      {/* NATURE OF EARLY-STAGE CHAOS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Nature of Early-Stage Chaos</h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "Founder-led decision-making",
            "Informal processes",
            "Manual execution",
            "Rapid experimentation",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          This enables speed and flexibility. However, as the business grows:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "Processes become inconsistent",
            "Teams lose alignment",
            "Systems fail to scale",
            "Decision-making slows down",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHAOS BECOMES A BARRIER TO GROWTH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Chaos Becomes a Barrier to Growth</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Lack of Defined Systems",
            "Fragmented Operations",
            "Limited Visibility",
            "Increasing Complexity",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center mt-4 text-sm md:text-base">
          Without structured systems, efficiency declines, and complexity increases, leading to inefficiency.
        </p>
      </div>

      {/* WHAT A SCALABLE BUSINESS MODEL LOOKS LIKE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">What a Scalable Business Model Looks Like</h2>
        <p className="text-gray-400 text-center mb-4 text-sm md:text-base">
          A scalable business model is not just about revenue—it’s about how the business operates.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Structured systems",
            "Integrated functions",
            "Data-driven decision-making",
            "Scalable infrastructure",
            "Consistent execution",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-4 text-sm md:text-base">
          Growth becomes predictable, not chaotic.
        </p>
      </div>

      {/* CORE ELEMENTS OF A SCALABLE BUSINESS MODEL */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Core Elements of a Scalable Business Model</h2>

        <div className="space-y-6">
          {[
            {
              title: "1. Strategic Clarity",
              points: [
                "Target market",
                "Value proposition",
                "Revenue model",
                "Growth objectives",
              ],
            },
            {
              title: "2. Integrated Revenue Systems",
              points: [
                "Customer acquisition",
                "Conversion",
                "Retention",
              ],
            },
            {
              title: "3. Operational Systems",
              points: [
                "Efficient execution",
                "Team alignment",
                "Scalable delivery",
              ],
            },
            {
              title: "4. Technology Infrastructure",
              points: [
                "Automation",
                "Integration",
                "Data tracking",
                "Scalability",
              ],
            },
            {
              title: "5. Data & Performance Intelligence",
              points: [
                "Key performance metrics",
                "Operational efficiency",
                "Growth drivers",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* TRANSFORMATION FROM CHAOS TO STRUCTURE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Transformation: Chaos to Structure</h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Transitioning from chaos to structure requires a deliberate approach.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Step 1: Diagnose - Identify bottlenecks, inefficiencies, system gaps",
            "Step 2: Architect - Design scalable systems, integrated workflows, tech infrastructure",
            "Step 3: Deploy - Implement processes, tools, automation",
            "Step 4: Drive Performance - Optimize conversion rates, efficiency, system performance",
            "Step 5: Scale & Optimize - Expand capacity, markets, revenue systems",
          ].map((step, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with organizations to build scalable systems that transform growth into sustainable performance.
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