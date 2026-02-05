// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      nav: {
        home: "Startseite",
        belief: "Glaube",
        about: "Über uns",
        media: "Medien",
        donate: "Spenden",
        contact: "Kontakt"
      },

      media: {
        title: "Medien",
        videos: "Videos",
        books: "Bücher"
      },

      partners: {
        title: "UNSERE PARTNER"
      },

      related: {
        title: "VERBUNDENE GEMEINDEN"
      },

      footer: {
        impressum: "Impressum"
      },

      church: {
        name: "Gnadenkirche Frankfurt"
      },
      /* ✅ ADD THIS */
      confession: {
        overview: "Zur Übersicht",
        next: "Weiter",
        prev: "Zurück"
      }
    }
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        belief: "Beliefs",
        about: "About Us",
        media: "Media",
        donate: "Donate",
        contact: "Contact"
      },

      media: {
        title: "Media",
        videos: "Videos",
        books: "Books"
      },

      partners: {
        title: "OUR PARTNERS"
      },

      related: {
        title: "AFFILIATED CHURCHES"
      },

      footer: {
        impressum: "Legal Notice"
      },

      church: {
        name: "Grace Church Frankfurt"
      },
	    
      /* ✅ ADD THIS */
      confession: {
        overview: "Overview",
        next: "Next",
        prev: "Previous"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "de",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

