import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Clock,
  MapPin,
  DollarSign,
  FileText,
  FileDown,
} from "lucide-react";

const navItems = [
  { label: "Theme & Topic", href: "/conference#topics", icon: BookOpen },
  { label: "Speakers", href: "/conference#speakers", icon: Users },
  { label: "Time Schedule", href: "/time-schedule", icon: Clock },
  { label: "Venue", href: "/venue", icon: MapPin },
  { label: "Registration Fee", href: "/regfee", icon: DollarSign },
  { label: "Submission", href: "/submissions#submission", icon: FileText },
  { label: "Template", href: "/submissions#template", icon: FileDown },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeNavigation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6"
          >
            Join the Premier Agricultural Technology Conference
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Select your registration package and be part of the innovation
            shaping the future of agriculture.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => (window.location.href = item.href)}
              className="hover:bg-blue-50 bg-blue-600 hover:text-blue-800 hover:ring-1 hover:ring-blue-800 text-white font-semibold py-4 px-3 rounded-lg shadow transition-all flex flex-col items-center justify-center gap-2 cursor-pointer"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
