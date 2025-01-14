import { useState } from "react";
import { motion } from "framer-motion";
import logo_apfita from "@/assets/logo_apfita.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu dropdown
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Text Container */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img
            src={logo_apfita}
            alt="APFITA Logo"
            className="w-16 h-16" // Adjust size of the logo
          />
          {/* Text */}
          <div className="text-2xl font-bold text-blue-600">APFITA 2025</div>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, _) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <div
          className="md:hidden text-gray-600 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            )}
          </svg>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="py-4 text-center border-b border-gray-200 text-gray-600 hover:text-blue-600 transition cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
