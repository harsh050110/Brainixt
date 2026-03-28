export default function InsightsPage() {
  const content = {
    hero: {
      title: "Brainixt Insights",
      subtitle:
        "Perspectives on Strategy, Technology, and Scalable Growth",
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
            
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {section.title}
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300"
                >
                  {/* Glow Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-blue-300 transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>


    </div>
  );
}