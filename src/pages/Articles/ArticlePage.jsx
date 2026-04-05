// src/pages/Articles/ArticlePage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import Innovation from "./Innovation";
import Startups from "./Startups";
import Learning from "./Learning";
import Customer from "./Customer";
import Product from "./Product";
import Chaos from "./Chaos";
import Marketing from "./Marketing";
import TechnologyGrowth from "./Alone";
import DigitalSales from "./DigitalSales";
import FragmentedSystems from "./Hidden";
import D2CInfrastructure from "./Infrastructure";
import LeadConversion from "./Lead";
import StartupOperations from "./operational";
import StartupScaling from "./Scale";
import DigitalAlignment from "./Starting";
import SystemsThinking from "./System";
import TransformationModel from "./transformation";
import TechnologyArchitecture from "./Technology";
import AiPage from "./AiPage"; // Education AI article

const articleComponents = {
  "innovation": Innovation,
  "startups": Learning,
  "digital-infrastructure-fintech-startups": Startups,
  "customer": Customer,
  "digital-learning-platforms": AiPage,  // matches digital learning platform article
  "product": Product,
  "chaos": Chaos,
  "marketing": Marketing,
  "technology-growth": TechnologyGrowth,
  "digital-sales": DigitalSales,
  "education-ai": AiPage,
  "fragmented-systems": FragmentedSystems,
  "d2c-infrastructure": D2CInfrastructure,
  "lead-conversion": LeadConversion,
  "startup-operations": StartupOperations,
  "startup-scaling": StartupScaling,
  "digital-alignment": DigitalAlignment,
  "systems-thinking": SystemsThinking,
  "transformation-model": TransformationModel,
  "technology-architecture": TechnologyArchitecture,
};


export default function ArticlePage() {
  const { slug } = useParams(); // Get slug from URL
  const ArticleComponent = articleComponents[slug]; // Select the right component

  if (!ArticleComponent) {
    return (
      <div className="min-h-screen p-10 bg-[#030712] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-6">We couldn’t find the article you were looking for.</p>
        <Link
          to="/insights"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Render the actual article component */}
      <ArticleComponent />

      {/* Back button */}
      <div className="max-w-4xl mx-auto p-10">
        <Link
          to="/insights"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Back to Insights
        </Link>
      </div>
    </div>
  );
}