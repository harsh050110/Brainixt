import React from "react";
import {Link} from "react-router-dom";
const techInsights = [
  {
    title: "Enabling System Integration",
    description: "Technology connects marketing, sales, operations, and finance, ensuring seamless data flow, better coordination, and improved efficiency.",
  },
  {
    title: "Automating Processes",
    description: "Automation reduces dependency on manual effort, including lead follow-ups, onboarding, reporting, and workflow management, improving speed and consistency.",
  },
  {
    title: "Enhancing Data Visibility",
    description: "Technology enables tracking performance metrics, customer behavior, and operational efficiency, supporting real-time decisions and continuous optimization.",
  },
  {
    title: "Supporting Scalable Infrastructure",
    description: "As businesses grow, technology ensures system stability, performance under load, and capacity to handle increased demand, which is essential for scaling.",
  },
  {
    title: "Improving Customer Experience",
    description: "Technology enhances customer interactions through faster responses, personalized experiences, and seamless communication, boosting retention and lifetime value.",
  },
];

const BlogPageC = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          The Role of Technology in Building Scalable Businesses
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Technology is central to modern business—but alone it does not drive scalable growth. At Brainixt, we align technology with strategy, systems, and execution to unlock true scalability.
        </p>
      </section>

      {/* TECHNOLOGY MISCONCEPTION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Technology Misconception</h3>
        <p className="text-gray-400 mb-4">
          Many organizations believe that implementing tools will automatically drive growth. This leads to rapid adoption of multiple platforms and feature-focused investments. Without structure, tools are underutilized, systems fragment, and complexity increases.
        </p>
      </section>

      {/* INSIGHTS GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techInsights.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </section>

      {/* HIGH-PERFORMING BUSINESSES */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What High-Performing Businesses Do Differently</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Start with strategy, design systems, define processes, then implement technology to support them.</li>
          <li>Treat technology as infrastructure, not a standalone solution.</li>
          <li>Integrate systems, automate workflows, and enable real-time visibility for predictable growth.</li>
        </ul>
      </section>

      {/* BRAINIXT APPROACH */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Approach</h3>
        <p className="text-gray-400 mb-4">
          We help organizations leverage technology effectively through a structured transformation model:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Align technology with business strategy</li>
          <li>Design integrated system architecture</li>
          <li>Implement scalable infrastructure</li>
          <li>Enable automation and data visibility</li>
          <li>Optimize performance continuously</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          Technology enables scalable systems—but does not create growth on its own. Organizations that integrate technology into structured systems achieve efficiency, predictability, scalability, and sustainable growth.
        </p>
        <p className="text-gray-400 mb-8">
          Brainixt partners with organizations to design technology-enabled systems that drive measurable business outcomes.
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

export default BlogPageC;