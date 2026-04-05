import React from "react";
import {Link} from "react-router-dom";
const systemInsights = [
  {
    title: "Revenue Leakage",
    description: "Without structured systems, leads are lost, follow-ups are inconsistent, and opportunities are missed, reducing potential revenue even with strong demand.",
  },
  {
    title: "Increased Customer Acquisition Costs",
    description: "Poor systems lead to inefficient marketing and sales processes, resulting in higher cost per lead, lower conversions, and reduced ROI.",
  },
  {
    title: "Operational Inefficiency",
    description: "Teams rely on manual processes, repetitive tasks, and unstructured workflows, which slows execution and reduces productivity.",
  },
  {
    title: "Inconsistent Customer Experience",
    description: "Without system alignment, communication varies, service quality fluctuates, and customer journeys are fragmented, impacting trust and retention.",
  },
  {
    title: "Limited Scalability",
    description: "Poor systems may work at small scale but fail as the business grows, causing errors, process breakdowns, and declining performance.",
  },
  {
    title: "Lack of Data Visibility",
    description: "Fragmented systems result in incomplete data, delayed reporting, and reactive decision-making rather than strategic planning.",
  },
  {
    title: "Founder and Team Burnout",
    description: "In the absence of structured systems, the founder becomes the execution bottleneck, teams overcompensate, and workloads rise unsustainably.",
  },
];

const BlogPageD = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          The Hidden Cost of Poor Business Systems
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Many business challenges are visible—but the most critical problems are hidden within poorly designed systems. At Brainixt, we identify these inefficiencies and help organizations build scalable, structured systems.
        </p>
      </section>

      {/* WHY POOR SYSTEMS GO UNNOTICED */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">Why Poor Systems Go Unnoticed</h3>
        <p className="text-gray-400 mb-4">
          Poor systems create small inefficiencies, minor delays, and inconsistent outcomes that accumulate over time. These issues are often misattributed to market conditions, team performance, or competition, leaving the real problem unaddressed.
        </p>
      </section>

      {/* INSIGHTS GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {systemInsights.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </section>

      {/* STRONG BUSINESS SYSTEMS */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What Strong Business Systems Look Like</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Structured and documented workflows</li>
          <li>Integrated technology platforms</li>
          <li>Automated processes</li>
          <li>Clear performance tracking</li>
          <li>Alignment across functions</li>
        </ul>
        <p className="text-gray-400 mt-4">
          In these systems, work flows efficiently, decisions are data-driven, and growth is scalable.
        </p>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations eliminate hidden inefficiencies through our structured transformation model:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Identify hidden inefficiencies</li>
          <li>Design integrated business systems</li>
          <li>Align strategy, technology, and operations</li>
          <li>Enable data-driven performance</li>
          <li>Build scalable infrastructure</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Poor business systems create hidden costs that limit growth, efficiency, and profitability. Addressing these issues improves operational efficiency, increases revenue capture, reduces costs, and enables sustainable scaling.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design structured systems that eliminate inefficiencies and drive scalable growth.
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

export default BlogPageD;