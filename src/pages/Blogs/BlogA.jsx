import React from "react";
import {Link} from "react-router-dom";
const insights = [
  {
    title: "Founder Dependency",
    description: "The founder remains central to sales, decision-making, client relationships, and problem-solving, creating a bottleneck as the business grows.",
    points: [
      "Founder becomes overloaded",
      "Decisions slow down",
      "Execution becomes inconsistent",
    ],
  },
  {
    title: "Lack of Structured Systems",
    description: "Businesses often lack defined systems for lead management, sales conversion, operations, and customer lifecycle.",
    points: [
      "Manual processes",
      "Individual effort",
      "Informal workflows",
    ],
  },
  {
    title: "Fragmented Operations",
    description: "Teams become disconnected across marketing, sales, and operations, leading to communication gaps and inconsistent performance.",
    points: [
      "Marketing generates leads",
      "Sales handles conversions",
      "Operations manages delivery",
    ],
  },
  {
    title: "No Visibility into Performance",
    description: "Without clear data, decisions are reactive, optimization is limited, and growth becomes unpredictable.",
    points: [
      "Conversion rates unclear",
      "Customer acquisition costs unknown",
      "Revenue drivers not tracked",
    ],
  },
  {
    title: "Scaling Effort Instead of Systems",
    description: "Increasing activity without proper systems leads to rising costs and inconsistent results.",
    points: [
      "Costs increase",
      "Efficiency decreases",
      "Results remain inconsistent",
    ],
  },
];

const BlogPageA = () => {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Brainixt Insights</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6">
          Why Most Businesses Fail to Scale Beyond ₹1 Cr Revenue
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Reaching ₹1 crore in revenue is a significant milestone for any business. It validates demand, proves the market exists, and demonstrates execution capability. Yet many organizations struggle to grow beyond this stage. At Brainixt, we see this not as a growth problem—but as a systems problem.
        </p>
      </section>

      {/* THE CHALLENGE */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The ₹1 Cr Barrier: A Structural Challenge</h3>
        <p className="text-gray-400 mb-4">
          In early stages, businesses grow through founder-driven execution, direct involvement, informal processes, and flexibility. This works up to ₹1 Cr, but complexity increases beyond:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>More customers</li>
          <li>More leads</li>
          <li>More team members</li>
          <li>More operational demands</li>
        </ul>
        <p className="text-gray-400">Without structure, growth begins to break down.</p>
      </section>

      {/* INSIGHTS GRID */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2">{insight.title}</h4>
            <p className="text-gray-300 mb-3">{insight.description}</p>
            <ul className="list-disc list-inside text-gray-400">
              {insight.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* SCALABLE BUSINESS SECTION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">What Scalable Businesses Do Differently</h3>
        <ul className="space-y-4 text-gray-400">
          <li>Build structured revenue systems for predictable revenue flow.</li>
          <li>Reduce founder dependency by delegating decision-making and building team capabilities.</li>
          <li>Integrate business functions like marketing, sales, operations, and technology for efficiency.</li>
          <li>Implement data-driven systems for informed decision-making.</li>
          <li>Focus on systems, not activity, to optimize workflows and build scalable infrastructure.</li>
        </ul>
      </section>

      {/* BRAINIXT PERSPECTIVE */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4">The Brainixt Perspective</h3>
        <p className="text-gray-400 mb-4">
          At Brainixt, we help businesses transition from early-stage growth to scalable systems through a structured approach:
        </p>
        <p className="text-gray-300 font-medium mb-2">Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Identify growth bottlenecks</li>
          <li>Design scalable business systems</li>
          <li>Align strategy, technology, and execution</li>
          <li>Enable predictable and sustainable growth</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-gray-400 mb-4">
          The ₹1 crore milestone is not the peak—it is the transition point. Success beyond this depends on structure, systems, and scalability.
        </p>
        <p className="text-gray-400 mb-8">
          If your business is approaching or stuck around ₹1 Cr, the solution is not more effort—it is better systems. Brainixt partners with organizations to design scalable systems that enable consistent, predictable, and long-term growth.
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

export default BlogPageA;