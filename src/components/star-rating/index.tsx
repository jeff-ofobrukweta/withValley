"use client";

import React from "react";

interface StarRatingProps {
  rating: number;
  outOf?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  outOf = 5,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars <= 0.75;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;
  const emptyStars = outOf - totalStars;

  return (
    <div className="flex items-center px-[5px] py-0 gap-2 p-2 rounded">
      <span className="text-gray-700 font-medium">
        {rating.toFixed(1)}/{outOf}
      </span>
      <div className="flex gap-1">
        {/* Full Stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <svg
            key={`full-${i}`}
            viewBox="0 0 24 24"
            fill="#666"
            stroke="#7A7A7A"
            strokeWidth={1}
            className="w-5 h-5"
          >
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.336 24 12 20.017 4.664 24 6 15.601 0 9.748l8.332-1.73z" />
          </svg>
        ))}

        {/* Half Star */}
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            {/* Empty Star base */}
            <svg
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="#7A7A7A"
              strokeWidth={1}
              className="absolute"
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.336 24 12 20.017 4.664 24 6 15.601 0 9.748l8.332-1.73z" />
            </svg>
            {/* Half-filled star overlay */}
            <svg
              viewBox="0 0 24 24"
              fill="#666"
              stroke="#7A7A7A"
              strokeWidth={1}
              className="absolute"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.336 24 12 20.017 4.664 24 6 15.601 0 9.748l8.332-1.73z" />
            </svg>
          </div>
        )}

        {/* Empty Stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <svg
            key={`empty-${i}`}
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="#7A7A7A"
            strokeWidth={1}
            className="w-5 h-5"
          >
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.853L19.336 24 12 20.017 4.664 24 6 15.601 0 9.748l8.332-1.73z" />
          </svg>
        ))}
      </div>
    </div>
  );
};
