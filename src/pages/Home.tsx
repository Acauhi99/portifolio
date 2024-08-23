import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <FooterBar />
    </div>
  );
};

export default Home;
