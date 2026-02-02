import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../common/useThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-18 rounded-full bg-gray-200 p-1 dark:bg-gray-700 transition-colors"
    >
      <motion.div
        className="flex h-6 w-8 items-center justify-center rounded-full bg-white shadow-md"
        animate={{ x: theme === "dark" ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <Moon size={14} className="text-slate-900" />
        ) : (
          <Sun size={18} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
