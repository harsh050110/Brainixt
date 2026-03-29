export default function GrowthPage() {
  const data = {
    title: "Growth & Market Expansion",
    subtitle: "Designing Predictable Revenue Systems",
    description:
      "Marketing alone does not create sustainable growth. Organizations need structured acquisition, conversion, and retention systems that generate predictable results.",

    details:
      "Brainixt engineers performance-driven growth ecosystems that combine strategic positioning, digital marketing infrastructure, and data-driven optimization.",

    steps: [
      {
        step: "01",
        title: "Customer Acquisition",
        desc: "Build scalable channels to consistently acquire high-quality users.",
      },
      {
        step: "02",
        title: "Conversion Systems",
        desc: "Optimize funnels and touchpoints to maximize conversion rates.",
      },
      {
        step: "03",
        title: "Retention & Lifecycle",
        desc: "Design systems that increase lifetime value and reduce churn.",
      },
    ],

    capabilities: [
      "Customer acquisition strategy",
      "Performance marketing systems",
      "Conversion optimization and funnel architecture",
      "Customer lifecycle and retention systems",
      "Market entry and expansion strategies",
    ],

    stats: [
      { value: "3x", label: "Improved Conversion Rates" },
      { value: "50%+", label: "Reduction in CAC" },
      { value: "2x", label: "Revenue Growth Efficiency" },
    ],

    closing:
      "These systems enable organizations to move beyond sporadic campaigns and build consistent, scalable revenue pipelines.",
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

      {/* 📊 STATS (NEW SECTION) */}
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

      {/* 🔄 SYSTEM FLOW (DIFFERENT STRUCTURE) */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-xl font-semibold mb-8 text-center">
          Growth System Flow
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