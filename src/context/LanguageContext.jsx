import React, { createContext, useContext, useState } from "react";

// Default translations (you can expand this object later)
const translations = {
  de: {
    glaube: "Glaube",
    ueberUns: "Über uns",
    predigten: "Predigten",
    spenden: "Spenden",
    kontakt: "Kontakt",
    unserePartner: "Unsere Partner",
    verbundeneGemeinden: "Verbundene Gemeinden",
    impressum: "Impressum",
    copyright: `© ${new Date().getFullYear()} Evangelisch-Reformierte Baptistengemeinde`,
  },
  en: {
    glaube: "Beliefs",
    ueberUns: "About us",
    predigten: "Sermons",
    spenden: "Donate",
    kontakt: "Contact",
    unserePartner: "Our Partners",
    verbundeneGemeinden: "Related Churches",
    impressum: "Legal Notice",
    copyright: `© ${new Date().getFullYear()} Evangelical-Reformed Baptist Church`,
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("de"); // default German

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
