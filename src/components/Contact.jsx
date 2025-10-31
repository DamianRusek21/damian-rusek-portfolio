export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p>
          Email:{" "}
          <a
            href="mailto:drusek20@gmail.com"
            className="text-blue-600 hover:underline"
          >
            drusek20@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/damian-rusek-3a04482a6/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/damian-rusek-3a04482a6/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/DamianRusek21"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/DamianRusek21
          </a>
        </p>
        <p>
          Phone Number:{" "}
          <a
            href="tel:+17323188722"
            className="text-blue-600 hover:underline"
          >
            (732)-318-8722
          </a>
        </p>
      </div>
    </section>
  );
}
