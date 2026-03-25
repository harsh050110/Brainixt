const CaseStudies = () => {
  const data = [
    {
      title: "Real Estate Growth",
      desc: "35% improvement in conversion",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "E-commerce Optimization",
      desc: "28% increase in conversion",
      img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "SaaS Scaling",
      desc: "Global expansion ready",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#0b2a3a] text-white px-10 py-20">
      <h2 className="text-3xl font-semibold mb-12">
        Structured Intervention. Quantifiable Outcomes.
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div key={i} className="bg-[#e5e5e5] p-[10px]">
            
            <div className="bg-white text-black overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl">

              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold flex items-center justify-between">
                  {item.title}
                  <span className="text-blue-600 group-hover:translate-x-1 transition">
                    →
                  </span>
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;