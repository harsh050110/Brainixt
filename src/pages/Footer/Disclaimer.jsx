export default function Disclaimer() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Disclaimer
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: 10 April 2026</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          The information provided on the Brainixt website is for general informational purposes only.
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
            If you have any questions regarding this Disclaimer:
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
    title: "1. No Professional Advice",
    content: [
      "Content on this website is for informational purposes only.",
      "It should not be considered consulting, legal, financial, or business advice.",
      "All engagements are governed by separate written agreements.",
      "Users should seek professional advice before making decisions."
    ],
  },
  {
    title: "2. No Guarantees of Results",
    content: [
      "Case studies and insights are illustrative only.",
      "They do not guarantee outcomes or results.",
      "Results depend on multiple external and internal factors."
    ],
  },
  {
    title: "3. External Links Disclaimer",
    content: [
      "We may link to third-party websites.",
      "We do not control or endorse their content or policies.",
      "Users access third-party sites at their own risk."
    ],
  },
  {
    title: "4. Website Availability",
    content: [
      "We aim for smooth operation but do not guarantee uninterrupted access.",
      "We are not responsible for downtime due to technical issues or maintenance."
    ],
  },
  {
    title: "5. Limitation of Liability",
    content: [
      [
        "Use of this website",
        "Reliance on website information",
        "Errors or omissions",
        "Temporary unavailability",
      ],
      "Use of the website is at your own risk."
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "All content including text, graphics, and brand assets belong to Brainixt.",
      "Unauthorized use or distribution is prohibited."
    ],
  },
  {
    title: "7. Changes to This Disclaimer",
    content: [
      "We may update this Disclaimer at any time.",
      "Changes take effect immediately upon publication."
    ],
  },
];