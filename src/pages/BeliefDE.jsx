import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confessionChapters } from "../data/confessionChapters";
import "./BeliefDE.css";

// ✅ IMPORT SIGNATURE IMAGE
import spurgeonSignature from "../assets/images/spurgeon_signature_transparent_black.png";

export default function Belief() {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <section className="belief-grid-section">
      {/* ================= HEADING ================= */}
      <h1 className="belief-heading">Unser Bekenntnis</h1>

      {/* ================= INTRO ================= */}
      <div className="belief-intro">
        <p className="belief-intro-text">
          Unser Glaubensbekenntnis wurde im Jahre{" "}
          <strong>1689</strong> von mehr als{" "}
          <strong>100 Baptistengemeinden</strong> herausgegeben.
          Der weltbekannte Baptistenpastor{" "}
          <a
            href="https://de.wikipedia.org/wiki/Charles_Haddon_Spurgeon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            <strong>Charles Haddon Spurgeon</strong>
          </a>{" "}
          <span className="belief-dates">(1834–1892)</span>{" "}
          schrieb über dieses Dokument:
        </p>

        {/* ================= QUOTE BOX ================= */}
        <blockquote className="belief-quote">
          „Dieses alte Schriftstück ist eine ausgezeichnete Zusammenfassung der
          Dinge, die von uns mit größter Gewissheit geglaubt werden. Es ist nicht
          als verbindliche Glaubensregel herausgegeben, durch die man gebunden
          werden soll, sondern als Mittel zur Erbauung in der Gerechtigkeit.
          Es ist eine vortreffliche, wenn auch nicht inspirierte, Darstellung
          der Lehre der Heiligen Schrift, an der alle Bekenntnisse zu messen sind.
          Wir halten fest an den demütigenden Wahrheiten von Gottes souveräner
          Gnade in der Errettung verlorener Sünder. Das Heil ist allein durch
          Christus und allein durch den Glauben.“

          {/* ================= SIGNATURE ================= */}
          <div className="spurgeon-signature">
            <img
              src={spurgeonSignature}
              alt="C. H. Spurgeon Signatur"
            />
          </div>
        </blockquote>
      </div>

      {/* ================= CONFESSION CHAPTERS ================= */}
      <div className="chapter-grid">
        {confessionChapters.map((chapter) => (
          <div key={chapter.chapter} className="chapter-wrapper">
            <div
              className="chapter-text-row"
              onClick={() => toggleChapter(chapter.chapter)}
            >
              <span className="chapter-arrow">
                {openChapter === chapter.chapter ? "▾" : "›"}
              </span>
              <span className="chapter-text">
                {chapter.chapter}. {chapter.title}
              </span>
            </div>

            <ul
              className={`chapter-points-below ${
                openChapter === chapter.chapter ? "open" : ""
              }`}
            >
              {chapter.points.map((point) => (
                <li
                  key={point.id}
                  onClick={() =>
                    navigate(`/bekenntnis/${chapter.chapter}/${point.id}`)
                  }
                >
                  {point.id}. {point.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

