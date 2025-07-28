// lib/api.ts
import { ReactNode } from "react";
import {
  Hand,
  Calendar,
  Heart,
  Flame,
  ScanEye,
  Crown,
  GraduationCap,
  Linkedin,
  Lock,
  Mail,
  MapPin,
} from "lucide-react";

// --- Types ---
export type FilterOption = {
  label: string;
  count: number;
};

// --- Types ---
export type Tag = {
  label: string;
  icon: React.ElementType; // For Lucide icons
};

export type Section = {
  title: string;
  icon: React.ElementType;
};

export type ContactInfo = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

// --- Stubbed Data ---

export const tags: Tag[] = [
  { label: "Stop Outreach", icon: Hand },
  { label: "Meeting Scheduled", icon: Calendar },
  { label: "Human Handover", icon: Heart },
  { label: "Interested", icon: Flame },
];

export const sections: Section[] = [
  { title: "Intent Data", icon: ScanEye },
  { title: "Experience", icon: Crown },
  { title: "Education", icon: GraduationCap },
  { title: "LinkedIn Bio", icon: Linkedin },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: <Lock className="w-4 h-4" />,
    label: "Privacy",
    value: <span className="font-medium text-gray-900">Public Profile</span>,
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "Linkedin",
    value: (
      <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-full truncate inline-block">
        linkedin.com/company/qo...
      </span>
    ),
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: (
      <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-full truncate inline-block">
        skeshav628@gmail.com
      </span>
    ),
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Address",
    value: (
      <span className="font-medium text-gray-900 max-w-full truncate inline-block">
        California, United States of A...
      </span>
    ),
  },
];

// --- Stubbed Data ---
export const typeOptions: FilterOption[] = [
  { label: "Custom messages", count: 36 },
  { label: "Prompt", count: 33 },
  { label: "Regenerated messaging", count: 31 },
  { label: "Human edits", count: 31 },
  { label: "Feedback", count: 31 },
  { label: "Prospect added", count: 31 },
  { label: "Updated datapoint", count: 31 },
];
