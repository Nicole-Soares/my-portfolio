import "./Navbar.css";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

export default function Navbar(){
    return(
        <div className="navbar-container">
            <ul className="navbar-ul">
        <li>
          <FiHome className="navbar-icon" />
          <span>Home</span>
        </li>
        <li>
          <FiUser className="navbar-icon" />
          <span>About</span>
        </li>
        <li>
          <FiFolder className="navbar-icon" />
          <span>Projects</span>
        </li>
        <li>
          <FiMail className="navbar-icon" />
          <span>Contact</span>
        </li>
      </ul>
        </div>
    )
}