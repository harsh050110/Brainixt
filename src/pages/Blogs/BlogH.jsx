import React from "react";
import {Link} from "react-router-dom";

const revenueComponents = [
  {
    title: "Structured Customer Acquisition System",
    description: "Consistent lead flow through multi-channel strategies, audience targeting, performance tracking, and funnel optimization. Focus on quality and consistency, not just volume.",
  },
  {
    title: "Conversion Architecture",
    description: "Defined sales funnel stages, CRM integration, lead qualification, and standardized sales workflows. Improves conversion rates and predictability.",
  },
  {
    title: "Customer Lifecycle System",
    description: "Onboarding processes, engagement strategies, retention workflows, upsell/cross-sell systems. Maximizes customer lifetime value.",
  },
  {
    title: "Technology Infrastructure",
    description: "CRM platforms, automation tools, analytics dashboards, and integrated systems. Enables scalability, efficiency, and consistent execution.",
  },
  {
    title: "Performance Intelligence",
    description: "Tracking metrics like lead-to-customer conversion, revenue per customer, CAC, and retention rates. Enables data-driven optimization and predictability.",
  },
];

const BlogPageH = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          How to Build a Predictable Revenue Engine
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Most businesses do not struggle to generate revenue—they struggle to predict it. A predictable revenue engine ensures consistent revenue generation, conversion, and retention, enabling scalable and efficient growth.
        </p>
      </section>

      {/* REVENUE ENGINE COMPONENTS */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {revenueComponents.map((component, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{component.title}</h4>
            <p className="text-gray-300">{component.description}</p>
          </div>
        ))}
      </section>

      {/* STEP-BY-STEP SYSTEM BUILD */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">How to Build the System</h3>
        <ol className="list-decimal list-inside text-gray-400 space-y-2">
          <li>
            <strong>Diagnose Current Revenue Flow:</strong> Identify where leads come from, where conversions drop, and where revenue is lost.
          </li>
          <li>
            <strong>Design the Revenue System:</strong> Create a structured framework for acquisition, conversion, and retention.
          </li>
          <li>
            <strong>Implement Systems and Tools:</strong> Deploy CRM systems, automation workflows, and tracking dashboards.
          </li>
          <li>
            <strong>Optimize Continuously:</strong> Improve conversion rates, funnel performance, and customer retention.
          </li>
          <li>
            <strong>Scale:</strong> Increase acquisition, expand channels, and optimize efficiency once the system is stable.
          </li>
        </ol>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations design predictable revenue engines using a structured transformation model:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Design end-to-end revenue systems</li>
          <li>Align marketing, sales, and operations</li>
          <li>Implement scalable technology infrastructure</li>
          <li>Enable data-driven decision-making</li>
          <li>Optimize performance for long-term growth</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Businesses that rely on campaigns experience fluctuations, while those that build structured revenue systems achieve consistency, efficiency, scalability, and long-term growth.
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

export default BlogPageH;