import { Link } from "react-router-dom";

export default function TransformationPage() {
  const steps = [
    {
      title: "Diagnose",
      desc: "Comprehensive analysis of business systems, growth constraints, and infrastructure gaps.",
      details: [
        "Business & revenue model audit",
        "Technology and infrastructure review",
        "Process inefficiency identification",
      ],
      outcome: "Clear visibility into bottlenecks and growth constraints",
    },
    {
      title: "Architect",
      desc: "Strategic design of integrated solutions that align strategy, technology, and operations.",
      details: [
        "System architecture design",
        "Growth and execution roadmap",
        "Technology stack planning",
      ],
      outcome: "A structured blueprint for scalable systems",
    },
    {
      title: "Deploy",
      desc: "Implementation of scalable platforms, digital systems, and growth mechanisms.",
      details: [
        "Platform and system development",
        "Workflow and automation setup",
        "Integration of tools and infrastructure",
      ],
      outcome: "Fully functional, scalable digital ecosystem",
    },
    {
      title: "Drive Performance",
      desc: "Continuous monitoring and optimization through analytics, automation, and operational improvements.",
      details: [
        "Performance tracking dashboards",
        "Conversion and efficiency optimization",
        "Automation improvements",
      ],
      outcome: "Improved efficiency and measurable performance growth",
    },
    {
      title: "Scale & Optimize",
      desc: "Expansion into new markets and advanced performance optimization.",
      details: [
        "Market expansion strategies",
        "Advanced data-driven optimization",
        "Scaling infrastructure and teams",
      ],
      outcome: "Sustainable, predictable growth at scale",
    },
  ];

  return (
    <div className="relative bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 overflow-hidden">

      {/* HERO */}
      <section className="text-center mb-20 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            The Brainixt Transformation Model™
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
          Every engagement follows a disciplined transformation framework designed to deliver measurable outcomes across strategy, technology, and operations.
        </p>
      </section>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-indigo-500"></div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* DOT */}
              <div className="absolute z-20 left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* CARD WRAPPER (IMPORTANT FIX) */}
              <div
                className={`
                  w-full md:w-1/2
                  pl-16 md:pl-0
                  ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"}
                `}
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition">

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm mb-4">
                    {step.desc}
                  </p>

                  {/* DETAILS */}
                  <ul className="space-y-2 mb-4">
                    {step.details.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="text-purple-400">•</span> {item}
                      </li>
                    ))}
                  </ul>

                  {/* OUTCOME */}
                  <div className="mt-3 p-3 rounded-lg bg-purple-500/10 border border-purple-400/20 text-sm text-purple-200">
                    <span className="font-medium">Outcome:</span>{" "}
                    {step.outcome}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FINAL TEXT */}
      <div className="max-w-3xl mx-auto text-center mt-24 relative z-10">
        <p className="text-gray-400 text-sm md:text-base">
          This framework ensures clarity, accountability, and measurable results at every stage of transformation — enabling organizations to scale with confidence and control.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10 relative z-10">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 text-black font-medium hover:scale-105 transition">
          Start Your Transformation
        </button>
      </div>

    </div>
  );
}