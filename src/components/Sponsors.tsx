import SponsorSection from "@/components/SponsorSection";
import { motion } from "framer-motion";
import { sponsors } from "@/data/sponsor";

export default function Sponsors() {
  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6"
          >
            Empower the Future of AgriTech
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join us in shaping the future of agriculture through innovative
            technology.
          </motion.p>
        </motion.div>

        <SponsorSection title="Hosted by" type="hosted" items={sponsors} />
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          <SponsorSection title="Co-Host" type="cohost" items={sponsors} />
          <SponsorSection
            title="Main Sponsor"
            type="mainSponsor"
            items={sponsors}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
          <SponsorSection title="Sponsors" type="sponsor" items={sponsors} />
          <SponsorSection
            title="Supported by"
            type="supported"
            items={sponsors}
          />
        </div>
        <SponsorSection title="Publisher" type="publisher" items={sponsors} />
      </div>
    </div>
  );
}
