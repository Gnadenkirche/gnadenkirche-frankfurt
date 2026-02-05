import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function ContactDE() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formPayload = new FormData();
    formPayload.append("access_key", "0b825998-fc99-47e5-aab2-f0af9abc279d");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();
      if (data.success) setSubmitted(true);
      else alert("Fehler: " + data.message);
    } catch {
      alert("Es gab ein Problem. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <section className="contact-hero">
          <h1 className="contact-hero-title">Kontakt</h1>
        </section>

        <div className="success-message">
          <h2>Vielen Dank!</h2>
          <p>Wir haben deine Nachricht erhalten.</p>

          <Link to="/" className="coffee-btn" style={{ marginTop: "2rem" }}>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="contact-hero-title">Kontakt</h1>
        <p className="contact-hero-subtitle">
          Wir freuen uns auf deine Nachricht
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">

          {/* ADDRESS */}
          <div className="address-card">
            <h3>Komm vorbei!</h3>

            <div className="address-block">
              <p>
                <strong>Gnadenkirche Frankfurt</strong><br />
                Hohemarkstraße 75<br />
                61440 Oberursel
              </p>

              <p style={{ marginTop: "1rem" }}>
                <strong>Gottesdienst:</strong> Sonntag · 16:30 Uhr
              </p>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.87589956818!2d8.5753183!3d50.2070936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd101a25316c71%3A0xda28d3d96d7054eb!2sHohemarkstra%C3%9Fe%2075%2C%2061440%20Oberursel%20(Taunus)!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Dein Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Deine E-Mail"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Deine Nachricht"
                required
                value={formData.message}
                onChange={handleChange}
              />

              <button className="coffee-btn" disabled={loading}>
                {loading ? "Senden..." : "Nachricht senden"}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

