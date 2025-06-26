import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    formObject.subject = "Contact from BudgetWithin Website";
    formObject.from_name = "My Website";

    const json = JSON.stringify(formObject);

    setStatusMessage("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (response.ok) {
        setStatusMessage("Email successfully sent!");
        e.target.reset();
      } else {
        const errorData = await response.json();
        setStatusMessage(
          `Failed to send email: ${errorData.message || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-intro">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="hidden"
          name="access_key"
          value="8160aac7-b01c-4da4-8ab8-5dadf301f2b6"
        />

        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="form-textarea"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="form-submit">
          Send Message
        </button>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;

