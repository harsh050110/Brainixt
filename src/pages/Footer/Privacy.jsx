export default function Privacy() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: 05 April 2026</p>
        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          Brainixt respects your privacy and is committed to protecting the personal information you provide when using our website.
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
      "This information is typically collected when you submit a contact form, request a consultation, or communicate with our team.",
      "Non-personal information such as IP address, browser type, device info, pages visited, time on site, and navigation behavior may also be collected automatically.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Brainixt may use the information collected for the following purposes:",
      [
        "Responding to inquiries or consultation requests",
        "Providing information about our consulting services",
        "Improving website functionality and user experience",
        "Analyzing website traffic and visitor behavior",
        "Enhancing marketing and communication efforts",
      ],
      "We only use personal information for legitimate business purposes."
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Brainixt may use cookies and similar technologies to enhance the browsing experience and analyze website usage.",
      [
        "Improve website performance",
        "Understand visitor behavior",
        "Optimize website content and navigation",
      ],
      "For more information, please review our Cookie Policy."
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "Brainixt does not sell, rent, or trade personal information to third parties.",
      "We may share information with trusted third-party service providers who support our operations:",
      [
        "Website hosting providers",
        "Analytics platforms",
        "Communication tools",
      ],
      "These providers are required to maintain confidentiality and security of your information."
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "Brainixt takes reasonable measures to protect personal information from unauthorized access, disclosure, or misuse.",
      "While we strive to safeguard your data, no method of internet transmission or electronic storage is completely secure.",
      "Users share information at their own discretion."
    ],
  },
  {
    title: "6. Third-Party Websites",
    content: [
      "Our website may contain links to external websites not operated by Brainixt.",
      "We are not responsible for the privacy practices or policies of third-party websites.",
      "Users are encouraged to review the privacy policies of those websites when visiting them."
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      "Brainixt retains personal information only as long as necessary to fulfill the purposes described, unless a longer retention period is required by law."
    ],
  },
  {
    title: "8. Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal data, including:",
      [
        "Requesting access to your personal information",
        "Requesting correction of inaccurate data",
        "Requesting deletion of personal information",
        "Requesting limitation of data processing",
      ],
      "To exercise these rights, please contact us using the information provided below."
    ],
  },
  {
    title: "9. Updates to This Policy",
    content: [
      "Brainixt may update this Privacy Policy periodically to reflect changes in legal requirements, technology, or business practices.",
      "Updates will be published on this page with a revised 'Last Updated' date."
    ],
  },
];