import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../i18n/translations";
import "./Contact.css";

export default function Contact() {
  const { language } = useLanguage();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">
        {translations[language].contact}
      </h1>

      <p className="contact-subtitle">
        {translations[language].contact_text}
      </p>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          className="contact-input"
          type="text"
          placeholder={translations[language].contact_name}
          required
        />

        <input
          name="email"
          className="contact-input"
          type="email"
          placeholder={translations[language].contact_email}
          required
        />

        <textarea
          name="message"
          className="contact-textarea"
          placeholder={translations[language].contact_message}
          rows={6}
          required
        />

        <button
          className="contact-submit"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : translations[language].contact_submit}
        </button>

        {sent && (
          <p className="contact-success">
            Thanks! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}
