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
  {name: "Education", path: "/education"},
  {name: "E-commerce", path: "/ecommerce"},
  {name: "Professional Services", path: "/professional-services"},
  {name: "Business Strategy", path: "/business"},
  {name: "Technology", path: "/technology"},
  {name: "Growth", path: "/growth"},
  {name: "Operations", path: "/operations"},
  {name: "Insights", path: "/insights"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"},
  {name: "Transformation", path: "/transformation"},
  {name: "Working", path: "/working"},
  {name: "Home", path: "/"},

];

const handleSearch = (e) => {
  if (e.key === "Enter") {
    const match = pages.find(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (match) {
      navigate(match.path);
    }
  }
};


  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-10 py-5
      bg-[#020617]/80 backdrop-blur-md border-b border-white/10 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="w-10 h-10 flex items-center justify-center group"
          >
            <div className="space-y-[5px]">
              <span className="block w-5 h-[2px] bg-white group-hover:w-6 transition-all"></span>
              <span className="block w-5 h-[2px] bg-white group-hover:w-4 transition-all"></span>
              <span className="block w-5 h-[2px] bg-white group-hover:w-6 transition-all"></span>
            </div>
          </button>

          <img
  src={logo}
  alt="Brainixt Logo"
  className="h-8 object-contain cursor-pointer"
  onClick={() => navigate("/")}
/>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">

          {/* Search */}
            <button
  className="text-sm text-gray-300 hover:text-white transition"
  onClick={() => setShowSearch(!showSearch)}
>
  Search
</button>

{showSearch && (
  <input
  type="text"
  placeholder="Type to search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={handleSearch}
  className="ml-2 px-2 py-1 rounded bg-gray-800 text-white"
/>
)}

          {/* Login */}
          <button
  onClick={() => navigate("/contact")}
  className="px-5 py-2 border border-white/20 rounded-full text-sm text-white hover:border-green-400 transition"
>
  Contact Us
</button>

        </div>

      </nav>

      <SidebarMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;