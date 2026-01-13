import Projects from "../components/Projects";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Services />

      {/* 👇 PROJECTS SECTION */}
      <Projects />

      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
