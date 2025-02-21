// import Endorsement from "@/components/Endorsement";
// ... rest of your code
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
// import Comingsoon from "@/components/ComingSoon";
import Header from "@/components/Header";
import logo from "@/assets/Logo-IOP.jpg";
// import SubmissionsContent from "@/components/SubmissionContent";

// import Sponsors from "@/components/Sponsors";

const TimeSchedule = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-gray-100 to-white p-6">
        <motion.div
          className="bg-white shadow-lg border border-gray-200 rounded-2xl px-8 py-6 md:px-14 md:py-8 max-w-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="IOP Conference Series Logo"
              className="h-12 md:h-16 object-contain"
            />
          </div>

          {/* TEKS */}
          <motion.h2
            className="text-lg md:text-xl text-gray-600 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            This content is reserved for:
          </motion.h2>
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-red-600">IOP</span> Conference Series
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Earth and Environmental Science (EES)
          </motion.h2>
        </motion.div>
      </div>
      {/* <div className="min-h-screen bg-gray-50">
        <SubmissionsContent />
      </div> */}
    </>
  );
};

export default TimeSchedule;
