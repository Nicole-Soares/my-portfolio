import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./About.css";
import { translations } from "../../i18n/translations";
import image from "../../assets/profile/profile.jpg";

export default function About() {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // se anima una sola vez
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
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "animate" : ""}`}
    >
      <h1 className="about-title">
        {translations[language].about_title}
      </h1>

      <div className="about-info-section">
        <div className="about-left-section">
          <img src={image} alt="Profile" className="about-photo" />
        </div>

        <div className="about-right-section">
          <div className="about-description">
            <p className="about-text">
              {translations[language].about_text_p1}
            </p>
            <p className="about-text">
              {translations[language].about_text_p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
