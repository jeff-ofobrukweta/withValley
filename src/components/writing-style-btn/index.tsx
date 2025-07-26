import { ChevronDown, Signature } from "lucide-react";
import IconTextButton from "../icon-text-style-btn/index";

export default function WritingStyleButton() {
  return (
    <IconTextButton
      icon={Signature}
      text="Zayd’s Writing Style"
      rightIcon={ChevronDown}
    />
  );
}
