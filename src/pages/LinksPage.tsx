import { motion } from "framer-motion";
import { Book, Map, LocateFixed, Phone, FileText, Share, MonitorPlay, Images } from "lucide-react";
import logoConf from "/src/assets/logo/logo_conf.png";
import {
  Cpu,
  Sprout,
  Satellite,
  BrainCircuit,
  RadioTower,
  Globe,
} from "lucide-react";
import { Bus } from "lucide-react";

export default function APFITALinksPage() {
  const links = [
    {
      label: "Guidebook APFITA 2025",
      href: "https://apfita2025.com/conference-guidebook",
      icon: FileText,
    },
    {
      label: "Abstract Book APFITA 2025",
      href: "https://apfita2025.com/conference-abstract",
      icon: Book,
    },
    {
      label: "Map Event APFITA 2025",
      href: "https://apfita2025.com/conference-map",
      icon: Map,
    },
    {
      label: "Location of APFITA 2025",
      href: "https://apfita2025.com/venue",
      icon: LocateFixed,
    },
    {
      label: "Call Centre",
      href: "https://apfita2025.com/contact",
      icon: Phone,
    },

    {
      label: "Day 1 Documentation",
      href: "https://ipb.link/apfita2025-documentation",
      icon: Images,
      variant: "highlight",
    },
    {
      label: "Share your experience! Tag Us!",
      href: "https://www.instagram.com/stories/apfita2025/3767263622704890304?utm_source=ig_story_item_share&igsh=MTh5eDg2NW80MzJrMQ==",
      icon: Share,
      variant: "highlight",
    },
    {
      label: "Online Live Streaming",
      href: "https://apfita2025.com/conference",
      icon: MonitorPlay,
      variant: "highlight",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start py-14 px-4 bg-[#0b0f19] text-white">
      {/* LUXURY DUAL-TONE FLOATING BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Gradient Luxury Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0b0f19] via-[#0d1528] to-black opacity-90" />

        {/* Gold Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`gold-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.4 + 0.2,
            }}
            animate={{
              y: "+=120vh",
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-1 h-1 rounded-full bg-amber-300 shadow-[0_0_8px_2px_rgba(255,200,0,0.7)]" />
          </motion.div>
        ))}

        {/* Main Floating Icons: Cyan + Gold Mix */}
        {/* Main Floating Icons: Agriculture + AI + Future */}
        {[Sprout, Cpu, Satellite, BrainCircuit, RadioTower, Globe]
          .flatMap((Icon) => Array(2).fill(Icon))
          .map((Icon, i) => {
            const isGold = i % 2 === 0;

            return (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth, // full horizontal width
                  y: Math.random() * window.innerHeight, // full vertical height
                  scale: Math.random() * 0.7 + 0.4,
                  opacity: Math.random() * 0.4 + 0.5,
                }}
                animate={{
                  y: "140vh",
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Icon
                  size={isGold ? 65 : 55}
                  strokeWidth={1}
                  className={
                    isGold
                      ? "text-amber-300 drop-shadow-[0_0_14px_rgba(255,200,90,0.8)]"
                      : "text-cyan-300 drop-shadow-[0_0_14px_rgba(90,255,255,0.8)]"
                  }
                />
              </motion.div>
            );
          })}
      </motion.div>

      {/* LOGO WITH FLOAT + GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center mb-12 z-10"
      >
        <motion.img
          src={logoConf}
          alt="APFITA 2025"
          className="w-28 h-28 rounded-full object-cover shadow-2xl bg-white p-2 border border-white/50"
          animate={{
            y: [0, -8, 0],
            boxShadow: ["0 0 10px #0ff", "0 0 20px #0ff", "0 0 10px #0ff"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-2xl font-semibold mt-4 tracking-wide"
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          @apfita2025
        </motion.h1>
      </motion.div>

      {/* CARDS WITH LUXURY HOVER EFFECT */}
      <div className="w-full max-w-md space-y-6 z-10">
        {/* CTA EXCURSION FIELD TRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: links.length * 0.18 }}
        >
          <motion.div
            whileHover={{
              scale: 1.07,
              translateY: -4,
              boxShadow: "0 0 26px rgba(0,255,120,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-emerald-300/15 border border-emerald-400/40 shadow-xl cursor-pointer"
          >
            {/* MOVING BUS + TREE BACKGROUND */}
            {/* <motion.div
              className="absolute inset-0 flex gap-6 items-center opacity-35"
              animate={{ x: ["0%", "-130%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Bus
                      size={26}
                      className="text-lime-300 drop-shadow-[0_0_6px_rgba(0,255,120,0.9)]"
                    />
                    <TreePine
                      size={26}
                      className="text-emerald-300 drop-shadow-[0_0_6px_rgba(0,255,180,0.8)]"
                    />
                  </div>
                ))}
            </motion.div> */}

            <a
              href="https://apfita2025.com/time-schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center w-full py-6 px-6 gap-4 text-lg font-semibold text-lime-300"
            >
              <Bus
                size={30}
                className="drop-shadow-[0_0_10px_rgba(0,255,140,1)]"
              />
              Excursion Field Trip
            </a>
          </motion.div>
        </motion.div>

        {links.map((item, i) => {
  const isHighlight = item.variant === "highlight";

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.18 }}
    >
      <motion.div
        whileHover={{
          scale: isHighlight ? 1.07 : 1.04,
          translateY: isHighlight ? -4 : -3,
          boxShadow: isHighlight
            ? "0 0 26px rgba(0,255,120,0.55)"
            : "0 0 20px rgba(0,255,255,0.35)",
        }}
        whileTap={{ scale: 0.97 }}
        className={`
          relative rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl cursor-pointer
          ${isHighlight
            ? "bg-emerald-300/15 border-emerald-400/40"
            : "bg-white/10 border-cyan-300/20 hover:bg-white/20"
          }
        `}
      >
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative flex items-center w-full py-6 px-6 gap-4 text-lg font-medium
            ${isHighlight ? "text-lime-300 font-semibold" : "text-white"}
          `}
        >
          <item.icon
            size={28}
            className={`
              transition-all
              ${isHighlight
                ? "drop-shadow-[0_0_10px_rgba(0,255,140,1)] text-lime-300"
                : "text-cyan-300/80 group-hover:text-cyan-100"
              }
            `}
          />

          {item.label}
        </a>
      </motion.div>
    </motion.div>
  );
        })}

        
      </div>

      {/* FOOTER SHIMMER */}
      <motion.p
        className="text-white/40 text-sm mt-14 z-10"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        APFITA 2025 Resources Page
      </motion.p>
    </div>
  );
}
