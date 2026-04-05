import { Link } from "react-router-dom";
import React from "react";

export default function Customer() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Brainixt Insights
          </span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold max-w-3xl mx-auto">
          Customer Acquisition vs Customer Lifetime Value: The Strategic Balance That Drives Scalable Growth
        </h2>
      </section>

      {/* INTRO */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>Most businesses are obsessed with acquisition.</p>
          <p>More leads. More customers. More growth.</p>
          <p>Yet, despite increasing acquisition efforts, many organizations struggle with profitability and long-term sustainability.</p>
          <p>The reason lies in a critical imbalance: <b>Customer Acquisition Cost (CAC) vs Customer Lifetime Value (LTV).</b></p>
          <p>At Brainixt, we see that high-performing businesses do not just acquire customers—they maximize the value of every customer acquired.</p>
        </div>
      </div>

      {/* UNDERSTANDING THE METRICS */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Understanding the Metrics</h2>

        {/* CAC */}
        <div className="mb-6">
          <h3 className="text-blue-300 font-semibold text-center mb-3">Customer Acquisition Cost (CAC)</h3>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>• Marketing spend</li>
            <li>• Advertising costs</li>
            <li>• Sales team expenses</li>
            <li>• Tools and platforms</li>
          </ul>
          <p className="text-center text-gray-400 mt-4 text-sm md:text-base">It answers a simple question: How much does it cost to acquire a customer?</p>
        </div>

        {/* LTV */}
        <div className="mb-6">
          <h3 className="text-blue-300 font-semibold text-center mb-3">Customer Lifetime Value (LTV)</h3>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>• Repeat purchases</li>
            <li>• Subscription revenue</li>
            <li>• Upsells and cross-sells</li>
          </ul>
          <p className="text-center text-gray-400 mt-4 text-sm md:text-base">It answers: How much is a customer worth over time?</p>
        </div>
      </div>

      {/* GROWTH MISCONCEPTION */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Growth Misconception</h2>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          Many businesses focus heavily on reducing CAC. While this is important, it is only one side of the equation.
        </p>
        <ul className="text-gray-400 space-y-2 text-sm md:text-base mb-6">
          <li>• Low CAC but low LTV → limited profitability</li>
          <li>• High CAC but high LTV → sustainable growth</li>
        </ul>
        <p className="text-white font-medium text-sm md:text-base">
          The key is not minimizing CAC—it is optimizing the CAC to LTV ratio.
        </p>
      </div>

      {/* IDEAL BALANCE */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Ideal Balance</h2>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          High-performing businesses maintain a strong ratio between LTV and CAC. A commonly accepted benchmark:
        </p>
        <p className="text-white font-medium text-2xl">
          LTV : CAC = 3 : 1 or higher
        </p>
        <p className="text-gray-400 mt-6 text-sm md:text-base">
          This means: For every ₹1 spent on acquisition, the business generates ₹3 or more in lifetime value.
        </p>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          This ratio enables: Profitability, reinvestment in growth, and long-term scalability.
        </p>
      </div>

      {/* WHY BUSINESSES GET IT WRONG */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Businesses Get It Wrong</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Over-Focus on Acquisition",
            "Weak Retention Systems",
            "Poor Customer Experience",
            "Lack of Data Visibility",
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Without focusing on LTV and retention, these mistakes lead to rising CAC and unsustainable growth.
        </p>
      </div>

      {/* BUILDING A BALANCED GROWTH SYSTEM */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Building a Balanced Growth System</h2>

        <div className="space-y-6">
          {[
            {
              title: "1. Optimize Customer Acquisition",
              points: [
                "High-quality lead generation",
                "Targeted audience segmentation",
                "Efficient marketing spend",
                "Performance tracking",
              ],
            },
            {
              title: "2. Design Customer Lifecycle Systems",
              points: [
                "Onboarding",
                "Engagement",
                "Retention",
                "Upselling",
              ],
            },
            {
              title: "3. Improve Conversion Efficiency",
              points: [
                "Funnel optimization",
                "CRM integration",
                "Sales process structuring",
                "Lead qualification",
              ],
            },
            {
              title: "4. Leverage Data & Analytics",
              points: [
                "Track CAC by channel",
                "LTV by customer segment",
                "Retention rates",
                "Conversion metrics",
              ],
            },
            {
              title: "5. Align Marketing, Sales & Operations",
              points: [
                "Consistent customer journeys",
                "Efficient resource utilization",
                "Better performance outcomes",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* THE BRAINIxt APPROACH */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">The Brainixt Approach</h2>

        <p className="text-white font-medium mb-4">
          Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize
        </p>

        <ul className="text-gray-400 space-y-2 text-sm md:text-base">
          <li>• Optimizing CAC through structured acquisition systems</li>
          <li>• Increasing LTV through retention strategies</li>
          <li>• Integrating technology and data</li>
          <li>• Building scalable revenue systems</li>
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Strategic Insight</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Acquisition drives growth. Lifetime value drives profitability.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-400 text-sm md:text-base">
          The future of growth lies in balance. Align CAC and LTV for scalable, sustainable growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-medium hover:scale-105 transition">
            Start a Strategic Conversation
          </button>
        </Link>
      </div>

    </div>
  );
}