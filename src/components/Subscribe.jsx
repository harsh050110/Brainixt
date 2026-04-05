// SubscribeBox.jsx
import { useState } from "react";

export default function SubscribeBox() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Enter a valid email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      // Replace with your Formspree form URL
      const res = await fetch("https://formspree.io/f/xdapwqdq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setMessage("Subscribed successfully 🎉");
        setEmail("");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#095976] p-6 rounded-xl flex flex-col justify-center">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Stay ahead with Brainixt insights and strategies.
      </h2>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="flex-1 px-4 py-2 text-black outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 hover:bg-blue-600 transition"
        >
          {loading ? "..." : "→"}
        </button>
      </form>

      {message && (
        <p className="text-xs text-white/70 mt-2">{message}</p>
      )}
    </div>
  );
}