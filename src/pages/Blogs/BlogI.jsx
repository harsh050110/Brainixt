import React from "react";

import {Link} from "react-router-dom";
const dataDrivenBenefits = [
  {
    title: "Better Decision-Making",
    description: "Analyze real-time performance, identify patterns and trends, and make informed decisions. Reduces uncertainty and improves outcomes."
  },
  {
    title: "Higher Conversion Efficiency",
    description: "Track customer behavior, optimize funnels, and improve conversion rates. Refine every stage of the customer journey using data."
  },
  {
    title: "Optimized Marketing Spend",
    description: "Track channel performance, allocate budgets efficiently, and eliminate underperforming campaigns. Improves ROI and reduces costs."
  },
  {
    title: "Improved Customer Experience",
    description: "Use insights into customer preferences and behavior patterns to personalize interactions, improve communication, and increase retention."
  },
  {
    title: "Faster Adaptation",
    description: "Identify market changes early, respond faster, and adjust strategies in real time to maintain a competitive advantage."
  },
  {
    title: "Predictable Growth",
    description: "Revenue becomes more predictable, trends measurable, and forecasting improves, enabling better planning and scalable growth."
  }
];

const BlogPageI = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          How Data-Driven Businesses Outperform Competitors
        </h2>
        <p className="text-gray-400 leading-relaxed">
          High-performing organizations use structured data to guide strategy, decision-making, and operations. Assumption-driven businesses lag behind in efficiency, growth, and adaptability.
        </p>
      </section>

      {/* DATA-DRIVEN BENEFITS */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataDrivenBenefits.map((benefit, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
            <p className="text-gray-300">{benefit.description}</p>
          </div>
        ))}
      </section>

      {/* BUILDING A DATA-DRIVEN BUSINESS */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">How to Build a Data-Driven Business</h3>
        <ol className="list-decimal list-inside text-gray-400 space-y-2">
          <li><strong>Define Key Metrics:</strong> Focus on revenue drivers, conversion points, and customer behavior.</li>
          <li><strong>Implement Tracking Systems:</strong> Use CRM systems, analytics tools, and dashboards.</li>
          <li><strong>Centralize Data:</strong> Ensure data flows into a unified system for visibility.</li>
          <li><strong>Align Teams Around Data:</strong> Marketing, sales, and operations work with shared metrics.</li>
          <li><strong>Optimize Continuously:</strong> Identify inefficiencies, improve performance, and scale effectively.</li>
        </ol>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations build data-driven systems using a structured transformation model:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Design data architecture aligned with business strategy</li>
          <li>Implement tracking and analytics systems</li>
          <li>Enable real-time decision-making</li>
          <li>Continuously optimize performance across functions</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Data is essential for competitive advantage. Organizations that act on insights outperform those that only collect data, enabling better decisions, efficiency, performance, and scalable growth.
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

export default BlogPageI;