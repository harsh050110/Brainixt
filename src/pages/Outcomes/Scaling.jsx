import { Link } from "react-router-dom";
export default function EcommerceGrowthPage() {
  const data = {
    title: "E-commerce Optimization Systems",
    subtitle: "From Traffic to Scalable, Profitable Growth",
    description:
      "E-commerce businesses are not limited by traffic. They are limited by how efficiently they convert, retain, and maximize customer value.",

    details:
      "Brainixt designs system-level optimization frameworks that align marketing, conversion, retention, and operations into a scalable growth engine.",

    stats: [
      { value: "2–4x", label: "Conversion Rate Increase" },
      { value: "30–60%", label: "Higher Customer LTV" },
      { value: "40%+", label: "Reduction in CAC" },
    ],

    problems: [
      "Rising customer acquisition costs (CAC)",
      "Low conversion rates",
      "Poor repeat purchase behavior",
      "Fragmented tools and data",
      "Shrinking profit margins",
      "Overdependence on paid ads",
    ],

    pillars: [
      {
        title: "Conversion Optimization",
        desc: "Improve landing pages, product pages, checkout flows, and trust elements to maximize revenue from existing traffic.",
      },
      {
        title: "Acquisition Efficiency",
        desc: "Optimize channel performance, targeting, and creatives to reduce CAC and improve traffic quality.",
      },
      {
        title: "Retention Systems",
        desc: "Implement lifecycle automation, retargeting, and personalization to increase repeat purchases.",
      },
      {
        title: "Technology & Automation",
        desc: "Integrate CRM, marketing automation, and backend systems for seamless operations.",
      },
      {
        title: "Data & Intelligence",
        desc: "Track performance metrics and enable continuous optimization through real-time insights.",
      },
    ],

    capabilities: [
      "Conversion rate optimization (CRO)",
      "Funnel and checkout optimization",
      "Customer lifecycle automation",
      "Retention and loyalty systems",
      "Performance marketing optimization",
      "Data analytics and reporting systems",
    ],

    closing:
      "E-commerce growth is not driven by traffic alone. It is driven by how efficiently systems convert, retain, and scale customer value.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16">

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
          {data.title}
        </h1>

        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">
          Brainixt Insights
        </p>

        <p className="text-gray-400 mb-4 text-lg">
          {data.subtitle}
        </p>

        <p className="text-gray-500 text-sm md:text-base">
          {data.description}
        </p>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          {data.details}
        </p>
      </section>

      {/* 🚨 PROBLEM GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-24">
        {data.problems.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-gray-300"
          >
            {item}
          </div>
        ))}
      </div>

      {/* 📊 STATS */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 mb-24 text-center">
        {data.stats.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10"
          >
            <h3 className="text-3xl font-semibold">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* 🧩 CORE PILLARS (UPGRADED SECTION) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
        {data.pillars.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-white/30 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔄 SYSTEM SHIFT */}
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          From Campaigns to Systems
        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          High-performing e-commerce brands move beyond campaign-driven growth.
          They design systems that optimize the entire customer journey—from acquisition to retention—ensuring scalable and predictable performance.
        </p>
      </div>

      {/* 🧠 CAPABILITIES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-24">
        {data.capabilities.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition"
          >
            <p className="text-gray-300 text-sm">{item}</p>
          </div>
        ))}
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-gray-400 text-sm md:text-base">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Start a Strategic Conversation
          </h3>
          <p className="text-gray-400 mb-6">
            If your e-commerce business is generating traffic but struggling with conversions, retention, or profitability, the solution lies in system-level optimization.
          </p>
          <Link to="/contact">
          <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            Get in Touch →
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
}