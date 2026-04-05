import { Link } from "react-router-dom";
import React from "react";

export default function D2CInfrastructure() {
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
          The Infrastructure Behind Successful D2C Brands
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <div className="text-gray-400 space-y-4 text-sm md:text-base">
          <p>The rise of Direct-to-Consumer (D2C) brands has transformed how businesses reach and engage customers. While many brands scale rapidly through performance marketing, the difference between success and struggle often lies in infrastructure—not marketing.</p>
          <p>At Brainixt, we believe that successful D2C brands are built on structured systems that support growth, efficiency, and customer experience. Without strong infrastructure, growth becomes unsustainable.</p>
        </div>
      </div>

      {/* THE GROWTH ILLUSION */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Growth Illusion in D2C</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Paid advertising",
            "Influencer marketing",
            "Discounts and promotions"
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm md:text-base">
          While these strategies can drive rapid growth, they often create dependency on high marketing spend, constant campaign optimization, and short-term performance spikes.
        </p>
      </div>

      {/* INFRASTRUCTURE REALLY MEANS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">What Infrastructure Really Means in D2C</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Infrastructure is the foundation that supports every stage of the customer journey. It integrates key components to enable scalable growth, efficiency, and better customer experiences.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Customer acquisition",
            "Website and conversion systems",
            "Order management and fulfillment",
            "Customer experience and retention",
            "Data and performance analytics"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CORE INFRASTRUCTURE COMPONENTS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Core Infrastructure Components of Successful D2C Brands</h2>
        
        {[
          {
            title: "1. Conversion-Optimized Digital Storefront",
            points: [
              "User experience and interface design",
              "Fast load times and mobile optimization",
              "Clear product positioning",
              "Conversion-focused landing pages",
              "Seamless checkout processes"
            ]
          },
          {
            title: "2. Structured Customer Acquisition Systems",
            points: [
              "Multi-channel acquisition strategies",
              "Performance tracking frameworks",
              "Audience segmentation and targeting systems",
              "Funnel optimization processes"
            ]
          },
          {
            title: "3. Customer Lifecycle & Retention Systems",
            points: [
              "Email and WhatsApp automation",
              "Loyalty and retention programs",
              "Personalized communication",
              "Post-purchase engagement"
            ]
          },
          {
            title: "4. Order Management & Fulfillment Systems",
            points: [
              "Inventory management systems",
              "Order tracking and fulfillment workflows",
              "Logistics integration",
              "Return and exchange processes"
            ]
          },
          {
            title: "5. Data & Performance Intelligence",
            points: [
              "Customer acquisition cost (CAC)",
              "Conversion rates",
              "Customer lifetime value (LTV)",
              "Retention metrics",
              "Campaign performance"
            ]
          },
          {
            title: "6. Technology & Automation Infrastructure",
            points: [
              "CRM and customer data platforms",
              "Marketing automation tools",
              "Workflow automation systems",
              "Integration between platforms"
            ]
          }
        ].map((item, i) => (
          <div key={i} className="p-5 mb-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-blue-300 font-semibold mb-3">{item.title}</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              {item.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* WHY MANY D2C BRANDS FAIL TO SCALE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Many D2C Brands Fail to Scale</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Despite strong products and marketing, many D2C brands fail due to over-reliance on paid marketing, weak conversion systems, lack of retention strategies, and fragmented technology and data.
        </p>
      </div>

      {/* THE BUSINESS IMPACT OF STRONG INFRASTRUCTURE */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Business Impact of Strong Infrastructure</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brands with strong infrastructure experience:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Higher conversion rates",
            "Lower customer acquisition costs",
            "Improved customer retention",
            "Efficient operations and fulfillment",
            "Predictable and scalable growth"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* THE BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          At Brainixt, we help D2C brands build scalable infrastructure through a structured transformation model:
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-2xl mx-auto space-y-2">
          {[
            "Designing end-to-end growth systems",
            "Optimizing conversion and customer journeys",
            "Building retention and lifecycle strategies",
            "Integrating technology and operations",
            "Enabling data-driven performance optimization"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* STRATEGIC INSIGHT */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Strategic Insight</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          D2C success is not driven by marketing alone. It is driven by systems that convert, retain, and scale. Brands that rely only on campaigns struggle, while brands that build infrastructure thrive.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your D2C brand is experiencing rising acquisition costs, low retention, or operational inefficiencies, the solution lies in building a structured infrastructure. Let Brainixt help you design scalable systems that enable efficient growth and long-term success.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
}