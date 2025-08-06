// src/components/LogoGridSection.tsx

import { Organization } from "@/data/sponsor";
import { cn } from "@/lib/utils";

interface LogoGridSectionProps {
  title: string;
  items: Organization[];
  className?: string;
  imageSize?: string; // contoh: "w-[150px] h-[80px]"
  gridCols?: string;
}

export default function LogoGridSection({
  title,
  items,
  className,
  imageSize = "w-[150px] h-[100px]",
  gridCols,
}: LogoGridSectionProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-blue-800 font-semibold text-lg">{title}</h3>
      <div className={cn("grid gap-4", gridCols ?? "")}>
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start"
          >
            <img
              src={item.logo || "/placeholder.svg"}
              alt={item.name}
              className={cn(
                "bg-white p-2 rounded-lg object-contain hover:opacity-80 transition-opacity",
                imageSize
              )}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
