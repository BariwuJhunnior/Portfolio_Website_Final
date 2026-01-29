import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import SOCIAL_LINKS from "../constants/SocialLinks";

function FooterSocials() {
  const social_Links = [
    {
      icon: <Github size={20} />,
      href: SOCIAL_LINKS.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: SOCIAL_LINKS.email,
      label: "Email",
    },
  ];

  return (
    <>
      <div className="flex gap-6 mb-2">
        {social_Links.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "#3b82f6" }}
            className="text-slate-400 transition-colors"
            aria-label={social.label}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
}

export default FooterSocials;
