export default function Projects() {
  const projects = [
    {
      title: "Student Grade Calculator",
      description: [
        "Implemented a Java application to calculate student grades using SQL for data storage.",
        "Performed statistical analysis and created visualizations in R.",
        "Consolidated results into Excel PivotTables and charts for reporting and trend analysis."
      ],
      link: "https://github.com/DamianRusek21/Student-Grade-Calculator",
    },
    {
      title: "Software Development Group Project",
      description: [
        "Leveraged AI to write Python code to backtest stock trading indicators.",
        "Tested two different MACD parameters and one KDJ parameter across 15 stocks to evaluate profitability.",
        "Combined MACD and KDJ indicators to analyze performance as a combined strategy.",
        "Extracted results into Excel tables for verification and comparison."
      ],
      link: "https://github.com/yourusername/software-development-group",
    },
    {
      title: "Fighting Fit — MMA Fight Analysis (In Progress)",
      description: [
        "Started the 'Fighting Fit' project to analyze MMA fight outcomes using data from Kaggle.",
        "Downloaded raw fight and fighter datasets and loaded them into MySQL Workbench to organize everything.",
        "Explored the data in Python (PyCharm + pandas) to check stats like fighter reach, height, age, and wins/losses.",
        "Cleaned the dataset in Python, handling missing values and calculating differences in reach, height, and age between fighters.",
        "Built predictive models in Python using RandomForestClassifier to see which factors influenced fight outcomes.",
        "Ran statistical tests and created charts in R to validate which variables (like reach and age) significantly affect wins.",
        "Built visual dashboards in Tableau to summarize trends and make insights interactive.",
        "Documenting the process and planning to share all scripts, cleaned data, and visualizations on GitHub and Tableau Public."
      ],
      link: "https://github.com/yourusername/fighting-fit"
    }
  ];

  return (
    <section className="py-20 max-w-5xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <ul className="list-disc list-inside mb-4">
              {proj.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={proj.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
