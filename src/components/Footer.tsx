import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  X,
  ExternalLink,
  Copy,
  Check,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/assets/logo/logo_conf.png";
import { sponsors } from "@/data/sponsor";
import { getSponsorsByType } from "@/lib/sponsorUtils";
import SponsorSection from "@/components/FooterSponsorSection";

const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#EA4335"
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727c.904 0 1.636.732 1.636 1.636z"
    />
  </svg>
);

const YahooLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#6001D2"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-1v-4l-2.5-5h1.2l1.8 3.6L12.3 8h1.2L11 13v4z"
    />
  </svg>
);

const OutlookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#0078D4"
      d="M7 4h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    />
  </svg>
);

const emailClients = [
  {
    name: "Gmail",
    logo: GmailLogo,
    url: "https://mail.google.com/mail/?view=cm&to=",
  },
  {
    name: "Yahoo Mail",
    logo: YahooLogo,
    url: "https://compose.mail.yahoo.com/?to=",
  },
  {
    name: "Outlook",
    logo: OutlookLogo,
    url: "https://outlook.live.com/mail/0/deeplink/compose?to=",
  },
];

const phoneNumbers = [
  { name: "General Support", number: "+62-852-8242-5228" },
  { name: "Technical Support", number: "+62 822-1426-9503" },
  { name: "Admin Support", number: "+62 812-8257-5650" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Conference", href: "/conference" },
  { name: "Time Schedule", href: "/time-schedule" },
  { name: "Registration Fee", href: "/registration" },
  { name: "Submissions", href: "/submissions" },
  { name: "Venue", href: "/venue" },
  { name: "Board Members", href: "/board-members" },
  { name: "Committees", href: "/committees" },
  { name: "Contact Us", href: "/contact" },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Footer() {
  const email = "apfita2025@apps.ipb.ac.id";
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleEmailClient = (clientUrl: string) => {
    window.open(`${clientUrl}${email}`, "_blank");
    setIsEmailModalOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_max-content_1fr_auto] gap-12">
            {/* Left: Logo + Contact */}
            <div className="space-y-6">
              <img src={logo} alt="Logo APFITA 2025" className="w-48" />

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
                  <button
                    onClick={() => setIsEmailModalOpen(true)}
                    className="text-left hover:underline"
                  >
                    {email}
                  </button>
                </div>

                <div className="flex items-center space-x-3 hover:text-blue-950">
                  <Instagram className="w-5 h-5" />
                  <a
                    href="https://www.instagram.com/apfita2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram APFITA 2025
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

            {/* Navigation */}
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

            {/* Sponsors */}
            <div className="md:col-span-2 space-y-8">
              <SponsorSection
                title="Hosted by"
                items={getSponsorsByType(sponsors, "hosted")}
                size="lg"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 lg:gap-1">
                <SponsorSection
                  title="Main Sponsor"
                  items={getSponsorsByType(sponsors, "mainSponsor")}
                  size="md"
                />
                <SponsorSection
                  title="Co-Host"
                  items={getSponsorsByType(sponsors, "cohost")}
                  size="md"
                />
                <SponsorSection
                  title="Publisher"
                  items={getSponsorsByType(sponsors, "publisher")}
                  size="md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <SponsorSection
                  title="Sponsors"
                  items={getSponsorsByType(sponsors, "sponsor")}
                  size="sm"
                />
                <SponsorSection
                  title="Supported by"
                  items={getSponsorsByType(sponsors, "supported")}
                  size="sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-800">
            <p className="text-center text-blue-700">
              © {new Date().getFullYear()} APFITA 15th. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsEmailModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            >
              <div className="relative p-6 border-b border-gray-100">
                <button
                  onClick={() => setIsEmailModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Send Email
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Choose your email client
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b border-gray-100">
                <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium">
                      Sending to:
                    </p>
                    <p className="font-mono text-sm text-gray-900 font-medium">
                      {email}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="flex items-center space-x-1 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {emailClients.map((client, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleEmailClient(client.url)}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                      <client.logo />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Open in {client.name}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
                <p className="text-xs text-gray-500">
                  Email will open in a new tab
                </p>
                <button
                  onClick={() => setIsEmailModalOpen(false)}
                  className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
