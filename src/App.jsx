import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <ContactFooter />
    </div>
  );
}

export default App;
