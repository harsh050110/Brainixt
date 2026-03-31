export default function ParthJain() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-20">

      {/* HERO */}
      <section className="text-center mb-16">
        <img
          src="#"
          alt="Parth Jain"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-indigo-400"
        />

        <h1 className="text-2xl md:text-4xl font-bold">
          Parth Jain
        </h1>

        <p className="text-indigo-300 text-sm mt-1">
          Founder & Managing Partner — Brainixt
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base mt-4">
          Founder of Brainixt, focused on building scalable digital ecosystems and structured growth systems by aligning strategy, technology, and performance.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-500 text-sm leading-relaxed">
          Parth works at the intersection of business strategy, technology architecture, and performance-driven expansion—helping organizations move from fragmented execution to scalable, disciplined operations.
        </p>
      </section>

      {/* STRATEGIC PERSPECTIVE */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-lg font-semibold mb-4 text-center">
          A Strategic Perspective on Modern Business Growth
        </h2>

        <p className="text-gray-400 text-sm mb-4 text-center max-w-3xl mx-auto">
          Most businesses do not fail because of lack of effort — they fail because strategy, technology, and execution evolve independently.
        </p>

        <p className="text-gray-500 text-sm text-center max-w-3xl mx-auto">
          Brainixt was created to solve this challenge by architecting integrated growth ecosystems that align strategy, systems, and performance.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold text-center mb-8">
          Leadership Philosophy
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Systems Over Tactics",
              desc: "Growth comes from well-designed systems, not isolated actions.",
            },
            {
              title: "Strategic Clarity",
              desc: "Clear frameworks and measurable outcomes drive scale.",
            },
            {
              title: "Infrastructure for Scale",
              desc: "Systems must support long-term expansion, not short-term execution.",
            },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-indigo-300 text-sm font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-lg font-semibold text-center mb-8">
          Areas of Strategic Focus
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Digital business strategy",
            "Technology architecture",
            "Performance-driven growth models",
            "Operational alignment",
            "Market expansion frameworks",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-lg font-semibold mb-6">
          Industry Engagement
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Real Estate & PropTech",
            "SaaS & Startups",
            "E-commerce & D2C",
            "Professional Services",
            "FinTech",
            "EdTech",
          ].map((item, i) => (
            <div key={i} className="p-3 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BUILDING BRAINIxt */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-3">
          Building Brainixt
        </h2>

        <p className="text-gray-400 text-sm">
          Brainixt was founded to help organizations move beyond fragmented initiatives and build integrated digital ecosystems for long-term growth.
        </p>
      </section>

      {/* THOUGHT LEADERSHIP */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-lg font-semibold text-center mb-6">
          Thought Leadership
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Designing scalable digital ecosystems",
            "Aligning technology with strategy",
            "Building predictable revenue systems",
            "Digital transformation for growth companies",
            "Operational frameworks for scaling",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-3">
          Looking Ahead
        </h2>

        <p className="text-gray-400 text-sm">
          The vision is to build a global consulting firm helping organizations navigate modern digital complexity with structured systems and scalable growth.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-2">
          Connect With Parth
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Open to conversations with founders and leadership teams navigating transformation and scaling challenges.
        </p>
        <a
  href="https://linkedin.com/in/YOUR-LINK"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
    Connect on LinkedIn
  </button>
</a>
      </section>

    </div>
  );
}