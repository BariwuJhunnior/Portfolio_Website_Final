import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="bg-[url('/PortfolioBackgroundImage.jpg')] bg-cover bg-center w-screen h-full text-white min-h-screen">
      {/* 1. Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 3. Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Certificate Section */}
      <section id="certificates">
        <CertificatesSection />
      </section>

      {/* 4. Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default Home;
