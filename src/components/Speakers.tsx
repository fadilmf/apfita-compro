"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  X,
  ExternalLink,
  BookOpen,
  GraduationCap,
  AwardIcon,
  Globe,
  Building,
} from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
  category: "opening" | "honorary" | "prominent";
  confirmed?: boolean;
  bio?: string;
  scholarUrl?: string;
  achievements?: string[];
  researchAreas?: string[];
}

const speakers: Speaker[] = [
  {
    name: "Prof. Dr. Arif Satria, S.P., M.Si.",
    title: "Rector",
    organization: "IPB University",
    image: "/src/assets/opening1.jpg",
    category: "opening",
    bio: "Prof. Dr. Arif Satria is the Rector of IPB University and a distinguished professor in agricultural sciences. He has made significant contributions to sustainable agriculture and food security in Indonesia.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Recipient of the National Innovation Award",
      "Published over 100 research papers in international journals",
      "Led multiple national agricultural development programs",
    ],
    researchAreas: [
      "Sustainable Agriculture",
      "Food Security",
      "Agricultural Policy",
      "Rural Development",
    ],
  },
  {
    name: "Prof. Dr. Ir. Rachmat Pambudy, M.S.",
    title: "Minister of National Development Planning",
    organization: "Republic of Indonesia",
    image: "/src/assets/honorspik1.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Prof. Dr. Ir. Rachmat Pambudy is a prominent figure in Indonesia's development planning. His expertise spans economic policy, agricultural development, and sustainable resource management.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Former advisor to multiple Indonesian presidents",
      "Key architect of Indonesia's agricultural modernization strategy",
      "Author of numerous policy papers on economic development",
    ],
    researchAreas: [
      "Economic Development",
      "Agricultural Economics",
      "Public Policy",
      "Sustainable Development",
    ],
  },
  {
    name: "Dr. Ir. H. Andi Amran Sulaiman, M.P.",
    title: "Minister of Agriculture",
    organization: "Republic of Indonesia",
    image: "/src/assets/honorspik2.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Dr. Ir. H. Andi Amran Sulaiman has been instrumental in transforming Indonesia's agricultural sector. His leadership has focused on increasing productivity, improving farmer welfare, and enhancing food security.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Implemented innovative agricultural policies that increased national rice production",
      "Pioneered digital agriculture initiatives across Indonesia",
      "Recipient of multiple international awards for agricultural leadership",
    ],
    researchAreas: [
      "Agricultural Innovation",
      "Food Security",
      "Agricultural Technology",
      "Rural Development",
    ],
  },
  {
    name: "Ir. Sakti Wahyu Trenggono, M.M.",
    title: "Minister of Maritime Affairs and Fisheries",
    organization: "Republic of Indonesia",
    image: "/src/assets/honorspik3.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Ir. Sakti Wahyu Trenggono has been at the forefront of developing Indonesia's maritime and fisheries sector. His work focuses on sustainable fishing practices, marine conservation, and coastal community development.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Led major reforms in Indonesia's fishing industry",
      "Implemented policies to combat illegal fishing",
      "Developed programs to support small-scale fishermen",
    ],
    researchAreas: [
      "Maritime Economics",
      "Sustainable Fisheries",
      "Marine Conservation",
      "Coastal Development",
    ],
  },
  {
    name: "Dr. Hanif Faisol Nurofiq, S.Hut., M.P.",
    title: "Minister of the Environment",
    organization: "Republic of Indonesia",
    image: "/src/assets/honorspik4.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Dr. Hanif Faisol Nurofiq is dedicated to environmental conservation and sustainable development in Indonesia. His work addresses climate change, forest preservation, and environmental policy.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Architect of Indonesia's climate change adaptation strategy",
      "Led major reforestation initiatives across the archipelago",
      "Represented Indonesia in multiple international climate forums",
    ],
    researchAreas: [
      "Environmental Policy",
      "Climate Change",
      "Forest Conservation",
      "Sustainable Development",
    ],
  },
  {
    name: "Arief Prasetyo Adi, S.T., M.T., Ph.D. (h.c)",
    title: "Head",
    organization: "Indonesian National Food Agency",
    image: "/src/assets/honorspik5.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Arief Prasetyo Adi leads Indonesia's National Food Agency, focusing on food security, nutrition, and agricultural innovation. His work has been crucial in addressing food challenges across the nation.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Developed Indonesia's comprehensive food security framework",
      "Implemented innovative food distribution systems",
      "Led initiatives to reduce food waste and improve nutrition",
    ],
    researchAreas: [
      "Food Security",
      "Nutrition Policy",
      "Agricultural Supply Chains",
      "Food Technology",
    ],
  },
  {
    name: "Prof. Dr. Ir. Dadan Hindayana",
    title: "Head",
    organization: "National Nutrition Agency",
    image: "/src/assets/honorspik6.jpg",
    category: "honorary",
    confirmed: false,
    bio: "Prof. Dr. Ir. Dadan Hindayana is an expert in nutrition and public health. His work at the National Nutrition Agency focuses on improving nutritional outcomes across Indonesia, particularly for vulnerable populations.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Pioneered community-based nutrition programs",
      "Developed national nutritional guidelines",
      "Led research on addressing micronutrient deficiencies",
    ],
    researchAreas: [
      "Public Health Nutrition",
      "Maternal and Child Nutrition",
      "Food Fortification",
      "Nutrition Policy",
    ],
  },
  {
    name: "Prof. Dan A lancu",
    title: "Professor of Operations, Information and Technology",
    organization: "Stanford University",
    image: "/src/assets/promspik1.jpg",
    category: "prominent",
    bio: "Prof. Dan A. Iancu is a distinguished professor at Stanford University specializing in operations research, optimization, and decision-making under uncertainty. His research has applications in agricultural supply chains and resource allocation.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Multiple best paper awards in operations research",
      "Developed novel optimization algorithms used in agricultural planning",
      "Consultant to major agricultural technology companies",
    ],
    researchAreas: [
      "Operations Research",
      "Decision Analysis",
      "Supply Chain Optimization",
      "Agricultural Technology",
    ],
  },
  {
    name: "Prof. Robert De Souza",
    title: "Professor",
    organization:
      "Department of Industrial Systems Engineering and Management & The Logistics Institute - Asia Pacific, NUS",
    image: "/src/assets/promspik2.jpg",
    category: "prominent",
    bio: "Prof. Robert De Souza is a leading expert in logistics and supply chain management at the National University of Singapore. His work has significant implications for agricultural supply chains and food distribution systems.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Pioneered innovative logistics solutions for perishable agricultural products",
      "Developed frameworks for sustainable supply chain management",
      "Led major research initiatives on digital supply chains",
    ],
    researchAreas: [
      "Supply Chain Management",
      "Logistics Systems",
      "Digital Supply Chains",
      "Sustainable Distribution",
    ],
  },
  {
    name: "Prof. Dr. Ir. Kudang B. Seminar, M.Sc.",
    title: "Professor in Computer Technology",
    organization: "IPB University",
    image: "/src/assets/promspik3.jpg",
    category: "prominent",
    bio: "Prof. Dr. Ir. Kudang B. Seminar is a leading expert in agricultural informatics and computer technology applications in agriculture. His work bridges technology and agricultural practices to enhance productivity and sustainability.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Developed multiple agricultural information systems used across Indonesia",
      "Pioneer in precision agriculture applications in Southeast Asia",
      "Led major digital transformation initiatives in agricultural education",
    ],
    researchAreas: [
      "Agricultural Informatics",
      "Precision Agriculture",
      "Digital Farming",
      "Agricultural Decision Support Systems",
    ],
  },
  {
    name: "Dr. Sari Intan Kailaku, S.TP., M.Si.",
    title: "Researcher",
    organization: "National Research and Innovation Agency (BRIN)",
    image: "/src/assets/promspik4.jpg",
    category: "prominent",
    bio: "Dr. Sari Intan Kailaku is a distinguished researcher at Indonesia's National Research and Innovation Agency. Her work focuses on food technology, post-harvest processing, and value addition in agricultural products.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Developed innovative food processing technologies",
      "Led research on reducing post-harvest losses",
      "Multiple patents in food technology",
    ],
    researchAreas: [
      "Food Technology",
      "Post-harvest Processing",
      "Food Safety",
      "Value-added Agriculture",
    ],
  },
  {
    name: "Prof. Dr. Ir. Bambang Riyanto Trilaksono",
    title: "Professor of Electrical Engineering and Informatics",
    organization: "Bandung Institute of Technology",
    image: "/src/assets/promspik5.jpg",
    category: "prominent",
    bio: "Prof. Dr. Ir. Bambang Riyanto Trilaksono specializes in electrical engineering and informatics at ITB. His research includes applications of control systems and robotics in agriculture and food production.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Pioneered agricultural robotics applications in Indonesia",
      "Developed automated systems for precision agriculture",
      "Led major research initiatives on smart farming",
    ],
    researchAreas: [
      "Agricultural Robotics",
      "Control Systems",
      "Smart Farming",
      "Automation in Agriculture",
    ],
  },
  {
    name: "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
    title: "Head of Intelligent Information Management Laboratory",
    organization: "Sepuluh Nopember Institute of Technology (ITS)",
    image: "/src/assets/promspik6.jpg",
    category: "prominent",
    bio: "Prof. Drs. Ec. Ir. Riyanarto Sarno leads the Intelligent Information Management Laboratory at ITS. His expertise spans information systems, business process management, and artificial intelligence applications in agriculture.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Developed AI systems for agricultural decision support",
      "Pioneer in business process optimization for agricultural enterprises",
      "Led major digital transformation projects in the agricultural sector",
    ],
    researchAreas: [
      "Information Systems",
      "Business Process Management",
      "Artificial Intelligence",
      "Agricultural Informatics",
    ],
  },
  {
    name: "Dr. Karlisa Priandana, S.T., M.Eng.",
    title:
      "AI Expert and Director of Talent Development and Research Development",
    organization:
      "Directorate General of Research and Development, Ministry of Higher Education, Science and Technology, Republic of Indonesia",
    image: "/src/assets/promspik7.jpg",
    category: "prominent",
    bio: "Dr. Karlisa Priandana is an AI expert focusing on applications in agriculture and natural resource management. Her work at the Ministry of Higher Education, Science and Technology drives innovation in agricultural technology.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Led the development of AI applications for crop disease detection",
      "Pioneered machine learning approaches for agricultural yield prediction",
      "Developed talent programs that have trained hundreds of agricultural technologists",
    ],
    researchAreas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Agricultural Technology",
      "Talent Development",
    ],
  },
  {
    name: "Dr. Mira Maulida, S.TP., M.M.",
    title: "Lecturer",
    organization: "School of Business Management, BINUS University",
    image: "/src/assets/promspik8.jpg",
    category: "prominent",
    bio: "Dr. Mira Maulida specializes in agricultural business management and food industry economics at BINUS University. Her research focuses on value chain analysis, agribusiness, and entrepreneurship in the agricultural sector.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Developed innovative agribusiness models adopted by multiple enterprises",
      "Led research on agricultural entrepreneurship and startup development",
      "Consultant to major food industry companies",
    ],
    researchAreas: [
      "Agribusiness Management",
      "Food Industry Economics",
      "Agricultural Entrepreneurship",
      "Value Chain Analysis",
    ],
  },
  {
    name: "Prof.Dr. Ir.Yandra Arkeman, M.Eng.",
    title:
      "Chairman of BRAIN (Blockchain, Robotics, & Artificial Intelligence Networks)",
    organization: "IPB University",
    image: "/src/assets/promspik11.jpg",
    category: "prominent",
    bio: "Prof. Dr. Ir. Yandra Arkeman chairs the BRAIN initiative at IPB University, focusing on cutting-edge technologies like blockchain, robotics, and AI in agriculture. His work is transforming agricultural practices through digital innovation.",
    scholarUrl: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    achievements: [
      "Pioneer in blockchain applications for agricultural supply chains",
      "Developed robotic systems for precision agriculture",
      "Led major AI initiatives for agricultural optimization",
    ],
    researchAreas: [
      "Blockchain Technology",
      "Agricultural Robotics",
      "Artificial Intelligence",
      "Digital Agriculture",
    ],
  },
];

