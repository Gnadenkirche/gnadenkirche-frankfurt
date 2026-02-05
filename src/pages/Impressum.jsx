import { useTranslation } from "react-i18next";
import ImpressumDE from "./ImpressumDE";
import ImpressumEN from "./ImpressumEN";

export default function Impressum() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <ImpressumEN />
    : <ImpressumDE />;
}

