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
