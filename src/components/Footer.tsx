import { MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../assets/logo_brain.png";
import logo from "../assets/logo_conf.png";

export default function Footer() {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Conference", href: "/conference" },
    { name: "Time Schedule", href: "/time-schedule" },
    { name: "Guidelines", href: "/guidelines" },
    { name: "Submissions", href: "/submissions" },
    { name: "Venue", href: "/venue" },
    { name: "Committees", href: "/committees" },
    { name: "Download", href: "/download" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            <img src={logo} alt="Logo APFITA 2025" className="w-48" />
            <div className="space-y-4 text-blue-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/AawXLLjLwMiY12zZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-950 transition-colors"
                >
                  IPB Baranangsiang, Bogor
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@ipb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-950 transition-colors"
                >
                  apfita2025@apps.ipb.ac.id
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+6282214269503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-950 transition-colors"
                >
                  +62-822-1426-9503 (Support)
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-800 font-semibold text-lg mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="text-blue-600 hover:text-blue-950 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sponsors Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-6">
              Grand Sponsors & Partners
            </h3>
            <div className="space-y-6">
              <a
                href="https://brain.ipb.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt="BRAIN IPB"
                  className="bg-white p-2 rounded-lg w-[150px] hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            <h3 className="text-blue-800 font-semibold text-lg mb-6 mt-4">
              Co-Host
            </h3>
            <div className="space-y-6">
              <a
                href="https://brain.ipb.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt="BRAIN IPB"
                  className="bg-white p-2 rounded-lg w-[150px] hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-700">
            © {new Date().getFullYear()} APFITA 15th. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
