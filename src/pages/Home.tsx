import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import HomeNavigation from "@/components/HomeNavigation";
import { X } from "lucide-react";
import SeriesContent from "@/components/SeriesContent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setShowModal(true);
      localStorage.setItem("modalShown", "true");
    }
  }, []);

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Welcome, APFITA Enthusiast!
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed text-center">
              Thank you for submitting your abstract to APFITA. We truly
              appreciate your contribution to advancing agricultural informatics
              and technology. Please kindly check your email for detailed
              information regarding the review process and the next steps. If
              you wish to proceed with the payment confirmation, you may
              continue through the registration page. Otherwise, feel free to
              explore this website at your convenience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="/registration"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow text-sm md:text-base font-medium text-center transition"
              >
                Proceed to Registration
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl shadow text-sm md:text-base font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <Hero />
      <Welcome />
      <Flyer />
      <SeriesContent />
      <Imdates />
      <HomeNavigation />
      <Sponsors />
    </>
  );
};

export default Home;
