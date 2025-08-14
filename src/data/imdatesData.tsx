import {
  Calendar,
  FileText,
  Bell,
  FileCheck,
  // CreditCard,
  Users,
} from "lucide-react";

export interface DateEntry {
  date: string;
  event: string;
  icon: React.ReactNode;
}

export const dates: DateEntry[] = [
  {
    date: "April 14, 2025",
    event: "Abstract Reception",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    date: "August 15, 2025",
    event: "Abstract Submission Deadline",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    date: "August 30, 2025",
    event: "Accepted Abstracts Announcement",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    date: "September 30, 2025",
    event: "Full Paper Submission Deadline",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    date: "October 31, 2025",
    event: "Accepted Full Paper Announcement",
    icon: <Bell className="w-6 h-6" />,
  },
  // {
  //   date: "November 5, 2025",
  //   event: "Registration Payment Deadline",
  //   icon: <CreditCard className="w-6 h-6" />,
  // },
  {
    date: "November 17-19, 2025",
    event: "15th APFITA Conference",
    icon: <Users className="w-6 h-6" />,
  },
];

export const phases = [
  {
    name: "Abstract Submission Phase",
    description: "Submit your abstract",
    startDate: "April 14, 2025",
    endDate: "August 15, 2025",
  },
  {
    name: "Accepted Abstracts Announcement",
    description: "",
    startDate: "August 15, 2025",
    endDate: "August 30, 2025",
  },
  {
    name: "Full Paper Submission Deadline",
    description: "",
    startDate: "August 30, 2025",
    endDate: "September 30, 2025",
  },
  {
    name: "Accepted Full Paper Announcement",
    description: "",
    startDate: "September 30, 2025",
    endDate: "October 31, 2025",
  },
  {
    name: "Registration Payment Deadline",
    description: "",
    startDate: "October 31, 2025",
    endDate: "November 5, 2025",
  },
  {
    name: "15th APFITA Conference",
    description: "",
    startDate: "November 17, 2025",
    endDate: "November 19, 2025",
  },
];