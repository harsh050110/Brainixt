export default function EdtechPage() {
  const data = {
    title: "Education & EdTech",
    subtitle: "Building Digital Ecosystems for Scalable Learning",

    description:
      "Educational institutions and EdTech companies are increasingly dependent on digital platforms for content delivery, student engagement, and operational management.",

    details:
      "Brainixt helps education organizations design scalable digital ecosystems that improve learning experiences while enabling sustainable growth.",

    features: [
      {
        title: "Learning Platform Architecture",
        desc: "Design and develop scalable digital learning platforms.",
      },
      {
        title: "Student Acquisition Systems",
        desc: "Build structured enrollment and acquisition pipelines.",
      },
      {
        title: "Digital Content Infrastructure",
        desc: "Organize and deliver content efficiently at scale.",
      },
      {
        title: "Performance Analytics",
        desc: "Track learning outcomes and engagement metrics.",
      },
      {
        title: "Platform Scalability",
        desc: "Ensure systems support growth and increasing demand.",
      },
    ],

    learningFlow: [
      "Discover",
      "Enroll",
      "Learn",
      "Track Progress",
      "Scale Impact",
    ],

    metrics: [
      { value: "2x", label: "Student Engagement" },
      { value: "50%+", label: "Completion Rates" },
      { value: "3x", label: "Platform Scalability" },
    ],

    closing:
      "These systems allow education providers to expand their reach and impact in a rapidly evolving digital learning landscape.",
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-16">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mb-2">
          {data.subtitle}
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 text-xs sm:text-sm md:text-base px-2">
          {data.description}
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mt-4 text-sm md:text-base px-2">
          {data.details}
        </p>
      </section>

      {/* 📊 METRICS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 text-center">
        {data.metrics.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h3 className="text-xl font-bold text-sky-300">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 📘 FEATURES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
        {data.features.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition hover:scale-[1.02]"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-sky-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🎓 LEARNING FLOW */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold mb-6 text-center">
          Learning Ecosystem Flow
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          {data.learningFlow.map((step, i) => (
            <div key={i} className="w-full md:flex-1 flex flex-col items-center">

              <div className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-sm">
                {step}
              </div>

              {i !== data.learningFlow.length - 1 && (
                <div className="md:hidden text-sky-400 my-2">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 CLOSING */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-400 text-sm md:text-base px-2">
          {data.closing}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
<Link to ="/parth-jain">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-black font-medium hover:scale-105 transition">
          Build Learning Systems
        </button>
        </Link>
      </div>

    </div>
  );
}