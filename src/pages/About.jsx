import React from "react";
import "../style/about.css";
import library1 from "../assests/library1.webp";
export default function About() {
  return (
    <div className="container">
      {/* Header section with background image and title */}
      <header
        className="header-image"
        style={{
          backgroundImage: `url(${library1})`,
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "3rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          userSelect: "none",
        }}
        aria-label="Bound & Beyond bookstore header"
      >
        Bound & Beyond
      </header>

      {/* About us wrapper with two-column layout */}
      <section className="about-wrapper" aria-label="About Bound & Beyond">
        {/* Left column: About Us */}
        <div className="about-left">
          <h2>About Us</h2>
          <p>
            At <strong>Bound & Beyond</strong>, we are passionate about
            connecting readers with the perfect books. Whether you’re seeking
            timeless classics, the latest bestsellers, or hidden gems, our
            curated selection offers something for every reader. With affordable
            prices, exclusive deals, and fast shipping, we make discovering your
            next great read a seamless and enjoyable experience.
          </p>
          {/* <button className="details-btn" type="button" aria-label="More details about BookTrailblaze">
            Details
          </button> */}
        </div>

        {/* Right column: Features */}
        <div className="features-right">
          {/* Feature 1: Affordable Prices and Exclusive Deals */}
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              {/* Example Icon: Heart outline using Unicode */}♥
            </div>
            <div>
              <h5>Affordable Prices and Exclusive Deals</h5>
              <p>
                Enjoy competitive prices on all titles, along with exclusive
                discounts and offers available only to our customers.
              </p>
            </div>
          </div>

          {/* Feature 2: Wide Selection of Books */}
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              {/* Example Icon: Link symbol using Unicode */}
              🔗
            </div>
            <div>
              <h5>Wide Selection of Books</h5>
              <p>
                Explore an extensive range of genres, from bestsellers to hidden
                gems, ensuring there’s something for every reader.
              </p>
            </div>
          </div>

          {/* Feature 3: Fast and Reliable Shipping */}
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              {/* Example Icon: Check mark using Unicode */}✔
            </div>
            <div>
              <h5>Fast and Reliable Shipping</h5>
              <p>
                Get your books delivered swiftly and safely, with multiple
                shipping options to suit your needs, ensuring you never have to
                wait too long for your next read.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
