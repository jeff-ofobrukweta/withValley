"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface IconTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  text: string;
  rightIcon?: LucideIcon;
  className?: string;
}

export default function IconTextSquareButton({
  icon: Icon,
  text,
  rightIcon: RightIcon,
  className,
  ...props
}: IconTextButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "flex items-center gap-2 px-3 py-1.5",
        "bg-white text-sm font-medium text-black",
        "border border-gray-300 shadow-sm",
        "hover:bg-muted/50 transition-colors",
        "rounded-md min-h-[41px]",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      <Icon className="w-4 h-4" />
      <span className="whitespace-nowrap">{text}</span>
      {RightIcon && <RightIcon className="w-4 h-4 text-black/80" />}
    </Button>
  );
}
