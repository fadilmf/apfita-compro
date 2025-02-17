import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ Tambahkan state untuk mobile menu

  return (
    <nav className="bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            APFITA
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-blue-600 transition">
              HOME
            </NavLink>
            <NavLink
              to="/conference"
              className="hover:text-blue-600 transition"
            >
              CONFERENCE
            </NavLink>
            <NavLink
              to="/time-schedule"
              className="hover:text-blue-600 transition"
            >
              TIME SCHEDULE
            </NavLink>
            <NavLink
              to="/guidelines"
              className="hover:text-blue-600 transition"
            >
              GUIDELINES
            </NavLink>
            <NavLink
              to="/submissions"
              className="hover:text-blue-600 transition"
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
                <ChevronDown size={18} />
              </button>

              {/* Dropdown Items */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <NavLink
                    to="/venue"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    VENUE
                  </NavLink>
                  <NavLink
                    to="/committees"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    COMMITTEES
                  </NavLink>
                  <NavLink
                    to="/download"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    DOWNLOAD
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="hover:text-blue-600 transition animate-pulse"
            >
              CONTACT US!
            </NavLink>
          </div>

          {/* Mobile Menu (Burger) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full px-4 py-4 z-50">
          <NavLink
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            HOME
          </NavLink>
          <NavLink
            to="/conference"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            CONFERENCE
          </NavLink>
          <NavLink
            to="/time-schedule"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            TIME SCHEDULE
          </NavLink>
          <NavLink
            to="/guidelines"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            GUIDELINES
          </NavLink>
          <NavLink
            to="/submissions"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            SUBMISSIONS
          </NavLink>

          {/* Dropdown MORE di Mobile */}
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
          >
            <span>MORE</span>
            <ChevronDown size={18} />
          </button>

          {isDropdownOpen && (
            <div className="ml-4">
              <NavLink
                to="/venue"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                VENUE
              </NavLink>
              <NavLink
                to="/committees"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                COMMITTEES
              </NavLink>
              <NavLink
                to="/download"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                DOWNLOAD
              </NavLink>
            </div>
          )}

          <NavLink
            to="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            CONTACT US!
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
