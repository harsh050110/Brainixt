import { industries } from "../../data/content";

const Industries = () => {
  return (
    <section className="bg-[#020617] text-black px-10 py-24">
      
      {/* HEADER */}
      <div className="max-w-5xl">
        <h2 className="text-4xl font-semibold leading-tight mb-6 text-white">
          Focused Expertise Across High-Growth Sectors
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl">
          We partner with founders and enterprises across industries where digital alignment drives competitive advantage.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {industries.map((item, i) => (
          
          <div
            key={i}
            className="group relative bg-black/10 p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-white"
          >
            
            {/* TOP LINE ACCENT */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition" />

            {/* CONTENT */}
            <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
              {item}
              <span className="text-blue-600 transform group-hover:translate-x-1 transition">
                →
              </span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic growth, digital transformation, and performance optimization tailored for this sector.
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;