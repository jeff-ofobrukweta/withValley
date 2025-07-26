"use client";


import Navigation from "@/components/navigation";
import PaginationWrapper from "@/components/pagination-wrapper";
import ProfileCard from "@/components/profile-card";

import TopGradientBackground from "@/components/top-gradient";
import CustomModal from "@/components/modal/index";

import { useState } from "react";
import Messages from "@/pages/messages";
import AITraining from "@/pages/ai-trainings";
import Research from "@/pages/researchs";


export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("AI Training");

  const renderTabContent = () => {
    switch (activeTab) {
      case "AI Training":
        return (
          <AITraining/>
        );
      case "Research":
        return (
          <Research/>
        );
      case "Messages":
      default:
        return (
          <Messages/>
        );
    }
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <PaginationWrapper />

      <CustomModal
        visible={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
        showFooter
        customFooter={
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Confirm
            </button>
          </div>
        }
      >
        <p>This is the modal content.</p>
      </CustomModal>

      <div className="relative overflow-hidden">
        <TopGradientBackground />

        <div className="relative z-10 pt-[90px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-6 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
              {renderTabContent()}
            </div>

            <div className="lg:col-span-2 sticky top-[100px]">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
