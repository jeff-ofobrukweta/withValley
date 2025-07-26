"use client";

import { Tally4, RefreshCw, Brain } from "lucide-react";
import ConnectMessageCard from "@/components/connect-message";
import CustomMessageInput from "@/components/custom-message-input";
import ModeButton from "@/components/mode-btn";
import SequenceVersionStyleBtn from "@/components/sequence-version-btn";

export default function Messages() {
  return (
    <div className="flex relative flex-col bg-[#F8F8F8] text-sm text-muted-foreground">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <section className="space-y-4">
          {/* Top Info Row */}
          <div className="flex items-start justify-between">
            <span className="text-xs text-muted-foreground pl-1 pt-0.5">
              Version 2 - Most recent
            </span>
            <SequenceVersionStyleBtn />
          </div>

          {/* Connect Message Card */}
          <ConnectMessageCard />
        </section>
      </div>

      {/* Sticky Footer (Input & Buttons) */}
      <div className="static bottom-0 left-0 w-full bg-transparent  px-4 sm:px-6 lg:px-8 py-4 z-50">
        <div className="max-w-5xl mx-auto space-y-4">
          <CustomMessageInput />

          <div className="flex justify-center items-center gap-3">
            <ModeButton icon={Tally4} text="Custom Message" active />
            <ModeButton icon={RefreshCw} text="Regenerate" />
            <ModeButton icon={Brain} text="Prompt" />
          </div>
        </div>
      </div>
    </div>
  );
}
