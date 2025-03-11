import { motion } from "framer-motion";
import { User, Users, Globe, Building2 } from "lucide-react";

interface Reviewer {
  name: string;
  title?: string;
  country: string;
  countryCode: string; // ISO 3166-1 alpha-2 code
  institution?: string;
}

const reviewers: Reviewer[] = [
  { name: "Prof. Seishi Ninomiya", country: "Japan", countryCode: "JP" },
  {
    name: "Prof. Dr. Ir. Kudang Boro Seminar, M. Sc",
    country: "Indonesia",
    countryCode: "ID",
  },
  { name: "Prof. Takaharu Kameoka", country: "Japan", countryCode: "JP" },
  { name: "Prof. Adinarayana J", country: "India", countryCode: "IN" },
  { name: "Lee Jeong-Jae", country: "Korea", countryCode: "KR" },
  { name: "Ajit Maru", country: "India", countryCode: "IN" },
  { name: "Tien-Yin Chou", country: "Taiwan", countryCode: "TW" },
  { name: "Yi-Chich Chiu", country: "Taiwan", countryCode: "TW" },
  { name: "Prof. Dan Iancu", country: "USA", countryCode: "US" },
  { name: "Prof. Robert De Souza", country: "Singapore", countryCode: "SG" },
  { name: "Dr. Imran Ali", country: "Australia", countryCode: "AU" },
  { name: "Prof. Delwar Akbar", country: "Australia", countryCode: "AU" },
  {
    name: "Prof. Premaratne Samaranayake",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Prof. Muhammad Nabil",
    country: "Brunei Darussalam",
    countryCode: "BN",
  },
  { name: "Prof. Ir. Dr. Yus Aniza", country: "Malaysia", countryCode: "MY" },
  {
    name: "Assoc. Prof. Dr. Izzatdin Abd. Aziz",
    country: "Malaysia",
    countryCode: "MY",
  },
  { name: "Prof. Roger Frutos", country: "France", countryCode: "FR" },
  { name: "Prof. Matthias Kleinke", country: "German", countryCode: "DE" },
  { name: "Prof. Marimin", country: "Indonesia", countryCode: "ID" },
  { name: "Prof. Agus Buono", country: "Indonesia", countryCode: "ID" },
  {
    name: "Prof. Dr. Ir. Yandra Arkeman, M.Eng",
    country: "Indonesia",
    countryCode: "ID",
  },
  { name: "Dr. Irman Hermadi", country: "Indonesia", countryCode: "ID" },
  { name: "Prof. Roni Kastaman", country: "Indonesia", countryCode: "ID" },
  {
    name: "Prof. Dr. Ir. Bambang Riyanto Trilaksono",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Prof. Rika Ampuh Hadiguna",
    country: "Indonesia",
    countryCode: "ID",
  },
  { name: "Prof. Sriyunani Partiwi", country: "Indonesia", countryCode: "ID" },
  {
    name: "Prof. Vincent Rodin",
    institution: "France/UBO",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Dra. Medria Kusuma Dewi, M.T., PhD",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Dr. Ir. Sri Wahjuni, M.T.",
    country: "Indonesia",
    countryCode: "ID",
  },
];

const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;

export default function Reviewers() {
  // Group reviewers by country
  const reviewersByCountry = reviewers.reduce((acc, reviewer) => {
    const country = reviewer.country;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(reviewer);
    return acc;
  }, {} as Record<string, Reviewer[]>);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-navy-900 mb-6">
            International Organizing Committee and Reviewers
          </h2>
          <p className="text-lg text-gray-600">
            Distinguished academics and professionals from around the world
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-blue-950" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {reviewers.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Reviewers</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Globe className="w-8 h-8 text-blue-950" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Object.keys(reviewersByCountry).length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Countries Represented
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Building2 className="w-8 h-8 text-blue-950" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                  <div className="text-sm text-gray-600">Institutions</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Country Flags Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex justify-center">
              Participating Countries
            </h3>
            <div className="flex flex-wrap gap-4">
              {Array.from(
                new Map(reviewers.map((r) => [r.countryCode, r])).values() // Filter duplikat berdasarkan countryCode
              ).map((country) => (
                <div
                  key={country.countryCode}
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <img
                    src={getFlagUrl(country.countryCode) || "/placeholder.svg"}
                    alt={`${country.country} flag`}
                    className="w-6 h-4 object-cover rounded"
                  />
                  <span className="text-sm text-gray-600">
                    {country.country}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reviewers List */}
          <div className="space-y-8">
            {Object.entries(reviewersByCountry).map(
              ([country, countryReviewers], countryIndex) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: countryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-blue-950 text-white px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          getFlagUrl(countryReviewers[0].countryCode) ||
                          "/placeholder.svg"
                        }
                        alt={`${country} flag`}
                        className="w-8 h-6 object-cover rounded shadow-sm"
                      />
                      <h3 className="text-lg font-semibold">{country}</h3>
                      <span className="text-sm text-blue-200">
                        ({countryReviewers.length} reviewers)
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {countryReviewers.map((reviewer, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <User className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <div className="font-medium text-gray-900">
                              {reviewer.name}
                            </div>
                            {reviewer.institution && (
                              <div className="text-sm text-gray-500">
                                {reviewer.institution}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
