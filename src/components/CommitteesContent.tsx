import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Users,
  User,
  UserPlus,
  Briefcase,
  PenTool,
  Megaphone,
  Monitor,
  Package,
  Share2,
  Award,
  Building,
} from "lucide-react";

interface CommitteeMember {
  name: string;
  title?: string;
  icon: React.ElementType;
}

interface CommitteeSection {
  name: string;
  icon: React.ElementType;
  members: CommitteeMember[];
}

const committees: CommitteeSection[] = [
  {
    name: "Steering Committee",
    icon: Briefcase,
    members: [
      {
        name: "Prof. Dr. Arif Satria, SP, M.Si",
        title: "Chair (Rector of IPB University)",
        icon: Award,
      },
      {
        name: "Prof. Dr. Ir. Kudang Boro Seminar, M.Sc.",
        title: "Member",
        icon: User,
      },
      { name: "Prof. Dr. Ir. Marimin, M.Sc.", title: "Member", icon: User },
      {
        name: "Prof. Dr. Ir. Setyo Pertiwi, M.Agr.",
        title: "Member",
        icon: User,
      },
      { name: "Dr. Ir. Bayu Mulyana, M.M., IPM.", title: "Member", icon: User },
      {
        name: "Prof. Dr. Ir. Anas Miftah Fauzi, M.Eng.",
        title: "Member",
        icon: User,
      },
      {
        name: "Prof. Dr. Ir. Agus Buono, M.Si., M.Kom.",
        title: "Member",
        icon: User,
      },
      {
        name: "Prof. Dr. Ir. Noer Azam Achsani, M.S.",
        title: "Member",
        icon: User,
      },
      {
        name: "Prof. Dr. Ir. Yandra Arkeman, M.Eng.",
        title: "Member",
        icon: User,
      },
    ],
  },
  {
    name: "Organizing Committee",
    icon: Users,
    members: [
      {
        name: "Prof. Dr. Ir. Yandra Arkeman, M.Eng.",
        title: "Chair",
        icon: Award,
      },
      {
        name: "Irman Hermadi, Ph.D.",
        title: "Vice Chair 1 (Program)",
        icon: User,
      },
      {
        name: "Dr. Shelvie Nidya Neyman, S.Kom, M.Si.",
        title: "Vice Chair 2 (Funding)",
        icon: User,
      },
      {
        name: "Dr. Muhammad Syukur Sarfat, S.TP., M.Sc.",
        title: "Vice Chair 3 (Publication)",
        icon: User,
      },
    ],
  },
  {
    name: "Executive Secretaries",
    icon: UserPlus,
    members: [
      { name: "Verry Surya Hendrawan, S.T., M.M.", title: "Head", icon: Award },
      { name: "Firman Arief Soejana, S.T., M.T.", title: "Member", icon: User },
      { name: "Andry Polos, S.Kom., M.Si.", title: "Member", icon: User },
    ],
  },
  {
    name: "Secretariat",
    icon: User,
    members: [
      { name: "Fatimah Alfi, S.Kom.", title: "Head", icon: Award },
      { name: "Fathin Humaira, S.Kom.", title: "Member", icon: User },
      { name: "Shabrina Basyasyah, S.Kom.", title: "Member", icon: User },
    ],
  },
  {
    name: "Treasury",
    icon: Briefcase,
    members: [
      {
        name: "Nizmah Jatisari Hidayah, S.P., M.P.",
        title: "Treasurer",
        icon: Award,
      },
      {
        name: "Deasy Kartika Rahayu Kuncoro, S.T., M.T.",
        title: "Vice Treasurer",
        icon: User,
      },
    ],
  },
  {
    name: "Funding and Sponsorship",
    icon: Briefcase,
    members: [
      { name: "Dr. Kursehi Falgenti, M.Kom", title: "Head", icon: Award },
      {
        name: "Stania Puspawardhani, S.Si., M.Si.",
        title: "Member",
        icon: User,
      },
      { name: "Asaduddin Abdullah B.Sc. M.Sc.", title: "Member", icon: User },
      { name: "Ir. Rini Mulyawati", title: "Member", icon: User },
      { name: "Salsabila Husna, S.Pd.", title: "Member", icon: User },
      { name: "Haura Zavira Darmawan, S.Si.", title: "Member", icon: User },
    ],
  },
  {
    name: "Technical Programme",
    icon: PenTool,
    members: [
      { name: "Dr. Harry Imantho, S.Si., M.Sc.", title: "Head", icon: Award },
      {
        name: "Novian Adi Prasetyo, S.Kom., M.Kom.",
        title: "Member",
        icon: User,
      },
      { name: "Balqis Iklil Habiba, S.T.P.", title: "Member", icon: User },
      { name: "Ir. Rini Prasetyani, M.T.", title: "Member", icon: User },
      { name: "Ichsan Ramdhani, S.Tp., M.T.I.", title: "Member", icon: User },
      { name: "Dewi Ayu Nur Wulandari, M.Kom", title: "Member", icon: User },
    ],
  },
  {
    name: "Publication",
    icon: Megaphone,
    members: [
      { name: "Dr. Supriyanto, STP., M.Kom.", title: "Head", icon: Award },
      { name: "Dr. Eng. Obie Farobie, M.Si.", title: "Member", icon: User },
      {
        name: "Dra. Medria Kusuma Dewi, M.T., PhD",
        title: "Member",
        icon: User,
      },
      { name: "Irawan Afrianto, S.T., M.T.", title: "Member", icon: User },
      { name: "Supriyadi, S.T., MT.", title: "Member", icon: User },
      {
        name: "Ganjar Saefurahman, S.Pi., M.Phil., M.Sc.",
        title: "Member",
        icon: User,
      },
      { name: "Muhammad Fajar Sidiq, S.T., M.T.", title: "Member", icon: User },
      { name: "Siti Nur Asiyah Wardah, S. Hut", title: "Member", icon: User },
    ],
  },
  {
    name: "Event",
    icon: Users,
    members: [
      { name: "Dr. Dhani S. Wibawa, S.TP., M.Si.", title: "Head", icon: Award },
      { name: "Dr. Ir. Sri Wahjuni, M.T.", title: "Member", icon: User },
      {
        name: "Dr. Yani Nurhadryani, S.Si., M.T.",
        title: "Member",
        icon: User,
      },
      { name: "Theresia Roselinda, P.D., S.T.P.", title: "Member", icon: User },
      { name: "Fachry (KBS)", title: "Member", icon: User },
      { name: "Ali Usman, S.TP.", title: "Member", icon: User },
      { name: "Muhammad Fauzi, S.Pt., M.Si.", title: "Member", icon: User },
      { name: "M. Iqbal, S.Kom.", title: "Member", icon: User },
      { name: "Shafira Rahmania, S.Pi", title: "Member", icon: User },
    ],
  },
  {
    name: "Virtual Arrangement",
    icon: Monitor,
    members: [
      { name: "Dr. Liyantono, S.TP., M.Agr.", title: "Head", icon: Award },
      {
        name: "Dr. Bonang Waspadadi Ligar, S.Si., MMSI.",
        title: "Member",
        icon: User,
      },
      {
        name: "Archy Renaldy Pratama Nugraha, M.T",
        title: "Member",
        icon: User,
      },
      { name: "Aries Suharso, S.Si., M.Kom.", title: "Member", icon: User },
      { name: "Muhamad Risqiwahid, S.Kom.", title: "Member", icon: User },
    ],
  },
  {
    name: "Logistics & Support",
    icon: Package,
    members: [
      { name: "Hendri Wijaya, S.TP., M.Si.", title: "Head", icon: Award },
      { name: "Falahah, S.Si., M.T.", title: "Member", icon: User },
      { name: "Febry Aryawan, S.P.", title: "Member", icon: User },
      { name: "Surya Fatihah Helmianto", title: "Member", icon: User },
    ],
  },
  {
    name: "Promotion, Social Media, Homepage",
    icon: Share2,
    members: [
      { name: "Efri Yulistika, S.TP, M.T.", title: "Head", icon: Award },
      { name: "Yulianida Tamala, S.T.P.", title: "Member", icon: User },
      {
        name: "Dinda Aslam Nurul Hida, S.P., M.Si.",
        title: "Member",
        icon: User,
      },
      {
        name: "Nazla Atikah Hikmatias Nasution, S.P.",
        title: "Member",
        icon: User,
      },
    ],
  },
];

