"use client";

import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";

export default function FilterButton() {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 px-4 py-2 text-sm border border-dashed border-gray-300 rounded-[8px]  min-h-[41px] shadow-none"
    >
      <Funnel className="w-5 h-5" />
      <span>Types</span>
    </Button>
  );
}
