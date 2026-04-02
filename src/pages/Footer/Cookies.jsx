export default function Cookies() {
  return (
    <div className="bg-[#020617] text-white min-h-screen pt-28 px-6 md:px-16 pb-20">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-gray-400 text-sm">Last Updated: 05 April 2026</p>

        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
          This Cookie Policy explains how Brainixt uses cookies and similar technologies on our website.
          By continuing to browse or use our website, you agree to the use of cookies in accordance with this policy.
        </p>

        <p className="mt-4 text-gray-500 text-xs">
          This policy should be read together with our Privacy Policy and Terms of Use.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10">

        {sections.map((section, index) => (
          <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">

            <h2 className="text-lg font-semibold mb-4 text-indigo-400">
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
            If you have questions regarding this Cookie Policy:
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
      "Cookies are small text files that are stored on your device when you visit a website. They help websites function properly and provide information to website owners about how visitors interact with their site.",
      "Cookies allow websites to remember user preferences, improve performance, and enhance the overall browsing experience.",
    ],
  },
  {
    title: "2. How Brainixt Uses Cookies",
    content: [
      "Brainixt uses cookies to improve website functionality, analyze traffic, and enhance user experience.",
      "Cookies may be used for the following purposes:",
      [
        "Ensuring the website operates correctly",
        "Understanding how visitors interact with our website",
        "Improving website performance and usability",
        "Analyzing website traffic and visitor behavior",
        "Supporting marketing and communication activities",
      ],
      "These insights help us continuously improve our website and services.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "Essential Cookies: These cookies are necessary for the website to function properly. They enable core features such as navigation, page access, and security. Without these cookies, certain parts of the website may not function correctly.",

      "Performance and Analytics Cookies: These cookies help us understand how visitors interact with our website by collecting anonymous data such as:",
      [
        "Pages visited",
        "Time spent on the website",
        "Navigation patterns",
        "Website performance metrics",
      ],
      "This information helps us improve the website and user experience. Examples may include analytics services such as website traffic analysis tools.",

      "Functional Cookies: Functional cookies allow the website to remember user preferences and settings, improving the overall browsing experience. These may include language preferences or other customization features.",

      "Marketing Cookies: In some cases, cookies may be used to support marketing and communication activities by understanding user interactions with content and campaigns. These cookies help improve the relevance of marketing efforts.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "Our website may use services provided by third-party platforms such as analytics or communication tools. These services may place cookies on your device to collect information about website usage.",
      "Brainixt does not control how these third-party services use cookies. Users are encouraged to review the privacy policies of those providers.",
    ],
  },
  {
    title: "5. Managing Cookies",
    content: [
      "Most web browsers allow users to manage or disable cookies through browser settings.",
      "You may choose to:",
      [
        "Accept all cookies",
        "Block certain types of cookies",
        "Delete cookies stored on your device",
      ],
      "Please note that disabling cookies may affect the functionality and performance of the website.",
      "For instructions on managing cookies, refer to the help section of your web browser.",
    ],
  },
  {
    title: "6. Updates to This Policy",
    content: [
      "Brainixt may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or website functionality.",
      "Any updates will be published on this page with a revised 'Last Updated' date.",
    ],
  },
];