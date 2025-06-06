"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

import image from "../assets/logo_brain.png";
import logo from "../assets/logo_conf.png";
import logoTelU from "/src/assets/Logo Tel U.png";
import logoKementan from "/src/assets/Logo Kementan.png";
import logoUNIKOM from "/src/assets/Logo UNIKOM.png";
import logoUNPAD from "/src/assets/Logo UNPAD.png";
import logoGUNDAR from "/src/assets/Logo Gunadarma.png";
import logoHIPI from "/src/assets/LogoHIPI.jpg";
import logoUMB from "/src/assets/LogoUMBandung.png";
import logoIOP from "/src/assets/Logo-IOP.jpg";

export default function Footer() {
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { name: "Guidelines", href: "/guidelines" },
    { name: "Submissions", href: "/submissions" },
    { name: "Venue", href: "/venue" },
    { name: "Committees", href: "/committees" },
    { name: "Download", href: "/download" },
    { name: "Contact Us", href: "/contact" },
  ];

  const coHosts = [
    {
      name: "Kementerian Pertanian",
      logo: logoKementan,
      url: "https://www.pertanian.go.id",
    },
    {
      name: "Telkom University",
      logo: logoTelU,
      url: "https://telkomuniversity.ac.id",
    },
    { name: "UNIKOM", logo: logoUNIKOM, url: "https://www.unikom.ac.id" },
    { name: "UNPAD", logo: logoUNPAD, url: "https://www.unpad.ac.id" },
    { name: "GUNDAR", logo: logoGUNDAR, url: "https://www.gunadarma.ac.id" },
    { name: "UMB", logo: logoUMB, url: "https://umbandung.ac.id/" },
    { name: "HIPI", logo: logoHIPI, url: "https://apfita2025.com" },
  ];

  // Added publisher section
  const publishers = [
    {
      name: "IOP Publishing",
      logo: logoIOP,
      url: "https://iopscience.iop.org/journal/1755-1315",
    },
  ];

  // Close dropdown when clicking outside
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-br from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            <img
              src={logo || "/placeholder.svg"}
              alt="Logo APFITA 2025"
              className="w-48"
            />
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
                  href="mailto:apfita2025@apps.ipb.ac.id"
                  className="hover:text-blue-950 transition-colors"
                >
                  apfita2025@apps.ipb.ac.id
                </a>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center space-x-3 hover:text-blue-950 transition-colors w-full"
                  onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
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

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-800 font-semibold text-lg mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => (window.location.href = item.href)}
                  className="text-blue-600 hover:text-blue-950 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sponsors and Co-Hosts Section */}
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
                  src={image || "/placeholder.svg"}
                  alt="BRAIN IPB"
                  className="bg-white p-2 rounded-lg w-[150px] hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            {/* Added Publisher Section */}
            <h3 className="text-blue-800 font-semibold text-lg mb-6 mt-8">
              Official Publisher
            </h3>
            <div className="space-y-4">
              {publishers.map((publisher) => (
                <div key={publisher.name} className="flex flex-col items-start">
                  <a
                    href={publisher.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={publisher.logo || "/placeholder.svg"}
                      alt={publisher.name}
                      className="bg-white p-2 rounded-lg w-[150px] object-contain hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              ))}
            </div>

            <h3 className="text-blue-800 font-semibold text-lg mb-6 mt-8">
              Co-Hosts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {coHosts.map((host) => (
                <a
                  key={host.name}
                  href={host.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={host.logo || "/placeholder.svg"}
                    alt={host.name}
                    className="bg-white p-2 rounded-lg w-[100px] h-[100px] object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
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
