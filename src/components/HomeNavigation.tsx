import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Clock,
  MapPin,
  DollarSign,
  FileText,
  FileDown,
  ArrowRight,
  Sparkles,
  Building,
  Car,
  UserCheck,
  ScrollText,
  Users2,
} from "lucide-react";

const navItems = [
  {
    label: "Theme & Topic",
    href: "/conference#topics",
    icon: BookOpen,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    label: "Speakers",
    href: "/conference#speakers",
    icon: Users,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    label: "Time Schedule",
    href: "/time-schedule",
    icon: Clock,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    label: "Venue",
    href: "/venue",
    icon: MapPin,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    label: "Registration",
    href: "/registration",
    icon: DollarSign,
    accent: "from-indigo-600 to-blue-600",
  },
  {
    label: "Submission",
    href: "/submissions#submission",
    icon: FileText,
    accent: "from-purple-500 to-indigo-500",
  },
  {
    label: "Template",
    href: "/submissions#template",
    icon: FileDown,
    accent: "from-blue-500 to-indigo-500",
  },
  {
    label: "Guideline",
    href: "/submissions#guideline",
    icon: ScrollText,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    label: "Nearby Hotel",
    href: "/venue#nearby-hotel",
    icon: Building,
    accent: "from-rose-500 to-pink-500",
  },
  {
    label: "Transportation",
    href: "/venue#how-to-reach",
    icon: Car,
    accent: "from-orange-500 to-amber-500",
  },
  {
    label: "Committee",
    href: "/committee",
    icon: UserCheck,
    accent: "from-violet-500 to-purple-500",
  },
  {
    label: "Board Member",
    href: "/board-members",
    icon: Users2,
    accent: "from-teal-500 to-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.8,
    },
  },
};

const buttonVariants = {
  rest: {
    scale: 1,
    y: 0,
    rotateY: 0,
    boxShadow:
      "0 8px 32px -8px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)",
  },
  hover: {
    scale: 1.05,
    y: -8,
    rotateY: 5,
    boxShadow:
      "0 32px 64px -12px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

const sparkleVariants = {
  hidden: { opacity: 0, scale: 0, rotate: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

export default function HomeNavigation() {
  return (
    <section className="relative py-32 bg-white">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.3),transparent_50%)]" />
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%22none%22%20fillRule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fillOpacity=%220.02%22%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40' />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative mb-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Join the Premier Agricultural
              <br />
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent text-center mb-6">
                Technology Conference
              </span>
            </motion.h1>
            {/* Decorative sparkles */}
            <motion.div
              variants={sparkleVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-4 right-1/4"
            >
              <Sparkles className="w-6 h-6 text-blue-300" />
            </motion.div>
            <motion.div
              variants={sparkleVariants}
              initial="hidden"
              animate="visible"
              className="absolute bottom-2 left-1/3"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </motion.div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-800 max-w-4xl mx-auto mb-20 leading-relaxed font-light tracking-wide"
          >
            Select your registration package and be part of the innovation
            shaping the future of agriculture.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
              animate="rest"
              className="group perspective-1000"
            >
              <motion.button
                variants={buttonVariants}
                onClick={() => (window.location.href = item.href)}
                className="relative w-full h-48 bg-gradient-to-br from-blue-600 to-indigo-900/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden group"
              >
                {/* Luxury glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                {/* Premium animated gradient border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
                />
                {/* Sophisticated inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Luxury content container */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
                  {/* Premium icon container */}
                  <motion.div variants={iconVariants} className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all duration-500 shadow-2xl">
                      <item.icon className="w-9 h-9 text-white group-hover:text-blue-100 transition-all duration-300" />
                    </div>
                    {/* Luxury glow ring */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md`}
                    />
                  </motion.div>

                  {/* Sophisticated typography */}
                  <div className="text-center space-y-3">
                    <h3 className="font-semibold text-white text-lg group-hover:text-blue-100 transition-colors duration-300 tracking-wide">
                      {item.label}
                    </h3>
                    {/* Ultra-premium hover indicator */}
                    <motion.div
                      className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <span className="text-sm text-white font-medium tracking-wide">
                          Explore
                        </span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Luxury shimmer effect */}
                <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-1000 group-hover:translate-x-full" />
                {/* Premium depth shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-inner opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Luxury floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-16 w-56 h-56 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
