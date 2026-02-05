import { useTranslation } from "react-i18next";
import ContactDE from "./ContactDE";
import ContactEN from "./ContactEN";

export default function Contact() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <ContactEN />
    : <ContactDE />;
}

