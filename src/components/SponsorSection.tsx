import { motion } from "framer-motion";
import { useState } from "react";

type Sponsor = {
  id: number;
  logo: string;
  alt: string;
  type?: string;
};

type SponsorSectionProps = {
  title: string;
  items: Sponsor[];
  type?: string;
  width?: number;
  height?: number;
  centerTitle?: boolean;
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

const getImageSize = (type?: string) => {
  if (type === "grand") return 400;
  if (type === "publisher") return 500;
  return 150;
};

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
      <div className="flex flex-wrap justify-center gap-8">
        {filtered.map((sponsor) => {
          const size = getImageSize(sponsor.type);

          return (
            <motion.div
              key={sponsor.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 flex justify-center items-center"
              whileHover={{ scale: sponsor.type === "publisher" ? 1.1 : 1.05 }}
              variants={itemVariants}
            >
              <Tooltip text={sponsor.alt}>
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.alt}
                  width={size}
                  height={size}
                  className="object-contain max-w-[500px] max-h-[500px]"
                />
              </Tooltip>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
