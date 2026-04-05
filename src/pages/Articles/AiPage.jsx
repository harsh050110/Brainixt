import { Link } from "react-router-dom";
import React from "react";

export default function AiPage() {
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
          The Future of Education Platforms in the AI Era
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>The education sector is undergoing a fundamental transformation, driven by artificial intelligence (AI). The next wave of innovation lies not only in digital learning but in building intelligent, adaptive, and system-driven education ecosystems.</p>
          <p>At Brainixt, we see AI as the key to transforming how learning is delivered, consumed, and optimized. The future is not just about digital platforms but intelligent systems designed to enhance education outcomes.</p>
        </div>
      </div>

      {/* FROM STATIC LEARNING TO INTELLIGENT SYSTEMS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">From Static Learning to Intelligent Systems</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Pre-recorded content",
            "Standardized learning paths",
            "Manual assessments"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          AI transforms learning from static to dynamic, adaptive, and personalized.
        </p>
      </div>

      {/* KEY SHIFTS IN AI-DRIVEN EDUCATION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Key Shifts in the AI-Driven Education Landscape</h2>
        {[
          { title: "Personalized Learning at Scale", desc: "AI tailors content based on user behavior, performance data, and preferences, creating custom learning paths." },
          { title: "Intelligent Content Delivery", desc: "AI optimizes content delivery based on learning pace, adjusting difficulty levels and recommending relevant courses." },
          { title: "Automated Assessment and Feedback", desc: "Instant evaluation and adaptive testing with real-time feedback improve the learning experience." },
          { title: "Predictive Learning Analytics", desc: "AI predicts student drop-off risks, learning gaps, and performance trends, allowing for proactive intervention." },
          { title: "Conversational Learning Interfaces", desc: "AI-powered chatbots and assistants provide on-demand support, enhancing engagement and accessibility." },
          { title: "Scalable Content Creation", desc: "AI tools enable faster content generation and localization, ensuring scalability." }
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CHALLENGES IN AI-DRIVEN EDUCATION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Challenges in AI-Driven Education Platforms</h2>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Data Dependency",
            "Technology Complexity",
            "Ethical and Privacy Concerns",
            "Integration with Existing Systems"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* FUTURE-READY PLATFORMS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Future-Ready Platforms Will Look Like</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          The next generation of education platforms will be AI-powered, data-driven, and scalable. They will offer:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "AI-powered and data-driven",
            "Highly personalized learning",
            "Scalable and modular",
            "Integrated across systems",
            "Focused on outcomes, not just content"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT PERSPECTIVE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Perspective</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps organizations design AI-ready digital learning ecosystems through a structured approach:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Designing scalable platform architecture",
            "Integrating AI capabilities into learning systems",
            "Building data-driven infrastructure",
            "Optimizing user experience and engagement",
            "Ensuring performance and scalability"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          The future of education is not just digital—it's intelligent. Platforms that effectively leverage AI will scale efficiently and deliver better learning outcomes, positioning themselves as leaders in the next phase of the market.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with organizations to create future-ready platforms that enable intelligent, adaptive, and scalable learning experiences.
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