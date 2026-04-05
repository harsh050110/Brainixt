import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InsightsPage() {
 const articles = [
  {
    title: "Balancing Compliance and Innovation in FinTech Platforms",
    desc: "Explore how FinTech organizations can integrate compliance and innovation using structured systems to achieve scalable growth and operational efficiency.",
    slug: "innovation",
    content: "Full article content for Balancing Compliance and Innovation in FinTech Platforms...",
  }, 
  {
    title: "Building Scalable Digital Ecosystems: The Foundation of Modern Business Growth",
    desc: "Organizations that scale successfully do not rely on isolated tools or short-term execution. They build digital ecosystems—integrated environments where technology, data, operations, and growth systems work together seamlessly.",
    slug: "startups",
    content: "Full article content for Building Scalable Digital Ecosystems...",
  },
  {
    title: "Digital Infrastructure Challenges in FinTech Startups",
    desc: "FinTech startups often face significant challenges when scaling digital infrastructure. From regulatory compliance to high transaction loads, the architecture must be robust to support growth.",
    slug: "digital-infrastructure-fintech-startups",
    content: "Full article content for Digital Infrastructure Challenges in FinTech Startups...",
  },
  {
    title: "Customer Acquisition vs Customer Lifetime Value: The Strategic Balance That Drives Scalable Growth",
    desc: "Understanding the balance between Customer Acquisition Cost (CAC) and Customer Lifetime Value (LTV) is key to achieving sustainable growth and maximizing the value of every customer acquired.",
    slug: "customer",
    content: "Full article content for Customer Acquisition vs Customer Lifetime Value...",
  },
  {
    title: "Building Scalable Digital Learning Platforms",
    desc: "In the digital education space, scaling learning platforms requires more than just creating content. It requires systems and infrastructure that support growth, engagement, and long-term success.",
    slug: "digital-learning-platforms",
    content: "Full article content for Building Scalable Digital Learning Platforms...",
  },
  {
    title: "From Product to Platform: Scaling SaaS Infrastructure",
    desc: "SaaS companies must shift from product-centric solutions to platform ecosystems to support scale and long-term growth. This transition requires rethinking the infrastructure for flexibility and extensibility.",
    slug: "product",
    content: "Full article content for From Product to Platform: Scaling SaaS Infrastructure...",
  },
  {
    title: "From Chaos to Structure: Designing a Scalable Business Model",
    desc: "As businesses scale, they face increasing complexity. Transitioning from chaos to structure is critical for sustainable growth, requiring the development of scalable systems and processes.",
    slug: "chaos",
    content: "Full article content for From Chaos to Structure: Designing a Scalable Business Model...",
  },
  {
    title: "Marketing Campaigns vs Revenue Systems: Why Most Businesses Get Growth Wrong",
    desc: "Most businesses focus on marketing campaigns, but what they need are well-structured revenue systems. This article explores the differences and why revenue systems are key to predictable growth.",
    slug: "marketing",
    content: "Full article content for Marketing Campaigns vs Revenue Systems: Why Most Businesses Get Growth Wrong...",
  },
  {
    title: "Why Technology Alone Cannot Drive Business Growth",
    desc: "Organizations invest heavily in tools and platforms, yet struggle to scale. True growth doesn’t come from technology alone—it comes from aligned systems that connect strategy, operations, and execution.",
    slug: "technology-growth",
    content: "Technology alone cannot drive growth; only aligned systems connecting strategy, operations, and execution create scalable results.",
  },
  {
    title: "The Future of Digital Sales Systems in Real Estate",
    desc: "The real estate industry is shifting toward digital, but growth depends not on more leads, rather on structured digital sales systems that drive consistent conversions.",
    slug: "digital-sales",
    content: "Real estate growth depends not on more leads but on structured digital sales systems that consistently convert demand into revenue.",
  },
  {
  title: "The Future of Education Platforms in the AI Era",
  desc: "AI is transforming education beyond digital platforms, enabling intelligent, adaptive systems that personalize learning and improve outcomes at scale.",
  slug: "education-ai",
  content: "The future of education lies in AI-powered systems that create adaptive, personalized, and scalable learning experiences beyond traditional digital platforms.",
},
  {
    title: "The Hidden Cost of Fragmented Business Systems",
    desc: "As businesses scale, disconnected tools and processes create inefficiencies. Fragmented systems silently limit growth and performance.",
    slug: "fragmented-systems",
    content: "Fragmented tools and processes create hidden inefficiencies that silently limit scalability, performance, and decision-making.",
  },
  {
    title: "The Infrastructure Behind Successful D2C Brands",
    desc: "D2C growth is not just about marketing. Sustainable success depends on strong infrastructure that supports operations, experience, and scalability.",
    slug: "d2c-infrastructure",
    content: "Sustainable D2C success is driven by strong infrastructure that supports operations, customer experience, and scalable growth.",
  },
  {
    title: "Why Most Real Estate Firms Fail at Lead Conversion",
    desc: "Generating leads is no longer the challenge. The real issue is the lack of structured systems to convert leads into predictable revenue.",
    slug: "lead-conversion",
    content: "The biggest gap in real estate is not lead generation but the absence of structured systems that convert leads into predictable revenue.",
  },
  {
    title: "The Operational Systems Every Scaling Startup Needs",
    desc: "As startups grow, complexity increases. Sustainable scaling requires shifting from execution-driven work to structured operational systems.",
    slug: "startup-operations",
    content: "Scaling startups require structured operational systems to manage complexity and move beyond execution-driven growth.",
  },
  {
    title: "Why Most Startups Scale Marketing Before Infrastructure",
    desc: "Startups often prioritize marketing over systems, leading to inconsistent growth. Infrastructure must evolve alongside growth to sustain performance.",
    slug: "startup-scaling",
    content: "Scaling marketing without infrastructure leads to unstable growth, as systems must evolve alongside demand to sustain performance.",
  },
  {
    title: "Why Most Growing Businesses Fail at Digital Alignment",
    desc: "Growth introduces complexity, but without digital alignment across tools, teams, and processes, businesses struggle with inefficiency and inconsistency.",
    slug: "digital-alignment",
    content: "Without digital alignment across systems, teams, and data, business growth becomes inefficient, inconsistent, and difficult to scale.",
  },
  {
    title: "Systems Thinking: The Missing Discipline in Modern Business",
    desc: "Modern businesses struggle with inefficiency because they operate in silos. Systems thinking enables organizations to function as interconnected, scalable systems.",
    slug: "systems-thinking",
    content: "Systems thinking enables businesses to move from siloed operations to interconnected structures that drive efficiency and scalable growth.",
  },
  {
    title: "The Brainixt Transformation Model™: A Structured Approach to Scalable Business Growth",
    desc: "Growth often fails due to disconnected efforts. The Brainixt Transformation Model™ unifies strategy, technology, and execution into one scalable system.",
    slug: "transformation-model",
    content: "The Brainixt Transformation Model™ unifies strategy, technology, and execution into a single system for predictable and scalable growth.",
  },
  {
    title: "The Technology Architecture Mistakes That Limit Business Growth",
    desc: "Investing in more tools doesn’t guarantee growth. Poor technology architecture often creates complexity instead of scalability.",
    slug: "technology-architecture",
    content: "Poor technology architecture creates complexity and inefficiency, while structured systems enable scalable and sustainable growth.",
  },

];

  // ✅ Hero & sections content (unchanged)
  const content = {
    hero: {
      title: "Brainixt Insights",
      subtitle: "Perspectives on Strategy, Technology, and Scalable Growth",
      description:
        "The modern business landscape is defined by rapid technological change, evolving customer expectations, and increasing competitive complexity.",
    },
    sections: [
      {
        title: "Strategic Perspectives",
        items: [
          {
            title: "Why Most Scaling Businesses Fail at Digital Alignment",
            desc: "Lack of alignment between strategy, infrastructure, and operations creates inefficiencies and limits growth.",
          },
          {
            title: "Revenue Systems vs. Marketing Campaigns",
            desc: "Sustainable growth requires structured revenue systems instead of short-term campaign thinking.",
          },
        ],
      },
      {
        title: "Technology & Infrastructure",
        items: [
          {
            title:
              "Technology Architecture Mistakes That Limit Enterprise Growth",
            desc: "Poor system design becomes a major barrier as organizations scale.",
          },
          {
            title: "The Role of Automation in Operational Efficiency",
            desc: "Automation must be implemented strategically to avoid new inefficiencies.",
          },
        ],
      },
      {
        title: "Industry Analysis",
        items: [
          {
            title: "Digital Transformation in Real Estate",
            desc: "Digital platforms and data are reshaping acquisition and engagement.",
          },
          {
            title: "The Future of Direct-to-Consumer Brands",
            desc: "Retention and integrated ecosystems drive long-term success.",
          },
        ],
      },
      {
        title: "Founder Perspectives",
        items: [
          {
            title: "Building Systems Instead of Chasing Growth",
            desc: "Systems create long-term scalability instead of short-term wins.",
          },
          {
            title: "The Strategic Gap Between Vision and Execution",
            desc: "Bridging the gap between ambition and structured execution.",
          },
        ],
      },
      {
        title: "Research & Frameworks",
        items: [
          {
            title: "The Brainixt Transformation Model™",
            desc: "A five-stage framework: Diagnose, Architect, Deploy, Drive Performance, Scale & Optimize.",
          },
        ],
      },
    ],
  };

  // ✅ State to show active article in modal
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <div className="relative bg-[#030712] text-white min-h-screen overflow-hidden pt-28 px-4 sm:px-8 md:px-16">
      {/* 🌈 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {content.hero.title}
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4">
          {content.hero.subtitle}
        </p>
        <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          {content.hero.description}
        </p>
      </section>

      {/* SECTIONS */}
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {content.sections.map((section, i) => (
          <div key={i}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold">{section.title}</h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-blue-300 transition">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

{/* 📰 ALL ARTICLES */}
<div className="max-w-6xl mx-auto mt-24 relative z-10">
  {/* Section Title */}
  <div className="flex items-center gap-4 mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold">All Articles</h2>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-700 to-transparent"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {articles.map((article, i) => (
      <div
        key={i}
        className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl"></div>

        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-blue-300 transition">{article.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{article.desc}</p>
        </div>

        {/* ✅ React Router Link to ArticlePage */}
        <Link
          to={`/articles/${article.slug}`}
          className="relative z-10 mt-auto"
        >
          <button className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-medium hover:scale-105 transition">
            Read Article
          </button>
        </Link>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}