export default function EcommercePage() {
  const data = {
    title: "E-commerce & Direct-to-Consumer Brands",
    subtitle: "Designing High-Performance Digital Commerce Systems",

    description:
      "E-commerce and D2C brands operate in fast-moving digital marketplaces where customer acquisition costs, operational efficiency, and conversion optimization directly impact profitability.",

    details:
      "Brainixt works with brands to create integrated commerce ecosystems that support scalable growth and operational clarity.",

    features: [
      {
        title: "Conversion-Focused Platforms",
        desc: "Design high-performing websites optimized for conversions.",
      },
      {
        title: "Performance Marketing Infrastructure",
        desc: "Build scalable systems for paid acquisition and ROI tracking.",
      },
      {
        title: "Customer Lifecycle Systems",
        desc: "Improve retention and lifetime value through structured journeys.",
      },
      {
        title: "Data-Driven Decision Frameworks",
        desc: "Use analytics to guide strategic growth decisions.",
      },
      {
        title: "Omnichannel Commerce",
        desc: "Integrate multiple channels into one scalable system.",
      },
    ],

    metrics: [
      { value: "+35%", label: "Conversion Rate" },
      { value: "2x", label: "Customer Lifetime Value" },
      { value: "-40%", label: "Acquisition Cost" },
    ],

    journey: ["Traffic", "Product View", "Add to Cart", "Checkout", "Retention"],

    closing:
      "These systems enable brands to build sustainable growth beyond short-term campaigns.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-2">
          {data.subtitle}
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 text-xs sm:text-sm md:text-base px-2">
          {data.description}
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-4 text-sm md:text-base px-2">
          {data.details}
        </p>
      </section>

      {/* 📊 METRICS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 text-center">
        {data.metrics.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h3 className="text-xl font-bold text-orange-300">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 🧠 FEATURES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
        {data.features.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400/40 transition hover:scale-[1.02]"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-orange-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🛒 CUSTOMER JOURNEY FLOW */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Customer Journey System
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          {data.journey.map((step, i) => (
            <div key={i} className="w-full md:flex-1 flex flex-col items-center">

              <div className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-sm">
                {step}
              </div>

              {i !== data.journey.length - 1 && (
                <div className="md:hidden text-orange-400 my-2">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base px-2">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-black font-medium hover:scale-105 transition">
          Optimize Your Commerce
        </button>
      </div>

    </div>
  );
}