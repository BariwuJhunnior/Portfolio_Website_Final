import React from "react";
import { Github, Linkedin, Mail, ChevronDown, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import ContactSection from "../components/ContactSection";
import ErrorBoundary from "../common/ErrorBoundary";

const Home = () => {
  return (
    <div className="bg-[url('/portfolioBackgroundColors.jpg')] bg-cover bg-center w-screen h-full text-white min-h-screen">
      {/* 1. Hero Section */}
      <section id="home">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
      </section>

      {/* 3. Projects Section */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* Certificate Section */}
      <section id="certificates">
        <CertificationsSection />
      </section>

      {/* 4. Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
