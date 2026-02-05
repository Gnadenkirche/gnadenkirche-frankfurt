import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { confessionChaptersEN } from "../data/confessionChaptersEN";
import "./BeliefEN.css";

// ✅ Spurgeon signature image
import spurgeonSignature from "../assets/images/spurgeon_signature_transparent_black.png";

export default function BeliefEN() {
  const navigate = useNavigate();
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  return (
    <section className="belief-grid-section">
      {/* ================= HEADING ================= */}
      <h1 className="belief-heading">Our Confession</h1>

      {/* ================= INTRO ================= */}
      <div className="belief-intro">
        <p className="belief-intro-text">
          Our statement of faith was issued in{" "}
          <strong>1689</strong> by more than{" "}
          <strong>100 Baptist congregations</strong>.
          The world-renowned Baptist pastor{" "}
          <a
            href="https://en.wikipedia.org/wiki/Charles_Spurgeon"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            <strong>Charles Haddon Spurgeon</strong>
          </a>{" "}
          <span className="belief-dates">(1834–1892)</span>{" "}
          wrote concerning this document:
        </p>

        {/* ================= QUOTE ================= */}
        <blockquote className="belief-quote">
          “This ancient document is the most excellent epitome of the things
          most surely believed among us. It is not issued as an authoritative
          rule or code of faith, whereby you may be fettered, but as a means of
          edification in righteousness. It is an excellent, though not inspired,
          expression of the teaching of those Holy Scriptures by which all
          confessions are to be measured. We hold to the humbling truths of
          God’s sovereign grace in the salvation of lost sinners. Salvation is
          through Christ alone and by faith alone.”

          {/* ================= SIGNATURE ================= */}
          <div className="spurgeon-signature">
            <img
              src={spurgeonSignature}
              alt="Charles Spurgeon Signature"
            />
          </div>
        </blockquote>
      </div>

      {/* ================= CONFESSION CHAPTERS ================= */}
      <div className="chapter-grid">
        {confessionChaptersEN.map((chapter) => (
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

