import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const pages = [
    { name: "SaaS", path: "/saas" },
    { name: "Financial", path: "/financial" },
    { name: "Real Estate", path: "/real-estate" },
    { name: "Education", path: "/education" },
    { name: "E-commerce", path: "/ecommerce" },
    { name: "Professional Services", path: "/professional-services" },
    { name: "Business Strategy", path: "/business" },
    { name: "Technology", path: "/technology" },
    { name: "Growth", path: "/growth" },
    { name: "Operations", path: "/operations" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Transformation", path: "/transformation" },
    { name: "Working", path: "/working" },
    { name: "Home", path: "/" },
  ];

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const match = pages.find((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (match) {
        navigate(match.path);
        setShowSearch(false);
        setSearchTerm("");
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between 
      px-4 sm:px-6 py-4 sm:py-5
      bg-[#020617]/90 backdrop-blur-md border-b border-white/5 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group"
          >
            <div className="space-y-[5px]">
              <span className="block w-5 h-[2px] bg-white group-hover:w-6 transition-all"></span>
              <span className="block w-5 h-[2px] bg-white group-hover:w-4 transition-all"></span>
              <span className="block w-5 h-[2px] bg-white group-hover:w-6 transition-all"></span>
            </div>
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="Brainixt Logo"
            className="h-10 sm:h-14 md:h-16 cursor-pointer block"
            onClick={() => navigate("/")}
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* Search */}
          <div className="relative">
            <button
              className="text-xs sm:text-sm text-gray-300 hover:text-white transition"
              onClick={() => setShowSearch(!showSearch)}
            >
              Search
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                className="absolute right-0 top-8 w-[140px] sm:w-[200px] 
                px-3 py-1.5 rounded bg-gray-800 text-white text-sm outline-none shadow-lg"
              />
            )}
          </div>

          {/* Contact Button */}
          <button
            onClick={() => navigate("/contact")}
            className="px-3 sm:px-5 py-1.5 sm:py-2 
            border border-white/20 rounded-full 
            text-xs sm:text-sm text-white 
            hover:border-purple-600 transition whitespace-nowrap"
          >
            Contact
          </button>

        </div>

      </nav>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;