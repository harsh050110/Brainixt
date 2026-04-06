import { Link } from "react-router-dom";
import Blog from "../assets/Blog.jpg";

const Hero = () => {
  return (
    <div className="bg-[#020617] text-white px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 pb-6">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between h-full gap-6 items-center text-center md:items-start md:text-left max-w-[420px] mx-auto md:mx-0">

          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
              Where Strategy <br /> Becomes Scale.
            </h1>

            <p className="mt-3 sm:mt-6 text-gray-300 max-w-md text-sm sm:text-base leading-relaxed">
              Brainixt is a global strategy-led technology and growth consulting firm partnering 
              with ambitious organizations to architect scalable digital ecosystems, accelerate 
              market expansion, and deliver measurable enterprise impact.
            </p>

            <p className="mt-3 text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
              We operate at the intersection of business strategy, technology architecture, 
              and performance-driven growth.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-8 items-center md:items-start">
              <Link
                to="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-400 transition text-center w-full sm:w-auto max-w-[300px]"
              >
                Discuss Your Growth Strategy →
              </Link>

              <Link
                to="/technology"
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-center w-full sm:w-auto max-w-[300px]"
              >
                Explore Our Technology
              </Link>
            </div>
          </div>

          <ul className="mt-6 sm:mt-8 text-gray-400 text-sm space-y-2">
            <li>• Strategy → Execution alignment</li>
            <li>• Scalable system architecture</li>
            <li>• Growth-focused delivery</li>
          </ul>

          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <span className="px-3 py-1 border border-gray-600 rounded-full">
              Strategy
            </span>

            <span>→</span>

            <span className="px-3 py-1 border border-gray-600 rounded-full">
              Architecture
            </span>

            <span>→</span>

            <span className="px-3 py-1 border border-gray-600 rounded-full">
              Growth
            </span>

            <span>→</span>

            <span className="px-3 py-1 bg-white text-black rounded-full font-medium">
              Scale
            </span>
          </div>

        </div>

        {/* CENTER CARDS */}
        <div className="hidden md:flex flex-col gap-6">

          {/* CARD 1 */}
          <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
              className="w-full h-full object-cover block"
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-gray-300">INSIGHT</p>
              <Link to="/digitalecosystem">
                <h2 className="text-sm sm:text-lg font-semibold">
                  Building scalable digital ecosystems →
                </h2>
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              className="w-full h-full object-cover block"
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-gray-300">CASE STUDY</p>
              <Link to="/growth-case-study">
                <h2 className="text-sm sm:text-lg font-semibold hover:text-indigo-400 transition cursor-pointer">
                  Driving enterprise growth →
                </h2>
              </Link>
            </div>
          </div>

        </div>

        {/* RIGHT BIG CARD */}
        <div className="hidden lg:block relative rounded-xl overflow-hidden h-[220px] sm:h-[320px] lg:h-full">

          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
            className="w-full h-full object-cover block"
            alt=""
          />

          <div className="absolute inset-0 bg-black/40 p-4 sm:p-6 flex flex-col justify-between gap-4">

            <div>
              <p className="text-xs sm:text-sm text-gray-300">FEATURED</p>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 leading-snug">
                How Brainixt helps organizations scale with precision, speed, and impact
              </h2>
            </div>

            <Link to="/organize">
              <button className="bg-white text-black px-4 py-2 rounded-md w-fit">
                View Case Study →
              </button>
            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">

        {/* CARD 3 */}
        <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-full object-cover block"
            alt=""
          />
          <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs text-gray-300">INSIGHT</p>
            <Link to="/leadership">
              <h2 className="text-sm sm:text-lg font-semibold">
                Scaling leadership in modern enterprises
              </h2>
            </Link>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden">
          <img
            src={Blog}
            className="w-full h-full object-cover block"
            alt=""
          />
          <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xs text-gray-300">BLOG</p>
            <Link to="/high">
              <h2 className="text-sm sm:text-lg font-semibold">
                High-performance growth systems →
              </h2>
            </Link>
          </div>
        </div>

        {/* CTA BOX */}
        <div className="bg-[#095976] p-5 sm:p-6 rounded-xl flex flex-col justify-center">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Stay ahead with Brainixt insights and strategies.
          </h2>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              placeholder="Email address"
              className="flex-1 px-4 py-2 text-black outline-none rounded-md"
            />
            <Link
              to="/subscribe"
              className="bg-blue-500 px-4 py-2 flex items-center justify-center rounded-md"
            >
              →
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;