import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

import logo from "/src/assets/logo/logo_conf.png";
import { sponsors } from "@/data/sponsor";
import LogoGridSection from "@/components/LogoGridSection";

const phoneNumbers = [
  { name: "General Support", number: "+62-852-8242-5228" },
  { name: "Technical Support", number: "+62 822-1426-9503" },
  { name: "Admin Support1", number: "+62-812-7451-3242" },
  { name: "Admin Support2", number: "+62 812-8257-5650" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Conference", href: "/conference" },
  { name: "Time Schedule", href: "/time-schedule" },
  { name: "Registration Fee", href: "/regfee" },
  { name: "Submissions", href: "/submissions" },
  { name: "Venue", href: "/venue" },
  { name: "Board Members", href: "/board-members" },
  { name: "Committees", href: "/committees" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPhoneDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_max-content_1fr_auto] gap-12">
          {/* Logo & Kontak */}
          <div className="space-y-6">
            <img
              src={logo || "/placeholder.svg"}
              alt="Logo APFITA 2025"
              className="w-48"
            />
            <div className="space-y-4 text-blue-600">
              <div className="flex items-start space-x-3 hover:text-blue-950">
                <MapPin className="w-5 h-5 mt-1" />
                <a
                  href="https://maps.app.goo.gl/AawXLLjLwMiY12zZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IPB Baranangsiang, Bogor
                </a>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-950">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:apfita2025@apps.ipb.ac.id"
                >
                  apfita2025@apps.ipb.ac.id
                </a>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center space-x-3 hover:text-blue-950"
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Numbers</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isPhoneDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isPhoneDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 py-2 border border-blue-100">
                    {phoneNumbers.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.number}`}
                        className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
                      >
                        <div className="font-medium">{phone.name}</div>
                        <div>{phone.number}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigasi */}
          <div className="w-max self-center lg:self-auto lg:mx-10">
            <h3 className="text-blue-800 font-semibold text-lg mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => (window.location.href = item.href)}
                  className="text-blue-600 text-left hover:text-blue-950"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sponsors & Co-Hosts - span 2 columns */}
          <div className="md:col-span-2 space-y-8">
            <div className="grid space-y-8 md:space-y-0 md:grid-cols-3">

                <LogoGridSection
                title="Grand Sponsors"
                items={sponsors.filter((s) => s.type === "grand")}
                />
                <LogoGridSection
                title="Sponsors"
                items={sponsors.filter((s) => s.type === "regular")}
                />
                <LogoGridSection
                title="Official Publisher"
                items={sponsors.filter((s) => s.type === "publisher")}
                />
            </div>
            <LogoGridSection
              title="Co-Hosts & Partners"
              items={sponsors.filter((s) => s.type === "partner")}
              gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
            <LogoGridSection
              title="Supported"
              items={sponsors.filter((s) => s.type === "supported")}
              gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-blue-700">
            © {new Date().getFullYear()} APFITA 15th. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
