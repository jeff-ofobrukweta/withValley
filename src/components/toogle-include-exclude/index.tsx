"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ToggleIncludedExcluded() {
  const [selected, setSelected] = useState<"Included" | "Excluded">("Included");

  return (
    <div className="flex w-fit rounded-[10px] bg-[#f6f6f6] p-1 border border-gray-200 shadow-sm">
      {["Included", "Excluded"].map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option as "Included" | "Excluded")}
          className={cn(
            "px-5 py-1.5 text-sm rounded-[8px] transition-all font-medium cursor-pointer",
            selected === option ? "bg-white text-black shadow" : "text-gray-500"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
