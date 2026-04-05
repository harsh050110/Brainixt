import { Link } from "react-router-dom";
import React from "react";

export default function MarketingVsRevenue() {
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
          Marketing Campaigns vs Revenue Systems: Why Most Businesses Get Growth Wrong
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Most businesses equate growth with marketing: more ads, more campaigns, more leads. Yet revenue often remains inconsistent.</p>
          <p>At Brainixt, we see that the issue is not effort—it is structure. Businesses rely on campaigns when they actually need <strong>revenue systems.</strong></p>
        </div>
      </div>

      {/* CAMPAIGN TRAP */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Campaign Trap</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Launching ads or promotions",
            "Driving immediate traffic",
            "Generating leads within a fixed timeframe",
            "Results fluctuate",
            "Performance depends on continuous spend",
            "Conversion is often inconsistent",
            "Long-term impact is limited"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          Campaigns create momentum—but not stability.
        </p>
      </div>

      {/* REVENUE SYSTEM */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Is a Revenue System?</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          A revenue system is a structured, integrated framework designed to generate, convert, and retain customers consistently. Unlike campaigns, it is built for predictability and scalability.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Aligns customer acquisition channels",
            "Integrates conversion and sales processes",
            "Manages customer lifecycle and retention",
            "Supports technology infrastructure",
            "Tracks data and performance metrics"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC DIFFERENCE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Strategic Difference</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Short-Term vs Long-Term", desc: "Campaigns aim for immediate results. Revenue systems are designed for sustained growth." },
            { title: "Activity vs Structure", desc: "Campaigns drive activity. Revenue systems create structure." },
            { title: "Spend Dependency vs Efficiency", desc: "Campaigns require continuous spending. Revenue systems improve efficiency." },
            { title: "Isolated Execution vs Integrated Systems", desc: "Campaigns operate within channels. Revenue systems integrate marketing, sales, and operations." },
            { title: "Unpredictable vs Predictable Growth", desc: "Campaigns lead to fluctuations. Revenue systems enable consistent performance." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ANATOMY OF REVENUE SYSTEM */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Anatomy of a Revenue System</h2>

        {[
          {
            title: "1. Acquisition Framework",
            points: [
              "Generate qualified leads through multiple channels",
              "Performance tracking and optimization"
            ],
          },
          {
            title: "2. Conversion Architecture",
            points: [
              "Funnel design",
              "CRM integration",
              "Sales workflows",
              "Lead qualification processes"
            ],
          },
          {
            title: "3. Customer Lifecycle System",
            points: [
              "Onboarding processes",
              "Retention strategies",
              "Engagement workflows",
              "Upsell and cross-sell mechanisms"
            ],
          },
          {
            title: "4. Technology Infrastructure",
            points: [
              "CRM platforms",
              "Automation tools",
              "Analytics dashboards",
              "Data integration systems"
            ],
          },
          {
            title: "5. Performance Intelligence",
            points: [
              "Real-time data tracking",
              "KPI monitoring",
              "Conversion optimization",
              "Decision-making frameworks"
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

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with organizations to design scalable revenue systems that enable predictable and measurable growth.
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