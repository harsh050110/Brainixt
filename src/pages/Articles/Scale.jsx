import { Link } from "react-router-dom";
import React from "react";

export default function Scale() {
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
          Why Most Startups Scale Marketing Before Infrastructure
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Startups are built on speed. Rapid execution and quick market capture often define early success. As traction builds, the instinct is to accelerate growth through marketing—more campaigns, more spend, more leads. Yet, growth often becomes inconsistent, conversions decline, and operations struggle. The issue is not marketing—it is the absence of infrastructure to support growth.
        </p>
      </div>

      {/* EARLY GROWTH BIAS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Early Growth Bias</h2>
        <p className="text-gray-400 text-center mb-4">
          Early-stage marketing delivers visible results:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-base max-w-2xl mx-auto space-y-1">
          {[
            "Leads increase",
            "Traffic grows",
            "Revenue begins to rise"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          This creates the false assumption: “More marketing equals more growth,” while infrastructure is delayed due to less visibility, planning effort, and slower returns.
        </p>
      </div>

      {/* HIDDEN PROBLEMS OF SCALING MARKETING FIRST */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Hidden Problem</h2>
        <p className="text-gray-400 text-center mb-4">
          When marketing scales without infrastructure, inefficiencies multiply:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-base max-w-2xl mx-auto space-y-1">
          {[
            "Leads are not managed efficiently",
            "Conversion processes are inconsistent",
            "Customer journeys are fragmented",
            "Data is not centralized or actionable",
            "Operations struggle with increased demand"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* WHY STARTUPS MAKE THIS MISTAKE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Why Startups Make This Mistake</h2>
        {[
          { title: "1. Short-Term Growth Pressure", points: ["Marketing provides quick wins", "Infrastructure requires long-term investment"] },
          { title: "2. Lack of System Design Thinking", points: ["Focus on campaigns, funnels, landing pages", "Neglect integrated systems and scalable workflows"] },
          { title: "3. Misinterpretation of Early Success", points: ["Early traction from product-market fit and founder involvement", "Assuming conditions scale automatically"] },
          { title: "4. Underestimating Operational Complexity", points: ["Customer interactions multiply", "Data grows exponentially", "Processes become more complex"] }
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

      {/* CONSEQUENCES */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Consequences of Scaling Marketing First</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Rising customer acquisition costs",
            "Declining conversion rates",
            "Poor customer experience",
            "Increased operational inefficiencies",
            "Difficulty maintaining growth momentum"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* INFRASTRUCTURE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Infrastructure Really Means</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "CRM and lead management systems",
            "Conversion and sales workflows",
            "Customer lifecycle and retention systems",
            "Data tracking and analytics frameworks",
            "Operational processes and automation"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE RIGHT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Right Approach: Infrastructure Before Acceleration</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Build structured acquisition and conversion systems",
            "Implement CRM and data tracking",
            "Design customer journeys",
            "Automate key workflows",
            "Align marketing, sales, and operations"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Perspective</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps startups move from growth by effort to growth by systems through a structured model: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize.
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Design scalable infrastructure",
            "Align marketing with system capability",
            "Build integrated growth ecosystems",
            "Enable data-driven decision-making"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Marketing creates demand. Infrastructure converts demand into revenue. Scaling marketing without infrastructure amplifies inefficiency, while building systems first enables predictable, scalable growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your startup is experiencing rising acquisition costs, inconsistent conversions, or operational challenges, the issue may not be your marketing—it may be your infrastructure.
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