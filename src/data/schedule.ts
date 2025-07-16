export interface AgendaItem {
  time?: string;
  title: string;
  location?: string;
  type?: "session" | "special" | "break" | "tour";
  subItems?: { title: string }[];
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
        time: "08.00 - 09.00",
        title: "Opening Ceremony & Keynote Session",
        location: "ICC",
        type: "special",
        subItems: [
          { title: "Registration & Opening" },
          { title: "National Anthem" },
          { title: "Remarks" },
        ],
      },
      {
        time: "09.00 - 11.55",
        title: "Honorary Speaker Session",
        location: "ICC",
        type: "session",
        subItems: [
          {
            title: "Keynote talks from experts in agriculture and policy",
          },
        ],
      },
      {
        time: "11.55 - 13.05",
        title: "Break & Lunch",
        type: "break",
      },
      {
        time: "13.05 - 17.20",
        title: "Prominent Speaker Session",
        type: "session",
        subItems: [
          { title: "Talks by international and national invited speaker" },
        ],
      },
    ],
  },
  {
    title: "Day 2",
    date: "Tuesday, 18 Nov 2025",
    agenda: [
      {
        time: "09.00 - 17.00",
        title: "Parallel Scientific Sessions",
        location: "Meeting Rooms, ICC",
        type: "session",
        subItems: [
          { title: "Research presentations" },
          { title: "Coffee breaks & lunch" },
        ],
      },
      {
        time: "19.00 - 21.00",
        title: "Gala Dinner & Closing Ceremony",
        location: "Ballroom, ICC",
        type: "special",
      },
    ],
  },
  {
    title: "Day 3",
    date: "Wednesday, 19 Nov 2025",
    agenda: [
      {
        time: "08.00 - 15.00",
        title: "Excursion Trip",
        location: "Around Bogor",
        type: "tour",
        subItems: [
          { title: "Bogor Botanical Garden" },
          { title: "Science Techno Park IPB" },
          { title: "Surya Kencana Chinatown & Culinary Street" },
        ],
      },
      {
        time: "15.00 - 19.00",
        title: "Free time",
        type: "break",
      },
    ],
  },
];
