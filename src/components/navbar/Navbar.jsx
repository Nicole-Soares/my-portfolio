import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Navbar.css";
import { FiHome, FiUser, FiFolder, FiMail, FiTerminal } from "react-icons/fi";

export default function Navbar({ onScrollToSection }) {
  const { language } = useLanguage();

  return (
    <div className="navbar-container">
      <ul className="navbar-ul">

        <li>
          <button onClick={() => onScrollToSection("home")} className="nav-btn">
            <FiHome className="navbar-icon" />
            {translations[language].home}
          </button>
        </li>

        <li>
          <button onClick={() => onScrollToSection("about")} className="nav-btn">
            <FiUser className="navbar-icon" />
            {translations[language].about}
          </button>
        </li>

        <li>
          <button  onClick={() => onScrollToSection("skills")}className="nav-btn">
            <FiTerminal  className="navbar-icon" />
            {translations[language].skills}
          </button>
        </li>
        <li>
          <button onClick={()=> onScrollToSection("project")} className="nav-btn">
            <FiFolder className="navbar-icon" />
            {translations[language].projects}
          </button>
        </li>

        <li>
          <button className="nav-btn">
            <FiMail className="navbar-icon" />
            {translations[language].contact}
          </button>
        </li>

      </ul>
    </div>
  );
}
