import { useTranslation } from "react-i18next";
import DonationsDE from "./DonationsDE";
import DonationsEN from "./DonationsEN";

export default function Donations() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <DonationsEN />
    : <DonationsDE />;
}

