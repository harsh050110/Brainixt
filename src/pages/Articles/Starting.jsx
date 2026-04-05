import { Link } from "react-router-dom";
import React from "react";

export default function Starting() {
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
          Why Most Growing Businesses Fail at Digital Alignment
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Growth creates complexity. As businesses expand, new tools, teams, and processes are added. Yet, many organizations eventually see growth slow, efficiency decline, and execution become inconsistent. The root cause is often not strategy or talent—it is the absence of digital alignment.
        </p>
      </div>

      {/* WHAT DIGITAL ALIGNMENT MEANS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">What Digital Alignment Really Means</h2>
        <p className="text-gray-400 text-sm md:text-base mb-4 text-center">
          Digital alignment ensures all critical business components operate as a connected system:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-base max-w-2xl mx-auto space-y-1">
          {[
            "Business strategy",
            "Technology infrastructure",
            "Marketing and revenue systems",
            "Operational workflows",
            "Data and decision-making frameworks"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE GROWTH TRAP */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Growth Trap</h2>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          Most businesses scale in phases:
        </p>
        <ol className="list-decimal list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          <li>Early traction through effort and experimentation</li>
          <li>Rapid growth driven by marketing and demand</li>
          <li>Expansion of teams, tools, and processes</li>
        </ol>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Misalignment often begins during this transition, as new systems are added without integration, teams operate in silos, and processes evolve without structure.
        </p>
      </div>

      {/* WHY DIGITAL ALIGNMENT FAILS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Why Digital Alignment Fails</h2>

        {[
          {
            title: "1. Strategy Is Not Connected to Execution",
            points: [
              "Misaligned priorities",
              "Inefficient resource allocation",
              "Inconsistent outcomes"
            ]
          },
          {
            title: "2. Technology Is Adopted Without Architecture",
            points: [
              "Data becomes fragmented",
              "Systems do not communicate",
              "Limited visibility across functions"
            ]
          },
          {
            title: "3. Marketing and Revenue Systems Are Disconnected",
            points: [
              "Low conversion rates",
              "High acquisition costs",
              "Unpredictable revenue"
            ]
          },
          {
            title: "4. Lack of Data-Driven Decision Frameworks",
            points: [
              "No centralized dashboards",
              "Delayed or inaccurate reporting",
              "Decisions based on intuition"
            ]
          },
          {
            title: "5. Operations Do Not Scale with Demand",
            points: [
              "Processes become inefficient",
              "Teams become overloaded",
              "Execution slows down"
            ]
          }
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

      {/* COST OF MISALIGNMENT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Cost of Misalignment</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Increasing operational complexity",
            "Declining efficiency",
            "Rising customer acquisition costs",
            "Inconsistent performance",
            "Limited scalability"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* WHAT ALIGNED ORGANIZATIONS DO */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Aligned Organizations Do Differently</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Integrated technology ecosystems",
            "Structured revenue and conversion systems",
            "Data-driven decision frameworks",
            "Scalable operational processes",
            "Clear connection between strategy and execution"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps organizations achieve digital alignment through a structured transformation model: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize.
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Align business strategy with digital systems",
            "Integrate technology, marketing, and operations",
            "Build scalable revenue infrastructure",
            "Enable real-time performance visibility",
            "Optimize systems for long-term growth"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Most businesses do not fail because they lack effort—they fail because their systems are not aligned. Digital alignment is a strategic foundation for scale, not just a technical initiative.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your organization is experiencing growth challenges, operational inefficiencies, or inconsistent performance, the issue may not be effort—it may be alignment. Brainixt partners with organizations to design integrated digital ecosystems that enable clarity, efficiency, and sustainable growth.
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