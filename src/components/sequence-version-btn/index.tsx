import { ChevronDown, CalendarClock } from "lucide-react";
import IconTextButton from "../icon-text-style-btn/index";

export default function SequenceVersionStyleBtn() {
  return (
    <IconTextButton
      icon={CalendarClock}
      text="Sequence version history"
      rightIcon={ChevronDown}
    />
  );
}
