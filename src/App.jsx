import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolving from "./components/ProblemSolving";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Hero />
        <ProblemSolving />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </>
  );
}

export default App;
