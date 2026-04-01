import { Link } from "react-router-dom";
export default function EcommerceOptimizationPage() {
  const data = {
    title: "E-commerce Optimization",
    subtitle: "Building Systems That Drive Conversion, Retention, and Scalable Growth",
    description:
      "Traffic alone does not create sustainable growth. E-commerce brands need system-level optimization that maximizes conversion, retention, and revenue per customer.",

    details:
      "Brainixt engineers performance-driven e-commerce systems combining conversion optimization, lifecycle automation, technology integration, and data-driven decision-making.",

    steps: [
      {
        step: "01",
        title: "Conversion Optimization",
        desc: "Optimize landing pages, product pages, pricing, checkout, and trust elements to turn traffic into revenue.",
      },
      {
        step: "02",
        title: "Customer Acquisition Efficiency",
        desc: "Analyze channels, target high-intent audiences, optimize creatives and funnels, and reduce cost per acquisition.",
      },
      {
        step: "03",
        title: "Customer Lifecycle & Retention",
        desc: "Implement automation, loyalty programs, retargeting, and personalized communication to maximize customer value.",
      },
      {
        step: "04",
        title: "Technology & Automation Systems",
        desc: "Integrate CRM, marketing automation, inventory management, and workflows for scalable operations.",
      },
      {
        step: "05",
        title: "Data & Performance Intelligence",
        desc: "Track CAC, LTV, conversion rates, funnel performance, and retention metrics to enable continuous optimization.",
      },
    ],

    capabilities: [
      "Conversion rate optimization",
      "Customer acquisition strategy",
      "Retention & lifecycle automation",
      "Technology integration and workflow automation",
      "Data-driven performance intelligence",
    ],

    stats: [
      { value: "2x", label: "Conversion Rate Improvement" },
      { value: "50%+", label: "Reduction in CAC" },
      { value: "3x", label: "Revenue Growth Efficiency" },
    ],

    closing:
      "These systems allow e-commerce businesses to move beyond campaign-level thinking and build predictable, scalable growth.",
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 mb-2">{data.subtitle}</p>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
          {data.description}
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm md:text-base">
          {data.details}
        </p>
      </section>

      {/* 📊 STATS */}
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 mb-20 text-center">
        {data.stats.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-orange-300">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 🔄 SYSTEM FLOW */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-8 text-center">
          Optimization System Flow
        </h2>

        <div className="space-y-8">
          {data.steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              {/* Step Number */}
              <div className="text-xl font-bold text-orange-400">
                {step.step}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🧠 CAPABILITIES GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 mb-20">
        {data.capabilities.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/0 border border-white/10 hover:border-orange-400/40 transition"
          >
            <p className="text-gray-300 text-sm">{item}</p>
          </div>
        ))}
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base">
          {data.closing}
        </p>
      </div>

    </div>
  );
}