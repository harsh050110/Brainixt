import { Link } from "react-router-dom";
import React from "react";

export default function StartupOperations() {
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
          The Operational Systems Every Scaling Startup Needs
        </h2>
      </section>

      {/* INTRODUCTION */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-4">Introduction</h2>
        <p className="text-gray-400 text-sm md:text-base space-y-4">
          Scaling a startup is not just about growth—it is about managing complexity. Early-stage founders rely on speed and flexibility, but as teams expand and processes multiply, operations must transition from execution-driven to system-driven.
        </p>
      </div>

      {/* SCALING CHALLENGE */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">The Scaling Challenge</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Missed follow-ups and lost leads",
            "Inconsistent customer experiences",
            "Internal communication gaps",
            "Delayed execution",
            "Lack of visibility into performance"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-400 text-center mt-4 text-sm md:text-base">
          The issue is not effort—it is the absence of structured operational systems.
        </p>
      </div>

      {/* CORE OPERATIONAL SYSTEMS */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">Core Operational Systems Every Scaling Startup Needs</h2>

        {[
          {
            title: "1. Lead & Customer Management System",
            points: [
              "Centralized CRM systems",
              "Lead tracking and segmentation",
              "Follow-up workflows",
              "Customer interaction history"
            ]
          },
          {
            title: "2. Sales & Conversion System",
            points: [
              "Defined sales pipelines",
              "Lead qualification frameworks",
              "Standardized sales processes",
              "Conversion tracking"
            ]
          },
          {
            title: "3. Workflow & Task Management System",
            points: [
              "Task management platforms",
              "Defined workflows",
              "Role-based responsibilities",
              "Project tracking systems"
            ]
          },
          {
            title: "4. Communication & Collaboration System",
            points: [
              "Internal communication platforms",
              "Structured reporting mechanisms",
              "Cross-functional coordination processes",
              "Documentation systems"
            ]
          },
          {
            title: "5. Financial & Reporting System",
            points: [
              "Revenue tracking systems",
              "Expense management frameworks",
              "Budgeting and forecasting tools",
              "Financial reporting dashboards"
            ]
          },
          {
            title: "6. Data & Performance Tracking System",
            points: [
              "KPI dashboards",
              "Real-time analytics",
              "Performance monitoring tools",
              "Data-driven decision frameworks"
            ]
          },
          {
            title: "7. Automation & Process Optimization",
            points: [
              "Lead nurturing and follow-ups",
              "Customer onboarding workflows",
              "Reporting and analytics",
              "Repetitive operational tasks"
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

      {/* WHY SYSTEMS ARE DELAYED */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">Why Startups Delay Operational Systems</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Many startups delay building systems due to early success creating false confidence, perceived complexity, and prioritizing immediate growth over structure. However, delaying systems increases long-term inefficiency.
        </p>
      </div>

      {/* THE COST OF NOT HAVING SYSTEMS */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Cost of Not Having Systems</h2>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Operational bottlenecks",
            "Reduced team productivity",
            "Inconsistent customer experience",
            "Difficulty scaling beyond a certain point",
            "Increased dependency on founders"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* BRAINIXT APPROACH */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">The Brainixt Approach</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-4">
          Brainixt helps startups design and implement operational systems using a structured transformation model: Diagnose → Architect → Deploy → Drive Performance → Scale & Optimize
        </p>
        <ul className="list-disc list-inside text-gray-400 max-w-2xl mx-auto space-y-2">
          {[
            "Identify operational gaps and inefficiencies",
            "Design scalable workflows and systems",
            "Integrate technology and processes",
            "Enable performance tracking and optimization",
            "Build infrastructure for long-term growth"
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/10">
        <h3 className="text-2xl font-semibold mb-4">Start a Strategic Conversation</h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If your startup is experiencing operational inefficiencies, missed opportunities, or scaling challenges, the solution lies in building structured operational systems. Brainixt partners with startups to enable clarity, efficiency, and sustainable growth.
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