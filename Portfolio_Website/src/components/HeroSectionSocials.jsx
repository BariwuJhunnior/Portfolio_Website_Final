import React from "react";
import { motion } from "framer-motion";
import social_media_links from "../constants/socialMediaLinks";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronDown,
  GitBranch,
} from "lucide-react";

function HeroSectionSocials() {
  return (
    <>
      <div className="flex gap-6 mb-16">
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.98 }}
          href={social_media_links.github}
          className="hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Github size={28} />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.98 }}
          href={social_media_links.linkedin}
          className="hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <Linkedin size={28} />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.98 }}
          href={social_media_links.email}
          className="hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Mail size={28} />
        </motion.a>
      </div>
    </>
  );
}

export default HeroSectionSocials;
