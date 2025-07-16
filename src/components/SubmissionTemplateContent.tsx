import {
  FileText,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

interface TemplateCard {
  title: string;
  icon: React.ElementType;
  date: string;
  href: string;
}

export default function SubmissionTemplateContent() {
  const templates: TemplateCard[] = [
    {
      title: "Abstract Template",
      icon: FileText,
      date: "17/04/2025",
      href: "https://docs.google.com/document/d/1ic43K8LuKlkhM8Uajchf9OVvVBwzfMkq/edit?tab=t.0",
    },
    {
      title: "IOP Full Paper Template",
      icon: FileText,
      date: "Coming Soon",
      href: "https://publishingsupport.iopscience.iop.org/questions/templates-and-guidelines-for-proceedings-papers/",
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
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">
          Template(s)
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
          
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {templates.map((template, index) => {
          const Icon = template.icon;
          return (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {/* Kontainer isi dengan flex-col agar tombol bisa turun ke bawah */}
              <div className="flex flex-col justify-between h-full px-6 py-10">
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {template.title}
                  </h3>
                </div>

                {/* Tombol di bawah */}
                <a
                  href={template.href}
                  className="inline-flex items-center justify-between w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors duration-300 group/btn mt-auto"
                >
                  <span className="group-hover:text-white">View Template</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
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
        * Please read the templatelines carefully before submitting your manuscript
      </motion.div> */}
    </div>
  );
}
