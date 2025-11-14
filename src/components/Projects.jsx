export default function Projects() {
  const projects = [
    {
      title: "Fighting Fit — MMA Fight Analysis (In Progress)",
      technologies: "Python • MySQL • Tableau • Pandas",
      description: [
        "Built an end-to-end analytics pipeline to explore predictors of UFC fight outcomes using two Kaggle datasets (6,500+ fights).",
        "Cleaned and standardized the raw data in Python (pandas): converted height/reach units, normalized betting odds, handled missing values, and engineered features (height_diff, reach_diff, age_diff, takedown metrics).",
        "Designed a MySQL relational database and loaded the cleaned dataset using a custom ETL script, enabling fast SQL queries and structured analysis.",
        "Created analytical calculations to evaluate physical advantages, odds accuracy, grappling effectiveness, and age gaps.",
        "Built multiple Tableau visualizations (kept as separate sheets for clarity): physical advantage heatmap, odds vs outcomes, takedown activity, age-gap analysis, and fighter comparison panel.",
        "Transformed insights into clear visuals showing trends such as reach advantage predicting higher win rates and betting markets undervaluing grappling-heavy fighters.",
        "Published dashboards to Tableau Public and documented the full workflow on GitHub.",
        "Demonstrated internship-ready skills across data cleaning, SQL modeling, feature engineering, exploratory analysis, and communication of insights."
      ],
      link: "https://github.com/DamianRusek21/FightingFit"
    },
    {
      title: "NYC Subway Delay Prediction & Analysis",
      technologies: "Python • Pandas • TensorFlow • Tableau • SQL",
      description: [
        "Developed a predictive analytics pipeline to forecast NYC subway delays by MTA line using historical GTFS-RT data, weather, and public sentiment from Twitter.",
        "Engineered time-based features (rush hour, day of week, holidays), weather variables, and tweet sentiment embeddings to capture multi-modal signals impacting delays.",
        "Built multiple models: baseline XGBoost classifier, LSTM for time-series forecasting, and a hybrid model combining LSTM with BERT tweet embeddings for advanced prediction.",
        "Conducted rigorous evaluation with ROC-AUC, F1, and backtesting to validate model performance, including feature importance analysis with SHAP to quantify impact of weather, tweets, and temporal trends.",
        "Created a comprehensive Tableau dashboard visualizing predicted delay probabilities, delay hotspots, weather correlations, and social sentiment trends, enabling actionable insights for riders and transit planning.",
        "Demonstrated strong skills in data cleaning, feature engineering, deep learning, NLP, model evaluation, and interactive visualization—showcasing readiness for data science internship roles."
      ],
      link: "https://github.com/DamianRusek21/NYC-Subway-Delay-Prediction-Analysis"
    },
    {
      title: "Automated Market Sentiment Scoring Tool",
      technologies: "Python • yfinance • Data Visualization",
      description: [
        "Developed a Python script that analyzes market sentiment using financial proxies (SPY, VIX, Gold Futures, and JNK).",
        "Pulled real-time financial data using Yahoo Finance after CNN’s sentiment API became unavailable.",
        "Built an indicator-scoring system that normalizes each metric and produces a composite sentiment score.",
        "Generated a fully automated daily market report that includes sentiment classification (Fear → Greed).",
        "Created a clean, professional bar-chart visualization for quick insight into individual indicator performance."
      ],
      link: "https://github.com/DamianRusek21/Automated-Market-Sentiment-Scoring-Tool"
    },
    {
      title: "Stock Trading Backtest",
      technologies: "Python • AI-assisted backtesting • Excel",
      description: [
        "Leveraged AI-assisted Python coding to backtest stock trading strategies.",
        "Tested two MACD parameter sets and one KDJ setup across 15 stocks to evaluate profitability.",
        "Combined MACD and KDJ signals into a composite strategy to filter noise and improve trade reliability.",
        "Automated backtesting and exported results into Excel tables for verification, comparison, and insights."
      ],
      link: "https://github.com/DamianRusek21/stock-trading-backtest",
    },
    {
      title: "Student Grade Calculator",
      technologies: "Python • SQL • R • Excel",
      description: [
        "Implemented a Java application to calculate student grades using SQL for data storage.",
        "Performed statistical analysis and created visualizations in R.",
        "Consolidated results into Excel PivotTables and charts for reporting and trend analysis."
      ],
      link: "https://github.com/DamianRusek21/Student-Grade-Calculator",
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
            {proj.technologies && (
              <p className="font-semibold mb-2">Technologies: {proj.technologies}</p>
            )}
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
