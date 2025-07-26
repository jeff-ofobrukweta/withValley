"use client";

import Navigation from "@/components/navigation";
import PaginationWrapper from "@/components/pagination-wrapper";
import ProfileCard from "@/components/profile-card";

import TopGradientBackground from "@/components/top-gradient";

import { useState } from "react";
import Messages from "@/pages/messages";
import AITraining from "@/pages/ai-trainings";
import Research from "@/pages/researchs";
import { useModal } from "@/components/modal/context/modal-context";

export default function Home() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState("AI Training");

  const renderTabContent = () => {
    switch (activeTab) {
      case "AI Training":
        return <AITraining />;
      case "Research":
        return <Research />;
      case "Messages":
      default:
        return <Messages />;
    }
  };

  return (
    <>
      <div className="bg-[#F8F8F8] min-h-screen">
        <PaginationWrapper />
        
        

        <div className="relative overflow-hidden">
          <TopGradientBackground />

          <div className="relative z-10 mt-[77px] px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-6 items-start">
              <div className="lg:col-span-4 flex flex-col">
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
    </>
  );
}
