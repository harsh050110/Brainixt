import {Link} from "react-router-dom";
const TechnologyArchitectureInsights = () => {
  const sections = [
    {
      title: "Introduction",
      content: `As organizations scale, technology becomes the foundation of growth—not just a support function.

Yet many enterprises struggle despite heavy investment.

The issue is not lack of technology, but lack of structured architecture.

At Brainixt, growth limitations are often rooted in early architectural decisions.`
    },
    {
      title: "Role of Architecture",
      content: `Technology architecture defines how systems are designed and scaled.

It determines:
• Data flow across teams
• Operational efficiency
• Speed of execution
• Scalability of the organization

Strong architecture accelerates growth. Weak architecture creates constraints.`
    },
    {
      title: "No Long-Term Vision",
      content: `Many organizations build systems reactively.

This leads to:
• Inconsistent design
• Redundant tools
• Scaling difficulties

Technology must be planned as infrastructure—not short-term solutions.`
    },
    {
      title: "Fragmented Systems",
      content: `Organizations adopt multiple tools:

• CRM systems
• Marketing platforms
• ERP systems
• Analytics tools

Without integration:
• Data becomes inconsistent
• Visibility is lost
• Workflows become inefficient

Silos create friction.`
    },
    {
      title: "Tool-First Thinking",
      content: `Companies often rely on tools to solve problems.

But tools without architecture lead to:
• Poor coordination
• Increased complexity
• Limited scalability

Architecture must come before tools.`
    },
    {
      title: "Unscalable Infrastructure",
      content: `Early infrastructure rarely supports growth.

As demand increases:
• Systems slow down
• Performance drops
• Downtime risk increases

Scalability must be designed from the start.`
    },
    {
      title: "Weak Data Architecture",
      content: `Many organizations lack structured data systems:

• No central data layer
• No standardization
• No real-time reporting

This limits decision-making and performance optimization.`
    },
    {
      title: "Disconnected Functions",
      content: `Technology should unify:

• Marketing
• Sales
• Operations
• Finance

Without integration:
• Coordination breaks down
• Processes slow
• Customer experience suffers

Growth requires alignment across functions.`
    },
    {
      title: "Lack of Automation",
      content: `Manual processes fail at scale:

• Repetitive tasks increase
• Errors grow
• Execution slows

Automation enables speed, accuracy, and scalability.`
    },
    {
      title: "Impact on Growth",
      content: `Poor architecture results in:

• Slower execution
• Higher costs
• Limited scalability
• Poor customer experience
• Reduced competitiveness

Growth becomes constrained internally.`
    },
    {
      title: "What Good Architecture Looks Like",
      content: `High-performing organizations build:

• Integrated systems
• Centralized data platforms
• Scalable infrastructure
• Automated workflows
• Strategy-aligned technology

This enables growth without complexity.`
    },
    {
      title: "The Brainixt Approach",
      content: `Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize

We focus on:
• Strategy-tech alignment
• System integration
• Data architecture
• Scalable infrastructure
• Performance systems`
    },
    {
      title: "Strategic Insight",
      content: `Technology does not limit growth.

Poor architecture does.

Organizations that treat technology as infrastructure gain a significant advantage.`
    },
    {
      title: "Conclusion",
      content: `As organizations scale, architecture becomes critical.

Without structure:
→ complexity increases

With the right architecture:
→ efficiency
→ speed
→ scalable growth`
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
          Technology Architecture <span className="text-white/70">Mistakes That Limit Growth</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Why enterprise growth is often constrained not by technology itself—but by how systems are designed, integrated, and scaled.
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
            If your organization is facing scalability challenges, operational inefficiencies, or system fragmentation, the root cause may lie in your technology architecture.
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
          Brainixt partners with enterprises to design scalable, integrated technology systems that support long-term growth and performance.
        </p>
      </div>
    </section>
  );
};

export default TechnologyArchitectureInsights;