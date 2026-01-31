import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <>
      <section id="contact" className="mt-20 pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-19">
          Contact Me
        </h2>
        <div className="max-w-3xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactSection;
