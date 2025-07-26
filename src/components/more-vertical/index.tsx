import { Archive, Hand, MoreVertical, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function MoreOptionsDropdown() {
  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <MoreVertical className="w-4 h-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 rounded-2xl border border-gray-200 shadow-lg"
      >
        <DropdownMenuItem className="flex gap-3 py-3 text-base text-black hover:bg-muted focus:bg-muted">
          <Archive className="w-5 h-5 text-gray-500" />
          <span>Archive</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex gap-3 py-3 text-base text-black hover:bg-muted focus:bg-muted">
          <Trash2 className="w-5 h-5 text-gray-500" />
          <span>Delete</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex gap-3 py-3 text-base text-black hover:bg-muted focus:bg-muted">
          <Hand className="w-5 h-5 text-gray-500" />
          <span>Do Not Contact</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
