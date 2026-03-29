export default function TechnologyPage() {
  const data = {
    title: "Technology Architecture & Infrastructure",
    subtitle: "Engineering Systems Built for Scale",
    description:
      "Technology should enable growth, not create complexity.",

    details:
      "Brainixt designs and deploys digital infrastructure that supports operational efficiency, seamless customer experiences, and long-term scalability.",

    points: [
      {
        title: "Enterprise Platform Architecture",
        desc: "Design scalable platforms that support complex business operations.",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      },
      {
        title: "Custom Web & Application Development",
        desc: "Build tailored digital products aligned with business goals.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        title: "Digital Infrastructure Design",
        desc: "Create systems that support performance, security, and growth.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
      {
        title: "System Integrations & Automation",
        desc: "Connect tools and automate workflows for efficiency.",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      },
      {
        title: "Scalable Cloud Environments",
        desc: "Deploy cloud systems that scale with demand and growth.",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      },
    ],

    closing:
      "Every system we design is built with performance, reliability, and future growth in mind.",
  };

  return (
    <div className="relative bg-[#030712] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 overflow-hidden">

      {/* 🌈 Glow Background */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="text-center mb-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 mb-2">
          {data.subtitle}
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          {data.description}
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm sm:text-base">
          {data.details}
        </p>
      </section>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

        {data.points.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="h-40 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl"></div>

          </div>
        ))}

      </div>

      {/* CLOSING TEXT */}
      <div className="max-w-3xl mx-auto text-center mt-20 relative z-10">
        <p className="text-gray-400 text-sm sm:text-base">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10 relative z-10">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-black font-medium hover:scale-105 transition">
          Explore Solutions
        </button>
      </div>

    </div>
  );
}