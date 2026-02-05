import { useTranslation } from "react-i18next";
import PastorsDE from "./PastorsDE";
import PastorsEN from "./PastorsEN";

export default function Pastors() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <PastorsEN />
    : <PastorsDE />;
}

