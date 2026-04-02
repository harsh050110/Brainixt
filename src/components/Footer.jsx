import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
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
        <Link to="/contact">
          <button className="px-6 py-3 text-sm rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black font-medium hover:scale-105 transition">
            Start a Strategic Conversation
          </button>
        </Link>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <h3 className="text-white text-lg font-semibold mb-3">Brainixt</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Strategy-led technology and growth consulting firm helping ambitious organizations design scalable digital ecosystems, accelerate growth, and build structured systems for long-term enterprise value.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Brainixt</Link></li>
            <li><Link to="/about" className="hover:text-white">Founder</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* CAPABILITIES */}
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Capabilities</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/business" className="hover:text-white">Business Strategy</Link></li>
            <li><Link to="/technology" className="hover:text-white">Technology Architecture</Link></li>
            <li><Link to="/growth" className="hover:text-white">Growth & Market Expansion</Link></li>
            <li><Link to="/operations" className="hover:text-white">Operations Advisory</Link></li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Industries</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/real-estate" className="hover:text-white">Real Estate & PropTech</Link></li>
            <li><Link to="/saas" className="hover:text-white">SaaS & Startups</Link></li>
            <li><Link to="/e-commerce" className="hover:text-white">E-commerce & D2C</Link></li>
            <li><Link to="/professional-services" className="hover:text-white">Professional Services</Link></li>
            <li><Link to="/financial" className="hover:text-white">Financial Services & FinTech</Link></li>
            <li><Link to="/education" className="hover:text-white">Education & EdTech</Link></li>
          </ul>
        </div>
        {/* INSIGHTS */}
<div>
  <h4 className="text-white font-medium mb-3 text-sm">Insights</h4>
  <ul className="space-y-2 text-sm">
    <li>
      <Link to="/insights" className="hover:text-white">
        Brainixt Insights
      </Link>
    </li>
    <li>
      <Link to="/case-studies" className="hover:text-white">
        Case Studies
      </Link>
    </li>

  </ul>
</div>

      </div>

      {/* SOCIAL + CONTACT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">

        {/* CONTACT */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          contact@brainixt.com · +91 9599332870
        </div>

        {/* SOCIAL */}
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/company/brainixt/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:text-[#0A66C2]">
            <FaLinkedin size={18} />
          </a>

          <a href="https://www.instagram.com/brainixt/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:text-[#E1306C]">
            <FaInstagram size={18} />
          </a>

          <a href="https://x.com/brainixt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:text-gray-400">
            <FaXTwitter size={18} />
          </a>

          <a href="https://www.youtube.com/channel/UCS9yTV69guZ5Mau9Fki8fBQ" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:text-red-500">
            <FaYoutube size={18} />
          </a>

          <a href="https://www.facebook.com/brainixt" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition hover:text-blue-500">
            <FaFacebook size={18} />
          </a>
        </div>

      </div>

      {/* LEGAL + COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Condition</Link>
          <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
          <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          <Link to="/use" className="hover:text-white">Terms of Use</Link>
        </div>

        <div className="text-center md:text-right">
          © 2026 Brainixt. All rights reserved.
        </div>

      </div>

    </footer>
  );
}