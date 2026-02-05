import { useTranslation } from "react-i18next";
import HomeDE from "./HomeDE";
import HomeEN from "./HomeEN";

function Home() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <HomeEN />
    : <HomeDE />;
}

export default Home;

