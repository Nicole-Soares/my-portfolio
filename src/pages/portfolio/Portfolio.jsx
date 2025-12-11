import "./Portfolio.css";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";

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
    </div>
  );
}
