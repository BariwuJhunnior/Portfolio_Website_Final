import React from "react";
import { motion } from "framer-motion";

function TechBadgeHeroSection() {
  const techStack = [
    "React",
    "Django",
    "MySQL",
    "Tailwind CSS",
    "Python",
    "JavaScript",
    "SQLite",
  ];

  return (
    <>
      {/* Tech Stack Icons */}

      <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            //Animation repeats anytime the component comes into view
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <motion.span
              //Hover Animation
              whileHover={{
                scale: 1.9,
                y: -5,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
              //Tap Animation
              whileTap={{ scale: 0.98 }}
              className="cursor-default bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-sm font-medium text-slate-200 shadow-sm"
            >
              {tech}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default TechBadgeHeroSection;
