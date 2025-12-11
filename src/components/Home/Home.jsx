import { GoArrowDown } from "react-icons/go";
import "./Home.css";
import { translations } from "../../i18n/translations";
import { useLanguage } from "../../hooks/useLanguage";

export default function Home() {
  const { language } = useLanguage();

  const handleScrollToAbout = () => {
    // agarramos el documento con ese id
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      // si existe se desplaza
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-container">
      <h1 className="portfolio-name">
        {translations[language].greeting}
        <span className="word-feature"> {translations[language].name}</span>.
      </h1>

      <h2 className="portfolio-description">
        {" "}
        {translations[language].tagline}
      </h2>

      <button className="button-work" onClick={handleScrollToAbout}>
        {translations[language].cta_button}
        <GoArrowDown />
      </button>
    </div>
  );
}
