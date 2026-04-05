import { Link } from "react-router-dom";
import React from "react";

export default function Innovation() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Brainixt Insights
          </span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold max-w-3xl mx-auto">
          Balancing Compliance and Innovation in FinTech Platforms
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>FinTech operates in one of the most complex business environments.</p>
          <p>
            On one side, there is the need for rapid innovation—new products,
            seamless user experiences, and faster transactions.
          </p>
          <p>
            On the other, there are strict regulatory requirements—compliance,
            security, and risk management.
          </p>
          <p>
            Innovate too fast, and compliance risks increase. Focus too heavily
            on compliance, and innovation slows down.
          </p>
          <p>
            The most successful platforms structure systems that enable both.
          </p>
        </div>
      </div>

      {/* FALSE TRADEOFF */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The False Trade-Off
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm md:text-base">
          Many organizations treat compliance and innovation as opposing priorities.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "Delayed product releases due to regulatory concerns",
            "Rigid systems that limit flexibility",
            "Fragmented processes across teams",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center text-sm md:text-base">
          In reality, they only conflict when systems are not designed to support both.
        </p>
      </div>

      {/* WHY EXISTS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Why This Challenge Exists
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-2">
              1. Regulatory Complexity
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• RBI, SEBI, global regulations</li>
              <li>• GDPR & data privacy laws</li>
              <li>• AML requirements</li>
              <li>• KYC & identity systems</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-2">
              2. Rapid Product Development
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Speed to market</li>
              <li>• Continuous iteration</li>
              <li>• Feature expansion</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
            <h3 className="text-blue-300 font-semibold mb-2">
              3. Fragmented Functions
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Separate compliance teams</li>
              <li>• Independent tech execution</li>
              <li>• Disconnected operations</li>
            </ul>
          </div>

        </div>
      </div>

      {/* RISKS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The Risks of Imbalance
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-3">
              Over-Prioritizing Innovation
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Regulatory violations</li>
              <li>• Data breaches</li>
              <li>• Financial risk exposure</li>
              <li>• Loss of trust</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-3">
              Over-Prioritizing Compliance
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>• Slower development</li>
              <li>• Reduced competitiveness</li>
              <li>• Limited scalability</li>
              <li>• Missed growth</li>
            </ul>
          </div>

        </div>
      </div>

      {/* APPROACH */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          The Right Approach: System-Level Integration
        </h2>

        <div className="space-y-6 text-left">
          {[
            "Compliance by Design",
            "Modular Architecture",
            "Data & Security Frameworks",
            "Cross-Functional Alignment",
            "Automation & Monitoring",
          ].map((title, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-2">
                {i + 1}. {title}
              </h3>
              <p className="text-gray-400 text-sm">
                {/* Keeping your original meaning */}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The Business Impact
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Faster innovation with reduced risk",
            "Improved compliance",
            "Stronger user trust",
            "Scalable operations",
            "Competitive advantage",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* BRAINIxt */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">
          The Brainixt Approach
        </h2>

        <p className="text-white font-medium mb-4">
          Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize
        </p>

        <ul className="text-gray-400 space-y-2 text-sm md:text-base">
          <li>• Compliance-integrated architecture</li>
          <li>• Scalable infrastructure</li>
          <li>• Team alignment</li>
          <li>• Data-driven risk systems</li>
          <li>• Performance optimization</li>
        </ul>
      </div>

      {/* STRATEGIC */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">
          Strategic Insight
        </h2>

        <p className="text-gray-300 text-sm md:text-base">
          Compliance should enable sustainable innovation—not restrict it.
          The best platforms treat compliance as a core capability.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          Organizations that balance compliance and innovation achieve speed
          without risk, innovation with control, and sustainable growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-medium hover:scale-105 transition">
            Start a Strategic Conversation
          </button>
        </Link>
      </div>

    </div>
  );
}