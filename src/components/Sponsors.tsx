import SponsorSection from "@/components/SponsorSection";
import { motion } from "framer-motion";
import logoBrain from "/src/assets/logo/logo_brain.png";
import logoTelU from "/src/assets/Logo Tel U.png";
import logoKementan from "/src/assets/Logo Kementan.png";
import logoUNIKOM from "/src/assets/Logo UNIKOM.png";
import logoUNPAD from "/src/assets/Logo UNPAD.png";
import logoGUNDAR from "/src/assets/Logo Gunadarma.png";
import logoUMB from "/src/assets/LogoUMBandung.png";
import logoHIPI from "/src/assets/LogoHIPI.jpg";
import logoBRI from "/src/assets/sponsors_partners/BRI BIRU_PNG.png";
import logoFW from "/src/assets/sponsors_partners/fwResilien_Horizontal.png";
import logoBAI from "/src/assets/sponsors_partners/BAI.png";
import logoIOP from "/src/assets/Logo-IOP.jpg";


const sponsors = [
  { id: 1, logo: logoBrain, alt: "BRAIN IPB University", type: "grand" },
  { id: 2, logo: logoBrain, alt: "BRAIN IPB University", type: "regular" },
  { id: 3, logo: logoBRI, alt: "BRI", type: "regular" },
  { id: 4, logo: logoIOP, alt: "IOP Conference Series", type: "publisher" },
  { id: 5, logo: logoFW, alt: "FW IPB", type: "supported" },
  { id: 6, logo: logoBAI, alt: "BAI", type: "supported" },
];

const partners = [
  { id: 1, logo: logoKementan, alt: "Kementerian Pertanian RI" },
  { id: 2, logo: logoUMB, alt: "Universitas Muhammadiyah Bandung" },
  { id: 3, logo: logoTelU, alt: "Telkom University" },
  { id: 4, logo: logoUNIKOM, alt: "Universitas Komputer Indonesia" },
  { id: 5, logo: logoUNPAD, alt: "Universitas Padjadjaran" },
  { id: 6, logo: logoGUNDAR, alt: "Universitas Gunadarma" },
  { id: 7, logo: logoHIPI, alt: "Himpunan Informatika Pertanian Indonesia" },
];

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
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="text-4xl font-bold text-navy-900 mb-6"
          >
            Empower the Future of AgriTech
          </motion.h2>
          <motion.p
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join us in shaping the future of agriculture through innovative technology.
          </motion.p>
        </motion.div>

        <SponsorSection title="Grand Sponsors" type="grand" items={sponsors} />
        <SponsorSection title="Sponsors" type="regular" items={sponsors} />
        <SponsorSection title="Publisher" type="publisher" items={sponsors} />
        <SponsorSection title="Partners & Co-Host" items={partners} />
        <SponsorSection title="Supported by" type="supported" items={sponsors} />
      </div>
    </div>
  );
}
