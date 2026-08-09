import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import ProblemSolving from "./sections/ProblemSolving";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <a className="sr-only focus:not-sr-only skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" className="relative">
        <Hero />
        <ProblemSolving />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
