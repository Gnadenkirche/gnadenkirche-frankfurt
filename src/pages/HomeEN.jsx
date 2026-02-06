import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeEN.css"; // You can use the same CSS as HomeDE or create a separate one if needed
/*import "./Home.css";*/ // You can use the same CSS as HomeDE or create a separate one if needed
import heroImage from "../assets/images/hero-message.jpg";
import heroMobileVideo from "../assets/videos/hero-mobile.mp4";
// Church slideshow images
// import church1 from "../assets/images/church1.jpg";
// import church2 from "../assets/images/church2.jpg";
import church3 from "../assets/images/church3.jpg";
import church4 from "../assets/images/church4.jpg";
import church5 from "../assets/images/church5.jpg";
import church6 from "../assets/images/church6.jpg";

function HomeEN() {


   /* ================= SCROLL TO BOTTOM ================= */
  const scrollToNextSection = () => {
  document
    .getElementById("home-next-section")
    ?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // ================= SLIDESHOW LOGIC – SAME AS GERMAN VERSION =================
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let current = 0;
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };
    showSlide(current);
    const interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero-video-section">
        <img
          className="hero-video hero-image"
          src={heroImage}
          alt="Christ in the Center – ERB Frankfurt"
        />
	{/* Mobile video */}
        <video
          className="hero-media hero-video-mobile"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroMobileVideo} type="video/mp4" />
        </video>

        {/* ===== SCROLL ARROWS (CLICKABLE) ===== */}
        <button
          className="scroll-arrows scroll-arrows-en"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="hero-overlay">
          <div className="hero-content-centered hero-content-centered-en">
	    <h1 className="hero-main-title">
	      <span className="hero-line hero-line-primary">Grace Church</span>
	      <span className="hero-line hero-line-secondary">Frankfurt</span>
            </h1>
	    <h2 className="hero-secondary-title">
              Reformed Baptist Church
            </h2>
          </div>
        </div>
      </section>
      
      {/* ================= VISIT US ================= */}
      <section id="home-next-section" className="visit-section">
        <div className="container visit-content">
          <h2 className="visit-title">Visit us this Sunday<span className="cardo-exclamation">!</span></h2>

          <div className="visit-divider" />

          <p className="visit-time">Church service - 4:30 PM</p>
          <p className="visit-address">
            Hohemarkstraße 75<br />
            61440 Oberursel
          </p>
        </div>
      </section>

      {/* ================= WHAT MATTERS TO US ================= */}
      <section className="what-matters-section">
        <div className="container">
          <div className="what-matters-grid">
            <Link to="/uber-uns" className="matter-block hope">
              <h3>Who We Are</h3>
              <p>
	        We are a church with Jesus Christ at the center. We believe and confess
                that He is the Son of God, our Lord and Savior. We desire to live our
                entire lives by God’s grace and for God’s glory.
              </p>
              <span className="read-more">
                Learn more about us
              </span>
            </Link>
            <Link to="/glaube" className="matter-block doctrine">
              <h3>What We Believe</h3>
              <p>
	        We believe that the Bible is God’s infallible Word. Our faith is grounded
                solely in Holy Scripture and is summarized in the Baptist Confession of
                Faith of 1689.
              </p>
              <span className="read-more">
                Learn more about our faith
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CHURCH PHOTO SLIDESHOW WITH SCRIPTURE ================= */}
      <section className="church-slideshow-section">
        <div className="slideshow-container">
          {/* Slide 3 */}
          <div className="slide fade">
            <img src={church3} alt="Our Church – Interior View" />
          </div>
		  {/* Slide 4 */}
          <div className="slide fade">
            <img src={church4} alt="Our Church – Interior" />
          </div>
		  {/* Slide 5 */}
          <div className="slide fade">
            <img src={church5} alt="Our Church – View Inside the Church" />
          </div>
		  {/* Slide 6 */}
          <div className="slide fade">
            <img src={church6} alt="Our Church – Worship Service Inside the Church" />
          </div>
          {/* Scripture Overlay – Uncomment when ready */}
          {/*
          <div className="slideshow-overlay">
            <div className="scripture-box">
              <p className="scripture-text">
                “For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.”
              </p>
              <p className="scripture-reference">— Ephesians 2:8</p>
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

export default HomeEN;
