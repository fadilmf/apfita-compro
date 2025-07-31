export interface SubmissionPhase {
  id: number;
  title: string;
  description: string;
  deadline?: string;
  badge?: string;
  active: boolean;
}

export const submissionPhases: SubmissionPhase[] = [
  {
    id: 1,
    title: "Phase 1: Abstract Submission",
    deadline: "Deadline August 15, 2025",
    description:
      "Submit your abstract (250-300 words) according to the categories listed above. Include title, authors, affiliations, and keywords.",
    badge: "OPEN NOW",
    active: true,
  },
  {
    id: 2,
    title: "Phase 2: Payment Required",
    description:
      "Please follow the instructions on the 'Registration Fee' page to complete your payment.",
    active: false,
  },
  {
    id: 3,
    title: "Phase 3: Full Paper Submission",
    deadline: "Deadline September 30, 2025",
    description:
      "After abstract acceptance, especially for authors who wish to present and publish, you will be invited to submit your full paper using the IOP template. Details will be provided to authors with accepted abstracts.",
    badge: "COMING SOON",
    active: false,
  },
];
