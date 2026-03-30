export default function OfficePage() {
  const offices = [
    {
      title: "Registered Office — Delhi NCR",
      address: "S3, 270, Sector-4, Vaishali, Ghaziabad (U.P.)",
      desc: "This serves as Brainixt’s registered office and administrative base, supporting core operations and strategic coordination.",
    },
    {
      title: "Noida",
      address: "WeWork, Sector 16, Noida",
      desc: "Located in one of NCR’s key business districts, supporting client engagements across technology, startups, and enterprise ecosystems.",
    },
    {
      title: "Gurugram",
      address: "WeWork, DLF SEZ, Sector 24, Gurugram",
      desc: "Enables collaboration with corporate clients, growth-stage companies, and international business networks.",
    },
  ];

  const engagement = [
    "Structured virtual collaboration systems",
    "Centralized communication and reporting frameworks",
    "Scalable delivery processes across time zones",
    "Performance-driven project management",
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-20">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Global Presence
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Operating Across India with a Global Consulting Outlook
        </p>

        <p className="text-gray-500 text-sm max-w-3xl mx-auto mt-3">
          Brainixt operates with a strong presence across key business hubs in India while supporting organizations globally through a digitally enabled consulting model.
        </p>

        <p className="text-gray-500 text-sm max-w-3xl mx-auto mt-3">
          Our distributed presence allows us to collaborate closely with clients across industries while maintaining a structured, high-performance delivery approach.
        </p>
      </section>

      {/* INDIA PRESENCE */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-lg font-semibold text-center mb-10">
          India Presence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {offices.map((office, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
            >
              <h3 className="text-indigo-300 font-semibold mb-2">
                {office.title}
              </h3>

              <p className="text-gray-400 text-xs mb-2">
                {office.address}
              </p>

              <p className="text-gray-500 text-xs">
                {office.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL MODEL */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-lg font-semibold mb-3">
          Global Engagement Model
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Built for Scalable, Cross-Border Collaboration
        </p>

        <p className="text-gray-500 text-sm mb-6 max-w-3xl mx-auto">
          Brainixt operates through a digitally integrated consulting model, enabling collaboration across geographies.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {engagement.map((item, i) => (
            <div
              key={i}
              className="p-4 bg-white/5 border border-white/10 rounded text-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6">
          This ensures consistency, efficiency, and strategic alignment across all engagements.
        </p>
      </section>

      {/* EXPANSION */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-lg font-semibold mb-2">
          Expanding Our Presence
        </h2>

        <p className="text-gray-400 text-sm">
          As Brainixt continues to grow, we are actively expanding across key domestic and international markets to support deeper client engagement and long-term partnerships.
        </p>
      </section>

      {/* CLOSING */}
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-gray-400 text-sm">
          Brainixt combines local presence with global capability—delivering structured, scalable consulting solutions to organizations building for long-term growth.
        </p>
      </section>

    </div>
  );
}