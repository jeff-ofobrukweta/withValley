"use client";

import { ReactNode, useState } from "react";
import { Check } from "lucide-react";
import CheckBadge from "../check-badge";

type MessageBlockProps = {
  children?: ReactNode;
  showLine?: boolean;
};

export default function MessageBlock({
  children,
  showLine = true,
}: MessageBlockProps) {
  return (
    <div className="relative flex gap-3">
      {/* Timeline Indicator */}
      <div className="flex flex-col items-center">
        {/* Blue Check Circle */}
        <CheckBadge icon={Check} />
        {/* Vertical Line */}
        <div
          className={`w-px flex-1 ${
            showLine ? "bg-[#cccccc]" : "bg-transparent"
          }`}
        />
      </div>
      {/* Optional children (e.g., nested components) */}
      {children}
    </div>
  );
}
