// // components/TopGradient.tsx
import React from "react";

const TopGradient: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[128px] z-0 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 85%
            ),
            linear-gradient(
              90deg,
              #E9B97E 0%,
              #F4AE8B 24.04%,
              #E7A6AF 45.67%,
              #EDD9BD 62.5%,
              #A1CDD3 80.29%,
              #E4C69D 97.12%
            )
          `,
          backgroundBlendMode: "normal",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
};





export default TopGradient;

