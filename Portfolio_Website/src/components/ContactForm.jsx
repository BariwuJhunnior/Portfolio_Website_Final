import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  // Initialize EmailJS (get your public key from EmailJS dashboard)
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    if (honeypot.length > 0) {
      setStatus("success");
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: import.meta.env.VITE_RECIPIENT_EMAIL,
        },
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset back to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          className="bg-app-bg border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-blue-500 "
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          className="bg-app-bg border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-blue-500 "
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />

        <input
          type="text"
          placeholder="Subject"
          required
          name="subject"
          className="w-full bg-app-bg border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-blue-500 "
          value={formData.subject}
          onChange={(event) =>
            setFormData({ ...formData, subject: event.target.value })
          }
        />

        {/* Honey Pot Input Field */}
        <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
          <label>If you are human leave this field blank</label>
          <input
            type="text"
            name="last_number"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <textarea
          placeholder="Message"
          rows="5"
          required
          name="message"
          className="w-full bg-app-bg border border-slate-700 p-3 rounded-lg focus:outline-none focus:border-blue-500 "
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
        />

        <button
          disabled={status === "submitting" || status === "success"}
          className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-lg transition-all ${status === "success" ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"} text-white disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          <AnimatePresence mode="wait">
            {status === "submitting" ? (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </motion.div>
            ) : status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={20} />
                Message Sent!
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-center text-sm"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
