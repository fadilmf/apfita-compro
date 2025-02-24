"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { useState } from "react";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/src/assets/SpeakersofAPFITA2025.jpeg";
  link.download = "speakers_list.jpeg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SpeakersFlyer: React.FC = () => {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  const toggleShareMenu = () => setIsShareMenuOpen(!isShareMenuOpen);

  const shareUrl = encodeURIComponent("https://apfita2025.org/speakers");
  const shareText = encodeURIComponent(
    "Check out the amazing speakers at APFITA 2025!"
  );

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: `https://www.instagram.com/`,
    },
    {
      name: "WhatsApp",
      icon: Send,
      url: `https://wa.me/?text=${shareText}%20${shareUrl}`,
    },
  ];

  return (
    <section className="py-6 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-2">
            List of Speakers
          </h2>
          <p className="text-sm text-gray-600">
            Download or share the complete list of speakers for APFITA 2025
          </p>
        </motion.div>

        <div className="flex justify-center gap-3">
          <motion.button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" /> Download List
          </motion.button>

          <motion.div className="relative">
            <motion.button
              onClick={toggleShareMenu}
              className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Share2 className="w-4 h-4" /> Share
            </motion.button>

            <AnimatePresence>
              {isShareMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl z-10 border border-gray-100"
                >
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <p className="text-xs text-gray-500 italic text-center mt-4">
          Share this list with your colleagues!
        </p>
      </div>
    </section>
  );
};

export default SpeakersFlyer;
