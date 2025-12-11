import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Loader.css";

export default function Loader() {

  const {language} = useLanguage();
  return (
    <>
      {/* Fondo 3D */}
      <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>

        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>

      {/* Loader centrado */}
      <div className="loader-container">
        <h1 className="loader-title">{translations[language].welcome}</h1>
        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>
      </div>
    </>
  );
}
