'use client';

import React from 'react';
import { Brain, Mail, FileText } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  'AI Training': <Brain className="w-4 h-4" />, 
  'Messages': <Mail className="w-4 h-4" />, 
  'Research': <FileText className="w-4 h-4" />, 
};

const TABS = ['AI Training', 'Messages', 'Research'];

type NavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="border-b border-gray-200 px-1 sm:px-1 lg:px-0">
      <ul className="flex items-center gap-6 h-[42px]">
        {TABS.map((tab) => (
          <li key={tab} className="h-full flex items-end">
            <button
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? 'page' : undefined}
              className={`flex items-center gap-1 text-sm h-full border-b-2 transition-all duration-150 ease-in-out cursor-pointer ${
                activeTab === tab
                  ? 'text-black border-black font-semibold'
                  : 'text-[#7A7A7A] border-transparent hover:text-black'
              }`}
            >
              <span className="flex items-center">{ICON_MAP[tab]}</span>
              <span className="leading-tight">{tab}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
