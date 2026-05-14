import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ ADD THIS
import "./Pastors.css";
import seniorPastor from "../assets/pastors/senior-pastor.jpg";
import pastorJakob from "../assets/pastors/pastor-jakob.jpg";
import deaconHans from "../assets/pastors/deacon-hans.jpg";

export default function PastorsDE() {
  return (
    <>
      {/* ✅ SEO SECTION */}
      <Helmet>
        <title>Pastor Peter Schild | Gnadenkirche Frankfurt</title>
        <meta
          name="description"
          content="Pastor Peter Schild – Reformierte Baptistengemeinde Gnadenkirche Frankfurt. Gemeindeleitung und Vorstellung."
        />
        <meta name="keywords" content="Peter Schild, Pastor Frankfurt, Gnadenkirche Frankfurt, Reformierte Baptistengemeinde" />

        {/* ✅ Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Peter Schild",
            jobTitle: "Pastor",
            worksFor: {
              "@type": "Organization",
              name: "Gnadenkirche Frankfurt",
              url: "https://gnadenkirche-frankfurt.de"
            }
          })}
        </script>
      </Helmet>
    <div className="pastors-page">

      {/* BACKGROUND ORBS */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* ================= GEMEINDE INTRO ================= */}
      <section className="leadership-intro-section">
        <div className="container">
          <div className="leadership-intro-box">

            <p>
              Unsere Gemeinde hat ihre Anfänge im Jahr <strong>2014</strong>, als Peter
              Schild von der ERB Wetzlar nach Frankfurt am Main ausgesandt wurde, um an
              der Gründung einer reformierten Baptistengemeinde zu arbeiten. Seitdem
              haben wir erlebt, wie Gott uns Schritt für Schritt gnädig geführt und
              uns Wachstum geschenkt hat. Heute sind wir eine Gemeinschaft aus Menschen
              aller Altersstufen, vielen jungen Familien mit Kindern und Menschen
              unterschiedlichster Herkunft und Lebensgeschichten. Uns verbindet der
              Wunsch, als Gemeinde Jesu Christi in Liebe zu Gott und zueinander zu leben
              und das Evangelium in Wort und Tat weiterzugeben – in Frankfurt und
              darüber hinaus.
            </p>

            <p className="intro-invite">
              Du bist herzlich eingeladen, uns kennenzulernen und mit uns
              gemeinsam Jesus Christus nachzufolgen.
            </p>

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Gemeindeleitung</h2>

	  {/* ================= PASTOR ================= */}
          <div className="pastor-card">
            <div className="pastor-photo jakob-photo">
              <img src={pastorJakob} alt="Pastor Jakob Klassen" />
              <div className="glow"></div>
            </div>

            <div className="pastor-content">
              <span className="label">Pastor</span>
              <h1>Jakob Klassen</h1>
              <p className="bio">
                Jakob Klassen ist verheiratet und Vater von zwei Kindern. Aufgewachsen
                in einer christlichen Familie in der Sowjetunion, erlebte er
                Christenverfolgung und fand später zum rettenden Glauben. Beruflich
                ist er Außenhandelskaufmann und in der Servicesicherung eines
                Logistikunternehmens tätig. Seit 2026 dient er als Pastor der Gemeinde.
              </p>
            </div>
          </div>

	  {/* ================= PASTOR ================= */}
          <div className="pastor-card">
            <div className="pastor-photo">
              <img src={seniorPastor} alt="Pastor Peter Schild" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Pastor</span>
              <h1>Peter Schild</h1>
              <p className="bio">
                Peter Schild ist verheiratet und Vater von fünf Kindern. Aus
                schwierigen Lebensumständen kommend und fern von Gott, wurde er
                als Teenager durch ein Traktat zum Glauben an Jesus Christus
                geführt. Er studierte Evangelische Theologie und wurde 2014 als
                Missionar nach Frankfurt ausgesandt, um eine reformierte
                Baptistengemeinde zu gründen. Neben seinem Dienst als Pastor ist
                er Autor mehrerer Bücher.
              </p>
            </div>
          </div>

          {/* ================= DEACON ================= */}
          <div className="pastor-card deacon">
            <div className="pastor-photo">
              <img src={deaconHans} alt="Diakon Hans Ewert" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Diakon</span>
              <h1>Hans Ewert</h1>
              <p className="bio">
                Hans Ewert ist verheiratet und Vater von drei Kindern. In einer
                russlanddeutschen Baptistengemeinde aufgewachsen, fand er als
                Teenager zum Glauben an Jesus Christus. Er ist ausgebildeter
                Kfz-Meister und arbeitet im technischen Kundensupport. Seit 2023
                dient er der Gemeinde als Diakon.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
    </>
  );
}

