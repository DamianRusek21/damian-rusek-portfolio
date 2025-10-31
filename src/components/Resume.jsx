export default function Resume() {
  return (
    <section className="py-20 bg-gray-80" id="resume">
      <h2 className="text-4xl font-bold text-center mb-12">Resume & Cover Letter</h2>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-gray-800 leading-relaxed">
          You can view my resume and cover letter by clicking the buttons below.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href={process.env.PUBLIC_URL + "/cover_letter.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View Cover Letter
          </a>
        </div>
      </div>
    </section>
  );
}
