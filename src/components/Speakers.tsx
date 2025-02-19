"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Award, Users } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
  category: "opening" | "honorary" | "prominent";
  confirmed?: boolean;
}

const speakers: Speaker[] = [
  {
    name: "Prof. Dr. Arif Satria, S.P., M.Si.",
    title: "Rector",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
    category: "opening",
  },
  {
    name: "Prof. Dr. Ir. Rachmat Pambudy, M.S.",
    title: "Minister of National Development Planning",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Dr. Ir. H. Andi Amran Sulaiman, M.P.",
    title: "Minister of Agriculture",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Ir. Sakti Wahyu Trenggono, M.M.",
    title: "Minister of Maritime Affairs and Fisheries",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Dr. Hanif Faisol Nurofiq, S.Hut., M.P.",
    title: "Minister of the Environment",
    organization: "Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Arief Prasetyo Adi, S.T., M.T., Ph.D. (h.c)",
    title: "Head",
    organization: "Indonesian National Food Agency",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Prof. Dr. Ir. Dadan Hindayana",
    title: "Head",
    organization: "National Nutrition Agency",
    image: "/placeholder.svg?height=400&width=300",
    category: "honorary",
    confirmed: false,
  },
  {
    name: "Prof. Dan A lancu",
    title: "Professor of Operations, Information and Technology",
    organization: "Stanford University",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Prof. Robert De Souza",
    title: "Professor",
    organization:
      "Department of Industrial Systems Engineering and Management & The Logistics Institute - Asia Pacific, NUS",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Prof. Dr. Ir. Kudang B. Seminar, M.Sc.",
    title: "Professor in Computer Technology",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Dr. Sari Intan Kailaku, S.TP., M.Si.",
    title: "Researcher",
    organization: "National Research and Innovation Agency (BRIN)",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Prof. Dr. Ir. Bambang Riyanto Trilaksono",
    title: "Professor of Electrical Engineering and Informatics",
    organization: "Bandung Institute of Technology",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
    title: "Head of Intelligent Information Management Laboratory",
    organization: "Sepuluh Nopember Institute of Technology (ITS)",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Dr. Karlisa Priandana, S.T., M.Eng.",
    title:
      "AI Expert and Director of Talent Development and Research Development",
    organization:
      "Directorate General of Research and Development, Ministry of Higher Education, Science and Technology, Republic of Indonesia",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Dr. Mira Maulida, S.TP., M.M.",
    title: "Lecturer",
    organization: "School of Business Management, BINUS University",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
  },
  {
    name: "Prof.Dr. Ir.Yandra Arkeman, M.Eng.",
    title:
      "Chairman of BRAIN (Blockchain, Robotics, & Artificial Intelligence Networks)",
    organization: "IPB University",
    image: "/placeholder.svg?height=400&width=300",
    category: "prominent",
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

  const openingSpeakers = speakers.filter(
    (speaker) => speaker.category === "opening"
  );
  const honorarySpeakers = speakers.filter(
    (speaker) => speaker.category === "honorary"
  );
  const prominentSpeakers = speakers.filter(
    (speaker) => speaker.category === "prominent"
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center text-blue-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Speakers
        </motion.h2>

        {/* Opening Speaker */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Opening Speaker
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openingSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* Honorary Speakers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Honorary Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honorarySpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>

        {/* Prominent Speakers */}
        <div>
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Prominent Speakers
          </h3>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {prominentSpeakers.map((speaker, index) => (
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
                {prominentSpeakers.map((speaker, index) => (
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
      </div>
    </section>
  );
};

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  let Icon = Users;
  if (speaker.category === "opening") Icon = Star;
  if (speaker.category === "honorary") Icon = Award;

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-64">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="text-white opacity-20 w-24 h-24" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
          <p className="text-sm opacity-90">{speaker.title}</p>
        </div>
      </div>
      <div className="p-4 bg-white bg-opacity-90">
        <p className="text-blue-600 font-medium">{speaker.organization}</p>
        {speaker.category === "honorary" && (
          <p className="text-sm text-gray-500 mt-2">
            {speaker.confirmed ? "Confirmed" : "To be confirmed"}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Speakers;
