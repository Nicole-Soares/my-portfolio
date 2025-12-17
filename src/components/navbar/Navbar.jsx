import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Navbar.css";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiMail,
  FiTerminal,
} from "react-icons/fi";

export default function Navbar({ onScrollToSection }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar-container">
      <ul className="navbar-ul">
        <li>
          <button
            onClick={() => onScrollToSection("home")}
            className="nav-btn"
            aria-label={t.home ?? "Home"}
          >
            <FiHome className="navbar-icon" />
            <span>{t.home ?? "Home"}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => onScrollToSection("about")}
            className="nav-btn"
            aria-label={t.about ?? "About"}
          >
            <FiUser className="navbar-icon" />
            <span>{t.about ?? "About"}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => onScrollToSection("skills")}
            className="nav-btn"
            aria-label={t.skills ?? "Skills"}
          >
            <FiTerminal className="navbar-icon" />
            <span>{t.skills ?? "Skills"}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => onScrollToSection("project")}
            className="nav-btn"
            aria-label={t.projects ?? "Projects"}
          >
            <FiFolder className="navbar-icon" />
            <span>{t.projects ?? "Projects"}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => onScrollToSection("contact")}
            className="nav-btn"
            aria-label={t.contact ?? "Contact"}
          >
            <FiMail className="navbar-icon" />
            <span>{t.contact ?? "Contact"}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
