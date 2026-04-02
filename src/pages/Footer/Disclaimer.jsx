export default function Disclaimer() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Disclaimer
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: 05 April 2026</p>
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
      "The content on this website, including articles, insights, case studies, and other materials, is intended for informational purposes only.",
      "Nothing on this website should be interpreted as professional consulting, financial, legal, or business advice.",
      "Any consulting relationship with Brainixt will be governed by a separate written agreement outlining the scope of services, responsibilities, and terms of engagement.",
      "Visitors are encouraged to seek appropriate professional advice before making business, financial, or strategic decisions."
    ],
  },
  {
    title: "2. No Guarantees of Results",
    content: [
      "Case studies, examples, or insights presented on this website are intended to illustrate potential approaches or past experiences.",
      "They do not guarantee specific outcomes or results for any organization.",
      "Business outcomes depend on a variety of factors, including market conditions, operational decisions, and external circumstances beyond the control of Brainixt."
    ],
  },
  {
    title: "3. External Links Disclaimer",
    content: [
      "The Brainixt website may contain links to third-party websites or external resources.",
      "These links are provided for informational convenience only. Brainixt does not control or endorse the content, policies, or practices of third-party websites and assumes no responsibility for their content or activities.",
      "Users access third-party websites at their own risk."
    ],
  },
  {
    title: "4. Website Availability",
    content: [
      "While Brainixt strives to ensure the website operates smoothly, we do not guarantee uninterrupted access to the website.",
      "Brainixt shall not be held responsible for any temporary unavailability of the website due to technical issues, maintenance, or circumstances beyond our control."
    ],
  },
  {
    title: "5. Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Brainixt shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:",
      [
        "Use of this website",
        "Reliance on information provided on the website",
        "Errors or omissions in website content",
        "Temporary interruption or unavailability of the website"
      ],
      "Use of the website is at your own discretion and risk."
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "All content on the Brainixt website, including text, graphics, brand assets, and insights, is the intellectual property of Brainixt unless otherwise stated.",
      "Unauthorized use, reproduction, or distribution of this content is prohibited without prior written permission."
    ],
  },
  {
    title: "7. Changes to This Disclaimer",
    content: [
      "Brainixt reserves the right to modify or update this Disclaimer at any time without prior notice.",
      "Changes will be effective immediately upon publication on this page."
    ],
  },
  {
    title: "8. Contact Information",
    content: [
      "If you have any questions regarding this Disclaimer, please contact:",
      "Brainixt",
      "Email: contact@brainixt.com",
      "Website: www.brainixt.com"
    ],
  },
];