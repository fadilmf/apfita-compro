"use client";

import { motion } from "framer-motion";
import { Download, Eye, X } from "lucide-react"; // Using X icon as the close button
import { useState } from "react";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/src/assets/SpeakersofAPFITA2025.jpeg"; // Ensure this file is in the assets folder
  link.download = "speakers_list.jpeg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Speakers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-12 px-6 text-center md:px-12 max-w-lg mx-auto">
      <motion.h2
        className="text-3xl font-bold text-navy-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        List of Speakers
      </motion.h2>
      <p className="text-lg text-gray-600 mb-6">
        Speakers in 15th International Conference of Asia-Pacific Federation for
        Information Technology in Agriculture 2025
      </p>

      <div className="flex justify-center gap-4">
        <motion.button
          onClick={handleDownload}
          className="px-5 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" /> Download List
        </motion.button>

        <motion.button
          onClick={openModal}
          className="px-5 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="w-5 h-5" /> View List
        </motion.button>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Modal content (image) */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <img
              src="/src/assets/SpeakersofAPFITA2025.jpeg" // Replace with dynamic image if needed
              alt="Speakers List"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Close Icon */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all z-60"
            style={{ zIndex: 9999 }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Speakers;