const Speakers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

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

  const openModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Opening Speaker
          </h3>
          <div className="flex justify-center">
            {openingSpeakers.map((speaker, index) => (
              <div key={index} className="w-full max-w-2xl">
                <SpeakerCard
                  speaker={speaker}
                  isOpening
                  onClick={() => openModal(speaker)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Honorary Speakers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Honorary Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honorarySpeakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                speaker={speaker}
                onClick={() => openModal(speaker)}
              />
            ))}
          </div>
        </div>

        {/* Prominent Speakers */}
        <div>
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Prominent Speakers
          </h3>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {prominentSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                speaker={speaker}
                onClick={() => openModal(speaker)}
              />
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
                    <SpeakerCard
                      speaker={speaker}
                      onClick={() => openModal(speaker)}
                    />
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

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <SpeakerModal speaker={selectedSpeaker} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

const SpeakerCard: React.FC<{
  speaker: Speaker;
  isOpening?: boolean;
  onClick?: () => void;
}> = ({ speaker, isOpening, onClick }) => {
  let Icon = Users;
  if (speaker.category === "opening") Icon = Star;
  if (speaker.category === "honorary") Icon = Award;

  return (
    <motion.div
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
        ${isOpening ? "aspect-[16/9]" : "aspect-[4/5]"}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            isOpening
              ? "bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"
              : "bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"
          }`}
        />

        {/* Content */}
        <div
          className={`relative h-full flex ${
            isOpening ? "items-center" : "items-end"
          } p-6`}
        >
          <div className={`${isOpening ? "max-w-lg" : "w-full"}`}>
            {/* Category Icon */}
            <div className={`mb-4 ${isOpening ? "mb-6" : ""}`}>
              <Icon
                className={`${
                  isOpening ? "w-12 h-12" : "w-8 h-8"
                } text-white opacity-90`}
              />
            </div>

            {/* Speaker Info */}
            <div className="space-y-2">
              <h3
                className={`font-bold text-white ${
                  isOpening ? "text-4xl" : "text-2xl"
                } leading-tight`}
              >
                {speaker.name}
              </h3>
              <p
                className={`text-blue-100 ${isOpening ? "text-xl" : "text-sm"}`}
              >
                {speaker.title}
              </p>
              <p
                className={`text-blue-200 ${isOpening ? "text-lg" : "text-sm"}`}
              >
                {speaker.organization}
              </p>
              {speaker.category === "honorary" && !speaker.confirmed && (
                <p className="text-amber-300 text-sm mt-2 font-medium">
                  To be confirmed
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SpeakerModal: React.FC<{
  speaker: Speaker;
  onClose: () => void;
}> = ({ speaker, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4 bg-black/70 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[80vh] overflow-y-auto my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Speaker Name and Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              {speaker.name}
            </h3>
            <p className="text-xl text-blue-100">{speaker.title}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Organization */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
            <div className="p-3 bg-blue-100 rounded-full">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Organization</p>
              <p className="text-lg font-medium text-gray-900">
                {speaker.organization}
              </p>
            </div>
          </div>

          {/* Biography */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Biography</h4>
            <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
          </div>

          {/* Research Areas */}
          {speaker.researchAreas && speaker.researchAreas.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Research Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {speaker.researchAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {speaker.achievements && speaker.achievements.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AwardIcon className="w-5 h-5 text-blue-600" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {speaker.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Google Scholar Link */}
          {speaker.scholarUrl && (
            <div className="mt-8">
              <a
                href={speaker.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                View Google Scholar Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Confirmation Status for Honorary Speakers */}
          {speaker.category === "honorary" && !speaker.confirmed && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-700 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Participation to be confirmed</span>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Speakers;
