import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Coursework from "./components/Coursework";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />       
      <Coursework />      
      <AboutMe />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
