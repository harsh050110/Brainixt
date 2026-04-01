const RevenueInsights = () => {
  const sections = [
    {
      title: "Introduction",
      content: `Most organizations equate growth with marketing activity.
More campaigns. More ads. More content.
Yet, despite increasing effort and spend, many businesses struggle to achieve consistent and predictable revenue growth.
The reason is simple: They are running marketing campaigns, not building revenue systems.
At Brainixt, we see this as one of the most critical strategic gaps in modern business growth.`
    },
    {
      title: "The Campaign-Driven Mindset",
      content: `Marketing campaigns are typically:
• Short-term initiatives
• Channel-focused (ads, email, social)
• Designed to generate immediate results
• Dependent on continuous spending

While campaigns can drive visibility and lead generation, they often result in:
• Fluctuating performance
• Unpredictable revenue
• High customer acquisition costs
• Limited long-term scalability

Campaigns create activity—but not necessarily structure.`
    },
    {
      title: "The System-Driven Approach",
      content: `A revenue system is fundamentally different.
It is a structured, integrated framework designed to generate, convert, and retain customers in a predictable and scalable manner.
A revenue system aligns:
• Customer acquisition
• Conversion and sales processes
• Customer lifecycle and retention
• Technology infrastructure
• Data and performance tracking

Unlike campaigns, systems are built for consistency and scalability.`
    },
    {
      title: "Key Differences",
      content: `1. Short-Term Activity vs Long-Term Structure
2. Channel-Centric vs System-Centric
3. Spend-Driven vs Efficiency-Driven
4. Isolated Efforts vs Integrated Processes
5. Unpredictable vs Predictable Outcomes`
    },
    {
      title: "The Components of a Revenue System",
      content: `1. Customer Acquisition Framework
2. Conversion Architecture
3. Customer Lifecycle System
4. Technology Infrastructure
5. Performance Intelligence`
    },
    {
      title: "The Impact of Revenue Systems",
      content: `Organizations that shift from campaigns to systems experience:
• Predictable revenue growth
• Improved conversion rates
• Lower customer acquisition costs
• Better customer retention
• Scalable and efficient operations

Most importantly, they gain control over growth.`
    },
    {
      title: "The Brainixt Approach",
      content: `Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize
We focus on:
• Designing structured revenue systems
• Aligning marketing with business strategy
• Integrating technology and operations
• Enabling data-driven growth`
    },
    {
      title: "Strategic Insight & Conclusion",
      content: `Marketing campaigns can generate momentum. Revenue systems create sustainable growth.
Organizations that rely solely on campaigns remain dependent on effort and spend. Those that build systems achieve predictability, efficiency, and scale.

In a competitive business environment, growth must be engineered.
The transition from campaigns to systems is not just tactical—it is strategic.`
    }
  ];

  return (
    <section className="bg-[#020617] text-white px-6 md:px-20 py-28">
      
      {/* HEADER */}
      <div className="max-w-5xl mb-20">
        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-6">
          Insights
        </p>

        <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-6 tracking-tight">
          Revenue Systems vs. <span className="text-white/70">Marketing Campaigns</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Authority is built through ideas. Our perspectives explore the intersection of strategy, infrastructure, and scalable growth.
        </p>
      </div>

      {/* GRID CARDS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md 
                       hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 
                       hover:-translate-y-1"
          >
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight">
              {section.title}
            </h3>

            <p className="text-gray-400 whitespace-pre-line leading-relaxed text-sm">
              {section.content}
            </p>

            {/* bottom accent line */}
            <div className="mt-6 h-[1px] w-full bg-white/10 group-hover:bg-white/30 transition" />
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-20 border-t border-white/10 pt-10">
        <p className="text-gray-500 text-sm max-w-3xl">
          Explore research-backed thinking designed for founders, operators, and growth leaders.
        </p>
      </div>
    </section>
  );
};

export default RevenueInsights;