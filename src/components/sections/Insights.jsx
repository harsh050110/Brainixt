const BrainixtInsights = () => {
  const topics = [
    "Why Most Scaling Companies Fail at Digital Alignment",
    "Revenue Systems vs. Marketing Campaigns: The Strategic Difference",
    "Technology Architecture Mistakes That Limit Enterprise Growth",
    "The Future of Performance-Driven Business Models"
  ];

  return (
    <section className="bg-[#0b2a3a] text-white px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="max-w-4xl mb-20">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
          Insights
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Brainixt Insights
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Authority is built through ideas. Our perspectives explore the intersection of strategy, infrastructure, and scalable growth.
        </p>
      </div>

      {/* INSIGHT LIST */}
      <div className="space-y-6 max-w-4xl">

        {topics.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer border-b border-white/10 pb-6 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-medium flex items-center justify-between">
              {item}
              <span className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-2">
                →
              </span>
            </h3>

            <div className="h-[1px] bg-white/10 mt-4 group-hover:bg-white/30 transition" />
          </div>
        ))}

      </div>

      {/* FOOTER TEXT */}
      <p className="text-gray-400 mt-16 max-w-3xl text-sm">
        Explore research-backed thinking designed for founders, operators, and growth leaders.
      </p>

    </section>
  );
};

export default BrainixtInsights;