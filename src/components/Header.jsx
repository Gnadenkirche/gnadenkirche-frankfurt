import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      style={{
        background: "transparent",
        color: "#f0e8ff",
        border: "1px solid #e8c0a0",
        borderRadius: "6px",
        padding: "6px 10px",
        fontSize: "0.95rem",
        cursor: "pointer",
        marginLeft: "1rem",
      }}
    >
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
