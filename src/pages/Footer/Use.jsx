export default function TermsOfUse() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Terms of Use
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: 05 April 2026</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          These Terms of Use govern your access to and use of the Brainixt website and its services.
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
            For any questions regarding these terms:
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
    title: "1. About Brainixt",
    content: [
      "Brainixt is a strategy-led technology and growth consulting firm providing strategic advisory, digital infrastructure development, and growth consulting services globally.",
      "Information on this website is for general informational purposes regarding Brainixt’s capabilities and services."
    ],
  },
  {
    title: "2. Acceptance of Terms",
    content: [
      "By accessing this website, you confirm that you:",
      [
        "Agree to these Terms of Use",
        "Will comply with applicable laws and regulations",
        "Will use the website responsibly and ethically",
      ],
      "Continued use after updates constitutes acceptance of revised terms."
    ],
  },
  {
    title: "3. Use of Website Content",
    content: [
      "All content on this website is the property of Brainixt unless stated otherwise.",
      [
        "You may view content for personal use",
        "Share links or insights with proper attribution",
      ],
      [
        "Do not copy or distribute content for commercial purposes",
        "Do not modify or create derivative works",
        "Do not use Brainixt branding without permission",
      ],
      "Unauthorized use may violate copyright laws."
    ],
  },
  {
    title: "4. Website Access and Use",
    content: [
      "You agree not to:",
      [
        "Attempt unauthorized access",
        "Interfere with website functionality or security",
        "Use automated tools to collect data",
        "Engage in activities that disrupt the website",
      ],
      "Access may be restricted or terminated for violations."
    ],
  },
  {
    title: "5. No Professional Advice",
    content: [
      "Content on this website is informational only and not professional advice.",
      "Formal consulting relationships are governed by separate written agreements."
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      "The website may contain links to third-party websites.",
      "Brainixt does not control or take responsibility for these external sites."
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      [
        "Use of the website",
        "Reliance on website information",
        "Website interruptions or technical issues",
      ],
      "Use is at your own risk; Brainixt is not liable for any damages."
    ],
  },
  {
    title: "8. Privacy",
    content: [
      "Your use of this website is subject to our Privacy Policy.",
      "Users are encouraged to review the Privacy Policy for details on handling personal information."
    ],
  },
  {
    title: "9. Intellectual Property Rights",
    content: [
      "All trademarks, logos, and branding are the property of Brainixt unless stated otherwise.",
      "Unauthorized use is strictly prohibited."
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms of Use are governed by the laws of India.",
      "Disputes fall under the jurisdiction of Indian courts."
    ],
  },
];