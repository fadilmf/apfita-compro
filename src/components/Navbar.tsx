// "use client";
import type React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileSidebar from "@/components/MobileSidebar";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    setDropdownOpen(false);
    navigate(path);
  };

  const itemsWithNotifications = [
    "REGISTRATION",
    "SUBMISSIONS",
    "DOWNLOAD",
    "CONFERENCE",
    "CONTACT US!",
    "TIME SCHEDULE",
  ];

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "CONFERENCE", path: "/conference" },
    { label: "TIME SCHEDULE", path: "/time-schedule" },
    { label: "REGISTRATION", path: "/registration" },
    { label: "SUBMISSIONS", path: "/submissions" },
  ];

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-2xl bg-white/70 border-b border-white/30
        shadow-[0_4px_20px_rgba(0,0,0,0.1)]
      `}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 14 }}
      style={{ height: "4rem" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 relative">
          <button
            onClick={() => handleNavigation("/")}
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300"
          >
            APFITA 2025
          </button>

          <div className="hidden lg:flex items-center space-x-8 font-medium text-gray-800 relative">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className="relative group px-3 py-1"
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="activeBubble"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300/40 to-white-300/40 backdrop-blur-md"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-blue-800 font-semibold"
                        : "group-hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </span>

                  {/* Notifikasi */}
                  {itemsWithNotifications.includes(label) && (
                    <span className="absolute -top-1.5 -right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}

            {/* Dropdown MORE */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-blue-600 transition relative z-10"
              >
                <span>MORE</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 rounded-2xl shadow-lg bg-white/70 backdrop-blur-lg border border-white/30 overflow-hidden"
                  >
                    {[
                      { label: "VENUE", path: "/venue" },
                      { label: "BOARD MEMBERS", path: "/board-members" },
                      { label: "COMMITTEES", path: "/committees" },
                    ].map(({ label, path }) => (
                      <button
                        key={path}
                        onClick={() => handleNavigation(path)}
                        className={`block w-full text-left px-5 py-2 hover:bg-gradient-to-r hover:from-blue-100 hover:to-green-100 transition-all ${
                          location.pathname === path
                            ? "bg-gradient-to-r from-blue-200/50 to-green-100/50"
                            : ""
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavigation("/contact")}
              className={`relative font-semibold tracking-wide transition-all ${
                location.pathname === "/contact"
                  ? "text-blue-800"
                  : "hover:text-blue-700"
              }`}
            >
              CONTACT US!
              <span className="absolute -top-1.5 -right-3 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse ring-2 ring-white" />
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-white/40 rounded-xl transition-all backdrop-blur-sm border border-white/20"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        itemsWithNotifications={itemsWithNotifications}
      />
    </motion.nav>
  );
};

export default Navbar;
