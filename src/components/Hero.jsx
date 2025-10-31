export default function Hero() {
  return (
    <section
      className="text-center py-20 bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
      id="hero"
    >
      {/* Profile Photo */}
      <img
        src={process.env.PUBLIC_URL + '/profile.jpg'}  // Use PUBLIC_URL for GitHub Pages
        alt="Damian Rusek"
        className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-6 shadow-lg"
      />

      {/* Name */}
      <h1 className="text-5xl font-bold">Hi, I'm Damian Rusek</h1>

      {/* Tagline */}
      <p className="mt-4 text-xl">
        Aspiring Data Scientist | Portfolio Showcase
      </p>
    </section>
  );
}
