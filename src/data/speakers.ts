export interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
  category: "opening" | "honorary" | "prominent";
  confirmed?: boolean;
  bio?: string;
  scholarUrl?: string;
  achievements?: string[];
  researchAreas?: string[];
}

const images = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png}", {
  eager: true,
}) as Record<string, { default: string }>;

export const speakers: Speaker[] = [
  // Opening Speaker
  {
    name: "Prof. Dr. Arif Satria, S.P., M.Si.",
    title: "Rector",
    organization: "IPB University",
    image: images["/src/assets/opening1.jpg"].default,
    category: "opening",
    bio: "Prof. Dr. Arif Satria is the Rector of IPB University and a distinguished professor in agricultural sciences. He has made significant contributions to sustainable agriculture and food security in Indonesia.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=clh9314AAAAJ&hl=enX",
    achievements: [
      "Recipient of the National Innovation Award",
      "Published over 100 research papers in international journals",
      "Led multiple national agricultural development programs",
    ],
    researchAreas: [
      "Sustainable Agriculture",
      "Food Security",
      "Agricultural Policy",
      "Rural Development",
    ],
  },
  // Honorary Speaker
  {
    name: "Prof. Dr. Ir. Rachmat Pambudy, M.S.",
    title: "Minister of National Development Planning",
    organization: "Republic of Indonesia",
    image: images["/src/assets/honorspik1.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Prof. Dr. Ir. Rachmat Pambudy is a prominent figure in Indonesia's development planning. His expertise spans economic policy, agricultural development, and sustainable resource management.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=8xDl2ikAAAAJ&hl=en",
    achievements: [
      "Former advisor to multiple Indonesian presidents",
      "Key architect of Indonesia's agricultural modernization strategy",
      "Author of numerous policy papers on economic development",
    ],
    researchAreas: [
      "Economic Development",
      "Agricultural Economics",
      "Public Policy",
      "Sustainable Development",
    ],
  },
  {
    name: "Dr. Ir. H. Andi Amran Sulaiman, M.P.",
    title: "Minister of Agriculture",
    organization: "Republic of Indonesia",
    image: images["/src/assets/honorspik2.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Dr. Ir. H. Andi Amran Sulaiman has been instrumental in transforming Indonesia's agricultural sector. His leadership has focused on increasing productivity, improving farmer welfare, and enhancing food security.",
    scholarUrl: "https://scholar.google.com/citations?user=XSirOL8AAAAJ&hl=en",
    achievements: [
      "Implemented innovative agricultural policies that increased national rice production",
      "Pioneered digital agriculture initiatives across Indonesia",
      "Recipient of multiple international awards for agricultural leadership",
    ],
    researchAreas: [
      "Agricultural Innovation",
      "Food Security",
      "Agricultural Technology",
      "Rural Development",
    ],
  },
  {
    name: "Ir. Sakti Wahyu Trenggono, M.M.",
    title: "Minister of Maritime Affairs and Fisheries",
    organization: "Republic of Indonesia",
    image: images["/src/assets/honorspik3.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Ir. Sakti Wahyu Trenggono has been at the forefront of developing Indonesia's maritime and fisheries sector. His work focuses on sustainable fishing practices, marine conservation, and coastal community development.",
    scholarUrl: "https://id.wikipedia.org/wiki/Sakti_Wahyu_Trenggono",
    achievements: [
      "Led major reforms in Indonesia's fishing industry",
      "Implemented policies to combat illegal fishing",
      "Developed programs to support small-scale fishermen",
    ],
    researchAreas: [
      "Maritime Economics",
      "Sustainable Fisheries",
      "Marine Conservation",
      "Coastal Development",
    ],
  },
  {
    name: "Prof. Dr. Ir. Dadan Hindayana",
    title: "Head",
    organization: "National Nutrition Agency",
    image: images["/src/assets/speakers/profdadan.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Prof. Dr. Ir. Dadan Hindayana is an expert in nutrition and public health. His work at the National Nutrition Agency focuses on improving nutritional outcomes across Indonesia, particularly for vulnerable populations.",
    scholarUrl: "https://scholar.google.com/citations?user=DE142rUAAAAJ&hl=en",
    achievements: [
      "Pioneered community-based nutrition programs",
      "Developed national nutritional guidelines",
      "Led research on addressing micronutrient deficiencies",
    ],
    researchAreas: [
      "Public Health Nutrition",
      "Maternal and Child Nutrition",
      "Food Fortification",
      "Nutrition Policy",
    ],
  },
  {
    name: "Prof. Brian Yuliarto, S.T., M.Eng., Ph.D.",
    title: "Director General of Higher Education, Research and Technology",
    organization:
      "Ministry of Education, Culture, Research and Technology, Republic of Indonesia",
    image: images["/src/assets/speakers/ProfBrian.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "",
    scholarUrl: "",
    achievements: [""],
    researchAreas: [""],
  },
  {
    name: "Diaz Hendrapriyono, B.Sc., M.A.,M.B.A., M.P.A.",
    title: "Head",
    organization:
      "BAKTI, Ministry of Communication and Information Technology, Republic of Indonesia",
    image: images["/src/assets/speakers/Diaz_Hendropiyono.png"].default,
    category: "honorary",
    confirmed: true,
    bio: "",
    scholarUrl: "",
    achievements: [""],
    researchAreas: [""],
  },
  // Prominent Speaker
  {
    name: "Prof. Dan A lancu",
    title: "Professor of Operations, Information and Technology",
    organization: "Stanford University",
    image: images["/src/assets/promspik1.jpg"].default,
    category: "prominent",
    bio: "Prof. Dan A. Iancu is a distinguished professor at Stanford University specializing in operations research, optimization, and decision-making under uncertainty. His research has applications in agricultural supply chains and resource allocation.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=52NB8D8AAAAJ&hl=id",
    achievements: [
      "Multiple best paper awards in operations research",
      "Developed novel optimization algorithms used in agricultural planning",
      "Consultant to major agricultural technology companies",
    ],
    researchAreas: [
      "Operations Research",
      "Decision Analysis",
      "Supply Chain Optimization",
      "Agricultural Technology",
    ],
  },
  {
    name: "Prof. Robert De Souza",
    title: "Professor",
    organization:
      "Department of Industrial Systems Engineering and Management & The Logistics Institute - Asia Pacific, NUS",
    image: images["/src/assets/promspik2.jpg"].default,
    category: "prominent",
    bio: "Prof. Robert De Souza is a leading expert in logistics and supply chain management at the National University of Singapore. His work has significant implications for agricultural supply chains and food distribution systems.",
    scholarUrl: "https://www.researchgate.net/profile/Robert-De-Souza",
    achievements: [
      "Pioneered innovative logistics solutions for perishable agricultural products",
      "Developed frameworks for sustainable supply chain management",
      "Led major research initiatives on digital supply chains",
    ],
    researchAreas: [
      "Supply Chain Management",
      "Logistics Systems",
      "Digital Supply Chains",
      "Sustainable Distribution",
    ],
  },
  {
    name: "Prof. Dr. Ir. Kudang B. Seminar, M.Sc.",
    title: "Professor in Computer Technology",
    organization: "IPB University",
    image: images["/src/assets/promspik3.jpg"].default,
    category: "prominent",
    bio: "Prof. Dr. Ir. Kudang B. Seminar is a leading expert in agricultural informatics and computer technology applications in agriculture. His work bridges technology and agricultural practices to enhance productivity and sustainability.",
    scholarUrl: "https://www.researchgate.net/profile/Kudang-Seminar-2",
    achievements: [
      "Developed multiple agricultural information systems used across Indonesia",
      "Pioneer in precision agriculture applications in Southeast Asia",
      "Led major digital transformation initiatives in agricultural education",
    ],
    researchAreas: [
      "Agricultural Informatics",
      "Precision Agriculture",
      "Digital Farming",
      "Agricultural Decision Support Systems",
    ],
  },
  {
    name: "Dr. Sari Intan Kailaku, S.TP., M.Si.",
    title: "Researcher",
    organization: "National Research and Innovation Agency (BRIN)",
    image: images["/src/assets/promspik4.jpg"].default,
    category: "prominent",
    bio: "Dr. Sari Intan Kailaku is a distinguished researcher at Indonesia's National Research and Innovation Agency. Her work focuses on food technology, post-harvest processing, and value addition in agricultural products.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=xg4Bdr8AAAAJ&hl=en",
    achievements: [
      "Developed innovative food processing technologies",
      "Led research on reducing post-harvest losses",
      "Multiple patents in food technology",
    ],
    researchAreas: [
      "Food Technology",
      "Post-harvest Processing",
      "Food Safety",
      "Value-added Agriculture",
    ],
  },
  {
    name: "Prof. Dr. Ir. Bambang Riyanto Trilaksono",
    title: "Professor of Electrical Engineering and Informatics",
    organization: "Bandung Institute of Technology",
    image: images["/src/assets/promspik5.jpg"].default,
    category: "prominent",
    bio: "Prof. Dr. Ir. Bambang Riyanto Trilaksono specializes in electrical engineering and informatics at ITB. His research includes applications of control systems and robotics in agriculture and food production.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=Ik5Ft5EAAAAJ&hl=en",
    achievements: [
      "Pioneered agricultural robotics applications in Indonesia",
      "Developed automated systems for precision agriculture",
      "Led major research initiatives on smart farming",
    ],
    researchAreas: [
      "Agricultural Robotics",
      "Control Systems",
      "Smart Farming",
      "Automation in Agriculture",
    ],
  },
  {
    name: "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D.",
    title: "Head of Intelligent Information Management Laboratory",
    organization: "Sepuluh Nopember Institute of Technology (ITS)",
    image: images["/src/assets/promspik6.jpg"].default,
    category: "prominent",
    bio: "Prof. Drs. Ec. Ir. Riyanarto Sarno leads the Intelligent Information Management Laboratory at ITS. His expertise spans information systems, business process management, and artificial intelligence applications in agriculture.",
    scholarUrl:
      "https://scholar.google.co.id/citations?user=QOMOtp0AAAAJ&hl=en",
    achievements: [
      "Developed AI systems for agricultural decision support",
      "Pioneer in business process optimization for agricultural enterprises",
      "Led major digital transformation projects in the agricultural sector",
    ],
    researchAreas: [
      "Information Systems",
      "Business Process Management",
      "Artificial Intelligence",
      "Agricultural Informatics",
    ],
  },
  {
    name: "Dr. Karlisa Priandana, S.T., M.Eng.",
    title:
      "AI Expert and Director of Talent Development and Research Development",
    organization:
      "Directorate General of Research and Development, Ministry of Higher Education, Science and Technology, Republic of Indonesia",
    image: images["/src/assets/promspik7.jpg"].default,
    category: "prominent",
    bio: "Dr. Karlisa Priandana is an AI expert focusing on applications in agriculture and natural resource management. Her work at the Ministry of Higher Education, Science and Technology drives innovation in agricultural technology.",
    scholarUrl: "https://scholar.google.com/citations?user=D6JGVzwAAAAJ&hl=en",
    achievements: [
      "Led the development of AI applications for crop disease detection",
      "Pioneered machine learning approaches for agricultural yield prediction",
      "Developed talent programs that have trained hundreds of agricultural technologists",
    ],
    researchAreas: [
      "Artificial Intelligence",
      "Machine Learning",
      "Agricultural Technology",
      "Talent Development",
    ],
  },
  {
    name: "Dr. Mira Maulida, S.TP., M.M.",
    title: "Lecturer",
    organization: "School of Business Management, BINUS University",
    image: images["/src/assets/promspik8.jpg"].default,
    category: "prominent",
    bio: "Dr. Mira Maulida specializes in agricultural business management and food industry economics at BINUS University. Her research focuses on value chain analysis, agribusiness, and entrepreneurship in the agricultural sector.",
    scholarUrl: "https://www.researchgate.net/profile/Mira-Maulida",
    achievements: [
      "Developed innovative agribusiness models adopted by multiple enterprises",
      "Led research on agricultural entrepreneurship and startup development",
      "Consultant to major food industry companies",
    ],
    researchAreas: [
      "Agribusiness Management",
      "Food Industry Economics",
      "Agricultural Entrepreneurship",
      "Value Chain Analysis",
    ],
  },
  {
    name: "Prof.Dr. Ir.Yandra Arkeman, M.Eng.",
    title:
      "Chairman of BRAIN (Blockchain, Robotics, & Artificial Intelligence Networks)",
    organization: "IPB University",
    image: images["/src/assets/promspik9.jpg"].default,
    category: "prominent",
    bio: "Prof. Dr. Ir. Yandra Arkeman chairs the BRAIN initiative at IPB University, focusing on cutting-edge technologies like blockchain, robotics, and AI in agriculture. His work is transforming agricultural practices through digital innovation.",
    scholarUrl: "https://scholar.google.ca/citations?user=LDf7YzkAAAAJ&hl=en",
    achievements: [
      "Pioneer in blockchain applications for agricultural supply chains",
      "Developed robotic systems for precision agriculture",
      "Led major AI initiatives for agricultural optimization",
    ],
    researchAreas: [
      "Blockchain Technology",
      "Agricultural Robotics",
      "Artificial Intelligence",
      "Digital Agriculture",
    ],
  },
  {
    name: "Prof. Dr. Ir. Herry Suhardiyanto, M.Sc.",
    title: "Chairman",
    organization: "Badan Supervisi Bank Indonesia (BSBI)",
    image: images["/src/assets/speakers/ProfHerry.jpg"].default,
    category: "prominent",
    confirmed: true,
    bio: "",
    scholarUrl: "",
    achievements: [""],
    researchAreas: [""],
  },
];