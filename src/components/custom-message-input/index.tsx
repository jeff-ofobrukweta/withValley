"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";

export default function CustomMessageInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center w-full h-12 bg-white border border-[#e5e5e5] rounded-sm px-4 shadow-sm">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a custom message..."
          className="flex-grow text-sm placeholder-gray-400 text-gray-900 bg-transparent border-none focus:outline-none"
        />
        <div className="h-5 border-l-2 border-gray-200 mx-3" />
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600 transition"
          aria-label="Send Message"
        >
          <SendHorizonal className="w-5 h-5 text-[#222]" />
        </button>
      </div>
    </div>
  );
}
