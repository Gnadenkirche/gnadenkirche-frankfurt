import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageDropdown.css";

import deFlag from "../assets/flags/de.png";
import enFlag from "../assets/flags/en.png";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const ref = useRef(null);

  const isGerman = i18n.language === "de";

  const toggleLang = () => {
    const nextLang = isGerman ? "en" : "de";
    i18n.changeLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-selected"
        onClick={toggleLang}
        aria-label="Switch language"
      >
        <img
          src={isGerman ? enFlag : deFlag}
          alt={isGerman ? "EN" : "DE"}
        />
        <span>{isGerman ? "EN" : "DE"}</span>
      </button>
    </div>
  );
}

