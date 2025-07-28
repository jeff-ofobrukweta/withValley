import React from "react";
import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  name: string;
  role: string;
  imageUrl: string;
  score: string;
}

export default function ProfileHeader({
  name,
  role,
  imageUrl,
  score,
}: ProfileHeaderProps) {
  return (
    <section className="p-6 py-3">
      <div className="flex items-start gap-4 relative">
        <section className="relative">
          <img
            src={imageUrl}
            alt="Profile"
            className="rounded-full w-16 h-16 object-cover"
          />
          <Badge className="relative border border-white -top-[15px] left-[15px] bottom-0 bg-[#148158] font-bold text-white text-xs px-2 py-0.5 rounded-full">
            {score}
          </Badge>
        </section>
        <div className="flex-1 pt-1">
          <h2 className="text-base font-semibold leading-tight text-gray-900">
            {name}
          </h2>
          <p className="text-sm text-muted-foreground leading-tight">{role}</p>
        </div>
      </div>
    </section>
  );
}
