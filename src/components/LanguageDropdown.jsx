import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import "./LanguageDropdown.css";

import deFlag from "../assets/flags/de.png";
import enFlag from "../assets/flags/en.png";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);

  const isGerman = i18n.language === "de";

  const toggleLang = () => {
    const nextLang = isGerman ? "en" : "de";

    i18n.changeLanguage(nextLang);
    localStorage.setItem("lang", nextLang);

    const path = location.pathname;

    /* 🔥 STATEMENT PAGE SWITCH */
    if (path === "/statement" && nextLang === "de") {
      navigate("/stellungnahme");
      return;
    }

    if (path === "/stellungnahme" && nextLang === "en") {
      navigate("/statement");
      return;
    }

    // ✅ Do nothing for /uber-uns
    // The same URL works for both German and English.
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
