"use client";

import { ChevronDown, Signature } from "lucide-react";
import IconTextButton from "../icon-text-style-btn/index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Pencil, Copy } from "lucide-react";

export default function WritingStyleButton() {
  return (
    <>
      {/* dropdown menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconTextButton
            icon={Signature}
            text="Zayd’s Writing Style"
            rightIcon={ChevronDown}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-40 rounded-xl border border-gray-200 shadow-md p-1"
          align="end"
        >
          <DropdownMenuItem className="flex items-center gap-3 text-sm text-black hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">
            <Pencil className="w-4 h-4 text-gray-500" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 text-sm text-black hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">
            <Copy className="w-4 h-4 text-gray-500" />
            <span>Duplicate</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
