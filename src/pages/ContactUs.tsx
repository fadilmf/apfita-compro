import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Award, Zap, Globe } from "lucide-react";

// Variants animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Venue = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-8 text-navy-900"
            >
              Become a Sponsor
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            >
              Elevate your brand's visibility and contribute to the advancement of
              agricultural technology.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Award,
                  title: "Brand Exposure",
                  description: "Showcase your brand to a targeted audience.",
                },
                {
                  icon: Zap,
                  title: "Innovation Leadership",
                  description:
                    "Position your company at the forefront of agricultural innovation.",
                },
                {
                  icon: Globe,
                  title: "Global Networking",
                  description:
                    "Connect with potential partners and industry leaders.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            {/* <motion.div variants={itemVariants} className="text-center">
              <a
                href="/sponsor-info"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Proposal Sponsors
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
      <Contact />

      {/* <Endorsement /> */}

      {/* Important Dates */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Important Dates
        </h2>
        <ul className="space-y-4 text-lg text-center">
          <li>Abstract Submission Deadline: August 1, 2025</li>
          <li>Notification of Acceptance: September 1, 2025</li>
          <li>Early Bird Registration Deadline: October 1, 2025</li>
          <li>Conference Dates: November 6-8, 2025</li>
        </ul>
      </section> */}
    </>
  );
};

export default Venue;
