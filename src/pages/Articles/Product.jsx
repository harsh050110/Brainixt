import { Link } from "react-router-dom";
import React from "react";

export default function ProductToPlatform() {
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
          From Product to Platform: Scaling SaaS Infrastructure
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Most SaaS companies begin with a product: a focused solution, a defined use case, and a simple architecture.</p>
          <p>In the early stages, this is enough to achieve traction. However, as adoption increases and the user base expands, a critical transition becomes necessary: <strong>From product to platform.</strong></p>
          <p>This shift is not just about adding features—it is about redesigning infrastructure to support scale, flexibility, and long-term growth.</p>
        </div>
      </div>

      {/* PRODUCT STAGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Product Stage: Built for Speed</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Rapid development and deployment",
            "Quick iteration based on user feedback",
            "Limited infrastructure complexity",
            "Focused functionality",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          At this stage, speed is prioritized over structure. This approach enables early growth—but it is not built for scale.
        </p>
      </div>

      {/* THE GROWTH CHALLENGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Growth Challenge</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Increasing user load and performance demands",
            "Need for integrations with external systems",
            "Expanding feature requirements",
            "Data management complexity",
            "Higher expectations for reliability and uptime",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* THE PLATFORM SHIFT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Platform Shift</h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Scaling SaaS infrastructure requires a transition from a product-centric architecture to a platform-based ecosystem. A platform is designed to:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Support multiple use cases",
            "Integrate with other systems",
            "Scale efficiently with user growth",
            "Enable extensibility and customization",
            "Provide consistent performance at scale",
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-400 mt-4 text-sm md:text-base">This shift enables long-term scalability and market expansion.</p>
      </div>

      {/* KEY PILLARS OF PLATFORM INFRASTRUCTURE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Key Pillars of Platform-Level Infrastructure</h2>

        {[
          {
            title: "1. Scalable System Architecture",
            points: [
              "Modular architecture",
              "Microservices or service-oriented design",
              "Load balancing and distributed systems",
              "Cloud-based infrastructure",
            ],
          },
          {
            title: "2. Data Architecture and Management",
            points: [
              "Centralized and structured data systems",
              "Efficient data storage and retrieval",
              "Real-time processing capabilities",
              "Data security and compliance frameworks",
            ],
          },
          {
            title: "3. Integration Capabilities",
            points: [
              "API-driven architecture",
              "Third-party integrations",
              "Partner ecosystems",
              "Data synchronization across platforms",
            ],
          },
          {
            title: "4. Performance and Reliability",
            points: [
              "High uptime and availability",
              "System redundancy",
              "Monitoring and alert systems",
              "Performance optimization",
            ],
          },
          {
            title: "5. User and Access Management",
            points: [
              "Role-based access control",
              "Multi-tenant architecture",
              "Secure authentication systems",
              "Scalable user management frameworks",
            ],
          },
          {
            title: "6. Automation and DevOps",
            points: [
              "Continuous integration and deployment (CI/CD)",
              "Automated testing and monitoring",
              "Infrastructure as code",
              "DevOps workflows",
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

      {/* COMMON MISTAKES */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Common Mistakes in Scaling SaaS Infrastructure</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2 text-left">
          {[
            "Delaying architectural changes until systems break",
            "Building features on top of weak foundations",
            "Lack of integration planning",
            "Ignoring data architecture",
            "Underestimating infrastructure requirements",
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Business Impact of Platform Thinking</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Transitioning to a platform enables faster feature development, improved user experience, easier partner integrations, scalability across markets, and higher enterprise adoption. Most importantly, it transforms the business from a product provider into a scalable ecosystem.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Brainixt partners with SaaS companies to design scalable platforms that support long-term growth, reliability, and market expansion.
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