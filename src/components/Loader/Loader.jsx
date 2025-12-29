import { useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Loader.css";

export default function Loader() {
  const { language } = useLanguage();

  // Bloquea el scroll mientras el loader está visible
  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <div className="loader-overlay" aria-busy="true" aria-live="polite">
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
    </div>
  );
}
