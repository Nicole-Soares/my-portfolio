import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Project.css";


export default function Project() {

  const { language } = useLanguage();

  return (
    <section id="project" className="project-section">
      <h1 className="project-title">{translations[language].project_title}</h1>

      <div className="project-image-container">
        {translations[language].listProject.map((p) => (
          <div className="project-image-description-container" key={p.id}>
            <img src={p.src} alt={p.name} />
            <h1>{p.name}</h1>
            <p>{p.description}</p>

            <a href={p.liveUrl} target="_blank" rel="noreferrer">
            {translations[language].project_live}
            </a>
            <a href={p.repoUrl} target="_blank" rel="noreferrer">
            {translations[language].project_more}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
