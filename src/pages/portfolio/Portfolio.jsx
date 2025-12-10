import Navbar from "../../components/navbar/Navbar"
import "./Portfolio.css";

export default function Portfolio(){
    return(
        <div className="portfolio-container">
            <Navbar/>
            <h1 className="portfolio-name">Hello im Nicole.</h1>
            <h2 className="portfolio-description">Im a full stack web developer</h2>
        </div>
    )
}