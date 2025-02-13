"use client";

import { useState, useRef, useEffect } from "react";
import { Users, ChevronDown, ChevronUp } from "lucide-react";

export default function CommitteesContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const el = progressRef.current;
      if (!el) return;

      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, 1 - elementTop / windowHeight));

      el.style.width = `${progress * 100}%`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const CommitteeMember = ({
    name,
    role,
    photo,
    title,
  }: {
    name: string;
    role?: string;
    photo?: string;
    title?: string;
  }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 md:p-6 space-y-8">
          {/* Header Card */}
          <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-100">
              <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-200"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-950 text-center mb-2">
                Committee Members
              </h1>
              <p className="text-center text-blue-600">
                The 15th International Conference of Asia-Pacific Federation for
                Information Technology in Agriculture 2025
              </p>
            </div>
          </div>

          {/* Steering Committee */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="h-2 bg-blue-600 rounded-full mb-6"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-950">
                Steering Committee
              </h2>
              <button
                onClick={() => toggleSection("steering")}
                className="p-2 hover:bg-blue-50 rounded-full transition-colors"
              >
                {expandedSections.includes("steering") ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>

            {expandedSections.includes("steering") && (
              <div className="space-y-4">
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
              </div>
            )}
          </div>

          {/* Organizing Committee */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="h-2 bg-blue-400 rounded-full mb-6"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-950">
                Organizing Committee
              </h2>
              <button
                onClick={() => toggleSection("organizing")}
                className="p-2 hover:bg-blue-50 rounded-full transition-colors"
              >
                {expandedSections.includes("organizing") ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>

            {expandedSections.includes("organizing") && (
              <div className="space-y-4">
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

                <div className="pt-4">
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
              </div>
            )}
          </div>

          {/* Other Committees */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="h-2 bg-blue-300 rounded-full mb-6"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-blue-950">
                Other Committees
              </h2>
              <button
                onClick={() => toggleSection("other")}
                className="p-2 hover:bg-blue-50 rounded-full transition-colors"
              >
                {expandedSections.includes("other") ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>

            {expandedSections.includes("other") && (
              <div className="space-y-6">
                {/* Secretariat */}
                <div>
                  <h3 className="font-semibold text-blue-950 mb-3">
                    Secretariat
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Fatimah Alfi, S.Kom.",
                      "Fathin Humaira, S.Kom.",
                      "Shabrina Basyasyah, S.Kom.",
                    ].map((name) => (
                      <CommitteeMember key={name} name={name} />
                    ))}
                  </div>
                </div>

                {/* Treasury */}
                <div>
                  <h3 className="font-semibold text-blue-950 mb-3">Treasury</h3>
                  <div className="space-y-2">
                    <CommitteeMember
                      name="Nizmah Jatisari Hidayah, S.P., M.P."
                      role="Treasurer"
                    />
                    <CommitteeMember
                      name="Deasy Kartika Rahayu Kuncoro, S.T., M.T."
                      role="Vice Treasurer"
                    />
                  </div>
                </div>

                {/* Various Chairs and Their Members */}
                {[
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
                  <div key={section.title}>
                    <h3 className="font-semibold text-blue-950 mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.members.map((name) => (
                        <CommitteeMember key={name} name={name} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
