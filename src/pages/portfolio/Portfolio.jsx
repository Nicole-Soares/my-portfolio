import "./Portfolio.css";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
export default function Portfolio() {
  return (
    <div className="portfolio-container">
        <section id="Home">
        <Home/>
        </section>
     <section id="About">
     <About />
     </section>
     
      
    </div>
  );
}
