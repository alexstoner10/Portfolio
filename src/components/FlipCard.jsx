import { useState } from "react";

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-3xl aspect-[5/3] sm:aspect-[3/2] md:h-48 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-start justify-center hover:scale-105 hover:shadow-xl transition-transform">
          {front}
        </div>

        <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transform rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
