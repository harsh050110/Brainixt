import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function ContactPage() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-20">

      {/* SOCIAL ICONS (Right Middle Fixed) */}
<div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 text-gray-400">

  <a 
    href="https://www.linkedin.com/company/brainixt/?viewAsMember=true" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition group"
  >
    <FaLinkedin
      size={20}
      className="transition group-hover:text-[#0A66C2] group-hover:scale-110"
    />
  </a>

  <a 
    href="https://www.instagram.com/brainixt/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition group"
  >
    <FaInstagram
      size={20}
      className="transition group-hover:text-[#E1306C] group-hover:scale-110"
    />
  </a>

  <a 
    href="https://x.com/brainixt" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition group"
  >
    <FaXTwitter
      size={20}
      className="transition group-hover:text-gray-300 group-hover:scale-110"
    />
  </a>

  <a 
    href="https://www.youtube.com/channel/UCS9yTV69guZ5Mau9Fki8fBQ"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition group"
  >
    <FaYoutube
      size={20}
      className="transition group-hover:text-red-500 group-hover:scale-110"
    />
  </a>

  <a 
    href="https://www.facebook.com/brainixt"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition group"
  >
    <FaFacebook
      size={20}
      className="transition group-hover:text-blue-500 group-hover:scale-110"
    />
  </a>

</div>
      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Start a Strategic Conversation
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base">
          Organizations that achieve sustainable growth move beyond fragmented initiatives and build structured systems designed for scale.
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 mt-4 text-sm md:text-base">
          Brainixt partners with founders and leadership teams seeking strategic clarity, scalable infrastructure, and performance-driven growth systems.
        </p>
      </section>

      {/* WORK WITH BRAINIxt */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-4 text-center">Work With Brainixt</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Design scalable digital ecosystems",
            "Align technology with long-term business strategy",
            "Build structured customer acquisition systems",
            "Improve operational efficiency",
            "Expand into new markets",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Strategic Consultation</h2>
        <p className="text-gray-400 text-sm mb-6">
          Every engagement begins with understanding your systems, objectives, and growth ambitions.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Business model and growth strategy",
            "Digital infrastructure and technology",
            "Operational systems and constraints",
            "Opportunities for transformation",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Send an Inquiry</h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input placeholder="Full Name" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />
          <input placeholder="Company Name" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />

          <input placeholder="Email Address" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />
          <input placeholder="Phone Number" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />

          <input placeholder="Industry" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />
          <input placeholder="Organization Size" className="p-3 rounded bg-white/5 border border-white/10 text-sm" />

          <textarea
            placeholder="Brief Description of Your Challenge or Project"
            rows="4"
            className="sm:col-span-2 p-3 rounded bg-white/5 border border-white/10 text-sm"
          ></textarea>

          <button className="sm:col-span-2 mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* GLOBAL */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-xl font-semibold mb-3">Global Engagement</h2>
        <p className="text-gray-400 text-sm">
          Brainixt works with organizations across markets through digital collaboration and structured advisory engagements.
        </p>
      </section>

      {/* PARTNERS */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Partnership Opportunities</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Technology partners",
            "Strategic advisors",
            "Industry experts",
            "Growth-stage organizations",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="text-center mb-16">
        <h2 className="text-xl font-semibold mb-2">Founder Contact</h2>
        <p className="text-white font-medium">Parth Jain</p>
        <p className="text-gray-400 text-sm">Founder & Managing Partner</p>
        <p className="text-indigo-400 text-sm mt-2 cursor-pointer hover:underline">
          Connect on LinkedIn
        </p>
      </section>

      {/* CLOSING */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-2">
          Let’s Build Something That Scales
        </h2>
        <p className="text-gray-400 text-sm">
          True transformation requires structured thinking, disciplined execution, and scalable systems.
        </p>

        <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Start the Conversation
        </button>
      </section>

    </div>
  );
}