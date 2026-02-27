// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ScrollToTop from "./components/ScrollToTop";
import LanguageDropdown from "./components/LanguageDropdown";

import Home from "./pages/Home";
import Belief from "./pages/Belief";
import ConfessionSlide from "./pages/ConfessionSlide";
import Pastors from "./pages/Pastors";
import Media from "./pages/Media";
import MediaVideos from "./pages/MediaVideos";
import MediaBooks from "./pages/MediaBooks";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";

import "./App.css";

function App() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    setMediaOpen(false);
    setMobileMediaOpen(false);
  }, [location.pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileMediaOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <LanguageDropdown />

      {/* ================= HEADER ================= */}
      <header className="heartcry-header">
        <div className="header-container">

          {/* LEFT MENU */}
          <nav className="menu-left desktop-nav">
            <NavLink to="/" end className="menu-item">{t("nav.home")}</NavLink>
            <NavLink to="/glaube" className="menu-item">{t("nav.belief")}</NavLink>
            <NavLink to="/uber-uns" className="menu-item">{t("nav.about")}</NavLink>
          </nav>

          {/* LOGO */}
          <NavLink to="/" className="logo-center" onClick={closeMobile}>
            <img
              src="/logo/gnadenkirche-logo-white.png"
              alt="Gnadenkirche Frankfurt"
              className="logo-image"
            />
          </NavLink>

          {/* RIGHT MENU */}
          <nav className="menu-right desktop-nav">

            {/* MEDIA (DESKTOP – UNCHANGED) */}
            <div className="menu-item media-dropdown">
              <span
                className="media-label"
                onMouseEnter={() => setMediaOpen(true)}
                onClick={() => setMediaOpen(o => !o)}
              >
                {t("nav.media")}
              </span>

              {mediaOpen && (
                <div
                  className="media-dropdown-menu"
                  onMouseEnter={() => setMediaOpen(true)}
                  onMouseLeave={() => setMediaOpen(false)}
                >
                  <NavLink to="/media/videos" className="dropdown-link">
                    {t("media.videos")}
                  </NavLink>
                  <NavLink to="/media/books" className="dropdown-link">
                    {t("media.books")}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/spenden" className="menu-item">{t("nav.donate")}</NavLink>
            <NavLink to="/kontakt" className="menu-item">{t("nav.contact")}</NavLink>
          </nav>

          {/* HAMBURGER */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {mobileOpen && <div className="mobile-backdrop" onClick={closeMobile} />}

      {/* ================= MOBILE MENU ================= */}
      <nav className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMobile}>×</button>

        <NavLink to="/" onClick={closeMobile}>{t("nav.home")}</NavLink>
        <NavLink to="/glaube" onClick={closeMobile}>{t("nav.belief")}</NavLink>
        <NavLink to="/uber-uns" onClick={closeMobile}>{t("nav.about")}</NavLink>

        {/* ✅ MOBILE MEDIA DROPDOWN (ADDED, NOTHING REMOVED) */}
        <div className="mobile-media">
          <button
            className="mobile-media-title"
            onClick={() => setMobileMediaOpen(o => !o)}
            aria-expanded={mobileMediaOpen}
          >
            {t("nav.media")}
            <span className={`media-arrow ${mobileMediaOpen ? "open" : ""}`}>▾</span>
          </button>

          {mobileMediaOpen && (
            <div className="mobile-media-dropdown">
              <NavLink to="/media/videos" onClick={closeMobile}>
                {t("media.videos")}
              </NavLink>
              <NavLink to="/media/books" onClick={closeMobile}>
                {t("media.books")}
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/spenden" onClick={closeMobile}>{t("nav.donate")}</NavLink>
        <NavLink to="/kontakt" onClick={closeMobile}>{t("nav.contact")}</NavLink>
      </nav>

      {/* ================= MAIN ================= */}
      <main key={location.pathname} className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glaube" element={<Belief />} />
          <Route path="/bekenntnis/:chapterId/:pointId" element={<ConfessionSlide />} />
          <Route path="/uber-uns" element={<Pastors />} />

          <Route path="/media" element={<Media />}>
            <Route index element={<MediaVideos />} />
            <Route path="videos" element={<MediaVideos />} />
            <Route path="books" element={<MediaBooks />} />
          </Route>

          <Route path="/spenden" element={<Donations />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>

      {/* ================= RELATED CHURCHES ================= */}
      <section className="related-churches">
        <div className="related-inner">
          <div className="related-heading">
            <span className="related-line" />
            <span className="related-title">{t("related.title")}</span>
            <span className="related-line" />
          </div>

          <div className="related-list">
            <a href="https://www.erb-basel.ch/" target="_blank" rel="noreferrer">ERB Basel</a>
            <a href="https://ebc-waiblingen.de/" target="_blank" rel="noreferrer">EBC Waiblingen</a>
            <a href="https://rbc-ds.de/" target="_blank" rel="noreferrer">RBC Donaueschingen</a>
            <a href="https://www.bibelgemeinde-neustadt.com/" target="_blank" rel="noreferrer">Bibelgemeinde Neustadt</a>
            <a href="https://voh-missionswerk.de/start/gottesdienst/" target="_blank" rel="noreferrer">RBG Reichshof</a>
            <a href="https://www.erb-wetzlar.de/" target="_blank" rel="noreferrer">ERB Wetzlar</a>
          </div>
        </div>
      </section>

      {/* ================= LOGO DIVIDER ================= */}
      <section className="logo-divider">
        <NavLink to="/" aria-label="Zur Startseite">
          <img
            src="/logo/gnadenkirche-logo-blue.png"
            alt="Gnadenkirche Frankfurt"
            className="logo-divider-image"
          />
        </NavLink>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="clean-footer">
        <div className="footer-inner">
          <Link to="/" className="church-name church-name-link">
            {t("church.name")}
          </Link>

          <nav className="footer-nav">
            <Link to="/glaube">{t("nav.belief")}</Link>
            <Link to="/uber-uns">{t("nav.about")}</Link>
            <Link to="/media/videos">{t("nav.media")}</Link>
            <Link to="/spenden">{t("nav.donate")}</Link>
            <Link to="/kontakt">{t("nav.contact")}</Link>
          </nav>

          <div className="copyright">
            © {new Date().getFullYear()} {t("church.name")}
            <span className="copyright-sep"> | </span>
            <Link to="/impressum">{t("footer.impressum")}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

