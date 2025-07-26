// components/TopGradient.tsx
import React from 'react';

const TopGradient: React.FC = () => {
  return (
    // components/TopGradientBackground.tsx
    // <div className="absolute top-0 left-0 w-full h-[50px] z-0 pointer-events-none">
    //   {/* Gradient background with fade */}
    //   <div className="w-full h-full bg-gradient-to-b from-[#F0B87E] via-[#F4AE8B] to-white" />
    // </div>
    <div className="absolute top-0 left-0 w-full h-[128px] z-0 pointer-events-none">
      {/* Soft blend from orange-pink to white */}
      <div className="w-full h-full bg-[linear-gradient(180deg,_#F8CBA0_0%,_#F3B0A4_40%,_#FFFFFF_85%)]" />
    </div>
  );
};

export default TopGradient;
