// src/lib/sponsorUtils.ts
import { Organization } from "@/data/sponsor";

export function getSponsorsByType(items: Organization[], type: string) {
  return items.filter((item) => item.type === type);
}