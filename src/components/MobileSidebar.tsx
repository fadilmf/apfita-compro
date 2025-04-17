"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronDown,
  Home,
  Calendar,
  FileText,
  Send,
  Building2,
  Users,
  Download,
  Phone,
} from "lucide-react";
import { useState } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  itemsWithNotifications?: string[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  itemsWithNotifications = [],
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItems = [
    { path: "/", label: "HOME", icon: Home },
    { path: "/conference", label: "CONFERENCE", icon: Calendar },
    { path: "/time-schedule", label: "TIME SCHEDULE", icon: Calendar },
    { path: "/guidelines", label: "GUIDELINES", icon: FileText },
    { path: "/submissions", label: "SUBMISSIONS", icon: Send },
  ];

  const moreItems = [
    { path: "/venue", label: "VENUE", icon: Building2 },
    { path: "/committees", label: "COMMITTEES", icon: Users },
    { path: "/download", label: "DOWNLOAD", icon: Download },
  ];

  // Function to handle navigation
  const handleNavigation = (path: string): void => {
    window.location.href = path;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 md:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <button
                onClick={() => handleNavigation("/")}
                className="text-2xl font-bold text-blue-600"
              >
                APFITA
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 px-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left text-gray-700 hover:bg-gray-50 relative"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                  {itemsWithNotifications.includes(item.label) && (
                    <span className="absolute top-3 right-4 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse">
                      <span className="sr-only">New notification</span>
                    </span>
                  )}
                </button>
              ))}

              {/* More Section */}
              <div className="mt-2">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isMoreOpen ? "rotate-180" : ""
                      }`}
                    />
                    MORE
                  </div>
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {moreItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => handleNavigation(item.path)}
                          className="flex items-center gap-3 px-4 py-3 pl-12 rounded-lg transition-colors w-full text-left text-gray-700 hover:bg-gray-50 relative"
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                          {itemsWithNotifications.includes(item.label) && (
                            <span className="absolute top-3 right-4 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse">
                              <span className="sr-only">New notification</span>
                            </span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <button
                onClick={() => handleNavigation("/contact")}
                className="flex items-center gap-3 px-4 py-3 mt-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors w-full text-left"
              >
                <Phone className="h-5 w-5" />
                CONTACT US!
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
