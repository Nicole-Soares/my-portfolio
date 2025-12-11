import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useLanguage(){
    const context = useContext(LanguageContext);
    return context;
}