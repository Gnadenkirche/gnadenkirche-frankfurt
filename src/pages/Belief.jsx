import { useTranslation } from "react-i18next";
import BeliefDE from "./BeliefDE";
import BeliefEN from "./BeliefEN";

export default function Belief() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <BeliefEN />
    : <BeliefDE />;
}

