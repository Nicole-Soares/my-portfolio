import "./Portfolio.css";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Project from "../../components/Project/Project";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

//here we have our components with id because they are in the same page, we need id for scroll
export default function Portfolio() {

  return (
    <div className="portfolio-container">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="project">
        <Project/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}
