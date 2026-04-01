import { Link } from "react-router-dom";
const PerformanceDrivenInsights = () => {
  const sections = [
    {
      title: "Introduction",
      content: `Business models are evolving.

Traditional models focused on expansion—more markets, more teams, more spend.
Modern organizations are shifting toward performance-driven models.

These prioritize efficiency, measurability, and predictability.

At Brainixt, this shift defines the future of scalable business.`
    },
    {
      title: "What Defines Performance?",
      content: `A performance-driven model is built around measurable outcomes.

It integrates:
• Revenue systems
• Acquisition efficiency
• Conversion & lifecycle optimization
• Technology infrastructure
• Data & analytics frameworks

Every component is trackable and optimizable.`
    },
    {
      title: "From Growth to Performance",
      content: `Traditional focus:
• Expansion
• Higher spend
• Larger teams
• Market entry

Modern focus:
• Conversion optimization
• Customer lifetime value
• Cost efficiency
• Data-driven decisions

Growth alone is not enough—performance defines sustainability.`
    },
    {
      title: "Data as an Asset",
      content: `High-performing organizations leverage data to:

• Track performance in real time
• Identify inefficiencies
• Optimize decisions
• Forecast growth

Data shifts from reporting to strategic control.`
    },
    {
      title: "Digital Ecosystems",
      content: `Performance requires system alignment:

• CRM platforms
• Marketing & sales integration
• Automation systems
• Analytics dashboards

Disconnected systems limit visibility and scale.`
    },
    {
      title: "Revenue System Design",
      content: `Revenue is driven by structured systems:

• Acquisition frameworks
• Conversion architectures
• Retention strategies

This creates predictable, repeatable growth.`
    },
    {
      title: "Automation & Efficiency",
      content: `Manual processes cannot scale.

Performance models rely on:
• Workflow automation
• Process standardization
• System-driven execution

This increases speed while reducing friction.`
    },
    {
      title: "Continuous Optimization",
      content: `High-performance organizations operate in cycles:

Measure → Analyze → Optimize → Scale

This ensures continuous improvement across all systems.`
    },
    {
      title: "Why Traditional Models Fail",
      content: `Legacy models struggle because they:

• Depend on manual execution
• Lack real-time visibility
• Operate with fragmented systems
• Scale cost faster than efficiency

These limitations become critical at scale.`
    },
    {
      title: "The Future Model",
      content: `Next-generation businesses will be defined by:

• Integrated ecosystems
• Data-driven leadership
• Automated operations
• Predictable revenue systems
• Continuous optimization

They will scale efficiently—not just rapidly.`
    },
    {
      title: "The Brainixt Perspective",
      content: `Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize

We focus on:
• Strategy-performance alignment
• Digital infrastructure
• Revenue system design
• Data-driven operations
• Long-term efficiency`
    },
    {
      title: "Strategic Insight",
      content: `The future is not defined by who grows fastest.

It is defined by who grows most efficiently and predictably.

Performance is a function of systems—not effort.`
    },
    {
      title: "Conclusion",
      content: `Modern businesses must move beyond growth alone.

Performance-driven models enable:
• Sustainable growth
• Operational efficiency
• Strategic clarity
• Competitive advantage

This is the next phase of business evolution.`
    }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="max-w-5xl mb-20">
        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
          Brainixt Insights
        </p>

        <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-6 tracking-tight">
          The Future of <span className="text-white/70">Performance-Driven Business Models</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Moving beyond growth into efficiency, predictability, and system-driven performance—the next evolution of modern business.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md 
                       hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 
                       hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight">
              {section.title}
            </h3>

            <p className="text-gray-400 whitespace-pre-line leading-relaxed text-sm">
              {section.content}
            </p>

            <div className="mt-6 h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Start a Strategic Conversation
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl">
            If your organization is looking to move from growth-driven execution to performance-driven systems, Brainixt provides the strategic expertise to design and implement scalable business models.
          </p>
          <Link to="/contact">
          <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            Get in Touch →
          </button>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <p className="text-gray-500 text-sm max-w-3xl">
          Brainixt partners with organizations to build structured, performance-driven systems that enable efficiency, clarity, and long-term growth.
        </p>
      </div>
    </section>
  );
};

export default PerformanceDrivenInsights;