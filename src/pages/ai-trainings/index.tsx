"use client";

import FilterButton from "@/components/filter-btn";
import MessageBlock from "@/components/message-block";
import MessageCard from "@/components/message-card";
import { StarRating } from "@/components/star-rating";
import ToggleIncludedExcluded from "@/components/toogle-include-exclude";
import UserAvatarGroup from "@/components/user-avatar-group";
import PromptInput from "@/components/prompt-input";
import { Paperclip, SendHorizonal } from "lucide-react";
import WritingStyleButton from "@/components/writing-style-btn";


export default function AITraining() {
  return (
    <>
      <div className="flex items-center justify-between mb-[10px] flex-wrap gap-3">
        <section className="flex items-center gap-2">
          <ToggleIncludedExcluded />
          <FilterButton />
        </section>
        <WritingStyleButton />
      </div>

      <MessageBlock>
        <MessageCard
          date="Tue, May 12, 9:14 AM"
          titleMeta={
            <>
              <Paperclip className="w-4 h-4" />
              Manual changes
            </>
          }
          content={
            <section className="text-sm leading-relaxed">
              <p>
                Hey Crew, Hope you're having a great week so far! ✨ We've got
                some juicy reads for you about self-custody and shaking off the
                chains of traditional finance. Check it out:
              </p>
              <p className="mt-2 font-medium">Best regards, Andrew</p>
            </section>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <MessageCard
          date="Tue, May 12, 9:14 AM (2 days ago)"
          titleMeta={
            <>
              <SendHorizonal className="w-4 h-4" />
              Custom message
            </>
          }
          content={
            <section className="text-sm leading-relaxed">
              <p>
                Hey Crew, Hope you're having a great week so far! ✨ We've got
                some juicy reads for you about self-custody and shaking off the
                chains of traditional finance. Check it out:
              </p>
              <p className="mt-2 font-medium">Best regards, Andrew</p>
            </section>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <MessageCard
          date="8 days ago"
          titleMeta={<StarRating rating={4.5} />}
          content={
            <section className="text-sm leading-relaxed">
              <p>
                Hey Crew, Hope you're having a great week so far! ✨ We've got
                some juicy reads for you about self-custody and shaking off the
                chains of traditional finance. Check it out:
              </p>
              <p className="mt-2 font-medium">Best regards, Andrew</p>
            </section>
          }
        />
      </MessageBlock>

      <MessageBlock>
        <UserAvatarGroup date="8 days ago" />
      </MessageBlock>

      <div className="mt-2">
        <PromptInput />
      </div>
    </>
  );
}
