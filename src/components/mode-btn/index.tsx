import React from "react";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface ModeButtonProps {
  text: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

const ModeButton: React.FC<ModeButtonProps> = ({ text, icon: Icon, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center bg-[#ffffff] cursor-pointer gap-2 px-4 py-2 rounded-full border text-sm font-medium shadow-sm transition-all",
        active
          ? "border-2 border-[#00B7C8] text-black"
          : "border-2 border-[#E5E5E5] text-black hover:border-[#b0b0b0]"
      )}
    >
      <Icon className="w-4 h-4" />
      {text}
      {active && (
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );
};

export default ModeButton;
