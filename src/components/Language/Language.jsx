import { useLanguage } from "../../hooks/useLanguage"
import "./Language.css";

export default function Language(){

const {language, setLanguage} = useLanguage();

const handleLanguage = () => {
    setLanguage(prevLang => prevLang === "English" ? "Spanish" : "English");
}
    return(
        <div className="language-container">
            <button onClick={handleLanguage} className="language-btn">{language === "English" ? "Es" : "En"}</button>
        </div>
    )
}