import type React from "react";

// import { useState } from "react";
import { motion,
  // AnimatePresence
} from "framer-motion";
import {
  Users,
  User,
} from "lucide-react";

const boardPresident = [
  "Prof. Takaharu Kameoka",
];
const boardMembers = [
  "Yi-Chich Chiu",
  "J. Adinarayana",
  "Ajit Maru",
  "Dean Diepeveen",
  "Fangquan Mei",
  "Jae kun Chun",
  "Jane Lin",
  "Kudang Boro Seminar",
  "Leisa Armstrong",
  "San-Cheng Chang",
  "Seishi Ninomiya",
  "V. C. Patil",
  "Weon-Sik Hahn",
  "Le Huy Ham",
  "Lee Jeong-Jae",
  "Royol Chitradon",
  "Zuorui Shen",
  "Tien-Yin Chou",
  "Bayu Mulyang",
  "Chun Jiang Zhao",
  "Dong-Chong Hsiou",
  "Li Sijing",
  "Meng Xianxue",
  "Norihiro Nakamura",
  "Roni Kastaman(Ronnie Kastaman)",
  "Royboon Rassameethes",
  "Sarun sumriddetchkajorn",
  "Sim Keun-Seop",
  "SungYoul Park",
  "Yandra Arkeman",
  "Ye-Nu Wan",
  "Adalfred do Rosario Ferreira",
  "Ashraf Tanvir",
  "Ehud Gelb",
  "Felino P. Lansigan",
  "Kamardin Saadan",
  "M.A. Zaman",
  "Narantuya Baatar",
  "Nguyen Viet Chien",
  "Nicolai Fog Hansen",
  "Prashant Manandhar",
  "Saphangthong Thatheva",
  "Tshering Tobgay",
  "Yandra Arkeman",
  "Ming-Yih Chang",
  "An-Pan Cherng",
  "Royol Chitradon",
  "Joe-Air Jiang",
  "Stania Puspawardhani",
  "Setyo Pertiwi",
];


const BoardMembersContent: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-navy-900 mb-6">
            Board Members
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Committees for The 15th International Conference of Asia-Pacific
            Federation for Information Technology in Agriculture 2025
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
        >
          <div className="p-8 text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <User className="w-10 h-10 mr-4 text-blue-600" />
              President
            </h3>
            {/* <p className="text-lg text-gray-600 mb-6">
              The 15th International Conference of Asia-Pacific Federation for
              Information Technology in Agriculture 2025 is a collaboration
              between:
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boardPresident.map((institution, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-xl flex items-center"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
        >
          <div className="p-8 text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="w-10 h-10 mr-4 text-blue-600" />
              Members
            </h3>
            {/* <p className="text-lg text-gray-600 mb-6">
              The 15th International Conference of Asia-Pacific Federation for
              Information Technology in Agriculture 2025 is a collaboration
              between:
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boardMembers.map((institution, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-xl flex items-center"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* <div className="">
          {committees.map((committee, index) => (
            <BoardMemberSection key={index} section={committee} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default BoardMembersContent;
