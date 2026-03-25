const Founder = () => {
  return (
    <section className="bg-[#0b2a3a] px-10 py-24 text-black">

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-400 mb-2">
            FOUNDER LEADERSHIP
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-white">
            Founder & Managing Partner
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Brainixt was founded by Parth Jain with a vision to bridge the gap 
            between business strategy and execution in modern digital environments.
          </p>

          <p className="text-gray-400 leading-relaxed">
            As Founder & Managing Partner, he leads strategic engagements focused 
            on building scalable, performance-driven business ecosystems across 
            global markets.
          </p>

          {/* CTA */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
            View Profile →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden">
          <img
            src="img"
            alt="Founder"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default Founder;