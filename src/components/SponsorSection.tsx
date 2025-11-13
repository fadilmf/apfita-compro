import { motion } from "framer-motion";
import { useState } from "react";
import { Organization } from "@/data/sponsor";
import { getSponsorsByType } from "@/lib/sponsorUtils";

type SponsorSectionProps = {
  title: string;
  items: Organization[];
  type?: string;
  centerTitle?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
};

const sizeMap: Record<"small" | "medium" | "large", string> = {
  large:
    "w-[280px] max-h-[160px] md:w-[320px] md:max-h-[220px] lg:w-[420px]",
  medium:
    "w-[140px] max-h-[100px] md:w-[180px] md:max-h-[140px] lg:w-[200px]",
  small:
    "w-[90px] max-h-[60px] md:w-[110px] lg:h-[80px] w-auto",
};

// Ukuran default otomatis per type
const defaultSizeByType: Record<string, "small" | "medium" | "large"> = {
  hosted: "large",
  mainSponsor: "medium",
  cohost: "medium",
  sponsor: "small",
  supported: "small",
  publisher: "medium",
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
  size,
  className,
}: SponsorSectionProps) {
  const filtered = type ? getSponsorsByType(items, type) : items;

  if (filtered.length === 0) return null;

  // Tentukan ukuran default berdasarkan type
  const sectionSize =
    size || (type ? defaultSizeByType[type] : "medium") || "medium";
  const imgClass = sizeMap[sectionSize];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${className} mb-20`}
    >
      <motion.h3
        variants={itemVariants}
        className={`text-2xl font-medium mb-8 text-blue-600 ${
          centerTitle ? "text-center" : ""
        }`}
      >
        {title}
      </motion.h3>

      <div
        className={`flex flex-wrap my-auto content-start md:content-center h-full justify-center gap-10 lg:gap-6 ${
          type === "sponsor" ? "lg:gap-x-0" : ""
        }`}
      >
      {/* <div
        className={
          type === "sponsor"
            ? "grid grid-cols-2 gap-8 md:gap-10 justify-items-center"
            : "flex flex-wrap my-auto content-start md:content-center h-full justify-center gap-10 lg:gap-6"
        }
      > */}
        {filtered.map((sponsor, index) => {
          // ambil ukuran default dulu
          let currentImgClass = imgClass;

          // override kalau typenya publisher
          if (sponsor.type === "publisher") {
            currentImgClass =
              "w-[180px] md:w-[230px] lg:w-[280px] lg:max-h-[160px]";
          }

          return (
            <motion.div
              key={index}
              className={`flex justify-center items-center ${
                sponsor.type === "sponsor" ? "lg:basis-1/2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <Tooltip text={sponsor.name}>
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className={`object-contain ${currentImgClass} `}
                />
              </Tooltip>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
