"use client";

import {
  Check,
  ChevronDown,
  ChevronUp,
  Paperclip,
  SendHorizonal,
} from "lucide-react";
import { ReactNode, useState } from "react";

type MessageBlockProps = {
  date: string;
  titleMeta?: ReactNode;
  content?:ReactNode
};

export default function MessageCard({
  date,
  titleMeta,
  content,
}: MessageBlockProps) {
  const [open, setOpen] = useState(false);
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
      <div className="shadow-sm border rounded-xl bg-[#ffffff]">
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-muted/50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            {titleMeta}
          </div>
          {open ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {open && content &&(
          <div className="px-4 pb-4 text-sm whitespace-pre-wrap mt-[10px]">{content}</div>
        )}
      </div>
    </div>
  );
}
