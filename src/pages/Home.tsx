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
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FooterBar />
    </div>
  );
};

export default Home;
