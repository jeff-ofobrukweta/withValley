import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type CheckBadgeProps = {
  icon: LucideIcon;
  className?: string;
};

export default function CheckBadge({ icon: Icon, className }: CheckBadgeProps) {
  return (
    <div
      className={cn(
        "w-5 h-5 rounded-sm bg-gradient-to-b from-[#2AD1E3] to-[#18B7CE]",
        "shadow-inner shadow-white/20 flex items-center justify-center",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 rounded-sm bg-white/10 backdrop-blur-sm" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-sm opacity-30" />

      {/* Icon */}
      <Icon className="w-3 h-3 text-white z-10" />
    </div>
  );
}
