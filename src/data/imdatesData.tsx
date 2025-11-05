// src/data/imdatesData.tsx
import {
  FileText,
  Bell,
  FileCheck,
  Users,
} from "lucide-react";

export interface DateEntry {
  id: number;
  deadline: string; // hanya untuk frontend
  event: string;
  icon: React.ReactNode;
  phaseId: number; // hubungkan ke phases
}

export const dates: DateEntry[] = [
  {
    id: 1,
    deadline: "April 14, 2025",
    event: "Abstract Reception",
    icon: <FileText className="w-6 h-6" />,
    phaseId: 1,
  },
  {
    id: 2,
    deadline: "August 31, 2025",
    event: "Abstract Submission Deadline",
    icon: <FileCheck className="w-6 h-6" />,
    phaseId: 2,
  },
  {
    id: 3,
    deadline: "September 15, 2025",
    event: "Accepted Abstracts Announcement",
    icon: <Bell className="w-6 h-6" />,
    phaseId: 3,
  },
  {
    id: 4,
    deadline: "September 16, 2025",
    event: "Full Paper Reception",
    icon: <FileCheck className="w-6 h-6" />,
    phaseId: 4,
  },
  {
    id: 5,
    deadline: "September 30, 2025",
    event: "Full Paper Submission Deadline",
    icon: <FileCheck className="w-6 h-6" />,
    phaseId: 5,
  },
  // {
  //   id: 6,
  //   deadline: "October 31, 2025",
  //   event: "Accepted Full Paper Announcement",
  //   icon: <Bell className="w-6 h-6" />,
  //   phaseId: 6,
  // },
  {
    id: 7,
    deadline: "November 17-19, 2025",
    event: "15th APFITA Conference",
    icon: <Users className="w-6 h-6" />,
    phaseId: 7,
  },
];

export interface Phase {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

export const phases: Phase[] = [
  {
    id: 1,
    name: "Abstract Reception Phase",
    startDate: "April 14, 2025",
    endDate: "August 30, 2025",
  },
  {
    id: 2,
    name: "Abstract Submission Deadline",
    startDate: "August 31, 2025",
    endDate: "August 31, 2025", // phase ini cuma 1 hari
  },
  {
    id: 3,
    name: "Accepted Abstracts Announcement",
    startDate: "September 1, 2025",
    endDate: "September 15, 2025",
  },
  {
    id: 4,
    name: "Full Paper Reception Phase",
    startDate: "September 16, 2025",
    endDate: "September 30, 2025",
  },
  {
    id: 5,
    name: "Full Paper Submission Deadline",
    startDate: "September 30, 2025",
    endDate: "September 30, 2025", // satu hari
  },
  // {
  //   id: 6,
  //   name: "Accepted Full Paper Announcement",
  //   startDate: "October 31, 2025",
  //   endDate: "October 31, 2025",
  // },
  {
    id: 7,
    name: "15th APFITA Conference",
    startDate: "November 17, 2025",
    endDate: "November 19, 2025",
  },
];
