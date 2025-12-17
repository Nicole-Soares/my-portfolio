import { useLanguage } from "../../hooks/useLanguage";
import "../About/About.css";
import { translations } from "../../i18n/translations";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import expres from "../../assets/skills/expres.png";
import js from "../../assets/skills/js.png";
import java from "../../assets/skills/java.png";
import mongo from "../../assets/skills/mongo.png";
import node from "../../assets/skills/node.png";
import postgre from "../../assets/skills/postgre.png";
import react from "../../assets/skills/react.png";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); 
          }
        },
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);

  return (
    <section id="skills" ref={sectionRef} className={`skills-section ${visible ? "animate" : ""}`}>
      <h1 className="skills-title">{translations[language].about_technical_skills}</h1>
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
    </section>
  );
}
