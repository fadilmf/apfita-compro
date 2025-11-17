export interface SubItem {
  title: string;
  time?: string;
}

export interface AgendaItem {
  time?: string;
  title: string;
  location?: string;
  type?: "session" | "special" | "break" | "tour";
  subItems?: SubItem[];
  speaker?: string;
}

export interface DaySchedule {
  title: string;
  date: string;
  agenda: AgendaItem[];
}

export const schedule: DaySchedule[] = [
  {
    title: "Day 1",
    date: "Monday, 17 Nov 2025",
    agenda: [
      {
        time: "08.00 – 08.30",
        title: "Registration",
        type: "special",
      },
      {
        time: "08.30 – 08.35",
        title: "Opening by Master of Ceremony",
        type: "special",
      },
      {
        time: "08.35 – 08.40",
        title: "Safety Video Introduction",
        type: "special",
      },
      {
        time: "08.40 – 08.50",
        title: "Singing National Anthem, Indonesia Raya & Hymne IPB",
        type: "special",
      },
      {
        time: "08.50 – 08.55",
        title: "Opening Prayer",
        type: "special",
      },
      {
        time: "08.55 – 09.05",
        title: "Performance – Traditional Dance",
        type: "special",
      },
      {
        time: "09.05 – 09.15",
        title: "Opening Address – Chairman of APFITA 2025",
        speaker: "Prof. Dr. Ir. Yandra Arkeman, M.Eng",
        type: "session",
      },
      {
        time: "09.15 – 09.25",
        title: "Welcome Address – Head of BRIN",
        speaker: "Prof. Dr. Arif Satria, S.Pi., M.Si.",
        type: "session",
      },
      {
        time: "09.25 – 09.35",
        title: "Welcome Address – President of APFITA",
        speaker: "Prof. Takaharu Kameoka",
        type: "session",
      },
      {
        time: "09.35 – 09.40",
        title: "Preparation for Honorary Speaker Session",
        type: "session",
      },

      // Honorary Speaker Section
      {
        title: "Honorary Speaker Session",
        type: "session",
        subItems: [
          {
            time: "09.40 – 10.00",
            title: "Prof. Dr. Ir. Rachmat Pambudy, M.S.",
          },
          {
            time: "10.00 – 10.20",
            title: "Prof. Brian Yuliarto, S.T., MEng., PhD.",
          },
          { time: "10.20 – 10.40", title: "Prof. Dr. Ir. Dadan Hidayatna" },
          {
            time: "10.40 – 11.00",
            title: "Diaz Hendropiyono, B.Sc., MA., M.P.A.",
          },
          { time: "11.00 – 11.20", title: "Sudaryono, BLNG., MM., M.BA." },
          {
            time: "11.20 – 11.40",
            title: "Laksamana (Purn) Dr. Didit Herdiarwan, M.P.A., M.B.A.",
          },
        ],
      },

      {
        time: "11.40 – 13.00",
        title: "Break",
        type: "break",
      },

      // Prom spik

      {
        type: "session",
        title: "Prominent Speaker (Chairperson: Irman Hermadi, Ph.D.)",
        time: "",
        subItems: [
          {
            time: "13.00 – 13.25",
            title: "Prof. Seishi Ninomiya, Ph.D.",
          },
          {
            time: "13.25 – 13.50",
            title: "Prof. Robert De Souza",
          },
          {
            time: "13.50 – 14.15",
            title: "Prof. Dr. Ir. Kudang B. Seminar, M.Sc.",
          },
          {
            time: "14.15 – 14.40",
            title: "Prof. Dr. Ir. Bambang Riyanto Trilaksono",
          },
          {
            time: "14.40 – 15.00",
            title: "Prof. Drs. Ec. Ir. Riyantoro Sarno, M.Sc., Ph.D.",
          },
          {
            time: "15.00 – 15.30",
            title: "Break",
          },
          {
            time: "15.30 – 15.55",
            title: "Dr. Leisa Armstrong, FAIM",
          },
          {
            time: "15.55 – 16.20",
            title: "Dr. Mira Maulida, S.TP., M.M.",
          },
          {
            time: "16.20 – 16.45",
            title: "Dr. Karlisa Priandana, S.T., M.Eng.",
          },
          {
            time: "16.45 – 17.10",
            title: "Dr. Sari Intan Kailaku, S.TP., M.Si.",
          },
          {
            time: "17.10 – 17.35",
            title: "Dr. Astie Darmayanatie, S.T., M.MSi., MSc.",
          },
        ],
      },
      {
        type: "special",
        title: "Gala Dinner",
        time: "19.00 – 21.00",
        subItems: [
          {
            time: "",
            title: "With Live Music",
          },
        ],
      },
    ],
  },

  {
    title: "Day 2",
    date: "November 18, 2025",
    agenda: [
      {
        type: "special",
        title: "Morning Exercise",
        time: "07.30 – 09.00",
      },
      {
        type: "special",
        title: "Participant Registration & Arrival",
        time: "08.30 – 09.00",
      },
      {
        type: "session",
        title: "Parallel Session I (Room A – D)",
        time: "09.00 – 10.15",
      },
      {
        type: "break",
        title: "Coffee Break",
        time: "10.15 – 10.30",
      },
      {
        type: "session",
        title: "Parallel Session II (Room A – D)",
        time: "10.30 – 11.45",
      },
      {
        type: "break",
        title: "Lunch Break",
        time: "11.45 – 13.00",
      },
      {
        type: "session",
        title: "Parallel Session III (Room A – D)",
        time: "13.00 – 14.15",
      },
      {
        type: "session",
        title: "Parallel Session IV (Room A – D)",
        time: "14.15 – 15.30",
      },
      {
        type: "break",
        title: "Break",
        time: "15.30 – 16.00",
      },
      {
        type: "special",
        title: "Short Opening",
        time: "16.00 – 16.05",
      },
      {
        type: "special",
        title: "Closing Remarks",
        time: "16.05 – 16.20",
      },
      {
        type: "special",
        title: "Announcement of Best Presenter and Best Paper",
        time: "16.20 – 16.35",
      },
      {
        type: "special",
        title: "Announcement of APFITA",
        time: "16.35 – 16.50",
      },
      {
        type: "special",
        title: "Closing Prayer",
        time: "16.50 – 16.55",
      },
      {
        type: "special",
        title: "Closing and Photo Session",
        time: "16.55 – 17.00",
      },
    ],
  },

  {
    title: "Day 3",
    date: "November 19, 2025",
    agenda: [
      {
        type: "tour",
        title: "Participant Gathering and Boarding",
        time: "08.00 – 08.15",
        subItems: [
          { title: "Meeting Point 1: IPB Baranangsiang" },
          { title: "Meeting Point 2: Gate 4 Bogor Botanical Garden" },
        ],
      },
      {
        type: "tour",
        title: "Departure to Bogor Botanical Garden",
        time: "08.15 – 08.30",
      },
      {
        type: "tour",
        title: "Leisure Walk at Mexican Garden Area",
        subItems: [{ title: "(inside Bogor Botanical Garden)" }],
        time: "08.30 – 09.00",
      },
      {
        type: "tour",
        title: "Guided Tour at Bogor Botanical Garden",
        time: "09.00 – 10.00",
        subItems: [{ title: "With Shuttle Bus 🚌" }],
      },
      {
        type: "tour",
        title: "Rest and Free Time",
        time: "10.00 – 10.30",
        subItems: [
          { title: "Meeting Point: Parking Lot Bogor Botanical Garden" },
          {
            title: "Please make sure in 10.25 you are already in meeting point",
          },
          { title: "We are about continue our fun!" },
        ],
      },
      {
        type: "tour",
        title: "Mobility to Soil and Agriculture Museum",
        time: "10.30 – 10.45",
      },
      {
        type: "tour",
        title: "Guided Tour at Soil and Agriculture Museum",
        time: "10.45 – 12.00",
        subItems: [
          {
            title:
              "Exploring History, Science, and Indonesia’s Agricultural Development",
          },
        ],
      },
      {
        type: "tour",
        title: "Free Time or Mobility Back to IPB Baranangsiang Campus",
        subItems: [
          {
            title:
              "You can choose to explore Bogor Culinary or directly head back to IPB with us",
          },
        ],
        time: "12.00 - end",
      },
    ],
  },
];
