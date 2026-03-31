import { Link } from "react-router-dom";
import Blog from "../assets/Blog.jpg";

const Hero = () => {
  return (
    <div className="bg-[#020617] text-white px-4 sm:px-6 md:px-10 pt-[90px] pb-12">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Where Strategy <br /> Becomes Scale.
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-300 max-w-md text-sm sm:text-base">
              Brainixt is a global strategy-led technology and growth consulting firm partnering 
              with ambitious organizations to architect scalable digital ecosystems, accelerate 
              market expansion, and deliver measurable enterprise impact.
            </p>

            <p className="mt-3 text-gray-400 max-w-md text-sm sm:text-base">
              We operate at the intersection of business strategy, technology architecture, 
              and performance-driven growth.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-400 transition text-center"
              >
                Discuss Your Growth Strategy →
              </Link>

              <Link
                to="/capabilities"
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-center"
              >
                Explore Our Capabilities
              </Link>
            </div>
          </div>

          {/* Arrow Button */}
          <div className="mt-8 sm:mt-10">
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              →
            </button>
          </div>

        </div>

        {/* CENTER CARDS */}
        <div className="flex flex-col gap-6">

          {/* CARD 1 */}
          <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-gray-300">INSIGHT</p>
              <h2 className="text-sm sm:text-lg font-semibold">
                Building scalable digital ecosystems →
              </h2>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-gray-300">CASE STUDY</p>
              <Link to="/contact">
                <h2 className="text-sm sm:text-lg font-semibold hover:text-indigo-400 transition cursor-pointer">
                  Driving enterprise growth →
                </h2>
              </Link>
            </div>
          </div>

        </div>

        {/* RIGHT BIG CARD */}
        <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[320px] lg:h-full">

          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40 p-4 sm:p-6 flex flex-col justify-between">

            <div>
              <p className="text-xs sm:text-sm text-gray-300">FEATURED</p>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 leading-snug">
                How Brainixt helps organizations scale with precision, speed, and impact
              </h2>
            </div>

            <Link to="/about">
              <button className="bg-white text-black px-4 py-2 rounded-md w-fit">
                View Case Study →
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {/* CARD 3 */}
        <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs text-gray-300">INSIGHT</p>
            <h2 className="text-sm sm:text-lg font-semibold">
              Scaling leadership in modern enterprises
            </h2>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden">
          <img
            src={Blog}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs text-gray-300">BLOG</p>
            <Link to="/company-studies">
              <h2 className="text-sm sm:text-lg font-semibold">
                High-performance growth systems →
              </h2>
            </Link>
          </div>
        </div>

        {/* CTA BOX */}
        <div className="bg-[#095976] p-6 rounded-xl flex flex-col justify-center">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Stay ahead with Brainixt insights and strategies.
          </h2>

          <div className="flex">
            <input
              placeholder="Email address"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-blue-500 px-4">→</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;