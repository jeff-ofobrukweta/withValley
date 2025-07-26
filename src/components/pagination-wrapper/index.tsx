"use client";

import React from "react";
import CaretUpIcon from "../caret";
import CancelIcon from "../cancel-x-icon";
import MoreVerticalIcon from "../more-vertical";

const PaginationWrapper: React.FC = () => {
  return (
    <nav className="border-t-[3px] border-blue-500">
      <div className="flex justify-between items-center h-[54px] bg-[#FAFAFA] px-6">
        <div className="flex items-center gap-[12px]">
          {/* Left Controls */}
          <div className="flex gap-[8px]">
            <button className="p-1.5 rounded hover:bg-gray-100">
              <CancelIcon className="w-5 h-5 text-black" />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 border border-gray-300">
              <CaretUpIcon className="w-4 h-4 rotate-180 text-gray-700" />
            </button>
            <button className="p-1.5 rounded hover:bg-gray-100 border border-gray-300">
              <CaretUpIcon className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Center Info */}
          <div className="text-sm text-gray-800 whitespace-nowrap">
            <span className="font-semibold text-gray-900">1 of 540</span> in{' '}
            <a href="#" className="underline font-medium text-black">
              Valley Sales Strategy
            </a>
          </div>
        </div>

        {/* More Options Icon */}
        <div>
          <button className="p-1.5 rounded hover:bg-gray-100">
            <MoreVerticalIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PaginationWrapper;
