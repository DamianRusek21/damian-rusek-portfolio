export default function Skills() {
  const skills = {
    programming: ["Python", "R", "SQL", "Java"],
    dataTools: [
      "Microsoft Excel (PivotTables, formulas, data analysis)",
      "Tableau",
      "Spreadsheets",
      "Data Visualization",
    ],
    analyticsSkills: [
      "Data Analysis",
      "Statistical Reasoning",
      "Data Interpretation",
      "Data Collection & Reporting",
      "Data-driven Decision Making",
      "Reporting and Tracking"
    ],
    certifications: [
      {
        name: "Google Data Analytics Professional Certificate (v2)",
        date: "Issued: Oct 29, 2025",
        expiry: "No expiration",
        link: "https://www.credly.com/badges/11fb4728-05ac-461d-a75d-ed708cc45068/linked_in_profile"
      },
      {
        name: "Google Advanced Data Analytics Professional Certificate",
        date: "In Progress",
        link: "https://www.coursera.org/professional-certificates/advanced-data-analytics" // placeholder
      },
      {
        name: "CITI Program: Social-Behavioral-Educational (SBE) Comprehensive",
        date: "Oct 2025 - Oct 2028",
        id: "ID: 73131375",
        link: "https://www.citiprogram.org/verify/?w13e2de89-2fc4-4ba0-9bdb-2b9f245c076a-73131375"
      },
      {
        name: "CITI Program: Humanities Responsible Conduct of Research",
        date: "Oct 2025 - Oct 2028",
        id: "ID: 73131374",
        link: "https://www.citiprogram.org/verify/?w06c49493-6183-4d43-a61f-56bc532a7cda-73131374"
      }
    ],
    languages: ["English (Native)", "Polish (Fluent)"]
  };

  return (
    <section className="py-20 bg-white" id="skills">
      {/* Professional Summary */}
      <div className="max-w-5xl mx-auto mb-12">
        <p className="text-lg text-black-700" style={{ textIndent: "2rem", lineHeight: "2" }}>
          I’m Damian, a Data Scientist-in-training at Kean University. I work with Python, R, SQL, Java, Tableau, Excel, and DevOps tools like GitHub, Kubernetes, and NGINX.

          Currently, I’m a Programming Analyst and DevOps Intern at Webbertech Technologies, handling data, network security, and deployments. I’m also pursuing the Google Advanced Data Analytics Professional Certificate to level up my analytics skills.

          I’m looking for internships or entry-level roles in Data Science or Data Analytics where I can tackle challenging problems and make an impact.
        </p>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12">Skills & Certifications</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Programming Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.programming.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Data Tools & Visualization */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Data Tools & Visualization</h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.dataTools.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* Analytics & Data Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Analytics & Data Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            {skills.analyticsSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Certifications & Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications & Languages</h3>
          <ul className="list-disc list-inside space-y-2">
            {skills.certifications.map((cert, idx) => (
              <li key={idx}>
                <span className="font-bold">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
                      {cert.name}
                    </a>
                  ) : (
                    cert.name
                  )}
                </span>
                {cert.id && <span> | {cert.id}</span>}
                <span> | {cert.date}</span>
                {cert.expiry && <span> | {cert.expiry}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">Languages</h4>
            <ul className="list-disc list-inside space-y-1">
              {skills.languages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
