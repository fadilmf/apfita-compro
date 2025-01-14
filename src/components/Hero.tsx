import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1699201706984-85e782ceb222?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
          backgroundAttachment: "fixed", // Parallax effect
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-white drop-shadow-lg"
        >
          APFITA 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-white mt-4 max-w-3xl drop-shadow-md"
        >
          15TH INTERNATIONAL CONFERENCE OF ASIA-PACIFIC FEDERATION FOR
          INFORMATION TECHNOLOGY IN AGRICULTURE
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-lg text-gray-200 mt-2 max-w-4xl drop-shadow-md"
        >
          The Frontiers of Food Systems Originating from Sustainable
          Agricultural Production in a Data-driven Society
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="text-md text-gray-300 mt-2 max-w-3xl drop-shadow-sm"
        >
          Tsukuba International Congress Center, Tsukuba, Japan <br />
          6-8 November 2025 <br />
          Organized by Japanese Society of Agricultural Informatics <br />
          The Asian-Pacific Federation for Information Technology in Agriculture
          (APFITA)
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-6"
        >
          <Button>Register Now</Button>
        </motion.div>
      </section>
    </div>
  );
}
