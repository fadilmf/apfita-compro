export interface SubmissionPhase {
  id: number;
  title: string;
  description: string;
  deadline?: string;
  badge?: string;
  href?: string;
  href_desc?: string;
  href_active?: boolean;
  active: boolean;
}
export const submissionPhases = [
  {
    id: "1",
    title: "Phase 1: Abstract Submission",
    description:
      "Abstract submission period is now closed. Please check for further updates.",
    deadline: "August 31, 2025",
    active: false, // Menandakan fase ini sudah selesai
    badge: "Closed", // Menambahkan badge untuk menandai fase ini sudah selesai
  },
  {
    id: "2",
    title: "Phase 2: Abstract Announcement & Payment Required",
    description:
      "Upon abstract acceptance, please complete the payment as instructed on the Registration Fee page.",
    active: false,
    badge: "Closed",
    href: "/registration", // Link untuk pembayaran
    href_active: false,
    href_desc: "Go to Registration Fee Page",
  },
  {
    id: "3",
    title: "Phase 3: Letter of Acceptance for Oral Presentation",
    description:
      "Once the payment has been confirmed, the Letter of Acceptance will be officially issued and sent by email.",
    active: false,
    badge: "Closed",
  },
  {
    id: "4",
    title: "Phase 4: Full Paper Submission",
    description:
      "Full paper submissions will be accepted starting September 16, 2025. Access to this link is restricted to the first author who submitted the abstract. The link has also been sent to the email address used during submission.",
    deadline: "The opening is set for November 17, 2025",
    active: true,
    href: "https://www.morressier.com/call-for-papers/682f33f147f9de643df82577", // Link untuk full paper submission akan diposting nanti
    badge: "Closed Soon!",
    href_active: true, // Link untuk full paper submission akan diposting nanti
    href_desc: "Submmission Link",
  },
];
