// src/components/FooterLogoItem.tsx
import { Organization } from "@/data/sponsor";

interface LogoItemProps {
  item: Organization;
  size?: string;
}

export default function LogoItem({ item, size = "w-[150px] h-[100px]" }: LogoItemProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <img
        src={item.logo || "/placeholder.svg"}
        alt={item.name}
        className={`object-contain bg-white p-2 rounded-lg hover:opacity-80 transition-opacity ${size}`}
      />
    </a>
  );
}