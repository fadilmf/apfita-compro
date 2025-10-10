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
import { speakers, Speaker } from "../data/speakers";

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
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent text-center mb-6"
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
          className={`absolute inset-0 w-full h-full object-cover ${
            isOpening ? "object-[center_9%]" : "object-[center_9%]"
          }`}
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
          className={`relative h-full flex p-6 ${
            isOpening ? "items-end" : "items-end"
          }`}
        >
          <div className={`${isOpening ? "max-w-lg" : "w-full"}`}>
            {/* Category Icon */}
            <div className={`mb-4`}>
              <Icon
                className={`${
                  isOpening
                    ? "w-4 h-4 md:w-12 md:h-12"
                    : "w-6 h-6 md:w-8 md:h-8"
                } text-white opacity-90`}
              />
            </div>

            {/* Speaker Info */}
            <div className="space-y-2">
              <h3
                className={`font-bold text-white ${
                  isOpening ? "text-xs md:text-xl" : "text-sm md:text-base"
                } leading-tight`}
              >
                {speaker.name}
              </h3>
              <p
                className={`text-blue-100 ${
                  isOpening ? "text-xs md:text-xl" : "text-sm md:text-base"
                }`}
              >
                {speaker.title}
              </p>
              <p
                className={`text-blue-200 ${
                  isOpening ? "text-xs md:text-xl" : "text-sm md:text-base"
                }`}
              >
                {speaker.organization}
              </p>
              {/* {speaker.category === "honorary" && !speaker.confirmed && (
                <p className="text-amber-300 text-sm mt-2 font-medium">
                  To be confirmed
                </p>
              )} */}
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
            className="w-full h-full object-contain object-center"
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
                View More Profile
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
