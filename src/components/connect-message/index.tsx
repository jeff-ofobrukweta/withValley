"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ClipboardCopy,
  Mail,
  CheckCheck,
  CircleDotDashed,
  Rocket
} from "lucide-react";
import { useState } from "react";

// Custom Toggle Switch – matches UI
const JustificationToggle = ({ checked }: { checked: boolean }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer w-10 h-5">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        readOnly
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-gray-400 transition-colors shadow-inner" />
      <div className="absolute left-0 top-0 w-5 h-5 flex items-center justify-center">
        <div className="absolute left-[2px] top-[2px] w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center transition-transform peer-checked:translate-x-5">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </div>
      </div>
    </label>
  );
};

export default function ConnectMessageCard() {
  const [justificationOn] = useState(false);

  return (
    <Card className="border border-gray-200 rounded-lg shadow-sm">
      <CardContent className="px-6 py-0 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            <Rocket className="w-4 h-4" />
            Connect Message
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2 pr-4 border-r border-gray-300">
              <CircleDotDashed className="w-4 h-4 text-gray-400" />
              <span>Justification</span>
              <JustificationToggle checked={justificationOn} />
            </div>
            <span className="pl-4 text-[#7a7a7a] font-semibold">
              Score: <span className="text-[#DF1C41]">24</span>
            </span>
          </div>
        </div>

        {/* Message Body */}
        <div className="text-sm text-gray-800 space-y-4 whitespace-pre-line leading-relaxed">
          <p>Hey Crew,</p>
          <p>
            Hope you&apos;re doing awesome! 🌟 We&apos;ve got some juicy reads for you
            about self-custody and shaking off the chains of traditional
            finance. Check it out:
          </p>
          <p>Cheers,</p>
          <p>[Your Name]</p>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-1">
          <Button variant="outline" size="icon">
            <ClipboardCopy className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-md">
              <Mail className="w-4 h-4" />
            </Button>

            <div className="h-6 w-px bg-gray-200 mx-1" />

            <Button className="bg-black text-white hover:bg-gray-900 rounded-md">
              <CheckCheck className="w-4 h-4 mr-2" />
              Approve
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
