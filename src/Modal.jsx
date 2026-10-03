import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/contact_modal.css";
import "./styles/display-mode.css";

// Put these in a .env file (Vite) — see setup notes
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM = { name: "", email: "", message: "" };

function Modal({ isOpen, onClose, title, footer, size = "lg", isLightMode }) {
  const dialogRef = useRef(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Move focus into the dialog when it opens
  useEffect(() => {
    if (isOpen) dialogRef.current?.focus();
  }, [isOpen]);

  // Reset the status each time the modal is reopened
  useEffect(() => {
    if (isOpen) setStatus("idle");
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`modal_body ${isLightMode ? "modal_body_dark" : ""} ${sizeClasses[size]}`}
      >
        {/* Exit button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="exitbttn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        {(title || onClose) && (
          <div className="head">
            <div className="name-gap">
              <span className="title" id="modal-title">
                Send Me a <span className="text-blue-600">Message</span>
              </span>
              <span className="sub_title">
                Have an idea or need some technical help? I'd be happy to hear
                from you.
              </span>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="modal_inner_body">
          <form onSubmit={handleSubmit}>
            <div className="modal-inside">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="modal_input"
                placeholder="E.G. Juan Dela Cruz"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />

              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="modal_input"
                placeholder="delacruzjuan@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="modal_inputarea"
                placeholder="Tell me about your idea or what you need help with..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />

              {/* Status messages */}
              {status === "success" && (
                <p role="status" className="text-green-600">
                  Thanks! Your message was sent.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}

             <div className="items-center justify-center flex w-full mt-3">
               <button
                type="submit"
                className="bg-blue-600 w-fit justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-offset-2 focus-visible:outline-blue-600 m-auto"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
             </div>
            </div>
          </form>
        </div>

        {/* Optional custom footer */}
        {footer && (
          <div className="flex justify-end gap-3 border-t border-neutral-200 px-6 py-4 dark:border-neutral-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
export default Modal;