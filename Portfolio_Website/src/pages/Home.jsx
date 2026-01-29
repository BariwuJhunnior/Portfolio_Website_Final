import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="bg-[url('/portfolioBackgroundColors.jpg')] bg-cover bg-center w-screen h-full text-white min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}

export default Home;
