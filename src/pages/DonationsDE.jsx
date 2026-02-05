import React, { useState } from "react";
import "./Donations.css";

import bankQr from "../assets/qr/bank-sepa-qr.png";

const DonationsDE = () => {
  const [amount, setAmount] = useState(50);

  // ✅ Stripe payment links (TEST MODE)
  const stripeLinks = {
    25: "https://donate.stripe.com/9B6dR99tkb27bHz9JO5kk00",
    50: "https://donate.stripe.com/9B67sLaxo4DJ3b3f485kk01",
    100: "https://donate.stripe.com/3cI5kD8pg7PVcLD1di5kk02",
    200: "https://donate.stripe.com/bJe00jaxo5HN12Ve045kk03",
  };

  const presetAmounts = [25, 50, 100, 200];

  const handleSubmit = (e) => {
    e.preventDefault();

    const link = stripeLinks[amount];
    if (!link) {
      alert("Für individuelle Beträge nutze bitte die Banküberweisung.");
      return;
    }

    window.location.href = link;
  };

  const copyBankDetails = () => {
    const text = [
      "Kontoinhaber: Reformierte Baptistengemeinde Frankfurt",
      "IBAN: DE03510500150997023445",
      "BIC: NASSDE55XXX",
      "Verwendungszweck: Spende",
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      alert("Bankdaten kopiert!");
    });
  };

  return (
    <div className="donations-page">
      <div className="donations-inner">
        <main className="donations-main">
          <section className="donations-card">
            <h1>Unterstütze unseren Dienst</h1>

            <p className="donations-intro">
              Deine Spende hilft uns, der Gemeinde Jesu zu dienen,
              der Welt das Evangelium zu verkündigen und den Bedürftigen
              beizustehen.
              <br /><br />
              Wir danken herzlich für jede Spende und beten,
              dass Gott es reichlich vergelten möge.
            </p>

            {/* ================= STRIPE ================= */}
            <form onSubmit={handleSubmit} className="donations-form">
              <label className="field-label">Betrag wählen</label>

              <div className="amount-row">
                {presetAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${amount === value ? "active" : ""}`}
                    onClick={() => setAmount(value)}
                  >
                    €{value}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <span className="currency">€</span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) =>
                    setAmount(Math.max(1, Number(e.target.value)))
                  }
                  placeholder="Eigener Betrag"
                />
              </div>

              <button type="submit" className="primary-btn">
                Jetzt spenden – €{amount}
              </button>

              <p className="secure-text">
                Sicher & verschlüsselt über Stripe.
              </p>
            </form>

            <div className="divider" />

            {/* ================= BANK TRANSFER ================= */}
            <div className="other-ways">
              <h2>Banküberweisung</h2>

              <p className="small-text">
                Nutze folgende Bankdaten für eine direkte Spende:
              </p>

              <div className="bank-box">
                <div className="bank-row">
                  <span>Kontoinhaber</span>
                  <strong>Reformierte Baptistengemeinde Frankfurt</strong>
                </div>
                <div className="bank-row">
                  <span>IBAN</span>
                  <strong>DE03 5105 0015 0997 0234 45</strong>
                </div>
                <div className="bank-row">
                  <span>BIC</span>
                  <strong>NASSDE55XXX</strong>
                </div>
                <div className="bank-row">
                  <span>Verwendungszweck</span>
                  <strong>Spende</strong>
                </div>

                {/* ✅ QR CODE IMAGE */}
                <div className="bank-qr">
                  <img
                    src={bankQr}
                    alt="QR-Code für Banküberweisung"
                  />
                  <p className="qr-hint">
                    Mit Banking-App scannen
                  </p>
                </div>
              </div>

              <button className="secondary-btn" onClick={copyBankDetails}>
                Bankdaten kopieren
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonationsDE;

