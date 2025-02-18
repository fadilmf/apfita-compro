"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            APFITA 2025
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/conference"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              CONFERENCE
            </NavLink>
            <NavLink
              to="/time-schedule"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              TIME SCHEDULE
            </NavLink>
            <NavLink
              to="/guidelines"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              GUIDELINES
            </NavLink>
            <NavLink
              to="/submissions"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              SUBMISSIONS
            </NavLink>

            {/* Dropdown MORE */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-blue-600 transition"
              >
                <span>MORE</span>
                <ChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Items */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1">
                  <NavLink
                    to="/venue"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-gray-100 transition ${
                        isActive ? "text-blue-600 bg-blue-50" : ""
                      }`
                    }
                  >
                    VENUE
                  </NavLink>
                  <NavLink
                    to="/committees"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-gray-100 transition ${
                        isActive ? "text-blue-600 bg-blue-50" : ""
                      }`
                    }
                  >
                    COMMITTEES
                  </NavLink>
                  <NavLink
                    to="/download"
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:bg-gray-100 transition ${
                        isActive ? "text-blue-600 bg-blue-50" : ""
                      }`
                    }
                  >
                    DOWNLOAD
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-600 transition animate-pulse ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              CONTACT US!
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
