import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <section className="bg-black text-white px-10 py-20 text-center">
      <h2 className="text-3xl font-semibold">
        If You Are Building for Long-Term Scale
      </h2>

      <p className="text-gray-400 mt-4">
        This is not vendor engagement. This is structured transformation.
      </p>
      <Link to="/contact" >
      <button className="mt-6 bg-gradient-to-r from-indigo-400 to-purple-500 px-8 py-3 rounded-full">
        Schedule a Strategic Consultation →
      </button>
      </Link>
    </section>
  );
};

export default CTA;