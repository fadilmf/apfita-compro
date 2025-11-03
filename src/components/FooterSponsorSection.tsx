import { Organization } from "@/data/sponsor";
import LogoItem from "@/components/FooterLogoItem";

interface SponsorSectionProps {
  title?: string;
  items: Organization[];
  size?: "sm" | "md" | "lg";
  gridCols?: string;
}

const sizeMap = {
  sm: "w-[80px] h-[40px] sm:w-[120px] sm:h-[60px] md:w-[120px] md:h-[60px] lg:w-[120px] lg:h-[60px]",
  md: "w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] md:w-[150px] md:h-[100px] lg:w-[150px] lg:h-[100px]",
  lg: "w-[160px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[200px] md:h-[120px] lg:w-[200px] lg:h-[120px]",
};


export default function SponsorSection({
  title,
  items,
  size = "md",
  gridCols = "grid-cols-2",
}: SponsorSectionProps) {
  if (!items.length) return null;

  return (
    <div className="flex flex-col space-y-4">
        {title && <h3 className="text-blue-800 font-semibold text-lg">{title}</h3>}
        <div className={`flex flex-wrap justify-start md:justify-center gap-4 ${gridCols ?? ""}`}>
            {items.map((item) => (
            <LogoItem key={item.name} item={item} size={sizeMap[size]} />
            ))}
        </div>
    </div>
  );
}