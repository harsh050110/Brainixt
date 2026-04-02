export default function Cookies() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: [Insert Date]</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          This Cookie Policy explains how Brainixt uses cookies and similar technologies.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10">

        {sections.map((section, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">

            <h2 className="text-lg font-semibold mb-3 text-indigo-400">
              {section.title}
            </h2>

            {section.content.map((item, i) =>
              typeof item === "string" ? (
                <p key={i} className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {item}
                </p>
              ) : (
                <ul key={i} className="list-disc pl-5 space-y-2 text-gray-400 text-sm">
                  {item.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )
            )}

          </div>
        ))}

        {/* CONTACT BOX */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-400 text-sm mb-2">
            If you have questions about our Cookie Policy:
          </p>
          <p className="text-indigo-400 text-sm">contact@brainixt.com</p>
          <p className="text-gray-500 text-xs mt-2">www.brainixt.com</p>
        </div>

      </div>
    </div>
  );
}


/* DATA */
const sections = [
  {
    title: "1. What Are Cookies",
    content: [
      "Cookies are small text files stored on your device when you visit a website.",
      "They help websites function properly and improve user experience.",
      "Cookies allow websites to remember preferences and enhance performance."
    ],
  },
  {
    title: "2. How Brainixt Uses Cookies",
    content: [
      "We use cookies to improve functionality, analyze traffic, and enhance user experience.",
      [
        "Ensure proper website operation",
        "Understand user interactions",
        "Improve performance and usability",
        "Analyze traffic and behavior",
        "Support marketing efforts",
      ],
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "Essential Cookies: Required for core functionality and security.",
      "Performance & Analytics Cookies: Help track usage and improve experience.",
      "Functional Cookies: Store preferences like settings or language.",
      "Marketing Cookies: Help optimize marketing and communication efforts.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "We may use third-party services such as analytics tools.",
      "These providers may place cookies on your device.",
      "We do not control how third-party cookies are used."
    ],
  },
  {
    title: "5. Managing Cookies",
    content: [
      "You can manage cookies through your browser settings.",
      [
        "Accept all cookies",
        "Block certain cookies",
        "Delete stored cookies",
      ],
      "Disabling cookies may affect website performance."
    ],
  },
  {
    title: "6. Updates to This Policy",
    content: [
      "We may update this policy periodically.",
      "Changes will be reflected with a revised date."
    ],
  },
];