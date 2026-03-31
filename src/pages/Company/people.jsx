import Parth from "../../assets/Parth-Jain.png";
import Vinit from "../../assets/Vinit-Jha.png";
import Harsh from "../../assets/Harsh.jpeg";
import Bhavesh from"../../assets/Bhavesh-Jain.png";
import Sajal from "../../assets/Sajal-Jain.png";
import Shashank from "../../assets/Shashank-Jain.png";
export default function PeoplePage() {
  const founder = {
    name: "Parth Jain",
    role: "Founder & Managing Partner",
    desc: "Leads Brainixt with a focus on scalable digital ecosystems and structured growth systems.",
    image: Parth,
    link: "https://www.linkedin.com/in/parthjainync/",
  };

const team = [
  {
    name: "Bhavesh Jain",
    role: "Chief Technology Officer (CTO)",
    image: Bhavesh,
    link: "https://www.linkedin.com/in/bhavesh-jain-b07098152/",
    desc: "Leads technology architecture and infrastructure, building scalable and high-performance systems for long-term growth.",
  },
  {
    name: "Sajal Jain",
    role: "Chief Marketing Officer (CMO)",
    image: Sajal,
    link: "https://www.linkedin.com/in/sajal-jain-designer/",
    desc: "Leads growth and market expansion through structured acquisition systems and performance-driven strategies.",
  },
  {
    name: "CA Shashank Jain",
    role: "Chief Financial Officer (CFO)",
    image: Shashank,
    link: "https://www.linkedin.com/in/ca-shashank-jain-2a5600112/",
    desc: "Provides financial leadership, ensuring scalable business models, compliance, and long-term sustainability.",
  },
  {
    name: "Harsh Kumar",
    role: "Strategy & Operations",
    image: Harsh,
    link: "https://harshdev05.vercel.app/",
    desc: "Supports execution and operational alignment, ensuring structured and efficient transformation delivery.",
  },

];


  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-4 sm:px-8 md:px-16 pb-20">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Leadership & People
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          Leadership driving strategy, technology, and growth across Brainixt engagements.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="text-center mb-20">
        <h2 className="text-lg font-semibold mb-6">Founder & Managing Partner</h2>

        <div className="flex flex-col items-center">

          <img
            src={founder.image}
            alt={founder.name}
            className="w-32 h-32 rounded-full object-cover border-2 border-indigo-400 mb-4"
          />

          <h3 className="text-lg font-semibold">{founder.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{founder.role}</p>

          <p className="text-gray-500 text-sm max-w-md mb-4">
            {founder.desc}
          </p>

          <a
            href={founder.link}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-indigo-500 text-sm transition"
          >
            View Profile
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-lg font-semibold text-center mb-10">
          Leadership Team
        </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

  {team.map((person, i) => (
    <div
      key={i}
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-indigo-400/40 transition"
    >

      {/* DEFAULT VIEW */}
      <div className="group-hover:opacity-0 transition duration-300">

        <img
          src={person.image}
          alt={person.name}
          className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
        />

        <h3 className="text-sm font-semibold">{person.name}</h3>
        <p className="text-gray-400 text-xs">{person.role}</p>

      </div>

      {/* HOVER VIEW */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition duration-300">

        <h3 className="text-sm font-semibold mb-1">{person.name}</h3>
        <p className="text-indigo-300 text-xs mb-2">{person.role}</p>

        <p className="text-gray-400 text-xs leading-relaxed mb-3">
          {person.desc}
        </p>

        <a
          href={person.link}
          className="text-xs px-4 py-1 rounded-full bg-indigo-500 hover:bg-indigo-600 transition"
        >
          View Profile
        </a>

      </div>

    </div>
  ))}
</div>
      </section>
            {/* STRATEGIC ADVISORY */}
<section className="max-w-5xl mx-auto mb-20">
  <h2 className="text-lg font-semibold text-center mb-10">
    Strategic Advisory
  </h2>

  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition">

    {/* Image */}
    <img
      src={Vinit}
      alt="Adv. Vinit Jha"
      className="w-24 h-24 rounded-full object-cover mb-4"
    />

    {/* Name */}
    <h3 className="text-sm font-semibold">
      Adv. Vinit Jha
    </h3>

    {/* Role */}
    <p className="text-indigo-300 text-xs mb-3">
      Legal & Regulatory Advisor
    </p>

    {/* Description */}
    <p className="text-gray-400 text-sm max-w-xl leading-relaxed mb-4">
      Adv. Vinit Jha provides strategic guidance on compliance frameworks, regulatory alignment, and legal risk management across engagements. He supports organizations in building growth initiatives on a strong legal foundation—ensuring governance, contract structuring, and long-term operational stability.
    </p>

    {/* Button */}
    <a
      href="https://www.linkedin.com/in/vinit-kumar-jha-2b4829221?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      className="px-4 py-1 text-xs rounded-full bg-indigo-500 hover:bg-indigo-600 transition"
    >
      View Profile
    </a>

  </div>
</section>

      {/* SUPPORT */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-3">
          Supported by a Network of Specialists
        </h2>
        <p className="text-gray-400 text-sm">
          Brainixt operates with a focused leadership team supported by specialists across strategy, technology, and growth systems.
        </p>
      </section>

      {/* MODEL */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-lg font-semibold mb-4">Our Operating Model</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Technology & Digital Infrastructure",
            "Growth & Performance Systems",
            "Business Strategy & Transformation",
            "Industry-Specific Expertise",
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-gray-400 text-sm">
          Brainixt combines strategic thinking, technical expertise, and operational discipline to help organizations build scalable, performance-driven systems.
        </p>
      </section>

    </div>
  );
}