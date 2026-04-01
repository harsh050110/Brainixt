import { Link} from "react-router-dom";
export default function GrowthPage() {
  const data = {
    title: "Real Estate Growth Systems",
    subtitle: "From Lead Generation to Scalable Revenue",
    description:
      "Real estate growth is not limited by demand—it is limited by how effectively demand is converted into revenue.",

    details:
      "Brainixt designs structured lead-to-revenue systems that align marketing, sales, and operations into a predictable and scalable growth engine.",

    stats: [
      { value: "3x", label: "Higher Conversion Rates" },
      { value: "40%+", label: "Faster Lead Response" },
      { value: "2x", label: "Revenue Predictability" },
    ],

    steps: [
      {
        step: "01",
        title: "Lead Qualification",
        desc: "Filter and prioritize high-intent prospects through structured qualification systems.",
      },
      {
        step: "02",
        title: "Follow-up Automation",
        desc: "Ensure consistent engagement with automated workflows and CRM-driven communication.",
      },
      {
        step: "03",
        title: "Conversion Process",
        desc: "Standardize site visits, negotiations, and closing frameworks.",
      },
      {
        step: "04",
        title: "Revenue Tracking",
        desc: "Monitor pipeline performance and optimize conversion metrics.",
      },
    ],

    capabilities: [
      "Lead-to-revenue system design",
      "CRM implementation & automation",
      "Sales process structuring",
      "Conversion optimization frameworks",
      "Marketing and sales alignment",
      "Data-driven performance systems",
    ],

    problems: [
      "High lead volume but low conversion",
      "Rising marketing costs",
      "Inconsistent sales performance",
      "Lack of predictable revenue",
      "Fragmented workflows",
    ],

    closing:
      "Real estate growth is no longer about generating more leads. It is about building systems that convert demand into predictable revenue.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16">

      {/* HERO */}
      <section className="text-center mb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
          {data.title}
        </h1>

        <p className="text-gray-500 tracking-widest uppercase text-xs mb-4">
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
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-24">
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
            <h3 className="text-3xl font-semibold text-white">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* 🔄 SYSTEM FLOW */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Lead-to-Revenue System
        </h2>

        <div className="space-y-10">
          {data.steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start group">

              <div className="text-lg font-semibold text-white/40 group-hover:text-white transition">
                {step.step}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">
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

      {/* 🧠 CAPABILITIES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-24">
        {data.capabilities.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-white/30 transition"
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
            If your real estate business is generating leads but struggling with conversions, the solution lies in structured growth systems.
          </p>
          <Link to ="/contact">
          <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            Get in Touch →
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
}