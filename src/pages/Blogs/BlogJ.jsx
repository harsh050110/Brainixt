import React from "react";
import {Link} from "react-router-dom";

const funnelStages = [
  {
    title: "Lead Capture",
    description: "The entry point of the funnel: landing pages, lead forms, and campaign entry points. Focus on clarity, frictionless experience, and lead quality over quantity."
  },
  {
    title: "Lead Qualification",
    description: "Filter leads based on intent, budget, need, and timing. Ensures sales teams focus on high-quality leads and improves efficiency."
  },
  {
    title: "Lead Nurturing",
    description: "Follow-up sequences, educational content, engagement touchpoints, and personalized communication. Builds trust and increases conversion probability."
  },
  {
    title: "Conversion System",
    description: "Structured sales process, clear value communication, objection handling, and closing mechanisms. Consistency in this stage is critical."
  },
  {
    title: "Post-Conversion System",
    description: "Onboarding, retention strategies, upsell/cross-sell, and customer experience optimization. Increases lifetime value."
  }
];

const BlogPageJ = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          From Leads to Revenue: Designing High-Conversion Funnels
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Most businesses generate leads, but few convert them efficiently. High-performing businesses build funnels as structured revenue systems.
        </p>
      </section>

      {/* FUNNEL STAGES */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {funnelStages.map((stage, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{stage.title}</h4>
            <p className="text-gray-300">{stage.description}</p>
          </div>
        ))}
      </section>

      {/* WHY FUNNELS FAIL */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">Why Most Funnels Fail</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>No Defined Funnel Structure – leads are not tracked, conversions are random</li>
          <li>Lack of CRM and Tracking – leads are lost, follow-ups missed, performance unclear</li>
          <li>Inconsistent Follow-Ups – opportunities are lost without speed and consistency</li>
          <li>Disconnected Marketing and Sales – reduces conversion efficiency</li>
          <li>No Data-Driven Optimization – bottlenecks not identified or improved</li>
        </ul>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We design high-conversion funnels as part of a larger revenue system:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Design structured funnel architecture</li>
          <li>Implement CRM and automation</li>
          <li>Align marketing and sales</li>
          <li>Optimize conversion at each stage</li>
          <li>Enable data-driven performance</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Leads alone do not create revenue. High-conversion funnels transform interest into predictable, scalable revenue by systemizing the conversion process.
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

export default BlogPageJ;