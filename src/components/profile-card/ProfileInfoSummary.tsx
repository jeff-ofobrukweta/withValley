import React from "react";
import { Button } from "@/components/ui/button";
import { ScanFace, Target, TrendingUp } from "lucide-react";

export default function ProfileInfoSummary() {
  return (
    <section className="p-6 py-3">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-[10px]">
            <ScanFace className="w-4 h-4" />
            <span>ICP-Fit</span>
          </span>
          <div className="bg-gray-100 text-black border border-dashed border-gray-300 rounded-sm px-2 py-0.5 flex items-center gap-1 text-xs font-medium">
            <ScanFace className="w-4 h-4" />
            <span>High</span>
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-[10px]">
            <Target className="w-4 h-4" />
            <span>Campaign</span>
          </span>
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-2 py-0.5 text-black rounded-sm bg-gray-50 text-gray-800 text-[12px] font-medium hover:bg-gray-100"
          >
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
              <span className="relative inline-flex border-[3px] border-[#ccc] rounded-full h-4 w-4 bg-gray-600"></span>
            </span>
            <span>Early Stage Founders</span>
          </Button>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-[10px]">
            <TrendingUp className="w-4 h-4" />
            <span>Status</span>
          </span>
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-2 py-0.5 bg-red-100 text-red-700 rounded-sm text-[12px] font-medium hover:bg-red-100"
          >
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-100 opacity-75"></span>
              <span className="relative inline-flex border-[3px] border-[#F9D2D9] rounded-full h-4 w-4 bg-red-700"></span>
            </span>
            <span>Approval Required</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
