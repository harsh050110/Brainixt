import {Link} from "react-router-dom";
const LeadershipInsights = () => {
  const sections = [
    {
      title: "Introduction",
      content: `As organizations grow, the nature of leadership must evolve.
What works at an early stage—hands-on execution and centralized decisions—often becomes a constraint at scale.

Enterprises require a structured, system-driven leadership model aligned with long-term strategy.

At Brainixt, leadership is not just a role—it is a scalable system.`
    },
    {
      title: "The Leadership Gap",
      content: `As companies scale, a disconnect emerges between execution and direction.

This results in:
• Decision bottlenecks
• Lack of clarity across teams
• Inconsistent execution
• Founder dependency
• Limited scalability

The challenge is not capability—it is structure.`
    },
    {
      title: "From Operator to Architect",
      content: `Scaling leadership requires a shift:

• Managing tasks → Designing systems
• Making decisions → Enabling frameworks
• Driving execution → Aligning strategy

Leaders must evolve into architects of the organization, enabling distributed execution and consistent performance.`
    },
    {
      title: "Strategic Clarity",
      content: `Leadership must define:

• Long-term vision
• Market positioning
• Business priorities
• Measurable success metrics

Without clarity, scaling leads to fragmentation.`
    },
    {
      title: "Decision Systems",
      content: `Scalable organizations rely on structured decision-making:

• Defined frameworks
• Data-driven insights
• Role-based accountability
• Clear escalation paths

This improves speed and reduces bottlenecks.`
    },
    {
      title: "Organizational Structure",
      content: `Growth requires internal alignment:

• Defined roles and responsibilities
• Cross-functional collaboration
• Scalable reporting structures
• Accountability systems

Structure creates consistency at scale.`
    },
    {
      title: "Leadership Enablement",
      content: `Leadership must exist at every level:

• Delegation frameworks
• Leadership development systems
• Distributed decision authority
• Team-level ownership

Strong organizations build leaders—not dependencies.`
    },
    {
      title: "Technology & Infrastructure",
      content: `Modern leadership is powered by systems:

• Real-time dashboards
• Performance tracking tools
• Collaboration platforms
• Workflow automation

Technology enables visibility and control.`
    },
    {
      title: "Why Leadership Fails",
      content: `Common scaling challenges include:

• Founder dependency
• Lack of systems
• Reactive decisions
• Strategy-execution misalignment
• No performance measurement

Growth without structure creates complexity—not progress.`
    },
    {
      title: "The Brainixt Approach",
      content: `Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize

We focus on:
• Strategy alignment
• Decision systems
• Scalable structures
• Data-driven leadership
• Performance execution`
    },
    {
      title: "Strategic Insight",
      content: `Organizations don’t scale because leaders work harder.

They scale because leadership becomes structured, distributed, and system-driven.`
    },
    {
      title: "Conclusion",
      content: `Scaling leadership requires:

• Mindset shift
• Structured decision-making
• Alignment across strategy and execution

Organizations that succeed move faster and sustain long-term growth.`
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
          Scaling Leadership in <span className="text-white/70">Modern Enterprises</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          From execution to strategic direction—how organizations evolve leadership into a scalable system for growth.
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

      {/* CTA CARD */}
      <div className="mt-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Start a Strategic Conversation
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl">
            If your organization is facing decision bottlenecks, operational inefficiencies, or leadership dependency challenges, the solution lies in building scalable leadership systems.
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
          Brainixt partners with organizations to design structured leadership frameworks that enable clarity, speed, and measurable impact.
        </p>
      </div>
    </section>
  );
};

export default LeadershipInsights;