import { transformationSteps } from "../../data/content";

const Transformation = () => {
  return (
    <section className="bg-[#020617] px-10 py-24">
      
      {/* HEADER */}
      <div className="max-w-4xl mb-16">
        <h2 className="text-4xl font-semibold leading-tight text-white">
          The Brainixt Transformation Model™
        </h2>
        <p className="text-gray-400 mt-4">
          A structured, end-to-end framework designed to align strategy, execution, and measurable outcomes.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">
        
        {/* LINE */}
        <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-200" />

        <div className="grid md:grid-cols-5 gap-8 relative">
          {transformationSteps.map((step, i) => (
            
            <div
              key={i}
              className="group text-center relative"
            >
              
              {/* CIRCLE */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full border-2 border-white bg-white font-semibold z-10 relative transition-all duration-300 group-hover:bg-red-400 group-hover:text-white">
                {i + 1}
              </div>

              {/* CONTENT */}
              <div className="mt-6 p-4 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="font-semibold text-lg text-white">{step}</h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;