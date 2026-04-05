import { Link } from "react-router-dom";
import React from "react";

export default function DigitalLearningPlatforms() {
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
          Building Scalable Digital Learning Platforms
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>The digital transformation of education has accelerated rapidly.</p>
          <p>
            From online courses and live classes to hybrid learning models, organizations across the
            education sector are investing in digital platforms to scale their reach.
          </p>
          <p>
            However, while many succeed in launching platforms, far fewer succeed in scaling them efficiently.
          </p>
          <p className="text-white font-medium">
            Platforms fail not due to lack of content or demand—but due to limitations in infrastructure, systems, and scalability design.
          </p>
        </div>
      </div>

      {/* SHIFT */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          The Shift from Content to Platform
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            "Creating content",
            "Launching courses",
            "Acquiring students",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-2">
          Scaling requires a transition from:
        </p>

        <p className="text-white font-medium">
          Content delivery → Platform infrastructure
        </p>

        <p className="text-gray-400 mt-4 text-sm">
          A scalable learning platform is not just a website—it is a system that supports learning, engagement, and growth at scale.
        </p>
      </div>

      {/* CHALLENGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The Scaling Challenge in EdTech
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Increasing number of users and sessions",
            "Real-time content delivery needs",
            "High user experience expectations",
            "Complex course structures",
            "Analytics & performance tracking requirements",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-center mt-6 text-sm">
          Without structured systems, these challenges limit growth.
        </p>
      </div>

      {/* CORE COMPONENTS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Core Components of Scalable Digital Learning Platforms
        </h2>

        <div className="space-y-6">

          {[
            {
              title: "1. Scalable Technology Architecture",
              points: [
                "High user concurrency",
                "Cloud-based infrastructure",
                "Load balancing",
                "Modular system design",
              ],
            },
            {
              title: "2. Learning Management System (LMS)",
              points: [
                "Course creation",
                "Student tracking",
                "Progress monitoring",
                "Assessments & certifications",
              ],
            },
            {
              title: "3. Content Delivery Infrastructure",
              points: [
                "Video streaming optimization",
                "CDNs",
                "Cross-device compatibility",
                "Offline access",
              ],
            },
            {
              title: "4. User Experience & Engagement",
              points: [
                "Intuitive UI",
                "Personalized learning",
                "Gamification",
                "Community features",
              ],
            },
            {
              title: "5. Data & Analytics Systems",
              points: [
                "Progress tracking",
                "Course analytics",
                "Engagement metrics",
                "Drop-off analysis",
              ],
            },
            {
              title: "6. Payment & Monetization Systems",
              points: [
                "Subscriptions",
                "Course pricing",
                "Payment gateways",
                "Revenue tracking",
              ],
            },
            {
              title: "7. Automation & Operations",
              points: [
                "User onboarding",
                "Notifications",
                "Course updates",
                "Reporting systems",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-indigo-300 font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* FAILURES */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          Why Many Platforms Fail to Scale
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Weak technology architecture",
            "Poor user experience",
            "Lack of engagement systems",
            "Limited data visibility",
            "Inefficient operations",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          The Business Impact of Scalable Platforms
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Higher engagement & retention",
            "Improved completion rates",
            "Efficient content delivery",
            "Scalable revenue models",
            "Market expansion capability",
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
          <li>• Designing scalable platform architecture</li>
          <li>• Building LMS & content systems</li>
          <li>• Optimizing user engagement</li>
          <li>• Data-driven decision-making</li>
          <li>• Automating workflows</li>
        </ul>
      </div>

      {/* INSIGHT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Digital learning is not limited by content. It is limited by infrastructure and systems.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-400 text-sm md:text-base">
          The future of education depends on scalable, well-designed platforms.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-black font-medium hover:scale-105 transition">
            Start a Strategic Conversation
          </button>
        </Link>
      </div>

    </div>
  );
}