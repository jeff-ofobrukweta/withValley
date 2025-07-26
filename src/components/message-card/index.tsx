"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

type MessageBlockProps = {
  date: string;
  titleMeta?: ReactNode;
  content?: ReactNode;
  open?: boolean; // controlled open state
  onToggle?: (open: boolean) => void; // callback to update open state externally
};

export default function MessageCard({
  date,
  titleMeta,
  content,
  open: openProp,
  onToggle,
}: MessageBlockProps) {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? openProp : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!openProp);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex-1 mb-6 relative -top-[10px]">
      {/* Header */}
      <div className="px-4 py-3 text-sm text-muted-foreground">
        <p>
          Writing style updated from{" "}
          <span className="font-medium text-black font-700">Campaign name</span>{" "}
          via{" "}
          <span className="font-medium text-black font-700">Prospect name</span>{" "}
          • {date}
        </p>
      </div>

      {/* Collapsible Body */}
      <div className="shadow-sm border rounded-xl bg-white">
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-muted/50"
          onClick={handleToggle}
        >
          <div className="flex items-center text-[#7a7a7a] gap-2 text-sm font-medium">
            {titleMeta}
          </div>
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {open && content && (
          <div className="px-4 pb-4 text-sm whitespace-pre-wrap mt-[10px]">
            {content}
          </div>
        )}
      </div>
    </div>
  );
}
