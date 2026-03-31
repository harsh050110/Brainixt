export default function CompanyStudies() {
  const steps = [
    {
      title: "Diagnose",
      desc: "Evaluate business model, technology, operations, and growth systems to identify structural constraints.",
      points: [
        "Business strategy and revenue model",
        "Technology infrastructure",
        "Marketing and acquisition systems",
        "Operational workflows",
        "Data visibility and decision frameworks",
      ],
    },
    {
      title: "Architect",
      desc: "Design a structured transformation blueprint aligned with long-term business objectives.",
      points: [
        "Technology architecture design",
        "Digital ecosystem planning",
        "Growth and revenue frameworks",
        "Operational workflow alignment",
        "Strategic roadmap",
      ],
    },
    {
      title: "Deploy",
      desc: "Implement scalable systems and infrastructure with precision and reliability.",
      points: [
        "Platform and application development",
        "CRM and automation integration",
        "Digital infrastructure setup",
        "Performance marketing systems",
        "Analytics platform configuration",
      ],
    },
    {
      title: "Drive Performance",
      desc: "Optimize systems through continuous monitoring, data, and performance insights.",
      points: [
        "Performance analytics dashboards",
        "Conversion optimization",
        "Process efficiency improvements",
        "Data-driven decision systems",
        "Continuous refinement",
      ],
    },
    {
      title: "Scale & Optimize",
      desc: "Enable sustainable expansion with scalable systems and growth frameworks.",
      points: [
        "Market expansion strategies",
        "Advanced automation systems",
        "Operational scaling frameworks",
        "Infrastructure evolution",
        "Long-term optimization",
      ],
    },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-20">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            The Brainixt Transformation Model™
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base">
          A structured consulting methodology designed to transform fragmented initiatives into scalable business ecosystems.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Organizations often struggle because strategy, technology, and operations evolve independently. Brainixt aligns these systems into a cohesive structure—ensuring clarity, accountability, and scalable growth.
        </p>
      </section>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto space-y-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
          >
            <h2 className="text-lg font-semibold text-indigo-300 mb-2">
              {index + 1}. {step.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {step.desc}
            </p>

            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {step.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-indigo-400">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CLOSING */}
      <section className="max-w-3xl mx-auto text-center mt-20">
        <p className="text-gray-400 text-sm md:text-base">
          By combining strategic thinking with disciplined execution, Brainixt enables organizations to transform complexity into structured, scalable operations and long-term growth.
        </p>
      </section>



    </div>
  );
}