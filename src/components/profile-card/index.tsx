// components/ProfileCard.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { tags, contactInfo, sections } from "@/lib/api";

import ProfileHeader from "./ProfileHeader";
import ProfileInfoSummary from "./ProfileInfoSummary";
import ProfileTags from "./ProfileTags";
import ContactInfoList from "./ContactInfoList";
import AccordionSectionList from "./AccordionSectionList";
import ProfileFooter from "./ProfileFooter";

export default function ProfileCard() {
  // const tags = [
  //   { label: "Stop Outreach", icon: Hand },
  //   { label: "Meeting Scheduled", icon: Calendar },
  //   { label: "Human Handover", icon: Heart },
  //   { label: "Interested", icon: Flame },
  // ];

  // const sections = [
  //   { title: "Intent Data", icon: ScanEye },
  //   { title: "Experience", icon: Crown },
  //   { title: "Education", icon: GraduationCap },
  //   { title: "LinkedIn Bio", icon: Linkedin },
  // ];

  // const contactInfo = [
  //   {
  //     icon: <Lock className="w-4 h-4" />,
  //     label: "Privacy",
  //     value: <span className="font-medium text-gray-900">Public Profile</span>,
  //   },
  //   {
  //     icon: <Linkedin className="w-4 h-4" />,
  //     label: "Linkedin",
  //     value: (
  //       <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-full truncate inline-block">
  //         linkedin.com/company/qo...
  //       </span>
  //     ),
  //   },
  //   {
  //     icon: <Mail className="w-4 h-4" />,
  //     label: "Email",
  //     value: (
  //       <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-full truncate inline-block">
  //         skeshav628@gmail.com
  //       </span>
  //     ),
  //   },
  //   {
  //     icon: <MapPin className="w-4 h-4" />,
  //     label: "Address",
  //     value: (
  //       <span className="font-medium text-gray-900 max-w-full truncate inline-block">
  //         California, United States of A...
  //       </span>
  //     ),
  //   },
  // ];

  return (
    <div className="max-w-sm mx-auto">
      <Card className="rounded-sm border border-gray-200 shadow-sm">
        <CardContent className="p-0">
          <ProfileHeader
            name="Keshav Ketan Saini"
            role="Software development engineer II"
            imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
            score="94"
          />

          <ProfileInfoSummary />

          <ProfileTags tags={tags} />

          <ContactInfoList contacts={contactInfo} />

          <AccordionSectionList sections={sections} />

          <ProfileFooter addedDate="Dec 3, 2018" />
        </CardContent>
      </Card>
    </div>
  );
}