const collaboratingInstitutions = [
  "Center for Agricultural Data and Information Systems (PUSDATIN)",
  "Indonesian Association of Agricultural Informatics (HIPI)",
  "Padjadjaran University (UNPAD)",
  "Telkom University",
  "Indonesian Computer University (UNIKOM)",
  "Gunadarma University",
  "Other collaborating parties",
];

const CommitteeSection: React.FC<{ section: CommitteeSection }> = ({
  section,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = section.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex text-left justify-between p-6 hover:bg-blue-50 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{section.name}</h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-blue-50 p-4 rounded-xl"
                >
                  <div className="bg-white p-2 rounded-full mr-4">
                    <member.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{member.name}</p>
                    {member.title && (
                      <p className="text-sm text-gray-600">{member.title}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CommitteesContent: React.FC = () => {
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
            Conference Committees
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Committees for The 15th International Conference of Asia-Pacific
            Federation for Information Technology in Agriculture 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
        >
          <div className="p-8 text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Building className="w-10 h-10 mr-4 text-blue-600" />
              Collaborating Institutions
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              The 15th International Conference of Asia-Pacific Federation for
              Information Technology in Agriculture 2025 is a collaboration
              between:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collaboratingInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-xl flex items-center"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="">
          {committees.map((committee, index) => (
            <CommitteeSection key={index} section={committee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesContent;
