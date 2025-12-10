import { GoArrowDown } from "react-icons/go";
import "./Home.css";

export default function Home() {

    const handleScrollToAbout = () =>{
        // Obtenemos la referencia al elemento 'About' usando su ID
        const aboutSection = document.getElementById('About');
        
        if (aboutSection) {
            // Desplazamos la vista hasta ese elemento con un efecto suave
            aboutSection.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    }
    
  return (
    <div className="home-container">
      <h1 className="portfolio-name">
        Hello, I'm <span className="word-feature">Nicole</span>.
      </h1>

      <h2 className="portfolio-description">I'm a full stack web developer.</h2>

      <button 
                className="button-work" 
                onClick={handleScrollToAbout} 
            >
        View my work <GoArrowDown />
      </button>
    </div>
  );
}
