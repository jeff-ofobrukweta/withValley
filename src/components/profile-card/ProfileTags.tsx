import React from "react";
import { Plus, Tag, X } from "lucide-react";

interface TagItem {
  label: string;
  icon: React.ElementType;
}

interface ProfileTagsProps {
  tags: TagItem[];
}

export default function ProfileTags({ tags }: ProfileTagsProps) {
  return (
    <section className="p-6 py-0">
      <div className="border-t border-b py-4 border-[#E5E5E5]">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-sm">Tags</span>
          </div>
          <X className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>

        <div className="relative rounded-lg p-[2px] bg-white overflow-hidden">
          <div
            className="absolute inset-0 rounded-lg pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #E9B97E 0%, #F4AE8B 24.04%, #E7A6AF 45.67%, #EDD9BD 62.5%, #A1CDD3 80.29%, #E4C69D 97.12%),
                linear-gradient(360deg, #FFFFFF 42.75%, rgba(255, 255, 255, 0.2) 100%)
              `,
              WebkitMaskImage: `
                repeating-linear-gradient(to right, black 0 8px, transparent 8px 12px),
                repeating-linear-gradient(to bottom, black 0 8px, transparent 8px 12px)
              `,
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              maskImage: `
                repeating-linear-gradient(to right, black 0 8px, transparent 8px 12px),
                repeating-linear-gradient(to bottom, black 0 8px, transparent 8px 12px)
              `,
            }}
          />

          <div className="relative z-10 bg-white rounded-lg p-3 flex flex-wrap gap-2">
            {tags.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="p-[1px] cursor-pointer rounded-md bg-[linear-gradient(90deg,#E9B97E_0%,#F4AE8B_24.04%,#E7A6AF_45.67%,#EDD9BD_62.5%,#A1CDD3_80.29%,#E4C69D_97.12%)]"
              >
                <div className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 bg-white rounded-md">
                  <Icon className="w-4 h-4 text-[#7a7a7a]" />
                  <span className="text-[#7a7a7a]">{label}</span>
                </div>
              </div>
            ))}
            <div className="p-[1px] rounded-md bg-[linear-gradient(90deg,#E9B97E_0%,#F4AE8B_24.04%,#E7A6AF_45.67%,#EDD9BD_62.5%,#A1CDD3_80.29%,#E4C69D_97.12%)]">
              <button className="p-2 cursor-pointer rounded-md text-gray-600 bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(255,255,255,0))] backdrop-blur-sm">
                <Plus className="w-4 h-4 text-[#7a7a7a]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
