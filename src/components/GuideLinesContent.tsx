import {
  ShieldCheck,
  FileText,
  BookOpen,
  FileLock,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

interface GuidelineCard {
  title: string;
  icon: React.ElementType;
  date: string;
  href: string;
}

export default function GuidelinesContent() {
  const guidelines: GuidelineCard[] = [
    {
      title: "Proceedings Peer Review Policy",
      icon: ShieldCheck,
      date: "17/04/2025",
      href: "https://publishingsupport.iopscience.iop.org/questions/proceedings-peer-review-policy/",
    },
    {
      title: "IOP Conference Publication Procedure",
      icon: FileText,
      date: "06/08/2025",
      href: "https://publishingsupport.iopscience.iop.org/questions/iop-conference-series-publication-procedure/",
    },
    {
      title: "Author Guideline for Conference",
      icon: BookOpen,
      date: "06/08/2025",
      href: "https://publishingsupport.iopscience.iop.org/author-guidelines-for-conference-proceedings/",
    },
    {
      title: "Terms of Use",
      icon: FileLock,
      date: "06/08/2025",
      href: "https://www.morressier.com/terms",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Guideline(s)
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
          Type of Articles: Research article includes original research paper in
          quantitative, qualitative or both; Review refers to systematic review,
          literature review, and topical issues of interest related to APFITA
          2025 Topics.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {guidelines.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Premium Card with Luxury Design */}
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-blue-200 overflow-hidden">
                {/* Luxury Border Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white"></div>
                </div>

                {/* Premium Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                {/* Card Content */}
                <div className="relative flex flex-col justify-between h-full px-8 py-10 z-10">
                  <div>
                    {/* Premium Date Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md">
                        {guide.date}
                      </span>
                    </div>

                    {/* Luxury Icon Container */}
                    <div className="relative w-16 h-16 mb-6">
                      {/* Icon Background with Gradient */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-500 shadow-md group-hover:shadow-lg border border-blue-100 group-hover:border-transparent">
                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      </div>

                      {/* Premium Shine Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Premium Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                      {guide.title}
                    </h3>
                  </div>

                  {/* Luxury Action Button */}
                  <a
                    href={guide.href}
                    className="relative inline-flex items-center justify-between w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-500 group/btn mt-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative z-10">View File</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Premium Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center  text-gray-500 font-bold text-lg"
      >
        * Please read the guidelines carefully before submitting your manuscript
      </motion.div>
    </div>
  );
}
