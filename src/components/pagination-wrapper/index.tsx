"use client";

import { Button } from "@/components/ui/button";
import { X, ChevronUp } from "lucide-react";
import MoreVerticalIcon from "../more-vertical";

export default function PaginationWrapper() {
  return (
    <nav className="border-t-[3px] border-blue-500">
      <div className="flex justify-between items-center h-[54px] bg-muted px-6">
        <div className="flex items-center gap-3">
          {/* Left Controls */}
          <div className="flex gap-2">
            <Button  size="icon" variant="ghost" className="w-8 h-8">
              <X className="w-5 h-5 text-black" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="w-8 h-8 cursor-pointer border-gray-300 bg-transparent hover:bg-muted"
            >
              <ChevronUp className="w-4 h-4 text-gray-700" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="w-8 h-8 cursor-pointer border-gray-300 bg-transparent hover:bg-muted"
            >
              <ChevronUp className="w-4 h-4 rotate-180 text-gray-700" />
            </Button>
          </div>

          {/* Center Info */}
          <div className="text-sm text-gray-800 whitespace-nowrap">
            <span className="font-semibold text-gray-900">1 of 540</span> in{" "}
            <a href="#" className="underline font-medium text-black">
              Valley Sales Strategy
            </a>
          </div>
        </div>

        {/* More Options */}
        <button className="p-1.5 cursor-pointer rounded hover:bg-gray-100">
          <MoreVerticalIcon />
        </button>
      </div>
    </nav>
  );
}
