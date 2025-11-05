import { Organization } from "@/data/sponsor";
import LogoItem from "@/components/FooterLogoItem";

interface SponsorSectionProps {
  title?: string;
  items: Organization[];
  size?: "sm" | "md" | "lg";
  gridCols?: string;
  classNames?: string;
}

const sizeMap = {
  sm: "w-[80px] h-[40px] sm:w-[120px] sm:max-h-[60px] md:w-[90px] md:max-h-[60px]",
  md: "w-[120px] h-[80px] sm:w-[120px] sm:max-h-[90px] md:w-[120px] md:max-h-[80px]",
  lg: "w-[160px] h-[100px] sm:w-[200px] sm:max-h-[120px]",
};


export default function SponsorSection({
  title,
  items,
  size = "md",
  classNames = "",
}: SponsorSectionProps) {
  if (!items.length) return null;

  return (
    <div className={`flex flex-col space-y-4 ${classNames}`}>
        {title && <h3 className="text-blue-800 font-semibold text-lg">{title}</h3>}
        <div className={`flex flex-wrap justify-start gap-4`}>
            {items.map((item) => (
            <LogoItem key={item.name} item={item} size={sizeMap[size]} />
            ))}
        </div>
    </div>
  );
}