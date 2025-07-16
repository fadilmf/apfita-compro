
import logoBrain from "/src/assets/logo/logo_brain.png";
import logoTelU from "/src/assets/Logo Tel U.png";
import logoKementan from "/src/assets/Logo Kementan.png";
import logoUNIKOM from "/src/assets/Logo UNIKOM.png";
import logoUNPAD from "/src/assets/Logo UNPAD.png";
import logoGUNDAR from "/src/assets/Logo Gunadarma.png";
import logoUMB from "/src/assets/LogoUMBandung.png";
import logoHIPI from "/src/assets/LogoHIPI.jpg";
import logoBRI from "/src/assets/sponsors_partners/BRI BIRU_PNG.png";
import logoFW from "/src/assets/sponsors_partners/fwResilien_Horizontal.png";
import logoBAI from "/src/assets/sponsors_partners/BAI.png";
import logoIOP from "/src/assets/Logo-IOP.jpg";

export type SponsorPartnerType = 
  | "grand"
  | "regular"
  | "publisher"
  | "supported"
  | "partner";

export interface Organization {
  name: string;
  logo: string;
  url?: string;
  type: SponsorPartnerType;
}

export const sponsors: Organization[] = [
  {
    name: "BRAIN IPB University",
    logo: logoBrain,
    type: "grand",
    url: "https://ipb.ac.id",
  },
  {
    name: "BRI",
    logo: logoBRI,
    type: "regular",
    url: "https://bri.co.id",
  },
  {
    name: "IOP Conference Series",
    logo: logoIOP,
    type: "publisher",
    url: "https://iopscience.iop.org/journal/1755-1315",
  },
  {
    name: "FW IPB",
    logo: logoFW,
    type: "supported",
    url: "https://ipb.ac.id",
  },
  {
    name: "BAI",
    logo: logoBAI,
    type: "supported",
    url: "https://apfita2025.com",
  },
  {
    name: "Kementerian Pertanian RI",
    logo: logoKementan,
    type: "partner",
    url: "https://www.pertanian.go.id",
  },
  {
    name: "Telkom University",
    logo: logoTelU,
    type: "partner",
    url: "https://telkomuniversity.ac.id",
  },
  {
    name: "Universitas Komputer Indonesia",
    logo: logoUNIKOM,
    type: "partner",
    url: "https://www.unikom.ac.id",
  },
  {
    name: "Universitas Padjadjaran",
    logo: logoUNPAD,
    type: "partner",
    url: "https://www.unpad.ac.id",
  },
  {
    name: "Universitas Gunadarma",
    logo: logoGUNDAR,
    type: "partner",
    url: "https://www.gunadarma.ac.id",
  },
  {
    name: "Universitas Muhammadiyah Bandung",
    logo: logoUMB,
    type: "partner",
    url: "https://umbandung.ac.id/",
  },
  {
    name: "HIPI",
    logo: logoHIPI,
    type: "partner",
    url: "https://apfita2025.com",
  },
];
