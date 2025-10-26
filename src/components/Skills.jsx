export default function Skills() {
  const skills = {
    programming: ["Java", "Python", "R", "SQL"],
    dataTools: [
      "Spreadsheets (PivotTables, formulas, data analysis)",
      "Tableau",
      "Microsoft Excel, PowerPoint, Word"
    ],
    devOps: ["Kali Linux", "Git/GitHub", "NGINX", "Kubernetes"],
    certifications: [
      "Google Data Analytics Professional Certificate (In Progress)",
      "CITI Program: Humanities Responsible Conduct of Research (Oct 2025 - Oct 2028, ID: 73131374)",
      "CITI Program: Social-Behavioral-Educational (SBE) Comprehensive (Oct 2025 - Oct 2028, ID: 73131375)"
    ],
    languages: ["English (Native)", "Polish (Fluent)"]
  };

  return (
    <section className="py-20 bg-white" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12">Skills & Certifications</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Programming Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <ul className="list-disc list-inside text-black-700 space-y-1">
            {skills.programming.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Data & Analysis Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Data & Analysis Tools</h3>
          <ul className="list-disc list-inside text-black-700 space-y-1">
            {skills.dataTools.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* DevOps & Other Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">DevOps & Other Tools</h3>
          <ul className="list-disc list-inside text-black-700 space-y-1">
            {skills.devOps.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* Certifications & Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications & Languages</h3>
          <ul className="list-disc list-inside text-black-700 space-y-1">
            {skills.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
            {skills.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
