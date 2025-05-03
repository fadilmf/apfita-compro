"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronLeft,
  ChevronRight,
  Music,
  MicOffIcon as MusicOff,
  Play,
  Pause,
  X,
  Volume2,
  Heart,
  Sparkles,
  BellRingIcon as Ring,
  Cake,
  Gift,
  PartyPopper,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Define the data structure for each person's congratulatory message
interface PersonMessage {
  id: string;
  name: string;
  message: string;
  theme: {
    background: string;
    color: string;
    accentColor: string;
  };
  voiceNote?: string;
}

// Sample data for each person
const messages: PersonMessage[] = [
  {
    id: "adit",
    name: "Adit Arma",
    message:
      "Selamat menempuh hidup baru Vian. Semoga dapat menjalani bahtera pernikahan dengan baik dan selalu menjaga keutuhan keluarga. Gue tau lu bisa Vian. Aamiinn",
    theme: {
      background: "from-blue-400 to-cyan-300",
      color: "text-blue-900",
      accentColor: "bg-blue-600",
    },
    voiceNote: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "alam",
    name: "Alam",
    message:
      "Selamat menikah mas vian, mudah-mudahan pernikahan mas vian menjadi awal dari kehidupan yang bahagia dan penuh keberkahan, aamiin",
    theme: {
      background: "from-green-400 to-emerald-300",
      color: "text-emerald-900",
      accentColor: "bg-emerald-600",
    },
    voiceNote: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "ipano",
    name: "Ipano",
    message:
      "Selamat membuka chapter baru, selamat menjalani lembaran putih tak bernoda. Semoga setiap halaman yang nantinya tertulis seiring waktu akan indah dengan tinta sakinah, dihiasi ornamen mawaddah, dan dijilid erat oleh rahmah-nya. Barakallahu lakuma wa baraka 'alaykuma wa jama'a baynakuma fi khayr.",
    theme: {
      background: "from-purple-400 to-indigo-300",
      color: "text-indigo-900",
      accentColor: "bg-indigo-600",
    },
    voiceNote: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "yusuf",
    name: "Yusuf",
    message:
      "Arvian yang selalu jadi panutan, Kini resmi jadi imam seutuhnya. Semoga rumah tangga Antum penuh ketenangan, Dan jadi ladang pahala dunia akhirat bersama.",
    theme: {
      background: "from-amber-400 to-yellow-300",
      color: "text-amber-900",
      accentColor: "bg-amber-600",
    },
    voiceNote: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "surya",
    name: "Surya F. Helmianto",
    message: '"SELAMAT MAS PIAN"',
    theme: {
      background: "from-red-400 to-rose-300",
      color: "text-rose-900",
      accentColor: "bg-rose-600",
    },
    voiceNote: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

// Shared gallery photos
const galleryPhotos = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
];

export default function Congrats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isVoiceNotePlaying, setIsVoiceNotePlaying] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [activeSection, setActiveSection] = useState("landing");

  const musicRef = useRef<HTMLAudioElement>(null);
  const voiceNoteRef = useRef<HTMLAudioElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const currentPerson = messages[currentIndex];

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  // Auto play saat pertama render
  useEffect(() => {
    const music = musicRef.current;
    if (music) {
      const playMusic = async () => {
        try {
          await music.play();
          setIsMusicPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked:", err);
        }
      };
      playMusic();
    }
  }, []);

  // Toggle on button click
  const toggleMusic = () => {
    if (musicRef.current) {
      if (isMusicPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Handle voice note toggle
  const toggleVoiceNote = () => {
    if (voiceNoteRef.current) {
      if (isVoiceNotePlaying) {
        voiceNoteRef.current.pause();
      } else {
        voiceNoteRef.current.play();
      }
      setIsVoiceNotePlaying(!isVoiceNotePlaying);
    }
  };

  // Handle gallery navigation
  const openGallery = (index: number) => {
    setCurrentPhoto(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) =>
      prev === galleryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev));
  };

  // Scroll to sections
  const scrollToMessages = () => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Reset voice note when changing person
  useEffect(() => {
    if (voiceNoteRef.current) {
      voiceNoteRef.current.pause();
      voiceNoteRef.current.currentTime = 0;
      setIsVoiceNotePlaying(false);
    }

    // Apply animations to the current message
    const timeline = gsap.timeline();
    const messageCard = document.querySelector(`#message-${currentPerson.id}`);

    if (messageCard) {
      timeline.fromTo(
        messageCard.querySelectorAll(".animate-in"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex, currentPerson.id]);

  // Initialize animations
  useEffect(() => {
    // Landing animations
    if (landingRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        landingRef.current.querySelectorAll(".fade-in"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
      );
    }

    // Scroll tracking for active section
    const sections = [
      landingRef.current,
      messagesRef.current,
      galleryRef.current,
    ];

    const scrollHandler = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (sections[0] && scrollPosition < sections[1]?.offsetTop!) {
        setActiveSection("landing");
      } else if (sections[1] && scrollPosition < sections[2]?.offsetTop!) {
        setActiveSection("messages");
      } else {
        setActiveSection("gallery");
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Handle voice note ended event
  useEffect(() => {
    const voiceNote = voiceNoteRef.current;

    const handleVoiceNoteEnded = () => {
      setIsVoiceNotePlaying(false);
    };

    if (voiceNote) {
      voiceNote.addEventListener("ended", handleVoiceNoteEnded);
    }

    return () => {
      if (voiceNote) {
        voiceNote.removeEventListener("ended", handleVoiceNoteEnded);
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showGallery) {
        if (e.key === "ArrowLeft") {
          prevPhoto();
        } else if (e.key === "ArrowRight") {
          nextPhoto();
        } else if (e.key === "Escape") {
          closeGallery();
        }
      } else if (activeSection === "messages") {
        if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "ArrowRight") {
          goToNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showGallery, activeSection]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Audio elements */}
      <audio
        ref={musicRef}
        src="https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
        loop
        autoPlay
      />
      {currentPerson.voiceNote && (
        <audio ref={voiceNoteRef} src={currentPerson.voiceNote} />
      )}

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`w-3 h-3 rounded-full transition-colors ${
            activeSection === "landing" ? "bg-pink-500" : "bg-white/50"
          }`}
          aria-label="Go to landing section"
        />
        <button
          onClick={scrollToMessages}
          className={`w-3 h-3 rounded-full transition-colors ${
            activeSection === "messages" ? "bg-pink-500" : "bg-white/50"
          }`}
          aria-label="Go to messages section"
        />
        <button
          onClick={scrollToGallery}
          className={`w-3 h-3 rounded-full transition-colors ${
            activeSection === "gallery" ? "bg-pink-500" : "bg-white/50"
          }`}
          aria-label="Go to gallery section"
        />
      </div>

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-40 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? (
          <Music className="w-6 h-6 text-pink-600" />
        ) : (
          <MusicOff className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Landing Section */}
      <section
        ref={landingRef}
        className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex flex-col items-center justify-center relative px-4 py-20"
      >
        {/* Floating decorative icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  5 + Math.random() * 5
                }s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {(() => {
                const icons = [
                  <Heart
                    key="heart"
                    className="text-pink-400"
                    size={16 + Math.random() * 16}
                  />,
                  <Sparkles
                    key="sparkles"
                    className="text-amber-400"
                    size={16 + Math.random() * 16}
                  />,
                  <Ring
                    key="ring"
                    className="text-yellow-400"
                    size={16 + Math.random() * 16}
                  />,
                  <Gift
                    key="gift"
                    className="text-blue-400"
                    size={16 + Math.random() * 16}
                  />,
                  <PartyPopper
                    key="party"
                    className="text-green-400"
                    size={16 + Math.random() * 16}
                  />,
                ];
                return icons[Math.floor(Math.random() * icons.length)];
              })()}
            </div>
          ))}
        </div>

        <div className="text-center z-10 max-w-4xl">
          <div className="flex justify-center gap-4 mb-4 fade-in">
            <Ring className="w-8 h-8 text-yellow-500" />
            <Heart className="w-8 h-8 text-pink-500" />
            <Cake className="w-8 h-8 text-purple-500" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6 fade-in">
            Selamat Menempuh Hidup Baru
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 fade-in">
            Ucapan selamat dan doa untuk pernikahan Vian
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
            Semoga pernikahan ini menjadi awal dari kehidupan yang bahagia dan
            penuh keberkahan. Barakallahu lakuma wa baraka 'alaykuma wa jama'a
            baynakuma fi khayr.
          </p>
          <button
            onClick={scrollToMessages}
            className="flex items-center mx-auto bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-colors duration-300 fade-in"
          >
            Lihat Ucapan <ChevronDown className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Personal Messages Section */}
      <section
        ref={messagesRef}
        className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-50 py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-800">
            Ucapan Personal
          </h2>

          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Previous message"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
              aria-label="Next message"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Messages carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPerson.id}
                  id={`message-${currentPerson.id}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto"
                >
                  {/* Person's message card */}
                  <div
                    className={`bg-gradient-to-br ${currentPerson.theme.background} rounded-3xl shadow-xl p-8 mb-8`}
                  >
                    <div className="animate-in mb-6 flex items-center">
                      <div
                        className={`w-12 h-12 rounded-full ${currentPerson.theme.accentColor} flex items-center justify-center text-white font-bold text-xl`}
                      >
                        {currentPerson.name.charAt(0)}
                      </div>
                      <h3
                        className={`ml-4 text-2xl font-bold ${currentPerson.theme.color}`}
                      >
                        {currentPerson.name}
                      </h3>
                    </div>

                    <div className="animate-in mb-8">
                      <p className="text-gray-800 text-lg leading-relaxed">
                        {currentPerson.message}
                      </p>
                    </div>

                    {/* Voice note player */}
                    {currentPerson.voiceNote && (
                      <div className="animate-in">
                        <div
                          className={`flex items-center p-3 rounded-full ${currentPerson.theme.accentColor} bg-opacity-20`}
                        >
                          <button
                            onClick={toggleVoiceNote}
                            className={`w-10 h-10 rounded-full ${currentPerson.theme.accentColor} flex items-center justify-center text-white`}
                          >
                            {isVoiceNotePlaying ? (
                              <Pause className="w-5 h-5" />
                            ) : (
                              <Play className="w-5 h-5" />
                            )}
                          </button>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-700">
                              Voice Message
                            </p>
                            <div className="h-1 bg-gray-300 rounded-full mt-1 overflow-hidden">
                              <div
                                className={`h-full ${currentPerson.theme.accentColor}`}
                                style={{
                                  width: isVoiceNotePlaying ? "100%" : "0%",
                                  transition: "width 0.1s linear",
                                }}
                              ></div>
                            </div>
                          </div>
                          <Volume2 className="w-5 h-5 text-gray-600 ml-2" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to message ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
            >
              Lihat Galeri <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-800">
            Galeri Kenangan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openGallery(index)}
              >
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full screen gallery */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="w-full max-w-4xl p-4">
            <img
              src={galleryPhotos[currentPhoto] || "/placeholder.svg"}
              alt={`Full size photo ${currentPhoto + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            <div className="mt-4 flex justify-center space-x-2">
              {galleryPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPhoto ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
