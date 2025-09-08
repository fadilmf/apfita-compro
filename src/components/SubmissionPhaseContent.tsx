import {
  FileText,
  // Calendar,
  ExternalLink,
  Award,
  BookOpen,
  Star,
  Sparkles,
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Current Phase Badge */}
      {/* <div className="text-center">
        <div className="inline-flex text-center items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium mb-4">
          <Calendar className="w-4 h-4" />
          Current Phase: Abstract Submission
        </div>
      </div> */}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-900 via-amber-600 to-amber-800 bg-clip-text text-transparent mb-6 text-balance py-2 md:py-6">
          The abstract submission period is now closed.
        </h1>
      </motion.div>
      
      {/* IOP Conference Series Highlight Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-8 border border-slate-200/50 overflow-hidden backdrop-blur-sm">
          {/* Elegant Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full translate-y-16 -translate-x-16"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>

          <div className="relative z-10 text-center">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Official Publication Partner
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent mb-4">
              IOP Conference Series: Earth and Environmental Science
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              We are honored to collaborate with{" "}
              <span className="font-semibold text-blue-700">
                IOP Publishing
              </span>{" "}
              as our official publisher. Selected papers will be published in
              the distinguished{" "}
              <span className="font-semibold text-indigo-700">
                IOP Conference Series: Earth and Environmental Science (EES)
              </span>
              , ensuring global visibility and academic recognition for your
              research.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 mb-1">
                      Indexed Publication
                    </div>
                    <div className="text-sm text-slate-600">
                      Scopus & Web of Science
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 mb-1">
                      Open Access
                    </div>
                    <div className="text-sm text-slate-600">
                      Global Accessibility
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/80">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 mb-1">
                      Peer Reviewed
                    </div>
                    <div className="text-sm text-slate-600">
                      Quality Assurance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Phase Cards */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative h-full"
            >
              {/* Elegant Card Design */}
              <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-slate-200/50 hover:border-blue-200/50 overflow-hidden backdrop-blur-sm">
                {/* Subtle Border Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative flex flex-col justify-between h-full px-8 py-10 space-y-6 z-10">
                  <div className="space-y-4">
                    {/* Elegant Icon Container */}
                    <div className="relative w-16 h-16 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 transition-all duration-500 shadow-sm group-hover:shadow-md border border-slate-200/50 group-hover:border-transparent">
                        <Icon className="w-8 h-8 text-slate-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      </div>

                      {/* Subtle Shine Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Elegant Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  {/* Elegant Action Button */}
                  <a
                    href={phase.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 transition-all duration-500 group/btn mt-auto shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden"
                  >
                    {/* Subtle Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative z-10">Submission Link</span>
                    <ExternalLink className="relative z-10 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Subtle Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full translate-x-10 translate-y-10 group-hover:scale-125 transition-transform duration-700"></div>
              </div>
            </motion.div>
          );
        })}{" "}
      </div>

    </div>
  );
}
