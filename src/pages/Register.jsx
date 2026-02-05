import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    church: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to your email using EmailJS (free)
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          church: formData.church,
          message: `New Registration!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nChurch: ${formData.church}`
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);
    } catch (error) {
      alert("Error sending. Please WhatsApp us: +91XXXXXXXXXX");
    }
  };

  if (submitted) {
    return (
      <div className="register-success">
        <h1>Thank You!</h1>
        <p>Your registration is confirmed.</p>
        <p>Please complete payment below to finalize.</p>
        <div className="payment-section">
          <h2>Complete Payment</h2>
          <img src="/images/upi-qr.jpg" alt="UPI QR Code" className="qr-code" />
          <p>Scan with any UPI app (GPay, PhonePe, Paytm)</p>
          <p>UPI ID: erbministries@oksbi</p>
          <p>Amount: ₹500 (or as announced)</p>
        </div>
        <a href="/" className="gold-btn">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="register-page">
      <div className="container">
        <h1>Conference Registration</h1>
        <p className="subtitle">Reformed Conference 2025 • 15–17 March</p>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp *"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="church"
            placeholder="Your Church Name"
            value={formData.church}
            onChange={handleChange}
          />

          <button type="submit" className="gold-btn large">
            Submit & Proceed to Payment
          </button>
        </form>

        <div className="info">
          <p>After submitting, you will see the UPI QR code for payment.</p>
          <p>Payment confirms your seat.</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
