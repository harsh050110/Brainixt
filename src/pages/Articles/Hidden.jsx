import { Link } from "react-router-dom";
import React from "react";

export default function FragmentedBusinessSystems() {
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
          The Hidden Cost of Fragmented Business Systems
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>As businesses grow, complexity increases. New tools, expanding teams, and evolving processes are introduced. While each decision appears logical, they can create fragmented systems that impede efficiency and stall growth.</p>
          <p>At Brainixt, we recognize that fragmented systems are often the hidden barrier to scalable business performance. It’s not about doing more; it’s about aligning the systems for sustainable success.</p>
        </div>
      </div>

      {/* WHAT FRAGMENTATION REALLY MEANS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">What Fragmentation Really Means</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Disconnected technology platforms",
            "Siloed data across departments",
            "Unaligned marketing, sales, and operations",
            "Inconsistent processes and workflows",
            "Lack of centralized visibility and control"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* WHY FRAGMENTATION HAPPENS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Fragmentation Happens</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Rapid growth without structured planning",
            "Adoption of tools based on immediate needs",
            "Lack of long-term technology architecture",
            "Independent decision-making across departments",
            "Focus on execution over system design"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE HIDDEN COSTS OF FRAGMENTATION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Hidden Costs of Fragmentation</h2>
        {[
          { title: "Operational Inefficiency", desc: "Teams spend time navigating disconnected systems leading to manual data transfers and repetitive tasks." },
          { title: "Limited Data Visibility", desc: "Data is spread across platforms, leading to incomplete insights and delayed decision-making." },
          { title: "Increased Customer Acquisition Costs", desc: "Fragmented systems lead to poor lead management and inefficient marketing spend." },
          { title: "Inconsistent Customer Experience", desc: "Disconnected systems cause communication gaps, resulting in varied customer service quality." },
          { title: "Slower Decision-Making", desc: "Without centralized data, decisions become delayed, relying on assumptions rather than facts." },
          { title: "Scalability Constraints", desc: "As businesses grow, fragmented systems fail under increased pressure, reducing performance." }
        ].map((item, i) => (
          <div key={i} className="p-4 mb-6 rounded-lg bg-white/5 border border-white/10">
            <h3 className="font-semibold text-blue-300 mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* THE COMPOUNDING EFFECT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Compounding Effect</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          The true cost of fragmentation is not one issue, but a cumulative set of inefficiencies that grow over time. As businesses add more tools to solve problems, complexity increases, making it harder to optimize systems and sustain growth.
        </p>
      </div>

      {/* INTEGRATED SYSTEMS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Integrated Systems Look Like</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          High-performing organizations build integrated systems that connect all aspects of the business, resulting in:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Connected technology platforms",
            "Seamless data flow across functions",
            "Aligned marketing, sales, and operations",
            "Standardized and automated processes",
            "Real-time performance visibility"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          At Brainixt, we help organizations transition from fragmentation to integration using a structured approach:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Identify system gaps and inefficiencies",
            "Design integrated digital ecosystems",
            "Align business functions through technology",
            "Implement scalable infrastructure and workflows",
            "Enable data-driven performance management"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Fragmentation is not just a technical issue—it is a strategic limitation. Organizations that fail to integrate their systems will struggle to scale efficiently, no matter how much effort they put into growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your organization is struggling with inefficiencies, inconsistent performance, or scaling challenges, the issue may be fragmentation. Let Brainixt help you build integrated systems that enable efficiency, clarity, and sustainable growth.
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