"use client";

import { Tally4, RefreshCw, Brain } from "lucide-react";
import ConnectMessageCard from "@/components/connect-message";
import CustomMessageInput from "@/components/custom-message-input";
import ModeButton from "@/components/mode-btn";
import SequenceVersionStyleBtn from "@/components/sequence-version-btn";

export default function Messages() {
  return (
    <div className="text-sm text-muted-foreground space-y-6">
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

      <section className="space-y-4 pt-6">
        {/* Custom Message Input */}
        <CustomMessageInput />

        {/* Mode Buttons Row */}
        <div className="flex justify-center items-center gap-3">
          <ModeButton icon={Tally4} text="Custom Message" active />
          <ModeButton icon={RefreshCw} text="Regenerate" />
          <ModeButton icon={Brain} text="Prompt" />
        </div>
      </section>
    </div>
  );
}
