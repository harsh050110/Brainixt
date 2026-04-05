import { Link } from "react-router-dom";
import React from "react";

export default function System() {
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
          Systems Thinking: The Missing Discipline in Modern Business
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Modern businesses operate in complex environments: multiple teams, tools, and processes. Yet inefficiency, misalignment, and inconsistent growth remain common.</p>
          <p>At Brainixt, we see that the root issue is often <strong>lack of systems thinking</strong>—understanding the business as an interconnected system rather than fragmented functions.</p>
        </div>
      </div>

      {/* FRAGMENTED THINKING */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Problem with Fragmented Thinking</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Marketing focuses on campaigns",
            "Sales focuses on conversions",
            "Operations focuses on execution",
            "Technology focuses on tools",
            "Teams optimize parts but not the whole system",
            "Leads to misalignment and inefficiency",
            "Reduces overall performance"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          Optimizing parts does not guarantee optimizing the whole business.
        </p>
      </div>

      {/* WHY SYSTEMS THINKING IS MISSING */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Systems Thinking Is Missing</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Execution Over Strategy", desc: "Speed is prioritized over understanding system interactions." },
            { title: "Tool-Driven Approach", desc: "Tools solve isolated problems but not systemic challenges." },
            { title: "Lack of Cross-Functional Alignment", desc: "Teams work independently, causing inconsistent outcomes." },
            { title: "Short-Term Focus", desc: "Immediate results take priority over structured solutions." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SYSTEMS THINKING PRACTICE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">What Systems Thinking Looks Like in Practice</h2>
        {[
          {
            title: "1. Integrated Strategy and Execution",
            points: ["Every action aligns with business objectives", "Strategy drives operational systems"],
          },
          {
            title: "2. Cross-Functional Alignment",
            points: ["Marketing, sales, operations, and technology operate as a unified system", "Ensures consistency and efficiency"],
          },
          {
            title: "3. Structured Workflows and Processes",
            points: ["Processes are designed, documented, and optimized", "Reduces variability and improves performance"],
          },
          {
            title: "4. Data-Driven Decision-Making",
            points: ["Decisions use integrated data and metrics", "Provides system-wide insights"],
          },
          {
            title: "5. Continuous Optimization",
            points: ["Regular evaluation and improvement cycles", "Measure → Analyze → Optimize → Scale"],
          },
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

      {/* BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          We apply systems thinking using a structured transformation model: <strong>Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Understand the business as a complete system",
            "Identify gaps and inefficiencies",
            "Design integrated growth and operational systems",
            "Align technology with strategy",
            "Enable scalable and sustainable performance"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your organization struggles with inefficiencies, misalignment, or scaling challenges, Brainixt partners with you to design integrated systems that enable clarity, efficiency, and sustainable growth.
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