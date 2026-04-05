import { Link } from "react-router-dom";
import React from "react";

export default function LeadConversionInsights() {
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
          Why Most Real Estate Firms Fail at Lead Conversion
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Real estate firms today are generating more leads than ever. With digital marketing channels like Meta, Google, and property portals, lead flow is no longer the primary challenge. Yet, despite high lead volumes, most firms struggle with low conversions, inconsistent sales, and unpredictable revenue. The issue is not lead generation; it’s the absence of a structured conversion system.
        </p>
      </div>

      {/* THE LEAD GENERATION ILLUSION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Lead Generation Illusion</h2>
        <p className="text-gray-400 text-center mb-4">
          Many real estate firms believe: "If we generate more leads, sales will increase."
        </p>
        <ul className="list-disc list-inside text-gray-400 text-sm md:text-base max-w-2xl mx-auto space-y-1">
          {[
            "Increase ad spend",
            "Expand marketing channels",
            "Focus on lead quantity"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          Without a structured conversion system, more leads will only amplify the problem, not solve it.
        </p>
      </div>

      {/* WHY CONVERSION FAILS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Why Conversion Fails in Real Estate</h2>

        {[
          { title: "1. Lack of a Centralized CRM System", points: ["Excel sheets", "WhatsApp conversations", "Manual tracking"] },
          { title: "2. Slow or Inconsistent Follow-Ups", points: ["Respond late to inquiries", "Miss follow-ups", "Depend on individual agents"] },
          { title: "3. No Structured Sales Funnel", points: ["Lead → Qualified → Site Visit → Negotiation → Booking"] },
          { title: "4. Overdependence on Sales Agents", points: ["Inconsistent results", "Lack of standardization", "Difficulty in scaling"] },
          { title: "5. Poor Lead Qualification", points: ["Time wasted on low-intent buyers", "Sales teams become inefficient", "High-quality leads ignored"] },
          { title: "6. Fragmented Customer Journey", points: ["Ads", "Calls", "Site visits", "Follow-ups"] },
          { title: "7. No Performance Tracking", points: ["Conversion rates at each stage", "Source-wise lead quality", "Sales team performance"] }
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

      {/* THE REAL COST OF POOR CONVERSION */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Real Cost of Poor Conversion</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "High customer acquisition costs",
            "Low return on marketing investment",
            "Inefficient sales teams",
            "Revenue unpredictability",
            "Limited scalability"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-400 text-sm md:text-base mt-6">
          The business becomes dependent on effort instead of systems.
        </p>
      </div>

      {/* WHAT HIGH-PERFORMING FIRMS DO DIFFERENTLY */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What High-Performing Firms Do Differently</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Centralized CRM systems",
            "Automated follow-up workflows",
            "Defined sales funnels",
            "Lead qualification frameworks",
            "Performance tracking dashboards"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps real estate firms design scalable conversion systems through a structured transformation model: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize.
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-sm md:text-base">
          {[
            "Designing lead-to-revenue systems",
            "Implementing CRM and automation infrastructure",
            "Structuring sales funnels and workflows",
            "Aligning marketing and sales",
            "Enabling data-driven optimization"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Real estate businesses do not lose sales due to lack of leads. They lose sales due to lack of systems. Conversion is not a function of effort, it is a function of structure, speed, and consistency.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your real estate business is generating leads but struggling to convert them into sales, the issue may not be marketing—it may be your conversion system.
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