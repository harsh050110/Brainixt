import React from "react";
import {Link} from "react-router-dom";
const insightsB = [
  {
    title: "Lack of Process Standardization",
    description: "Without defined processes, each team member works differently, outcomes vary, and quality becomes inconsistent. Hiring amplifies inconsistency instead of solving it.",
  },
  {
    title: "Increased Operational Complexity",
    description: "More people lead to additional communication layers, coordination requirements, and management overhead. Without systems, complexity grows faster than output.",
  },
  {
    title: "Dependency on Individuals",
    description: "Performance depends on individuals, knowledge is undocumented, and results are not repeatable. This makes scaling difficult without systems.",
  },
  {
    title: "Rising Costs Without Efficiency Gains",
    description: "Hiring increases salaries, training costs, and management expenses. Weak systems lead to low productivity and higher costs without proportional output.",
  },
  {
    title: "Inefficient Use of Talent",
    description: "Even skilled professionals struggle without clear workflows, defined responsibilities, and performance tracking. Talent cannot compensate for poor systems.",
  },
];

const BlogPageB = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          Why Hiring More People Doesn’t Solve Growth Problems
        </h2>
        <p className="text-gray-400 leading-relaxed">
          When growth slows, most businesses respond by hiring more people—sales executives, marketers, operations staff. But more manpower rarely solves the problem. At Brainixt, we see that growth challenges are caused by lack of systems, not lack of people.
        </p>
      </section>

      {/* THE HIRING ILLUSION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Hiring Illusion</h3>
        <p className="text-gray-400 mb-4">
          Hiring creates a sense of progress. More team members give the impression of increased capacity, faster execution, and stronger growth potential. However, without structured systems, work becomes inconsistent, communication gaps increase, and coordination becomes difficult.
        </p>
      </section>

      {/* INSIGHTS GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insightsB.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </section>

      {/* SYSTEMS FOCUS */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What Businesses Should Do Instead</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Build structured systems first for customer acquisition, sales, operations, and customer lifecycle.</li>
          <li>Standardize processes: define how work is done, who is responsible, and how performance is measured.</li>
          <li>Implement automation for repetitive tasks, follow-ups, reporting, and workflows to reduce manual effort.</li>
          <li>Align teams and functions to ensure marketing, sales, and operations work efficiently and consistently.</li>
          <li>Use data to guide decisions: track productivity, conversion rates, and operational efficiency for informed scaling.</li>
        </ul>
      </section>

      {/* BRAINIXT PERSPECTIVE */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Perspective</h3>
        <p className="text-gray-400 mb-4">
          We help organizations shift from people-driven growth to system-driven growth through:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Designing scalable systems</li>
          <li>Optimizing workflows</li>
          <li>Integrating technology</li>
          <li>Enabling efficient team structures</li>
          <li>Building performance-driven organizations</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Growth is not a function of team size—it is a function of system efficiency. Organizations that hire without systems face rising costs, complexity, and limited scalability.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design structured systems that enable efficient, scalable, and sustainable growth.
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

export default BlogPageB;