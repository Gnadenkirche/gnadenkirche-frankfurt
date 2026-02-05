// src/pages/ConfessionSlide.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { confessionChapters } from "../data/confessionChapters";
import { confessionChaptersEN } from "../data/confessionChaptersEN";
import "./ConfessionSlide.css";

export default function ConfessionSlide() {
  const { chapterId, pointId } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  // Choose data based on language
  const chapters =
    i18n.language.startsWith("en") ? confessionChaptersEN : confessionChapters;

  const chapter = chapters.find((c) => String(c.chapter) === String(chapterId));
  if (!chapter) return null;

  const index = chapter.points.findIndex((p) => String(p.id) === String(pointId));
  const point = chapter.points[index];
  if (!point) return null;

  return (
    <section className="slide-page">
      <div className="slide-container">
        <h1 className="slide-title">
          {point.id}. {point.title}
        </h1>

        <p className="slide-text">{point.text}</p>

        {/* Scripture References with Tooltip */}
        {point.references && point.references.length > 0 && (
          <ul className="slide-references">
            {point.references.map((refObj, i) => (
              <li key={refObj.ref || i} className="reference-item">
                <span className="ref-text">{refObj.ref}</span>
                {refObj.verse && (
                  <span className="tooltip">{refObj.verse}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Navigation Buttons */}
        <div className="slide-navigation">
          {/* Previous */}
          {index > 0 && (
            <button
              onClick={() =>
                navigate(
                  `/bekenntnis/${chapterId}/${chapter.points[index - 1].id}`
                )
              }
            >
              ← {t("confession.prev")}
            </button>
          )}

          {/* Back to Overview */}
          <button onClick={() => navigate("/glaube")} className="slide-back">
            {t("confession.overview")}
          </button>

          {/* Next */}
          {index < chapter.points.length - 1 && (
            <button
              onClick={() =>
                navigate(
                  `/bekenntnis/${chapterId}/${chapter.points[index + 1].id}`
                )
              }
            >
              {t("confession.next")} →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
