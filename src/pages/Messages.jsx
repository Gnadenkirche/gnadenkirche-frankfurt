import { useTranslation } from "react-i18next";
import MessagesDE from "./MessagesDE";
import MessagesEN from "./MessagesEN";

export default function Messages() {
  const { i18n } = useTranslation();

  return i18n.language.startsWith("en")
    ? <MessagesEN />
    : <MessagesDE />;
}

