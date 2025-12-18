import About from "../component/about/About";
import Achievements from "../component/achievement/Achievements";
import Contact from "../component/contact/Contact";
import Experience from "../component/experience/Experience";
import Hero from "../component/hero/Hero";
import Project from "../component/projects/Project";
import Skills from "../component/skill/Skills";

const Home = () => {
  return (
    <main className="pt-5">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
};

export default Home;
