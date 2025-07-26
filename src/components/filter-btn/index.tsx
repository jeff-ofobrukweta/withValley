"use client";

import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TypeFilterDialog from "../type-filter-dialogue";

export default function FilterButton() {
  return (
    <DropdownMenu>
      {/* ✅ FIX: Use asChild to avoid nested <button> */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-4 py-2 text-sm border border-dashed border-gray-300 rounded-[8px] min-h-[41px] shadow-none"
        >
          <Funnel className="w-5 h-5" />
          <span>Types</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <TypeFilterDialog />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
