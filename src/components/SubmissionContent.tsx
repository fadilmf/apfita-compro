"use client";

import { useState, useEffect, useRef } from "react";

export default function SubmissionsContent() {
  const [activeTab, setActiveTab] = useState("publication");
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 md:p-6 space-y-8">
          {/* Introduction Banner */}
          <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg">
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Authors with manuscripts accepted for presentation at the 4
                <sup>th</sup> ICAS 2024 will have several options for
                publication. By default, the accepted manuscripts will be
                published through{" "}
                <span className="font-medium text-blue-600">
                  Option 1: E3S Web of Conferences
                </span>{" "}
                (Scopus indexed proceeding) and non-accepted manuscripts will be
                published in an ISBN book chapter. In addition to that, selected
                manuscripts could be published in a number of journals.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("publication")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "publication"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              Publication
            </button>
            <button
              onClick={() => setActiveTab("submission")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "submission"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-300"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              Submission
            </button>
          </div>

          {/* Publication Content */}
          {activeTab === "publication" && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* ESS Web of Conferences Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
                <div className="h-2 bg-blue-600 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold text-blue-950 mb-3">
                  Option 1: E3S Web of Conferences
                </h2>
                <p className="text-blue-600 mb-4 text-sm">
                  Scopus indexed proceeding for accepted manuscripts
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-950 mb-2">
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>Manuscripts must be in English</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>Maximum 25% similarity score allowed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>Must use E3S Web of Conferences template</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Willing to revise manuscript according to reviewer
                          input within specified time
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Two-phase review process: before and after conference
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-950 mb-2">
                      Important Notes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Committee may cancel manuscripts that don't match
                          template or fail similarity test
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Jury's decision on article acceptance cannot be
                          contested
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Non-passing manuscripts can be published in ISBN book
                          chapter
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.e3s-conferences.org/about-the-journal/58-for-authors/instructions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm underline"
                    >
                      View Author Guidelines →
                    </a>
                  </div>
                </div>
              </div>

              {/* Universal Journal Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
                <div className="h-2 bg-blue-400 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold text-blue-950 mb-3">
                  Option 2: Universal Journal
                </h2>
                <p className="text-blue-600 mb-4 text-sm">
                  International peer-reviewed agricultural research journal
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  The Universal Journal of Agricultural Research publishes
                  high-quality research manuscripts in all areas of agriculture.
                  Additional publication costs may apply.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.hrpub.org/journals/jour_info.php?id=04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm underline"
                  >
                    More Information & Template →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Submission Content */}
          {activeTab === "submission" && (
            <div className="space-y-6">
              {/* Submission Guidelines Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
                <div className="h-2 bg-blue-500 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold text-blue-950 mb-4">
                  Initial Submission Guidelines
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-blue-950 mb-3">
                      Required Steps
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Submit full manuscript through:{" "}
                          <a
                            href="https://easychair.org/cfp/icas2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            EasyChair Submission System
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Use E3S Web of Conferences Template for initial
                          submission
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <span>
                          Selected journal manuscripts will require reformatting
                          (additional cost applies)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-950 mb-3">
                      Contact Information
                    </h3>
                    <p className="text-sm text-gray-600">
                      For further inquiries, please contact:{" "}
                      <a
                        href="mailto:icas.sv@apps.ipb.ac.id"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        mas archi
                      </a>
                    </p>
                  </div>

                  <a
                    href="https://easychair.org/cfp/icas2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold text-center"
                  >
                    Submit Manuscript
                  </a>
                </div>
              </div>

              {/* Participation Without Publication Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
                <div className="h-2 bg-blue-400 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold text-blue-950 mb-3">
                  Participation Without Publication
                </h2>
                <p className="text-sm text-gray-600">
                  Authors wishing to participate without publication should
                  notify the committee immediately after manuscript acceptance.
                  Send requests to icas.sv@apps.ipb.ac.id with subject
                  "Participation without publication" followed by your
                  Submission Number.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
