// components/ProfileFooter.tsx
import { Button } from "@/components/ui/button";

type Props = {
  addedDate: string;
};

export default function ProfileFooter({ addedDate }: Props) {
  return (
    <section className="px-6 pb-4 pt-6 text-center text-xs text-muted-foreground">
      <p className="font-medium">Added on: {addedDate}</p>
      <Button variant="outline" size="sm" className="mt-2 bg-[#F6F6F6]">
        <span className="font-bold text-[#000]">Report Information</span>
      </Button>
    </section>
  );
}
