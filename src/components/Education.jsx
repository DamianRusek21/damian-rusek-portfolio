export default function Education() {
  const education = [
    {
      school: "Kean University",
      degree: "B.S. in Data Science",
      duration: "September 2023 – May 2027",
      achievements: [
        "Dean's List: Fall 2024, Spring 2024, Spring 2025",
        "GPA: 3.6"
      ],
    },
    // You can add more entries here in the future if needed
  ];

  return (
    <section className="py-20 bg-gray-50" id="education">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <h3 className="text-2xl font-semibold">{edu.school}</h3>
            <p className="text-gray-600 italic">{edu.degree} | {edu.duration}</p>
            <ul className="mt-2 list-disc list-inside text-black-700 space-y-1">
              {edu.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
