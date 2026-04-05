import React from "react";

import {Link} from "react-router-dom";
const founderInsights = [
  {
    title: "Growth Bottlenecks",
    description: "The business can only grow as fast as the founder can manage, limiting scalability.",
  },
  {
    title: "Decision-Making Delays",
    description: "All decisions require founder input, slowing execution across teams.",
  },
  {
    title: "Operational Inefficiency",
    description: "Teams wait for direction instead of executing independently.",
  },
  {
    title: "Inconsistent Performance",
    description: "Results vary depending on the founder’s availability and involvement.",
  },
  {
    title: "Burnout and Fatigue",
    description: "The founder becomes overwhelmed, impacting both performance and long-term sustainability.",
  },
];

const BlogPageE = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          The Founder’s Trap: Why Most Businesses Depend Too Much on the Owner
        </h2>
        <p className="text-gray-400 leading-relaxed">
          In early-stage businesses, founder involvement is critical. But over-reliance on the owner creates bottlenecks, inefficiency, and limits scalability. At Brainixt, we help businesses transition from founder-driven execution to system-driven growth.
        </p>
      </section>

      {/* FOUNDER TRAP EXPLAINED */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What Is the Founder’s Trap?</h3>
        <p className="text-gray-400 mb-4">
          The Founder’s Trap occurs when a business cannot operate effectively without the constant involvement of its owner. Decisions, sales, client relationships, and execution all depend on the founder, preventing scalability.
        </p>
      </section>

      {/* IMPACT GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {founderInsights.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </section>

      {/* SHIFT TO SYSTEM-DRIVEN */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Shift: From Founder-Driven to System-Driven</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Build structured systems for sales, operations, customer lifecycle, and decision-making.</li>
          <li>Standardize processes: document how tasks are performed, who is responsible, and expected outcomes.</li>
          <li>Delegate with clarity: define roles, responsibilities, and performance metrics.</li>
          <li>Implement technology and automation for workflow management, CRM, reporting, and analytics.</li>
          <li>Create accountability frameworks to track team performance, operational efficiency, and outcomes.</li>
        </ul>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations escape the Founder’s Trap through structured system design:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Reduce founder dependency</li>
          <li>Design scalable systems</li>
          <li>Align teams and processes</li>
          <li>Enable independent execution</li>
          <li>Build performance-driven organizations</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Founder involvement builds businesses; systems scale them. Transitioning from founder-driven execution to system-driven operations is essential for sustainable growth, improved team performance, and independent scalability.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design scalable systems that reduce dependency and enable long-term growth.
        </p>
         <Link to ="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                  Start a Strategic Conversation
                </button>
                </Link>
      </section>
    </div>
  );
};

export default BlogPageE;