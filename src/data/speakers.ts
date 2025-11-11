export interface Speaker {
  name: string;
  title: string;
  organization: string;
  image: string;
  category: "opening" | "honorary" | "prominent";
  confirmed?: boolean;
  bio?: string;
  scholarUrl?: string;
  achievements: string[];
  researchAreas: string[];
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
    image: images["/src/assets/speakers/opening1.jpg"].default,
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
    image: images["/src/assets/speakers/honorspik1.jpg"].default,
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
    name: "Sudaryono, B.Eng., M.M., M.B.A.",
    title: "Deputy Minister of Agriculture",
    organization: "Ministry of Agriculture, Republic of Indonesia",
    image: images["/src/assets/speakers/honorspik2.png"].default,
    category: "honorary",
    confirmed: true,
    bio: "Sudaryono is Deputy Minister of Agriculture of Indonesia, emerging from a farming community background and now focused on strengthening national food security, farmer welfare and agricultural innovation.",
    scholarUrl: "https://sudaryono.id/#tentang-mas-dar",
    achievements: [
      "Elected Chairman of HKTI for 2025–2030",
      "Advocated for Indonesia's food self-sufficiency vision",
      "Promoted urban farming and increased productivity in agriculture",
    ],
    researchAreas: [
      "Food security & national agricultural production",
      "Farmer empowerment & agribusiness chains",
      "Urban farming & land optimization",
      "Agricultural policy & innovation",
    ],
  },

  {
    name: "Laksdya TNI (Purn.) Didit Herdiawan Ashaf",
    title: "Deputy Minister of Marine Affairs and Fisheries",
    organization:
      "Ministry of Marine Affairs and Fisheries, Republic of Indonesia",
    image: images["/src/assets/speakers/honorspik3.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Laksdya TNI (Purn.) Didit Herdiawan Ashaf is the Deputy Minister of Marine Affairs and Fisheries of the Republic of Indonesia. With a distinguished military background and extensive leadership experience, he now focuses on strengthening Indonesia’s maritime resilience, sustainable fisheries management, and national marine security.",
    scholarUrl: "https://kkp.go.id/tentang-kkp/profil-wakil-menteri.html",
    achievements: [
      "Appointed as Deputy Minister of Marine Affairs and Fisheries in 2024",
      "Served as a high-ranking officer in the Indonesian Navy (AAL 1984 graduate)",
      "Led various strategic maritime and naval operations across Indonesia",
      "Promotes sustainable fisheries and marine resource management policies",
    ],
    researchAreas: [
      "Maritime Security and Governance",
      "Sustainable Fisheries Management",
      "Marine Resource Policy",
      "Blue Economy and Ocean Development",
    ],
  },

  {
    name: "Prof. Dr. Ir. Dadan Hindayana",
    title: "Head",
    organization: "National Nutrition Agency",
    image: images["/src/assets/speakers/profdadan.png"].default,
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
    name: "Prof. Dr. Brian Yuliarto, S.T., M.Eng., Ph.D.",
    title: "Minister of Higher Education, Science, and Technology",
    organization:
      "Ministry of Higher Education, Science, and Technology, Republic of Indonesia",
    image: images["/src/assets/speakers/ProfBrian.jpg"].default,
    category: "honorary",
    confirmed: true,
    bio: "Prof. Brian Yuliarto is an eminent academic and researcher in nanotechnology and functional materials, now serving as the Minister of Higher Education, Science, and Technology of Indonesia, leading the transformation of the tertiary education and research ecosystem.",
    scholarUrl: "https://scholar.google.com/citations?user=lKZw5g4AAAAJ&hl=en",
    achievements: [
      "Recipient of the Habibie Prize 2024",
      "Listed among the World's Top 2% Scientists",
      "Authored over 300 peer-reviewed publications in nanotechnology and sensor materials",
    ],
    researchAreas: [
      "Nanotechnology & functional materials",
      "Sensor technology",
      "Higher education research & innovation ecosystem",
      "Technology downstreaming and industrial linkages",
    ],
  },

  {
    name: "Diaz Hendropriyono, B.Sc., M.A., M.B.A., M.P.A.",
    title: "Deputy Minister of Environment and Forestry",
    organization: "Ministry of Environment and Forestry, Republic of Indonesia",
    image: images["/src/assets/speakers/Diaz_Hendropiyono.png"].default,
    category: "honorary",
    confirmed: true,
    bio: "Diaz Hendropriyono currently serves as the Deputy Minister of Environment and Forestry of the Republic of Indonesia. With multidisciplinary expertise in public administration, business, and global leadership, he plays a central role in advancing Indonesia’s environmental governance, climate resilience, and sustainable forestry management.",
    scholarUrl: "https://kemenlh.go.id/contents/9/Profil-Wakil-Menteri",
    achievements: [
      "Appointed as Deputy Minister of Environment and Forestry by the President of Indonesia",
      "Former Special Staff to the President of Indonesia (2019–2024)",
      "Holds master’s degrees in public administration, global leadership, and business from reputable U.S. institutions",
      "Active contributor to Indonesia’s digital transformation and green economy initiatives",
      "Advocate for sustainable development and environmental innovation in policy and governance",
    ],
    researchAreas: [
      "Environmental Policy and Governance",
      "Climate Resilience and Sustainability",
      "Digital Transformation in Public Sector",
      "Green Economy and Forestry Innovation",
    ],
  },

  // Prominent Speaker
  {
    name: "Prof. Dr. Seishi Ninomiya",
    title: "Professor Emeritus / Project Professor",
    organization:
      "Graduate School of Agricultural and Life Sciences, University of Tokyo (and Visiting/Part-Time at Nanjing Agricultural University)",
    image: images["/src/assets/speakers/promspik1.jpg"].default,
    category: "prominent",
    confirmed: true,
    bio: "Prof. Seishi Ninomiya is a distinguished academic & researcher in the fields of plant phenomics, agro-informatics and applied statistics, bridging agriculture and information science. He has led major national and international research projects and served in high-level roles in associations promoting IT in agriculture.",
    scholarUrl: "https://scholar.google.com/citations?user=W93rQcMAAAAJ&hl=ja",
    achievements: [
      "Pioneer of IT and data-driven agriculture systems in Japan and Asia",
      "Past President of CIGR (International Commission of Agricultural & Biosystems Engineering) and Fellow of several societies",
      "Leader of major phenomics breeding-and-data platform projects, including semiarid-area rice-breeding pipeline",
    ],
    researchAreas: [
      "Plant phenomics & high-throughput phenotyping",
      "Agro-informatics / data-driven agriculture",
      "Applied statistics and biometrics in crop science",
      "Integration of information technology and sustainable agriculture",
    ],
  },

  {
    name: "Prof. Robert De Souza",
    title: "Professor",
    organization:
      "Department of Industrial Systems Engineering and Management & The Logistics Institute - Asia Pacific, NUS",
    image: images["/src/assets/speakers/promspik2.png"].default,
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
    image: images["/src/assets/speakers/promspik3.png"].default,
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
    image: images["/src/assets/speakers/promspik4.jpg"].default,
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
    image: images["/src/assets/speakers/promspik5.png"].default,
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
    image: images["/src/assets/speakers/promspik6.jpg"].default,
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
    image: images["/src/assets/speakers/promspik7.jpg"].default,
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
    image: images["/src/assets/speakers/promspik8.png"].default,
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
    image: images["/src/assets/speakers/promspik9.jpg"].default,
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
    name: "Dr. Leisa Armstrong",
    title: "Senior Lecturer and eAgriculture Research Group Leader",
    organization: "Edith Cowan University, Australia",
    image: images["/src/assets/speakers/promspik10.png"].default,
    category: "prominent",
    confirmed: true,
    bio: "Dr. Leisa Armstrong is a Senior Lecturer at Edith Cowan University, Australia, where she leads the eAgriculture Research Group. Her work focuses on the application of information and communication technologies (ICT) in agriculture, promoting smart farming solutions and data-driven decision-making to enhance productivity and sustainability.",
    scholarUrl: "https://scholar.google.com.au/citations?user=f8jUlyIAAAAJ",
    achievements: [
      "Leader of the eAgriculture Research Group at Edith Cowan University",
      "President of the Australian Society of ICT in Agriculture (ASICTA)",
      "Former President of the Asian Federation of ICT in Agriculture (AFITA)",
      "Over two decades of experience in agricultural informatics, crop science, and environmental stress management",
      "Advocates for digital transformation and women’s leadership in STEM and agriculture",
    ],
    researchAreas: [
      "Digital Agriculture and Smart Farming",
      "Agricultural Informatics",
      "Crop Science and Weed Management",
      "Data Analytics and ICT for Sustainable Agriculture",
      "Women in STEM and AgriTech Policy",
    ],
  },
  {
    name: "Dr. Astie Darmayantie, MMSI., MSc., ST.",
    title: "Chief of Task Force / Director of International Office & HPC Team",
    organization: "Universitas Gunadarma, Indonesia",
    image: images["/src/assets/speakers/promspik11.jpeg"].default,
    category: "prominent",
    confirmed: true,
    bio: "Dr. Astie Darmayantie is a senior academic leader at Universitas Gunadarma, responsible for international partnerships, high-performance computing (HPC) initiatives and strategic research collaborations. With strong background in informatics and technology, she plays a pivotal role in advancing digital education and research infrastructure in Indonesia.",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=UWhAVOoAAAAJ",
    achievements: [
      "Member of the Indonesia Artificial Intelligence Research Consortium (IARC) and lead collaborator in UG-HPC Team. :contentReference[oaicite:2]{index=2}",
      "Leads the International Office of Universitas Gunadarma facilitating global partnerships and student mobility. :contentReference[oaicite:3]{index=3}",
      "Authored multiple publications in software engineering, federated systems and data-driven applications. :contentReference[oaicite:4]{index=4}",
    ],
    researchAreas: [
      "High-Performance Computing & Federated Systems",
      "Software Engineering for Education & Research",
      "Internationalization of Higher Education",
      "Digital Infrastructure & Smart Campus",
    ],
  },
];
