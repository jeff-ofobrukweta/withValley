"use client";
import { useState } from "react";
import FilterButton from "@/components/filter-btn";
import MessageBlock from "@/components/message-block";
import MessageCard from "@/components/message-card";
import { StarRating } from "@/components/star-rating";
import ToggleIncludedExcluded from "@/components/toogle-include-exclude";
import UserAvatarGroup from "@/components/user-avatar-group";
import PromptInput from "@/components/prompt-input";
import { Brain, Paperclip, SendHorizonal } from "lucide-react";
import WritingStyleButton from "@/components/writing-style-btn";

export default function AITraining() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between mb-[20px] mt-[10px] flex-wrap gap-3">
        <section className="flex items-center gap-2">
          <ToggleIncludedExcluded />
          <FilterButton />
        </section>
        <WritingStyleButton />
      </div>

      <MessageBlock>
        <MessageCard
          open={false}
          onToggle={() => ""} // toogle function here....
          titleMeta={
            <>
              <Paperclip className="w-4 h-4" />
              Manual changes
            </>
          }
          metaDescription={
            <p>
              Writing style updated from{" "}
              <span className="font-medium text-black font-700">
                Campaign name
              </span>{" "}
              via{" "}
              <span className="font-medium text-black font-700">
                Prospect name
              </span>{" "}
              • Tue, May 12, 9:14 AM
            </p>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <MessageCard
          open={isOpen}
          onToggle={setIsOpen}
          titleMeta={
            <>
              <SendHorizonal className="w-4 h-4" />
              Custom message
            </>
          }
          metaDescription={
            <p>
              Writing style updated from{" "}
              <span className="font-medium text-black font-700">
                Campaign name
              </span>{" "}
              via{" "}
              <span className="font-medium text-black font-700">
                Prospect name
              </span>{" "}
              • Tue, May 12, 9:14 AM (2 days ago)
            </p>
          }
          content={
            <section className="text-sm leading-relaxed space-y-6">
              <p className="font-medium">Hey Crew,</p>

              <p className="font-medium">
                Hope you&apos;re having a great week so far! ✨ We&apos;ve got
                some juicy reads for you about self-custody and shaking off the
                chains of traditional finance. Check it out:
              </p>

              <div className="space-y-1">
                <p className="font-medium">Best regards,</p>
                <p className="font-medium">Andrew</p>
              </div>
            </section>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <MessageCard
          open={false}
          onToggle={() => ""} // toogle function here....
          titleMeta={
            <>
              <Brain className="w-4 h-4" />
              Generated message
            </>
          }
          metaDescription={
            <p>
              Message generated from{" "}
              <span className="font-medium text-black font-700">
                Campaign name
              </span>{" "}
              via{" "}
              <span className="font-medium text-black font-700">
                Prospect name
              </span>{" "}
              <span className="font-medium">by Valley</span> • 8 days ago
            </p>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <MessageCard
          open={false}
          onToggle={() => ""} // toogle function here....
          titleMeta={<StarRating rating={4.5} />}
          metaDescription={
            <p>
              Message rated from{" "}
              <span className="font-medium text-black font-700">
                Campaign name
              </span>{" "}
              via{" "}
              <span className="font-medium text-black font-700">
                Prospect name
              </span>{" "}
              <span className="font-medium">by You</span> • 8 days ago
            </p>
          }
        />
      </MessageBlock>

      <MessageBlock showLine={false}>
        <UserAvatarGroup
          primaryText="James Laurensky and 45 others have been added to Performance tracking"
          timestamp="8 days ago"
        />
      </MessageBlock>

      <div className="mt-8">
        <PromptInput />
      </div>
    </>
  );
}
