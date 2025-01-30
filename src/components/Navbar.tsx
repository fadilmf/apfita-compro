import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            APFITA
          </NavLink>

          {/* Navigation Links */}
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
            <NavLink to="/schedule" className="hover:text-blue-600 transition">
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
                  <NavLink
                    to="/contact"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    CONTACT
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu (Burger) */}
          <div className="md:hidden">
            <button onClick={() => setDropdownOpen(!isDropdownOpen)}>☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
