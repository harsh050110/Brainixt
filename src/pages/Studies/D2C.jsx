import { Link } from "react-router-dom";

export default function CaseStudy2() {
  const data = {
    title: "Building a Scalable Revenue System for a D2C Brand",
    subtitle: "Case Study 2",

    clientContext:
      "A rapidly growing D2C brand relied heavily on paid advertising for customer acquisition. While revenue was increasing, profitability was declining due to rising acquisition costs.",

    challenge: [
      "Overdependence on paid marketing channels",
      "Low customer retention and repeat purchases",
      "Weak conversion funnel",
      "Absence of lifecycle marketing systems",
      "Limited visibility into customer behavior",
    ],

    approachIntro:
      "Brainixt designed a full-funnel revenue system focused on both acquisition and retention.",

    approach: [
      {
        title: "Diagnose",
        desc: "Analyzed CAC, LTV, conversion rates, and customer lifecycle gaps.",
      },
      {
        title: "Architect",
        desc: `Designed a structured system including:
• Conversion funnel optimization
• Customer lifecycle automation
• Retention and engagement strategies`,
      },
      {
        title: "Deploy",
        desc: "Implemented CRM, email automation, WhatsApp workflows, and tracking systems.",
      },
      {
        title: "Drive Performance",
        desc: "Optimized conversion points and improved customer retention strategies.",
      },
    ],

    impact: [
      "35% increase in customer lifetime value (LTV)",
      "28% improvement in conversion rates",
      "Reduced reliance on paid ads",
      "Improved overall profitability",
    ],

    insight: `D2C growth is not driven by marketing alone.
It is driven by systems that maximize customer value.`,
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
          {data.subtitle}
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>
      </section>

      {/* CLIENT CONTEXT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Client Context</h2>
        <p className="text-gray-400 text-sm md:text-base">
          {data.clientContext}
        </p>
      </div>

      {/* ⚠️ CHALLENGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          The Challenge
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.challenge.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🧠 APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-4">
          Brainixt Approach
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          {data.approachIntro}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {data.approach.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition hover:scale-[1.02]"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 IMPACT */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Impact
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.impact.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 STRATEGIC INSIGHT */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Strategic Insight
        </h2>

        <p className="text-gray-300 text-sm md:text-base font-medium whitespace-pre-line">
          {data.insight}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/parth-jain">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-black font-medium hover:scale-105 transition">
            Build Revenue Systems
          </button>
        </Link>
      </div>

    </div>
  );
}