"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Arif Satria, S.P., M.Si.",
    title: "Rector",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Prof. Dr. Ir. Rachmat Pambudy, M.S.",
    title: "Minister of National Development Planning",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Ir. H. Andi Amran Sulaiman, M.P.",
    title: "Minister of Agriculture",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Ir. Sakti Wahyu Trenggono, M.M.",
    title: "Minister of Maritime Affairs and Fisheries",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Hanif Faisol Nurofiq, S.Hut., M.P.",
    title: "Minister of the Environment",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Arief Prasetyo Adi, S.T., M.T., Ph.D. (h.c)",
    title: "Head",
    organization: "Indonesian National Food Agency",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Ir. Dadan Hindayana",
    title: "Head",
    organization: "National Nutrition Agency",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Astie Darmayantie, ST., MSc., MMSI.",
    title: "Professor",
    organization: "Gunadarma University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Shelvie Nidya Neyman, S.Kom., M.Si.",
    title: "Professor",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Prof. Ir. Setyo Pertiwi, M.Agr.",
    title: "Professor",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Dr. Karlisa Priandana, S.T., M.Eng.",
    title: "Professor",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Prof. Dan A Lancu, Ph.D.",
    title: "Associate Professor of Operations, Information and Technology",
    organization: "Stanford University",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Prof. Robert De Souza",
    title: "Professor",
    organization:
      "Department of Industrial Systems Engineering and Management & The Logistics Institute - Asia Pacific, NUS",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Prof. Dr. Ir. Kudang B. Seminar, M.Sc.",
    title: "Professor in Computer Technology",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
  },
];

const Speakers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSpeaker = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length
    );
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-navy-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Prominent Speakers
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-5">
          Prominent Speakers in APFITA 2025.
        </p>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {speakers.map((speaker, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </motion.div>
          </div>
          <motion.button
            onClick={prevSpeaker}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </motion.button>
          <motion.button
            onClick={nextSpeaker}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white opacity-20">
            {speaker.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
          <p className="text-sm opacity-90">{speaker.title}</p>
        </div>
      </div>
      <div className="p-4 bg-white bg-opacity-90">
        <p className="text-blue-600 font-medium">{speaker.organization}</p>
      </div>
    </motion.div>
  );
};

export default Speakers;
