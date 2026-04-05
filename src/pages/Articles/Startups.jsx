import { Link } from "react-router-dom";
import React from "react";

export default function Startups() {
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
          Digital Infrastructure Challenges in FinTech Startups
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>FinTech startups operate at the intersection of technology, finance, and regulation—an environment where precision, reliability, and trust are critical.</p>
          <p>In the early stages, startups focus on product development and market entry. However, as they scale, a new set of challenges emerges:</p>
          <p className="text-white font-medium">Infrastructure becomes the bottleneck.</p>
          <p>At Brainixt, we observe that many FinTech startups do not fail due to lack of demand or innovation—they struggle because their digital infrastructure is not built for scale, compliance, or performance.</p>
        </div>
      </div>

      {/* COMPLEXITY */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The Complexity of FinTech Infrastructure
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "High transaction volumes",
            "Real-time processing",
            "Data security and privacy",
            "Regulatory compliance",
            "Integration with financial institutions",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-gray-300">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center text-sm md:text-base">
          This makes infrastructure design significantly more complex.
        </p>
      </div>

      {/* CHALLENGES */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Key Digital Infrastructure Challenges
        </h2>

        <div className="space-y-6">

          {[
            {
              title: "1. Scalability Under Transaction Load",
              points: [
                "Transaction volumes increase",
                "System load intensifies",
                "Performance expectations rise",
                "Systems slow down, failures increase, trust declines",
              ],
            },
            {
              title: "2. Data Security and Compliance",
              points: [
                "Strong encryption protocols",
                "Secure data storage",
                "Regulatory compliance (RBI, GDPR)",
                "Risk management frameworks",
                "Failure leads to legal, trust, and reputational risks",
              ],
            },
            {
              title: "3. Integration with External Systems",
              points: [
                "Banking APIs",
                "Payment gateways",
                "Third-party services",
                "Reliability, sync issues, latency risks",
              ],
            },
            {
              title: "4. Lack of Structured Data Architecture",
              points: [
                "Inconsistent data",
                "Difficult reporting",
                "Limited insights",
                "Data must be centralized and structured",
              ],
            },
            {
              title: "5. Real-Time Processing Requirements",
              points: [
                "Instant transactions",
                "Real-time updates",
                "Immediate risk assessment",
                "Direct impact on UX and credibility",
              ],
            },
            {
              title: "6. Operational Complexity",
              points: [
                "Growing teams and systems",
                "Complex processes",
                "Execution slows without structure",
              ],
            },
            {
              title: "7. Technology Debt",
              points: [
                "Poor code structure",
                "Temporary solutions become permanent",
                "Scaling becomes difficult",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* COST */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          The Cost of Weak Infrastructure
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "System instability",
            "Increased operational risk",
            "Compliance challenges",
            "Reduced user trust",
            "Limited scalability",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm">
          In a trust-driven industry like finance, these risks are critical.
        </p>
      </div>

      {/* STRONG INFRA */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          What Strong FinTech Infrastructure Looks Like
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Scalable system architecture",
            "Secure & compliant frameworks",
            "Real-time processing",
            "API ecosystems",
            "Centralized data systems",
            "Automated monitoring",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* APPROACH */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">
          The Brainixt Approach
        </h2>

        <p className="text-white font-medium mb-4">
          Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize
        </p>

        <ul className="text-gray-400 space-y-2 text-sm md:text-base">
          <li>• Designing scalable system architecture</li>
          <li>• Ensuring compliance and data security</li>
          <li>• Building integration-ready platforms</li>
          <li>• Structuring data systems</li>
          <li>• Optimizing performance</li>
        </ul>
      </div>

      {/* INSIGHT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-300 text-sm md:text-base">
          In FinTech, infrastructure is not just a support system—it is the business.
          Startups that invest in strong infrastructure gain trust, efficiency, scalability, and advantage.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Infrastructure determines long-term viability in FinTech.
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