import {
  FileText,
  Calendar,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

interface PhaseCard {
  title: string;
  desc: string;
  icon: React.ElementType;
  href: string;
}

export default function SubmissionPhaseContent() {
  const phases: PhaseCard[] = [
    {
      title: "Presentation with Publication",
      icon: FileText,
      desc: "For researchers are both present and publish their work in the IOP, please submit your abstract via the Morressier platform, please create an account if you do not already have one. If you are an existing user, kindly log in and follow the submission instructions provided on the platform",
      href: "https://www.morressier.com/call-for-abstracts/APFITA-2025",
    },
    {
      title: "Presentation without Publication",
      icon: FileText,
      desc: "For researchers who are interested in presenting without publication, abstract submissions may be made through the following link",
      href: "https://ipb.link/apfita2025-conference",
    },
    {
      title: "Participant Only",
      icon: FileText,
      desc: "For participants attending without presentation or publication, please fill out the form at the link below",
      href: "https://ipb.link/apfita2025-conference",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="text-center">

      <div className="inline-flex text-center items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium mb-4">
        <Calendar className="w-4 h-4" />
        Current Phase: Abstract Submission
      </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">
          Abstract Submission Now Open!
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {/* Kontainer isi dengan flex-col agar tombol bisa turun ke bawah */}
              <div className="flex flex-col justify-between h-full px-6 py-10 space-y-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {phase.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-900">
                    {phase.desc}
                  </p>
                </div>

                {/* Tombol di bawah */}
                <a
                  href={phase.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors duration-300 group/btn mt-auto"
                >
                  <span className="group-hover:text-white">Submission Link</span>
                  <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>


      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        * Please read the phaselines carefully before submitting your manuscript
      </motion.div> */}
    </div>
  );
}
