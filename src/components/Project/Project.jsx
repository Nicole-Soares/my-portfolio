import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Project.css";
import { useEffect, useRef, useState } from "react";

export default function Project() {
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
    <section
      id="project"
      ref={sectionRef}
      className={`project-section ${visible ? "animate" : ""}`}
    >
      <h1 className="project-title">{translations[language].project_title}</h1>

      <div className="project-image-container">
        {translations[language].listProject.map((p) => (
          <div className="project-image-description-container" key={p.id}>
            <img src={p.src} alt={p.name} />
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <a href={p.repoUrl} target="_blank" rel="noreferrer">
              {translations[language].project_more}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
