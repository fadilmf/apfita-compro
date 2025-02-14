"use client";

import { useState, useRef, useEffect } from "react";
import { Users, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react"; // Added import for React

interface CommitteeMemberProps {
  name: string;
  role?: string;
  photo?: string;
  title?: string;
}

const CommitteeMember: React.FC<CommitteeMemberProps> = ({
  name,
  role,
  photo,
  title,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    {photo ? (
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={photo || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <Users className="w-8 h-8 text-blue-600" />
      </div>
    )}
    <div>
      <h4 className="font-medium text-blue-950">{name}</h4>
      {role && <p className="text-sm text-blue-600">{role}</p>}
      {title && <p className="text-sm text-gray-500">{title}</p>}
    </div>
  </motion.div>
);

interface CommitteeSectionProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

const CommitteeSection: React.FC<CommitteeSectionProps> = ({
  title,
  color,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-xl"
    >
      <div className={`h-2 ${color} rounded-full mb-6`}></div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-950">{title}</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-blue-50 rounded-full transition-colors"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600" />
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CommitteesContent() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const el = progressRef.current;
      if (!el) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = scrollTop / (documentHeight - windowHeight);

      el.style.width = `${progress * 100}%`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg mb-12"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-100">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-200"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-2">
              Committee Members
            </h1>
            <p className="text-center text-blue-600">
              The 15th International Conference of Asia-Pacific Federation for
              Information Technology in Agriculture 2025
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <CommitteeSection title="Steering Committee" color="bg-blue-600">
            <CommitteeMember
              name="Prof. Dr. Arif Satria, SP, M.Si"
              role="Chair"
              title="Rector of IPB University"
              photo="/placeholder.svg"
            />
            {[
              "Prof. Dr. Ir. Kudang Boro Seminar, M.Sc.",
              "Prof. Dr. Ir. Marimin, M.Sc.",
              "Prof. Dr. Ir. Setyo Pertiwi, M.Agr.",
              "Dr. Ir. Bayu Mulyana, M.M., IPM.",
              "Prof. Dr. Ir. Anas Miftah Fauzi, M.Eng.",
              "Prof. Dr. Ir. Agus Buono, M.Si., M.Kom.",
              "Prof. Dr. Ir. Noer Azam Achsani, M.S.",
            ].map((name) => (
              <CommitteeMember
                key={name}
                name={name}
                photo="/placeholder.svg"
              />
            ))}
          </CommitteeSection>

          <CommitteeSection title="Organizing Committee" color="bg-blue-400">
            <CommitteeMember
              name="Prof. Dr. Ir. Yandra Arkeman, M.Eng."
              role="Chair"
              photo="/placeholder.svg"
            />
            <CommitteeMember
              name="Irman Hermadi, Ph.D."
              role="Vice Chair 1 (Program)"
              photo="/placeholder.svg"
            />
            <CommitteeMember
              name="Dr. Shelvie Nidya Neyman, S.Kom, M.Si."
              role="Vice Chair 2 (Funding)"
              photo="/placeholder.svg"
            />
            <CommitteeMember
              name="Dr. Muhammad Syukur Sarfat, S.TP., M.Sc."
              role="Vice Chair 3 (Publication)"
              photo="/placeholder.svg"
            />

            <div className="mt-6">
              <h3 className="font-semibold text-blue-950 mb-3">
                Executive Secretaries
              </h3>
              <div className="space-y-2">
                {[
                  "Verry Surya Hendrawan, S.T, M.M.",
                  "Firman Arief Soejana, S.T., M.T.",
                  "Andry Polos, S.Kom., M.Si.",
                ].map((name) => (
                  <CommitteeMember key={name} name={name} />
                ))}
              </div>
            </div>
          </CommitteeSection>

          <CommitteeSection title="Other Committees" color="bg-blue-300">
            {[
              {
                title: "Secretariat",
                members: [
                  "Fatimah Alfi, S.Kom.",
                  "Fathin Humaira, S.Kom.",
                  "Shabrina Basyasyah, S.Kom.",
                ],
              },
              {
                title: "Treasury",
                members: [
                  {
                    name: "Nizmah Jatisari Hidayah, S.P., M.P.",
                    role: "Treasurer",
                  },
                  {
                    name: "Deasy Kartika Rahayu Kuncoro, S.T., M.T.",
                    role: "Vice Treasurer",
                  },
                ],
              },
              {
                title: "Funding and Sponsorship",
                members: [
                  "Dr. Kursehi Falgenti, M.Kom",
                  "Stania Puspawardhani, S.Si., M.Si.",
                  "Asaduddin Abdullah B.Sc. M.Sc.",
                ],
              },
              {
                title: "Technical Programme",
                members: [
                  "Dr. Harry Imantho, S.Si., M.Sc.",
                  "Novian Adi Prasetyo, S.Kom., M.Kom.",
                  "Balqis Ikli Habiba, S.T",
                  "Ir. Rini Prasetyani, M.T.",
                  "Ichsan Ramdhani, S.Tp., M.T.I.",
                  "Dewi Ayu Nur Wulandari, M.Kom",
                ],
              },
              {
                title: "Publication",
                members: [
                  "Dr. Supriyanto, STP., M.Kom.",
                  "Dr. Eng. Obie Farobie, M.Si.",
                  "Irawan Arianto, S.T., M.T.",
                  "Supriyadi, S.T., M.T.",
                  "Ganjar Saefurahman, S.Pi., M.Phil., M.Sc.",
                  "Muhammad Fajar Sidiq, S.T., M.T.",
                ],
              },
              {
                title: "Event (Program)",
                members: [
                  "Dr. Dhani S. Wibawa, S.TP., M.Si.",
                  "Theresia Roselinda, S.T.",
                  "Fachry (KBS)",
                  "Ali Usman, S.TP.",
                  "Muhammad Fauzi, S.Pt., M.Si.",
                ],
              },
              {
                title: "Virtual Arrangement",
                members: [
                  "Dr. Liyantono, S.TP., M.Agr.",
                  "Dr. Bonang Waspadadi Ligar, S.Si., MMSI.",
                  "Archy Renaldy Pratama Nugraha, M.T",
                  "Aries Suharso, S.Si., M.Kom.",
                  "M. Iqbal, S.Kom.",
                ],
              },
              {
                title: "Logistics & Support",
                members: [
                  "Hendri Wijaya, S.TP., M.Si.",
                  "Falahah, S.Si., M.T.",
                  "Surya Fatihah Helmianto",
                  "Fadil Muhammad Fauzan",
                ],
              },
              {
                title: "Promotion, Social Media, Homepage",
                members: [
                  "Efri Yulistika, S.TP, M.T.",
                  "Yulianida Tamala, S.TP.",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="mt-6">
                <h3 className="font-semibold text-blue-950 mb-3">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.members.map((member) =>
                    typeof member === "string" ? (
                      <CommitteeMember key={member} name={member} />
                    ) : (
                      <CommitteeMember
                        key={member.name}
                        name={member.name}
                        role={member.role}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </CommitteeSection>
        </div>
      </div>
    </main>
  );
}
