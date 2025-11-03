import logoBrain from "/src/assets/logo/logo_brain.png";
import logoTelU from "/src/assets/sponsors_partners/Logo Tel U.png";
import logoKementan from "/src/assets/sponsors_partners/Logo Kementan.png";
import logoUNIKOM from "/src/assets/sponsors_partners/Logo UNIKOM.png";
import logoUNPAD from "/src/assets/sponsors_partners/logo-unpad.png";
import logoGUNDAR from "/src/assets/sponsors_partners/Logo Gunadarma.png";
import logoUMB from "/src/assets/sponsors_partners/UMB.png";
import logoHIPI from "/src/assets/sponsors_partners/HIPI.png";
import logoBRI from "/src/assets/sponsors_partners/BRI BIRU_PNG.png";
import logoFW from "/src/assets/sponsors_partners/FW.png";
import logoBAI from "/src/assets/sponsors_partners/BAI.png";
import logoIOP from "/src/assets/sponsors_partners/Logo-IOP.jpg";
import logoIndofood from "/src/assets/sponsors_partners/Logo Indofood Hires-Biru.png";
import logoAktuator from "/src/assets/sponsors_partners/logoAktuator.png";
import logoPeruri from "/src/assets/sponsors_partners/LogoPDS.png";

export type SponsorPartnerType =
  | "grand"
  | "regular"
  | "donation"
  | "publisher"
  | "supported"
  | "cohost";

export interface Organization {
  name: string;
  logo: string;
  url?: string;
  type: SponsorPartnerType;
  size?: "large" | "medium" | "small";
}

export const sponsors: Organization[] = [
  {
    name: "BRAIN IPB University",
    logo: logoBrain,
    type: "grand",
    url: "https://brain.ipb.ac.id",
  },
  {
    name: "Bank Rakyat Indonesia",
    logo: logoBRI,
    type: "regular",
    size: "large",
    url: "https://bri.co.id",
  },
  {
    name: "Indofood",
    logo: logoIndofood,
    type: "donation",
    size: "small",
    url: "https://www.indofood.com",
  },
  {
    name: "Aktuator",
    logo: logoAktuator,
    type: "donation",
    size: "small",
    url: "https://aktuator.id",
  },
  {
    name: "Peruri Digital Security",
    logo: logoPeruri,
    type: "donation",
    size: "small",
    url: "https://pds.id",
  },
  {
    name: "IOP Conference Series: Earth and Enviromental Sciences",
    logo: logoIOP,
    type: "publisher",
    url: "https://iopscience.iop.org/journal/1755-1315",
  },
  {
    name: "Forum Wacana IPB",
    logo: logoFW,
    type: "supported",
    url: "https://forumwacanaipb.org/",
  },
  {
    name: "Bisnis dan Aplikasi Industri IPB",
    logo: logoBAI,
    type: "supported",
    url: "https://apfita2025.com",
  },
  {
    name: "Kementerian Pertanian Republik Indonesia",
    logo: logoKementan,
    type: "supported",
    url: "https://www.pertanian.go.id",
  },
  {
    name: "Telkom University",
    logo: logoTelU,
    type: "supported",
    url: "https://telkomuniversity.ac.id",
  },
  {
    name: "Universitas Komputer Indonesia",
    logo: logoUNIKOM,
    type: "supported",
    url: "https://www.unikom.ac.id",
  },
  {
    name: "Universitas Padjadjaran",
    logo: logoUNPAD,
    type: "supported",
    url: "https://www.unpad.ac.id",
  },
  {
    name: "Universitas Gunadarma",
    logo: logoGUNDAR,
    type: "cohost",
    url: "https://www.gunadarma.ac.id",
  },
  {
    name: "Universitas Muhammadiyah Bandung",
    logo: logoUMB,
    type: "supported",
    url: "https://umbandung.ac.id/",
  },
  {
    name: "HIPI",
    logo: logoHIPI,
    type: "supported",
    url: "https://apfita2025.com",
  },
];
