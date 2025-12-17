import "./Footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";

export default function Footer() {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <button className="to-top-btn" onClick={handleToTop} aria-label="Go to top">
        <HiChevronDoubleUp />
      </button>

      <div className="footer-icons">
        <a
          className="footer-icon"
          href="https://github.com/Nicole-Soares"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          className="footer-icon"
          href="mailto:nicolesoares918@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Nicole Soares</p>
    </footer>
  );
}
