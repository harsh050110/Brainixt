import { capabilities } from "../../data/content";

const Capabilities = () => {
  return (
    <section className="bg-[#0b2a3a] text-white px-10 py-24">
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight mb-6">
            Integrated Capabilities. <br /> Structured Impact.
          </h2>

          <p className="text-gray-400 text-lg max-w-md">
            We combine strategy, design, and engineering to build scalable digital systems that drive measurable growth.
          </p>
        </div>

        {/* RIGHT SIDE - STACKED CARDS */}
        <div className="relative space-y-6">
          {capabilities.map((item, i) => (
            
            <div
              key={i}
              className={`relative p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                i === 1 ? "scale-105 bg-white/10 border-white/20" : ""
              }`}
            >
              
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;