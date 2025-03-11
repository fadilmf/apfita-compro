import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Function untuk force reload ke halaman tujuan
  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <nav className="bg-gradient-to-br from-blue-50 via-white to-green-50 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="text-2xl font-bold text-blue-600"
          >
            APFITA 2025
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {[
              { label: "HOME", path: "/" },
              { label: "CONFERENCE", path: "/conference" },
              { label: "TIME SCHEDULE", path: "/time-schedule" },
              { label: "GUIDELINES", path: "/guidelines" },
              { label: "SUBMISSIONS", path: "/submissions" },
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className="hover:text-blue-600 transition"
              >
                {label}
              </button>
            ))}

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
                  {[
                    { label: "VENUE", path: "/venue" },
                    { label: "COMMITTEES", path: "/committees" },
                    { label: "DOWNLOAD", path: "/download" },
                  ].map(({ label, path }) => (
                    <button
                      key={path}
                      onClick={() => handleNavigation(path)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100 transition"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/contact")}
              className="hover:text-blue-600 transition animate-pulse"
            >
              CONTACT US!
            </button>
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
