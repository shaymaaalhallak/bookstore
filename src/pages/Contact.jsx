import React, { useState } from "react";
import "../style/contact.css";
import { submitContactForm } from "../components/ContactForm";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    await submitContactForm(formData, setFormData); // actually send data to API
  };

  return (
    <div className="contact-container container py-5">
      <h1 className="contact-title mb-4">Contact Us</h1>

      <p className="contact-intro">
        We’re here to help! Reach out to us via the following channels:
      </p>

      <div className="contact-info mt-4">
        <p>
          📍 <strong>Address:</strong> 123 Book Street, Reading City, 45678
        </p>
        <p>
          ✉️ <strong>Email:</strong> bookstore.notify@gmail.com
        </p>
        <p>
          📞 <strong>Phone:</strong> +1 (234) 567-8901
        </p>
      </div>

      <div className="feedback-form mt-5">
        <h2 className="h5 fw-semibold mb-3">
          Send us a suggestion or feedback
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your feedback or suggestion"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
