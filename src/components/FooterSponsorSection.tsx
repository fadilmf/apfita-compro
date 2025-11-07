import { Organization } from "@/data/sponsor";
import LogoItem from "@/components/FooterLogoItem";

interface SponsorSectionProps {
  title?: string;
  items: Organization[];
  size?: "sm" | "md" | "lg";
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

  const lowerTitle = title?.toLowerCase() || "";

  const isSponsor = lowerTitle.includes("sponsor");
  const isMainSponsor = lowerTitle.includes("main sponsor");
  const isPublisher = lowerTitle.includes("publisher");
  const isCohost =
    lowerTitle.includes("cohost") ||
    lowerTitle.includes("co-host") ||
    lowerTitle.includes("co host");

  const appliedSize = isMainSponsor ? "md" : size;

  // Tentukan layout otomatis
  let layoutClass = "";

  if (isMainSponsor) {
    layoutClass = "flex justify-start"; // ⬅️ ubah dari justify-center ke justify-start
  } else if (isPublisher || isCohost) {
    layoutClass = "grid grid-cols-2 gap-4 justify-items-center"; // dua sejajar
  } else if (isSponsor) {
    layoutClass = "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center";
  } else {
    layoutClass = "flex flex-wrap justify-start gap-4";
  }

  return (
    <div className={`flex flex-col space-y-4 ${classNames}`}>
      {title && (
        <h3 className="text-blue-800 font-semibold text-lg">{title}</h3>
      )}

      <div className={layoutClass}>
        {items.map((item) => (
          <LogoItem key={item.name} item={item} size={sizeMap[appliedSize]} />
        ))}
      </div>
    </div>
  );
}
