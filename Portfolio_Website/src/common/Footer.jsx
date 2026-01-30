import React from "react";
import { motion } from "framer-motion";
import FooterSocials from "../components/FooterSocials";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <FooterSocials />

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-linear-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Copyright & Credits */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-2">
            &copy; {currentYear}{" "}
            <span className="text-white font-medium">
              Bariwu Alhassan Nyankpani
            </span>
            . All right reserved.
          </p>
          <p className="text-slate-400 text-xs flex items-center justify-center gap-1">
            Built with React & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
