import React from "react";
import { ChevronDown } from "lucide-react";

interface SectionItem {
  title: string;
  icon: React.ElementType;
}

interface AccordionSectionListProps {
  sections: SectionItem[];
}

export default function AccordionSectionList({
  sections,
}: AccordionSectionListProps) {
  return (
    <section>
      <div className="space-y-2">
        {sections.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex justify-between min-h-[57px] items-center text-sm border border-gray-200 border-l-0 border-r-0 rounded-none px-6 py-2 mb-0 hover:bg-muted cursor-pointer"
          >
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Icon className="w-4 h-4" />
              <span>{title}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </section>
  );
}
