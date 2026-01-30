import React from "react";
import { motion } from "framer-motion";
import HeroSectionSocials from "./HeroSectionSocials";
import ChevronAnimation from "./ChevronAnimation";
import TechBadgeHeroSection from "./TechBadgeHeroSection";

function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col pt-15 justify-center items-center px-6 text-center"
      >
        <div className="mb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-40 h-40 rounded-full border-4 border-blue-400 overflow-hidden shadow-2xl shadow-blue-500/20 hover:-translate-y-2 transition-transform duration-500"
          >
            <img
              src="/profilePicturePortfolio.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover p-0 m-0"
              style={{ borderRadius: "100%" }}
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I'm{" "}
          <span className="text-blue-300">Bariwu Alhassan Nyankpani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] md:text-xl lg:text-xl text-slate-300 max-w-2xl mb-8 "
        >
          As a passionate Full-Stack Developer, I thrive on building dynamic web
          applications using technologies like React, Python, MySQL, Django,
          Tailwind CSS, JavaScript, and SQLite. I genuinely love tackling
          complex problems and turning them into beautifully crafted, scalable
          solutions through my dedicated coding efforts.
        </motion.p>

        {/* Tech Stach Icons */}
        <TechBadgeHeroSection />

        {/* Social Links */}
        <HeroSectionSocials />

        {/* Chevron Down Animation */}
        <ChevronAnimation />
      </section>
    </>
  );
}

export default HeroSection;
