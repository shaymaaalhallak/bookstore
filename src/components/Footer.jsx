import React from "react";
import "../style/footer.css"; // <-- make sure to create this file

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2 className="footer-title">Get in Touch</h2>

          <p className="footer-text">
             Discover a smooth and enjoyable book-shopping experience.
          </p>
          <p className="footer-text">
          Your online destination for stories, knowledge, and lifelong learning.
          </p>

          {/* SOCIAL ICONS */}
         <div className="social-icons">
            <button className="icon-box icon-button"><i className="fab fa-instagram"></i></button>
            <button className="icon-box icon-button"><i className="fab fa-linkedin"></i></button>
            <button className="icon-box icon-button"><i className="fab fa-pinterest"></i></button>
            <button className="icon-box icon-button"><i className="fab fa-twitter"></i></button>
         </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">

          {/* Card 1 */}
          <div className="contact-card-wrapper">
            <div className="shadow-card"></div>
            <div className="contact-card">
              <i className="fas fa-basketball-ball contact-icon"></i>
              <p className="contact-text">dribbble.com/example</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="contact-card-wrapper">
            <div className="shadow-card"></div>
            <div className="contact-card">
              <i className="fas fa-envelope contact-icon"></i>
              <p className="contact-text">contact@example.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        © {new Date().getFullYear()} Bound & Beyond.
      </div>
    </footer>
  );
}
