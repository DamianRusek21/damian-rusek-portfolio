export default function Experience() {
  const experiences = [
    {
      role: "DevOps Engineer",
      company: "Webbertech Technologies LLC",
      duration: "May 2025 - Present",
      description: [
        "Configured and monitored NGINX load balancing to collect and interpret performance metrics, improving server efficiency and reliability.",
        "Used Kubernetes (kubectl) to manage and analyze routing configurations and ConfigMaps, ensuring consistent data flow and stable cluster operations.",
        "Managed Nexus artifacts to maintain structured version control and reproducibility across deployment environments.",
      ],
    },
    {
      role: "Programming Analyst",
      company: "Webbertech Technologies LLC",
      duration: "March 2025 - Present",
      description: [
        "Applied deep understanding of computer systems, IT fundamentals, and data structures to analyze network data and troubleshoot technical issues.",
        "Leveraged knowledge of operating systems, networking, and system architecture to optimize code and maintain secure environments.",
        "Utilized forensics, SSL/VPN protocols, and structured data analysis to identify anomalies and strengthen system security.",
        "Monitored code changes, reviewed contributions, and documented workflow using GitHub to ensure effective cross-team collaboration.",
      ],
    },
    {
      role: "FC Associate I",
      company: "Amazon",
      duration: "December 2024 - Present",
      description: [
        "Ensured data accuracy and quality control by verifying item counts, conditions, and labels.",
        "Maintained a rate of 230+ packages/hour by optimizing packing processes and monitoring performance metrics.",
        "Reported inventory discrepancies and resolved equipment issues to support workflow efficiency.",
      ],
    },
    {
      role: "Barista",
      company: "Dunkin' Donuts",
      duration: "October 2022 - February 2023",
      description: [
        "Managed multiple orders under high-pressure conditions and provided excellent customer service.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-100 font-sans" id="experience">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 italic">{exp.company} | {exp.duration}</p>
            <ul className="mt-2 text-black list-disc list-inside space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
