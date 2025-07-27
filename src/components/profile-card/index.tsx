"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Mail,
  MapPin,
  Plus,
  X,
  Hand,
  Calendar,
  Heart,
  Flame,
  Lock,
  Linkedin,
  GraduationCap,
  Crown,
  ScanEye,
  Tag,
  ScanFace,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ProfileCard() {

  const tags = [
    { label: "Stop Outreach", icon: Hand },
    { label: "Meeting Scheduled", icon: Calendar },
    { label: "Human Handover", icon: Heart },
    { label: "Interested", icon: Flame },
  ];

  const sections = [
    { title: "Intent Data", icon: ScanEye },
    { title: "Experience", icon: Crown },
    { title: "Education", icon: GraduationCap },
    { title: "LinkedIn Bio", icon: Linkedin },
  ];

  return (
    <div className="max-w-sm mx-auto">
      <Card className="rounded-sm border border-gray-200 shadow-sm">
        <CardContent className="p-0">
          <section className="p-6 py-3">
            {/* Header */}
            <div className="flex items-start gap-4 relative">
              <section className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="rounded-full w-16 h-16 object-cover"
                />
                <Badge className="relative border border-white -top-[15px] left-[15px] bottom-0 bg-[#148158] font-bold text-white text-xs px-2 py-0.5 rounded-full">
                  94
                </Badge>
              </section>

              <div className="flex-1 pt-1">
                <h2 className="text-base font-semibold leading-tight text-gray-900">
                  Keshav Ketan Saini
                </h2>
                <p className="text-sm text-muted-foreground leading-tight">
                  Software development engineer II
                </p>
              </div>
            </div>
          </section>
          <section className="p-6 py-3">
            {/* Info */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-[10px]">
                  <ScanFace className="w-4 h-4" />
                  <span>ICP-Fit</span>
                </span>
                <Badge className="bg-gray-100 text-black border border-dashed border-gray-300">
                  <ScanFace className="w-4 h-4" />
                  <span>High</span>
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-[10px]">
                  <Target className="w-4 h-4" />
                  <span>Campaign</span>
                </span>
                {/* pills with dot */}
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-2 py-0.5 text-black rounded-sm bg-gray-50 text-gray-800 text-[12px] font-medium hover:bg-gray-100"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
                    <span className="relative inline-flex border-[3px] border-[#ccc] rounded-full h-4 w-4 bg-gray-600"></span>
                  </span>
                  <span>Early Stage Founders</span>
                </Button>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-[10px]">
                  <TrendingUp className="w-4 h-4" />
                  <span>Status</span>
                </span>
                {/* <Badge className="bg-red-100 text-red-700">
                  Approval Required
                </Badge> */}
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-2 py-0.5 bg-red-100 text-red-700 rounded-sm text-[12px] font-medium hover:bg-red-100"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-100 opacity-75"></span>
                    <span className="relative inline-flex border-[3px] border-[#F9D2D9] rounded-full h-4 w-4 bg-red-700"></span>
                  </span>
                  <span>Approval Required</span>
                </Button>
              </div>
            </div>
          </section>
          <section className="p-6 py-0">
            {/* Tags Section */}
            <div className="border-t border-b py-4 border-[#E5E5E5]">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-sm">Tags</span>
                </div>
                <X className="w-4 h-4 text-gray-500 text-muted-foreground cursor-pointer" />
              </div>

              <div className="relative rounded-lg p-[2px] bg-white overflow-hidden">
                {/* Fake dashed border using background + mask */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none z-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, #E9B97E 0%, #F4AE8B 24.04%, #E7A6AF 45.67%, #EDD9BD 62.5%, #A1CDD3 80.29%, #E4C69D 97.12%),
                      linear-gradient(360deg, #FFFFFF 42.75%, rgba(255, 255, 255, 0.2) 100%)
                    `,
                    WebkitMaskImage: `
                      repeating-linear-gradient(
                        to right,
                        black 0 8px,
                        transparent 8px 12px
                      ),
                      repeating-linear-gradient(
                        to bottom,
                        black 0 8px,
                        transparent 8px 12px
                      )
                    `,
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    maskImage: `
        repeating-linear-gradient(to right, black 0 8px, transparent 8px 12px),
        repeating-linear-gradient(to bottom, black 0 8px, transparent 8px 12px)
      `,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 bg-white rounded-lg p-3 flex flex-wrap gap-2">
                  {tags.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="p-[1px] cursor-pointer rounded-md bg-[linear-gradient(90deg,#E9B97E_0%,#F4AE8B_24.04%,#E7A6AF_45.67%,#EDD9BD_62.5%,#A1CDD3_80.29%,#E4C69D_97.12%)]"
                    >
                      <div className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 bg-white rounded-md">
                        <Icon className="w-4 h-4 text-semibold text-gray-500 text-[#7a7a7a]" />
                        <span className="text-semibold text-[#7a7a7a]">{label}</span>
                      </div>
                    </div>
                  ))}
                  <div className="p-[1px] rounded-md bg-[linear-gradient(90deg,#E9B97E_0%,#F4AE8B_24.04%,#E7A6AF_45.67%,#EDD9BD_62.5%,#A1CDD3_80.29%,#E4C69D_97.12%)]">
                    <button className="p-2 cursor-pointer rounded-md text-gray-600 bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(255,255,255,0))] backdrop-blur-sm">
                      <Plus className="w-4 h-4 text-[#7a7a7a]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* tags end here */}
            </div>
          </section>

          <section className="p-6">
            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex gap-5 items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Privacy</span>
                </div>
                <span className="font-medium text-gray-900">
                  Public Profile
                </span>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="w-4 h-4" />
                  <span>Linkedin</span>
                </div>
                <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-[190px] truncate">
                  linkedin.com/company/qo...
                </span>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
                <span className="bg-gray-100 text-gray-900 rounded-full px-3 py-1 font-medium max-w-[190px] truncate">
                  skeshav628@gmail.com
                </span>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Address</span>
                </div>
                <span className="font-medium text-gray-900 truncate max-w-[190px]">
                  California, United States of A...
                </span>
              </div>
            </div>
          </section>

          <section>
            {/* Accordion Sections */}
            <div className="space-y-2">
              {sections.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex justify-between min-h-[57px] items-center text-sm border border-gray-200 border-l-0 border-r-0 rounded-none px-6 py-2 mb-0 hover:bg-muted cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <Icon className="w-4 h-4" />
                    <span>{title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </section>
          <section className="">
            {/* Footer */}
            <div className="text-xs mt-[40px] text-center text-muted-foreground mt-2">
              <p className="font-medium">Added on: Dec 3, 2018</p>
              <Button variant="outline" size="sm" className="mt-2 bg-[#F6F6F6]">
                <span className="font-bold text-[#000]">
                  Report Information
                </span>
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
