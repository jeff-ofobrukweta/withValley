'use client';

import { Sparkles } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PromptInput() {
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center w-full rounded-full border border-gray-200 bg-white p-[10px]">
        <Input
          type="text"
          placeholder="Prompt to train messaging style..."
          className="flex-1 text-sm placeholder:text-gray-500 text-gray-700 bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none p-0 pl-[10px]"
        />
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border border-gray-200 hover:bg-gray-100 w-9 h-9 ml-2 p-0"
        >
          <Sparkles className="w-4 h-4 text-gray-700" />
        </Button>
      </div>
    </div>
  );
}
