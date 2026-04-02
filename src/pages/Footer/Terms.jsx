export default function Terms() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: [Insert Date]</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          These Terms & Conditions govern your use of the Brainixt website and services.
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
      "Brainixt is a strategy-led technology and growth consulting firm providing advisory, digital strategy, and business growth services globally.",
      "Information on this website is for general informational purposes regarding our services and capabilities."
    ],
  },
  {
    title: "2. Use of the Website",
    content: [
      "By using this website, you agree to use it lawfully and in accordance with these terms.",
      [
        "Do not violate applicable laws",
        "Do not attempt unauthorized access",
        "Do not disrupt website functionality",
        "Do not copy or distribute content without permission",
      ],
      "We reserve the right to restrict access if terms are violated."
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "All website content including text, graphics, logos, and design is owned by Brainixt.",
      [
        "Text and content",
        "Logos and brand assets",
        "Design and structure",
        "Articles and insights",
      ],
      "Unauthorized use is strictly prohibited."
    ],
  },
  {
    title: "4. Consulting Services",
    content: [
      "Content on this website does not constitute professional advice or a binding agreement.",
      "All engagements are governed by separate written agreements."
    ],
  },
  {
    title: "5. Information Accuracy",
    content: [
      "We strive for accuracy but do not guarantee completeness or reliability.",
      "Content may change at any time without notice."
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      "We may include links to third-party websites.",
      "We do not control or take responsibility for their content or policies."
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      [
        "Use or inability to use the website",
        "Reliance on website information",
        "Errors or interruptions",
      ],
      "Use of this website is at your own risk."
    ],
  },
  {
    title: "8. Privacy",
    content: [
      "Your use of this website is also governed by our Privacy Policy.",
      "We encourage users to review it."
    ],
  },
  {
    title: "9. Changes to These Terms",
    content: [
      "We may update these terms at any time.",
      "Continued use means acceptance of updated terms."
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These terms are governed by the laws of India.",
      "Disputes fall under the jurisdiction of Indian courts."
    ],
  },
];