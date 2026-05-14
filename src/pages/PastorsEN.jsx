import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ ADD
import "./Pastors.css";
import seniorPastor from "../assets/pastors/senior-pastor.jpg";
import pastorJakob from "../assets/pastors/pastor-jakob.jpg";
import deaconHans from "../assets/pastors/deacon-hans.jpg";

export default function PastorsEN() {
  return (
    <>
      {/* ✅ SEO SECTION */}
      <Helmet>
        <title>Pastor Peter Schild | Gnadenkirche Frankfurt</title>
        <meta
          name="description"
          content="Pastor Peter Schild – Reformed Baptist Church in Frankfurt. Church leadership and ministry overview."
        />
        <meta
          name="keywords"
          content="Peter Schild, Pastor Frankfurt, Gnadenkirche Frankfurt, Reformed Baptist Church Germany"
        />

        {/* ✅ Structured Data */}
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

      {/* ================= CHURCH INTRO ================= */}
      <section className="leadership-intro-section">
        <div className="container">
          <div className="leadership-intro-box">
            <p>
              Our church began in the year <strong>2014</strong>, when Peter
              Schild was sent from ERB Wetzlar to Frankfurt am Main to work on
              establishing a Reformed Baptist church. Since then, we have
              experienced how God has graciously guided us step by step and
              granted us growth. Today, we are a community of people of all
              ages, many young families with children, and people from a wide
              variety of backgrounds and life stories. We are united by the
              desire to live as a church of Jesus Christ in love for God and for
              one another, and to proclaim the Gospel in word and deed — in
              Frankfurt and beyond.
            </p>

            <p className="intro-invite">
              You are warmly invited to get to know us and to follow Jesus
              Christ together with us.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="pastors-heading">Church Leadership</h2>

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
                Peter Schild is married and the father of five children. Coming
                from difficult life circumstances and far from God, he was led
                to faith in Jesus Christ as a teenager through a gospel tract.
                He studied Protestant theology and was sent as a missionary to
                Frankfurt in 2014 to establish a Reformed Baptist church. In
                addition to his pastoral ministry, he is the author of several
                books.
              </p>
            </div>
          </div>

	  {/* ================= PASTOR ================= */}
          <div className="pastor-card">
            <div className="pastor-photo">
              <img src={pastorJakob} alt="Pastor Jakob Klasse" />
              <div className="glow"></div>
            </div>

            <div className="pastor-content">
              <span className="label">Pastor</span>
              <h1>Jakob Klasse</h1>
              <p className="bio">
                Jakob Klasse is married and the father of two children. Having grown up
                in a Christian family in the Soviet Union, he experienced the persecution
                of Christians and later came to saving faith. Professionally, he is a
                foreign trade specialist and works in service assurance for a logistics
                company. Since 2026, he has served the church as a pastor.
              </p>
            </div>
          </div>

          {/* ================= DEACON ================= */}
          <div className="pastor-card deacon">
            <div className="pastor-photo">
              <img src={deaconHans} alt="Deacon Hans Ewert" />
              <div className="glow"></div>
            </div>
            <div className="pastor-content">
              <span className="label">Deacon</span>
              <h1>Hans Ewert</h1>
              <p className="bio">
                Hans Ewert is married and the father of three children. Raised
                in a Russian-German Baptist church, he came to faith in Jesus
                Christ as a teenager. He is a trained automotive master mechanic
                and works in technical customer support. Since 2023, he has been
                serving the church as a deacon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

