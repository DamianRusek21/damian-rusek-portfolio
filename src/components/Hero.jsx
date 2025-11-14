export default function Hero() {
  return (
    <section
      id="hero"
      className="text-center py-40 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/nyc.jpg'})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* Profile Photo */}
        <img
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="Damian Rusek"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-6 shadow-lg"
        />

        {/* Name */}
        <h1 className="text-5xl font-bold">Hi, I'm Damian Rusek</h1>

        {/* Tagline */}
        <p className="mt-4 text-xl">
          Aspiring Data Scientist | Portfolio Showcase
        </p>
      </div>
    </section>
  );
}
