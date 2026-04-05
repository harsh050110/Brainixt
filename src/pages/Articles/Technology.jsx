import { Link } from "react-router-dom";
import React from "react";

export default function Technology() {
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
          The Technology Architecture Mistakes That Limit Business Growth
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Technology is often seen as an enabler of growth, but many businesses encounter a paradox: increasing investment in tools often coincides with slower, more complex, and less predictable growth. The issue is not technology itself—it is the lack of structured technology architecture.
        </p>
      </div>

      {/* COMMON MISTAKES */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Common Architecture Mistakes That Limit Growth</h2>

        {[
          {
            title: "1. Building Systems Without a Long-Term Vision",
            points: [
              "Inconsistent system design",
              "Redundant tools and platforms",
              "Limited scalability"
            ]
          },
          {
            title: "2. Fragmented Systems and Data Silos",
            points: [
              "Data becomes fragmented",
              "Teams operate in silos",
              "Limited cross-functional visibility"
            ]
          },
          {
            title: "3. Over-Reliance on Tools Instead of System Design",
            points: [
              "Tools without architecture lead to complexity",
              "Architecture without tools can still scale",
              "Focus should be on system interactions"
            ]
          },
          {
            title: "4. Lack of Scalable Infrastructure",
            points: [
              "Performance declines under load",
              "Systems become unstable",
              "Operational risk increases"
            ]
          },
          {
            title: "5. Absence of Data Architecture",
            points: [
              "No centralized data systems",
              "Unstandardized data structures",
              "Limited real-time analytics"
            ]
          },
          {
            title: "6. Poor Integration Across Business Functions",
            points: [
              "Disconnected marketing, sales, operations, and finance",
              "Inefficient processes",
              "Broken communication and customer experience"
            ]
          },
          {
            title: "7. Limited Automation and Workflow Design",
            points: [
              "Manual processes become inefficient at scale",
              "Increased errors",
              "Slower execution"
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

      {/* IMPACT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Impact on Business Growth</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Slower execution",
            "Increased operational costs",
            "Limited scalability",
            "Poor customer experience",
            "Reduced competitiveness"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* WHAT SCALABLE ARCHITECTURE LOOKS LIKE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Scalable Architecture Looks Like</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Integrated systems with seamless data flow",
            "Centralized data and analytics platforms",
            "Scalable infrastructure and cloud-based systems",
            "Automated workflows and processes",
            "Alignment between technology and business strategy"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps organizations design scalable technology architecture through a structured methodology: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize.
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Aligning technology with business objectives",
            "Designing integrated system architectures",
            "Eliminating data silos",
            "Building scalable infrastructure",
            "Enabling data-driven decision-making"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Technology does not limit growth—poor architecture does. Organizations that treat technology as strategic infrastructure gain a significant competitive advantage.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your organization faces inefficiencies, system fragmentation, or scalability challenges, the root cause may lie in your technology architecture. Brainixt partners with organizations to design integrated, scalable systems for long-term growth.
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