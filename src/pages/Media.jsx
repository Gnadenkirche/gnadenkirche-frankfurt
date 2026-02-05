import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Media.css";

export default function Media() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isBooks = location.pathname.includes("/media/books");
  const isVideos =
    location.pathname.includes("/media/videos") ||
    location.pathname === "/media";

  // Dynamic page title
  const pageTitle = isBooks
    ? t("media.books")
    : t("media.videos");

  // Show tabs ONLY on /media root
  const showTabs = location.pathname === "/media";

  return (
    <div
      className={`media-page ${
        i18n.language === "en" ? "media-page-en" : ""
      }`}
    >
      {/* HERO TITLE */}
      <div className="media-hero">
        <h1>{pageTitle}</h1>
      </div>

      {/* TABS (ONLY ON MEDIA ROOT) */}
      {showTabs && (
        <div className="media-tabs">
          <NavLink
            to="videos"
            className={({ isActive }) =>
              isActive ? "media-tab active" : "media-tab"
            }
          >
            {t("media.videos")}
          </NavLink>

          <NavLink
            to="books"
            className={({ isActive }) =>
              isActive ? "media-tab active" : "media-tab"
            }
          >
            {t("media.books")}
          </NavLink>
        </div>
      )}

      {/* CONTENT */}
      <div className="media-content">
        <Outlet />
      </div>
    </div>
  );
}

