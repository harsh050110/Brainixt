import React from "react";
import {Link} from "react-router-dom";

const coreSystems = [
  {
    title: "Revenue System",
    subtitle: "The Engine of Growth",
    description: "Manages customer acquisition, lead qualification, sales conversion, and retention. Without it, leads are wasted, conversions are inconsistent, and revenue is unpredictable.",
  },
  {
    title: "Operational System",
    subtitle: "The Backbone of Execution",
    description: "Defines workflows, task management, process standardization, and team coordination. Without it, execution becomes inconsistent, efficiency declines, and errors increase.",
  },
  {
    title: "Technology System",
    subtitle: "The Enabler of Scale",
    description: "Supports automation, integration, data tracking, and system scalability via CRMs, automation tools, and software infrastructure. Without it, growth relies on manual effort.",
  },
  {
    title: "Data & Analytics System",
    subtitle: "The Driver of Decisions",
    description: "Provides visibility into key performance metrics, customer behavior, revenue drivers, and operational efficiency. Without it, decisions are reactive, optimization is limited, and growth is unpredictable.",
  },
  {
    title: "Financial System",
    subtitle: "The Foundation of Sustainability",
    description: "Ensures cost tracking, revenue analysis, profitability management, and forecasting. Without it, growth may not translate into profit, and financial risks increase.",
  },
];

const BlogPageG = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          The 5 Systems Every Business Needs Before Scaling
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Most businesses aspire to scale, but scaling without systems often leads to operational chaos, inefficiency, and inconsistent performance. At Brainixt, we help organizations build the right systems before scaling for sustainable growth.
        </p>
      </section>

      {/* CORE SYSTEMS GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreSystems.map((system, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-1">{system.title}</h4>
            <h5 className="text-gray-400 mb-2 italic">{system.subtitle}</h5>
            <p className="text-gray-300">{system.description}</p>
          </div>
        ))}
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations build these core systems through a structured transformation model:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Identify system gaps</li>
          <li>Design scalable business systems</li>
          <li>Integrate technology and processes</li>
          <li>Enable data-driven performance</li>
          <li>Build long-term growth infrastructure</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Before scaling, businesses must focus on building the right foundation. The five core systems—revenue, operations, technology, data, and finance—are essential for efficiency, predictability, scalability, and sustainable growth.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design structured systems that enable efficient, scalable, and long-term business growth.
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

export default BlogPageG;