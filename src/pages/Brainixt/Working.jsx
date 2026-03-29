export default function WorkingPage() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-32 px-4 sm:px-8 md:px-16 flex items-center justify-center">

      <div className="max-w-4xl text-center">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Working With Brainixt
          </span>
        </h1>

        {/* MAIN STATEMENT */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
          We collaborate with founders, leadership teams, and growth-focused organizations 
          that are serious about building scalable systems and long-term competitive advantage.
        </p>

        {/* HIGHLIGHT BLOCK */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 blur-xl opacity-70 rounded-2xl"></div>

          <p className="relative z-10 text-lg md:text-xl font-medium text-white">
            Brainixt is not a vendor delivering isolated services.
          </p>

          <p className="relative z-10 text-lg md:text-xl font-medium mt-2 text-yellow-300">
            We are a strategic partner focused on architecting structured growth.
          </p>
        </div>

        {/* CTA */}
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-medium hover:scale-105 transition">
          Start a Conversation
        </button>

      </div>

    </div>
  );
}