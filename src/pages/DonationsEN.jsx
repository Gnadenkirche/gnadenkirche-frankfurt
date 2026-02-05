import React, { useState } from "react";
import "./Donations.css";
import bankQr from "../assets/qr/bank-sepa-qr.png"; // ✅ QR import

export default function DonationsEN() {
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
      alert("For custom amounts, please use bank transfer.");
      return;
    }

    window.location.href = link;
  };

  const copyBankDetails = () => {
    const text = [
      "Account holder: Reformed Baptist Church Frankfurt",
      "IBAN: DE03 5105 0015 0997 0234 45",
      "BIC: NASSDE55XXX",
      "Reference: Donation",
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      alert("Bank details copied!");
    });
  };

  return (
    <div className="donations-page donations-page-en">
      <div className="donations-inner">
        <main className="donations-main">
          <section className="donations-card">
            <h1>Support Our Ministry</h1>

            <p className="donations-intro">
              Your donation helps us to serve the church of Jesus Christ,
              to proclaim the Gospel to the world, and to care for those in need.
              <br /><br />
              We are deeply thankful for every gift and pray
              that God will richly reward you for your generosity.
            </p>

            {/* ================= STRIPE ================= */}
            <form onSubmit={handleSubmit} className="donations-form">
              <label className="field-label">Select Amount</label>

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
                  placeholder="Custom amount"
                />
              </div>

              <button type="submit" className="primary-btn">
                Donate now – €{amount}
              </button>

              <p className="secure-text">
                Secure & encrypted via Stripe.
              </p>
            </form>

            <div className="divider" />

            {/* ================= BANK TRANSFER ================= */}
            <div className="other-ways">
              <h2>Bank Transfer</h2>

              <p className="small-text">
                You can also donate directly using the following bank details:
              </p>

              <div className="bank-box">
                <div className="bank-row">
                  <span>Account holder</span>
                  <strong>Reformed Baptist Church Frankfurt</strong>
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
                  <span>Reference</span>
                  <strong>Donation</strong>
                </div>

                {/* ✅ QR CODE */}
                <div className="bank-qr">
                  <img
                    src={bankQr}
                    alt="QR code for bank transfer"
                  />
                  <p className="qr-hint">
                    Scan with your banking app
                  </p>
                </div>
              </div>

              <button className="secondary-btn" onClick={copyBankDetails}>
                Copy bank details
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

