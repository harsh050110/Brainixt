import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-16 px-6 sm:px-10 md:px-16 border-t border-white/10">

      {/* 🔥 CTA STRIP */}
      <div className="max-w-6xl mx-auto mb-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Building for Scale?
        </h2>
        <p className="text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
          Brainixt partners with organizations seeking structured growth and scalable digital ecosystems.
        </p>
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
          Start a Strategic Conversation
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-12">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <h3 className="text-white text-xl font-semibold mb-3">Brainixt</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Strategy-led technology and growth consulting firm helping ambitious organizations design scalable digital ecosystems, accelerate market expansion, and build structured systems for long-term enterprise value.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
  <li><Link to="/" className="hover:text-white">Home</Link></li>
  <li><Link to="/about" className="hover:text-white">About Brainixt</Link></li>
  <li><Link to="/about" className="hover:text-white">Founder</Link></li>
  <li><span className="text-gray-500">Careers</span></li>
  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
</ul>
        </div>

        {/* CAPABILITIES */}
        <div>
          <h4 className="text-white font-medium mb-3">Capabilities</h4>
          <ul className="space-y-2 text-sm">
  <li><Link to="/business" className="hover:text-white">Business & Digital Strategy</Link></li>
  <li><Link to="/technology" className="hover:text-white">Technology Architecture</Link></li>
  <li><Link to="/growth" className="hover:text-white">Growth & Market Expansion</Link></li>
  <li><Link to="/operations" className="hover:text-white">Operational & Structural Advisory</Link></li>
</ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h4 className="text-white font-medium mb-3">Industries</h4>
         <ul className="space-y-2 text-sm">
  <li><Link to="/real-estate" className="hover:text-white">Real Estate & PropTech</Link></li>
  <li><Link to="/saas" className="hover:text-white">SaaS & Startups</Link></li>
  <li><Link to="/ecommerce" className="hover:text-white">E-commerce & D2C</Link></li>
  <li><Link to="/professional-services" className="hover:text-white">Professional Services</Link></li>
  <li><Link to="/financial" className="hover:text-white">FinTech</Link></li>
  <li><Link to="/education" className="hover:text-white">EdTech</Link></li>
</ul>
        </div>

        {/* INSIGHTS */}
        <div>
          <h4 className="text-white font-medium mb-3">Insights</h4>
         <ul className="space-y-2 text-sm">
  <li><Link to="/insights" className="hover:text-white">Brainixt Insights</Link></li>
  <li><Link to="/insights" className="hover:text-white">Strategy Perspectives</Link></li>
  <li><Link to="/insights" className="hover:text-white">Industry Analysis</Link></li>
  <li><Link to="/insights" className="hover:text-white">Research & Frameworks</Link></li>
</ul>
 {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-gray-400">
<a 
  href="https://linkedin.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-2 rounded-full hover:bg-white/10 transition group"
>
  <FaLinkedin
    size={20}
    className="transition group-hover:text-[#0A66C2] group-hover:scale-110"
  />
</a>

  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-white/10 transition group"
  >
    <FaInstagram
      size={20}
      className="transition group-hover:text-[#E1306C] group-hover:scale-110"
    />
  </a>

  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-white/10 transition group"
  >
    <FaXTwitter
      size={20}
      className="transition group-hover:text-gray-500 group-hover:scale-110"
    />
  </a>

</div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>contact@brainixt.com</li>
            <li>+91 XXXXX XXXXX</li>
            <li className="text-gray-500 text-xs mt-2">
              Global Consulting Engagements <br />
              Operating across India and international markets.
            </li>
          </ul>
        </div>
      </div>

        {/* LEGAL */}
<div className="flex flex-wrap gap-4 text-gray-400">
  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
  <Link to="/terms" className="hover:text-white">Terms of Use</Link>
  <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
  <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
</div>
        



      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-xs pb-6">
        © 2026 Brainixt. All rights reserved. <br />
        Brainixt is a strategy-led technology and growth consulting firm supporting organizations globally.
      </div>

    </footer>
  );
}