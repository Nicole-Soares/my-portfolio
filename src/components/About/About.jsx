import { useLanguage } from "../../hooks/useLanguage";
import "./About.css";
import { translations } from "../../i18n/translations";
import image from "../../assets/profile/profile.jpg";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import expres from "../../assets/skills/expres.png";
import js from "../../assets/skills/js.png";
import java from "../../assets/skills/java.png";
import mongo from "../../assets/skills/mongo.png";
import node from "../../assets/skills/node.png";
import postgre from "../../assets/skills/postgre.png";
import react from "../../assets/skills/react.png";

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

          {/* Skills */}
          <div className="skills-circle">
            <div className="skill-card">
              <img src={html} />
              <span>HTML</span>
            </div>
            <div className="skill-card">
              <img src={css} />
              <span>CSS</span>
            </div>
            <div className="skill-card">
              <img src={js} />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <img src={react} />
              <span>React</span>
            </div>
            <div className="skill-card">
              <img src={node} />
              <span>Node.js</span>
            </div>
            <div className="skill-card">
              <img src={expres} />
              <span>Express.js</span>
            </div>
            <div className="skill-card">
              <img src={mongo} />
              <span>MongoDB</span>
            </div>
            <div className="skill-card">
              <img src={postgre} />
              <span>PostgreSQL</span>
            </div>
            <div className="skill-card">
              <img src={java} />
              <span>Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
