/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const LanguageContext = createContext("English");

export function LanguageProvider({children}){
    const [language, setLanguage] = useState("English");

    return(
        <LanguageContext.Provider value={{ language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}