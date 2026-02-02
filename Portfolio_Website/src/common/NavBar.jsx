import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Code2, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false); //Close mobile menu after clicking
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/80 backdrop-blur-md py-4 shadow-lg" : "bg-tranparent py-2 px-1"}`}
    >
      <div className="w-full px-4 flex  justify-between items-center">
        {/* Logo */}

        <a href="#home" className="flex items-center gap-2">
          <img src="/portfolio_logo.png" className="w-10 h-10 rounded-full" />
        </a>

        <div className="flex gap-2">
          <ThemeToggle />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 right-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden text-app-text hover:cursor-pointer hover:text-gray-400 flex items-center ${isOpen ? "fixed top-4 right-4 z-50" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-8 flex flex-col border-slate-700"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleClick(event, link.href)}
                  className="`block py-1 px-1 text-app-text rounded-2xl hover:text-white cursor-pointer hover:bg-app-text "
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
