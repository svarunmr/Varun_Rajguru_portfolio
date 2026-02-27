import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Global Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
