"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, AlertCircle, ArrowLeft, Smile } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Smile className="w-24 h-24 text-blue-500 mb-8" />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-navy-900 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Coming Soon!
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        It looks like you've stumbled upon a page that's still under
        construction or doesn't exist yet. Our team of digital cartographers is
        working hard to map out every corner of our site.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/">
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </motion.button>
        </Link>
        <motion.button
          className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-12 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p>If you believe this is an error, please let us know.</p>
        <motion.a
          href="/contact"
          className="inline-flex items-center mt-2 text-blue-600 hover:underline"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AlertCircle className="mr-2 h-5 w-5" />
          Report this issue
          <motion.span
            className="ml-1"
            animate={{ x: isHovering ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
