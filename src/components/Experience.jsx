export default function Experience() {
  const experiences = [
    {
      role: "Programming Analyst / DevOps Engineer",
      company: "Webbertech Technologies LLC",
      duration: "March 2025 - Present",
      description: [
        "Evaluated coursework from 100+ students across multiple programming courses, ensuring correctness and algorithmic soundness.",
        "Automated grading and workflow scripts to optimize efficiency across student submissions.",
        "Deployed and managed CI/CD pipelines using Docker, Jenkins, and NGINX.",
        "Configured and monitored Kubernetes clusters and Nexus artifacts to maintain reproducible environments.",
        "Documented technical processes in GitHub to improve collaboration and knowledge sharing.",
      ],
    },
    {
      role: "Software Development Group Member",
      company: "Multi-University Collaboration | Remote",
      duration: "October 2025 - Present",
      description: [
        "Collaborated on a data-driven software product using Agile project management.",
        "Contributed to data organization, testing, and reporting to improve design and usability.",
        "Enhanced team workflow and project tracking through structured documentation and version control.",
      ],
    },
    {
      role: "FC Associate I",
      company: "Amazon",
      duration: "December 2024 - Present",
      description: [
        "Maintained 230+ packages/hour while optimizing packing workflows.",
        "Investigated inventory discrepancies and assisted in troubleshooting technical issues.",
        "Ensured accuracy and efficiency in high-volume operations through data-driven monitoring.",
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
