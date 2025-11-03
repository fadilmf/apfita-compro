// src/lib/imdatesUtils.ts
import type { DateEntry, Phase } from "@/data/imdatesData";

export function getCurrentNext(dates: DateEntry[], phases: Phase[]) {
  const today = new Date();
  let currentIndex: number | null = null;
  let nextIndex: number | null = null;

  // 1. Cari currentIndex → fase aktif (today diantara start-end phase)
  for (let i = 0; i < dates.length; i++) {
    const phase = phases.find((p) => p.id === dates[i].phaseId);
    if (!phase) continue;

    const start = new Date(phase.startDate);
    const end = new Date(phase.endDate);

    if (today >= start && today <= end) {
      currentIndex = i;
      break;
    }
  }

  // 2. Cari nextIndex → berdasarkan dates.date
  for (let i = 0; i < dates.length; i++) {
    const d = new Date(dates[i].deadline);
    if (today < d) {
      nextIndex = i;
      break;
    }
  }

  if (nextIndex === null && dates.length > 0) nextIndex = dates.length - 1;

  return { currentIndex, nextIndex };
}
