export default function Coursework() {
  const courses = [
    "Foundation of Computer Science",
    "Computer Programming",
    "Data Structures",
    "Discrete Structures",
    "Computer Systems",
    "Computer Organization & Architecture",
    "Applied Statistics 1",
    "Big Data Computing",
    "Matrix & Linear Algebra"
  ];

  return (
    <section className="py-20 bg-gray-50" id="coursework">
      <h2 className="text-4xl font-bold text-center mb-12">Relevant Coursework</h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-center font-medium">{course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
