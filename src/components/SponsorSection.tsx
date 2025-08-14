import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Organization } from "@/data/sponsor";

type SponsorSectionProps = {
  title: string;
  items: Organization[];
  type?: string;
  centerTitle?: boolean;
};

// Mapping ukuran gambar per type sponsor
const sizeMap: Record<string, string> = {
  publisher: "w-[160px] sm:w-[220px] md:w-[300px] lg:w-[500px]",
  grand: "w-[140px] sm:w-[180px] md:w-[240px] lg:w-[320px]",
  regular: "w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px]",
  cohost: "w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px]",
  supported: "h-[80px] max-w-[120px] md:h-[100px] md:max-w-[140px] lg:h-[120px] lg:max-w-[160px] w-auto",
};

const sizeAdjustments: Record<string, string> = {
  "max-w-[120px]": "max-w-[140px]",
  "md:max-w-[140px]": "md:max-w-[160px]",
  "lg:max-w-[160px]": "lg:max-w-[200px]",
};

// Mapping layout container per type sponsor
const containerMap: Record<string, string> = {
  publisher: "basis-full",
  default: "basis-1/2 md:basis-1/3 lg:basis-1/5 ",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap z-50">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default function SponsorSection({
  title,
  items,
  type,
  centerTitle = true,
}: SponsorSectionProps) {
  const filtered = type ? items.filter((item) => item.type === type) : items;

  if (filtered.length === 0) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-20"
    >
      <motion.h3
        variants={itemVariants}
        className={`text-2xl font-medium mb-8 text-blue-600 ${
          centerTitle ? "text-center" : ""
        }`}
      >
        {title}
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-10 lg:gap-6">
        {filtered.map((sponsor, index) => {
          const isPublisher = sponsor.type === "publisher";          
          // Responsive size classes
          const baseClass = sizeMap[sponsor.type];
          
          // Responsive layout
          const containerClass = containerMap[sponsor.type] || containerMap.default;

          const [isLandscape, setIsLandscape] = useState(false);

          useEffect(() => {
            if (!sponsor.logo) return;
            const img = new Image();
            img.src = sponsor.logo;
            img.onload = () => {
              const ratio = img.naturalWidth / img.naturalHeight;
              setIsLandscape(ratio > 1.6);
            };
          }, [sponsor.logo]);

          // class akhir: kalau supported & landscape → max-w lebih kecil
          const imgClass =
            sponsor.type === "supported" && isLandscape
              ? baseClass
                .split(" ")
                .map((cls) => sizeAdjustments[cls] || cls)
                .join(" ")
              : baseClass;


          return (
            <motion.div
              key={index}
              className={`${containerClass} flex justify-center items-center`}
              whileHover={{ scale: isPublisher ? 1.1 : 1.05 }}
              variants={itemVariants}
            >
              <Tooltip text={sponsor.name}>
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className={`object-contain ${imgClass} `}
                />
              </Tooltip>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
