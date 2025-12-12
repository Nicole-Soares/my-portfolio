import { useLanguage } from "../../hooks/useLanguage";
import "./About.css";
import { translations } from "../../i18n/translations";
import image from "../../assets/profile/profile.jpg";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h1 className="about-title">{translations[language].about_title}</h1>

      <div className="about-info-section">
        <div className="about-left-section">
          <img src={image} alt="Profile" className="about-photo" />
        </div>

        <div className="about-right-section">
          {/* Mini presentación */}
          <div className="about-description">
            <p className="about-text">{translations[language].about_text_p1}</p>
            <p className="about-text">{translations[language].about_text_p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
