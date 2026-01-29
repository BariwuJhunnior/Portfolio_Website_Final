import React from "react";
import Certificates from "./Certificates";

function CertificatesSection() {
  return (
    <>
      <section id="contact" className="py-1">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Certifications
        </h2>
        <div className="max-w-3xl mx-auto px-6">
          <Certificates />
        </div>
      </section>
    </>
  );
}

export default CertificatesSection;
