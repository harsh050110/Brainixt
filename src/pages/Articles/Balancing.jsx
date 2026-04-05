import { Link } from "react-router-dom";
import React from "react";

export default function DigitalEcosystem() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Brainixt Insights
          </span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold max-w-3xl mx-auto">
          Building Scalable Digital Ecosystems: The Foundation of Modern Business Growth
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 text-sm md:text-base space-y-4">
          <p>
            In today’s digital economy, businesses are no longer defined by products
            or services alone—they are defined by the systems that support them.
          </p>
          <p>
            Organizations that scale successfully build digital ecosystems where
            technology, data, operations, and growth systems work together seamlessly.
          </p>
          <p>
            These ecosystems form the foundation of precision, speed, and long-term
            competitive advantage.
          </p>
        </div>
      </div>

      {/* SHIFT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          The Shift from Tools to Ecosystems
        </h2>

        <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Most businesses adopt tools like:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "CRM platforms",
            "Marketing automation",
            "Analytics dashboards",
            "E-commerce systems",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mb-4 text-sm md:text-base">
          But when disconnected, this leads to:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Disconnected data",
            "Inefficient workflows",
            "Inconsistent experiences",
            "Limited scalability",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-6 text-sm md:text-base">
          True scalability comes from integrated ecosystems—not isolated tools.
        </p>
      </div>

      {/* WHAT IS */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">
          What Is a Scalable Digital Ecosystem?
        </h2>

        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>
            A scalable digital ecosystem is an interconnected system that supports
            business operations and growth holistically.
          </p>

          <ul className="space-y-2">
            <li>• Business strategy</li>
            <li>• Technology infrastructure</li>
            <li>• Customer acquisition & engagement</li>
            <li>• Operational workflows</li>
            <li>• Data & decision systems</li>
          </ul>

          <p>
            When designed correctly, it enables growth without increasing complexity.
          </p>
        </div>
      </div>

      {/* CORE COMPONENTS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Core Components of a Scalable Digital Ecosystem
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "1. Strategic Alignment",
              desc: "Business goals, revenue models, and expansion strategy guide system design.",
            },
            {
              title: "2. Integrated Technology",
              desc: "CRM, marketing, and data systems connected via APIs for seamless flow.",
            },
            {
              title: "3. Customer-Centric Infrastructure",
              desc: "End-to-end journey from acquisition to retention, fully aligned.",
            },
            {
              title: "4. Operational Efficiency",
              desc: "Automation, standardization, and coordination frameworks.",
            },
            {
              title: "5. Data & Performance Intelligence",
              desc: "Real-time dashboards, analytics, and decision systems.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-blue-300 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAILURES */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Why Most Ecosystems Fail
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Lack of strategic planning",
            "Tool-first instead of system-first approach",
            "Poor integration",
            "No performance tracking",
            "Scaling without infrastructure",
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
          <li>• Align systems with business objectives</li>
          <li>• Build scalable architecture</li>
          <li>• Maintain operational efficiency</li>
          <li>• Enable measurable performance</li>
        </ul>
      </div>

      {/* INSIGHT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">
          Strategic Insight
        </h2>

        <p className="text-gray-300 text-sm md:text-base">
          Scalability is not about doing more—it’s about building systems that
          handle growth without friction.
        </p>

        <ul className="mt-4 text-gray-400 space-y-2">
          <li>• Expand faster</li>
          <li>• Operate efficiently</li>
          <li>• Deliver consistent experiences</li>
          <li>• Maintain control at scale</li>
        </ul>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          The future belongs to organizations that manage complex systems with
          simplicity and precision. Building a scalable ecosystem is not just technical—it’s strategic.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-medium hover:scale-105 transition">
            Start a Strategic Conversation
          </button>
        </Link>
      </div>

    </div>
  );
}