import React from "react";
import {Link} from "react-router-dom";
const scalableGrowthInsights = [
  {
    title: "Effort vs Systems",
    description: "Growth depends on effort. Scalable growth depends on structured systems that ensure efficiency and consistency.",
  },
  {
    title: "Linear vs Exponential Output",
    description: "Growth increases output linearly with input. Scalable growth enables exponential output with optimized input.",
  },
  {
    title: "Dependency vs Independence",
    description: "Growth relies on individuals. Scalable growth operates through standardized processes independent of single contributors.",
  },
  {
    title: "Cost vs Efficiency",
    description: "Growth often increases costs. Scalable growth improves efficiency and profit margins.",
  },
  {
    title: "Unpredictable vs Predictable",
    description: "Growth can be inconsistent. Scalable growth delivers predictable outcomes with structured systems.",
  },
];

const BlogPageF = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          The Difference Between Growth and Scalable Growth
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Most businesses pursue growth, but not all achieve scalability. At Brainixt, we guide organizations to transition from effort-driven growth to system-driven scalable growth for sustainable long-term success.
        </p>
      </section>

      {/* CORE DIFFERENCE GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scalableGrowthInsights.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </section>

      {/* WHAT ENABLES SCALABLE GROWTH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What Enables Scalable Growth</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Structured revenue systems for customer acquisition, conversion, and retention to ensure predictable revenue flow.</li>
          <li>Integrated operations across marketing, sales, technology, and operations to reduce friction and improve efficiency.</li>
          <li>Automation and technology that reduce manual effort, improve accuracy, and enable scale.</li>
          <li>Data-driven decision-making with clear visibility into performance metrics, customer behavior, and operational efficiency.</li>
          <li>Reduced founder dependency, allowing the business to operate independently of the owner.</li>
        </ul>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Perspective</h3>
        <p className="text-gray-400 mb-4">
          We help organizations move from growth to scalable growth through a structured approach:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Replace effort-driven growth with system-driven growth</li>
          <li>Design scalable business models</li>
          <li>Align strategy, technology, and execution</li>
          <li>Enable predictable performance</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Growth is important, but scalable growth is critical. Businesses that focus on system-driven approaches achieve efficient, predictable, and sustainable growth, gaining a significant competitive advantage.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design structured systems that enable scalable growth and long-term success.
        </p>
         <Link to ="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                  Start a Strategic Conversation
                </button>
                </Link>
      </section>
    </div>
  );
};

export default BlogPageF;