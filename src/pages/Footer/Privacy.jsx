export default function Privacy() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: [Insert Date]</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          Brainixt respects your privacy and is committed to protecting the personal information you provide when using our website.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10">

        {/* SECTION */}
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
            If you have questions regarding this Privacy Policy:
          </p>
          <p className="text-indigo-400 text-sm">contact@brainixt.com</p>
          <p className="text-gray-500 text-xs mt-2">www.brainixt.com</p>
        </div>

      </div>
    </div>
  );
}


/* DATA STRUCTURE */
const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Brainixt may collect certain information when you interact with our website.",
      "Personal Information may include:",
      [
        "Full Name",
        "Email Address",
        "Phone Number",
        "Company Name",
        "Industry or organization details",
        "Project or inquiry information",
      ],
      "This information is collected when you submit forms, request consultations, or communicate with us.",
      "We also collect non-personal data such as IP address, browser type, device info, and user behavior."
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      [
        "Respond to inquiries and consultation requests",
        "Provide service-related information",
        "Improve website experience",
        "Analyze traffic and behavior",
        "Enhance marketing efforts",
      ],
      "We only use personal information for legitimate business purposes."
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "We use cookies to improve performance, understand behavior, and optimize user experience.",
      [
        "Improve website performance",
        "Understand visitor behavior",
        "Optimize navigation",
      ],
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We do not sell or trade your data.",
      "We may share data with trusted providers such as:",
      [
        "Hosting providers",
        "Analytics tools",
        "Communication platforms",
      ],
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We take reasonable steps to protect your data, but no system is completely secure.",
      "Users share information at their own discretion.",
    ],
  },
  {
    title: "6. Third-Party Websites",
    content: [
      "We may link to external websites. We are not responsible for their privacy practices.",
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "We retain data only as long as necessary unless required by law.",
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      [
        "Access your data",
        "Correct inaccurate data",
        "Request deletion",
        "Restrict processing",
      ],
      "Contact us to exercise your rights.",
    ],
  },
  {
    title: "9. Updates to This Policy",
    content: [
      "We may update this policy periodically. Changes will be reflected with a new date.",
    ],
  },
];