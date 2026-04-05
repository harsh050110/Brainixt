import { Link } from "react-router-dom";
import React from "react";

export default function DigitalSalesSystems() {
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
          The Future of Digital Sales Systems in Real Estate
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>The real estate industry is undergoing a shift—from offline networks and manual processes to digital transformation.</p>
          <p>However, while many firms have adopted digital marketing, few have built structured digital sales systems.</p>
          <p>At Brainixt, we believe the future of real estate growth lies not in more leads—but in better systems.</p>
        </div>
      </div>

      {/* THE PROBLEM WITH TRADITIONAL SALES */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Problem with Traditional Real Estate Sales</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "High dependency on brokers and agents",
            "Manual follow-ups and lead handling",
            "Fragmented communication with clients",
            "Limited tracking of customer journeys",
            "Lack of data-driven decision-making",
            "Leads generated but not managed effectively"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          The issue isn't demand—it's system inefficiency.
        </p>
      </div>

      {/* THE RISE OF DIGITAL SALES SYSTEMS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Rise of Digital Sales Systems</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          The future of real estate sales lies in structured systems that capture, track, and convert leads efficiently—automating follow-ups, providing real-time visibility, and reducing manual processes.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Capture and manage leads automatically",
            "Track customer journeys across touchpoints",
            "Enable structured follow-ups and engagement",
            "Provide real-time visibility into sales performance",
            "Reduce dependency on manual processes"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CORE COMPONENTS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Core Components of Modern Real Estate Sales Systems</h2>
        {[
          {
            title: "1. Lead Acquisition Architecture",
            points: [
              "Multi-channel lead generation",
              "Landing page and funnel optimization",
              "Lead qualification mechanisms",
              "Performance tracking frameworks"
            ],
          },
          {
            title: "2. Centralized CRM Infrastructure",
            points: [
              "Lead tracking and segmentation",
              "Interaction history and follow-ups",
              "Automated workflows",
              "Team-level coordination"
            ],
          },
          {
            title: "3. Automated Follow-Up Systems",
            points: [
              "Instant lead response",
              "Scheduled follow-ups",
              "Personalized communication workflows",
              "Reduced dependency on manual effort"
            ],
          },
          {
            title: "4. Customer Journey Design",
            points: [
              "Inquiry to site visit",
              "Site visit to negotiation",
              "Booking to post-sale engagement",
              "Consistency across this journey improves trust and conversion"
            ],
          },
          {
            title: "5. Performance Tracking & Analytics",
            points: [
              "Lead sources and quality tracking",
              "Conversion rates at each stage",
              "Sales team performance",
              "Campaign effectiveness monitoring"
            ],
          },
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

      {/* WHY MOST FIRMS STRUGGLE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Most Real Estate Firms Struggle</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Over-reliance on brokers and manual processes",
            "Lack of system design thinking",
            "Fragmented use of technology",
            "Focus on lead generation over conversion",
            "Absence of performance tracking"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Business Impact of Digital Sales Systems</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Higher lead-to-sale conversion rates",
            "Reduced customer acquisition costs",
            "Faster response and follow-up cycles",
            "Improved customer experience",
            "Predictable and scalable sales pipelines"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps real estate organizations build scalable digital sales systems through a structured transformation model:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Designing lead-to-revenue systems",
            "Implementing CRM and automation infrastructure",
            "Aligning marketing, sales, and operations",
            "Building performance tracking frameworks",
            "Optimizing conversion and sales efficiency"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Real estate growth is not limited by leads. It is limited by systems. Companies that continue to rely on manual sales processes will struggle to scale. Those that build digital sales systems will dominate the next phase of the market.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with real estate firms to design scalable systems that enable predictable sales and long-term growth.
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