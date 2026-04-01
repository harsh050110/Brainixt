import { Link } from "react-router-dom";

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Real Estate Growth System Transformation",
      context:
        "A growing real estate advisory firm in a competitive metropolitan market faced inconsistent lead quality and fragmented sales processes.",
      challenges: [
        "Unstructured lead acquisition channels",
        "Low conversion rates",
        "No centralized CRM",
        "Inefficient marketing spend",
      ],
      intervention: [
        "Integrated CRM and lead system",
        "Performance-driven acquisition systems",
        "Structured sales funnel",
        "Real-time analytics dashboards",
      ],
      impact: [
        "35% improvement in conversion",
        "Reduced acquisition cost",
        "Centralized data visibility",
        "Scalable sales pipeline",
      ],
    },
    {
      title: "E-commerce Growth Infrastructure Optimization",
      context:
        "A fast-growing D2C brand struggled with operational inefficiencies and inconsistent conversion rates.",
      challenges: [
        "Fragmented customer data",
        "High cart abandonment",
        "Low conversion optimization",
        "Operational inefficiencies",
      ],
      intervention: [
        "Conversion-focused website redesign",
        "Customer lifecycle automation",
        "Analytics framework",
        "Acquisition & retention optimization",
      ],
      impact: [
        "28% increase in conversion",
        "40% operational efficiency improvement",
        "Better retention systems",
        "Scalable infrastructure",
      ],
    },
    {
      title: "SaaS Platform Scaling Strategy",
      context:
        "A SaaS startup with early traction needed scalable infrastructure and better onboarding systems.",
      challenges: [
        "Inefficient onboarding",
        "Lack of analytics",
        "Unscalable architecture",
        "Low trial conversion",
      ],
      intervention: [
        "Product growth system design",
        "Platform optimization",
        "User lifecycle systems",
        "Analytics infrastructure",
      ],
      impact: [
        "Streamlined onboarding",
        "Improved conversions",
        "Scalable product infrastructure",
        "Data-driven product decisions",
      ],
    },
    {
      title: "Professional Services Digital Transformation",
      context:
        "An advisory firm relied heavily on referrals and lacked structured digital growth systems.",
      challenges: [
        "Low digital visibility",
        "No lead generation system",
        "Inefficient engagement",
        "No performance tracking",
      ],
      intervention: [
        "Digital authority platform",
        "Lead generation infrastructure",
        "Client workflow automation",
        "Analytics integration",
      ],
      impact: [
        "Increased inbound inquiries",
        "Stronger market authority",
        "Scalable acquisition",
        "Improved operations",
      ],
    },
  ];

  return (
    <div className="relative bg-[#020617] text-white min-h-screen px-4 sm:px-8 md:px-16 pt-28 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          Strategic Interventions. Measurable Business Impact.  
          Brainixt designs integrated systems that align business strategy, technology infrastructure, and performance-driven growth.
        </p>
      </section>

      {/* CASE CARDS */}
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {cases.map((c, i) => (
          <div
            key={i}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-indigo-500/40"
          >
            <div className="bg-[#020617]/80 backdrop-blur-xl rounded-2xl p-8">

              {/* TITLE */}
              <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">
                {c.title}
              </h2>

              {/* CONTEXT */}
              <p className="text-gray-400 mb-6">{c.context}</p>

              <div className="grid md:grid-cols-3 gap-6">

                {/* CHALLENGE */}
                <div>
                  <h3 className="text-sm font-semibold text-red-300 mb-2">
                    Strategic Challenge
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {c.challenges.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* INTERVENTION */}
                <div>
                  <h3 className="text-sm font-semibold text-indigo-300 mb-2">
                    Brainixt Intervention
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {c.intervention.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* IMPACT */}
                <div>
                  <h3 className="text-sm font-semibold text-green-300 mb-2">
                    Impact
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {c.impact.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INSIGHT SECTION */}
      <div className="max-w-4xl mx-auto text-center mt-24 text-gray-400 relative z-10">
        <p>
          Across industries, organizations face recurring structural challenges —
          disconnected systems, inefficient workflows, and lack of performance visibility.
        </p>
        <p className="mt-4">
          Brainixt resolves these through integrated ecosystems that enable scalable,
          efficient, and data-driven growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 relative z-10">
        <Link to ="/contact">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-black font-medium hover:scale-105 transition">
          Start a Strategic Consultation
        </button>
        </Link>
      </div>

    </div>
  );
}