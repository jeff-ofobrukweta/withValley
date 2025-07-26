"use client";

import { ReactNode, useState } from "react";
import {
  Check
} from "lucide-react";
import CheckBadge from "../check-badge";

type MessageBlockProps = {
  children?: ReactNode;
};

export default function MessageBlock({
  children
}: MessageBlockProps) {

  return (
    <div className="relative flex gap-3">
      {/* Timeline Indicator */}
      <div className="flex flex-col items-center">
        {/* Blue Check Circle */}
        <CheckBadge icon={Check} />
        {/* Vertical Line */}
        <div className="w-px flex-1 bg-[#cccccc]" />
      </div>
       {/* Optional children (e.g., nested components) */}
        {children}
    </div>
  );
}
