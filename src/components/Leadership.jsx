import { useState } from "react";
import { MyLeadership } from "../assets/leadership_info";
import FlipCard from "./FlipCard";

const Leadership = () => {
  return (
    <section className="flex flex-col items-center text-black mb-6 pb-4">
      <h1 className="text-4xl font-bold text-center mt-4 mb-2">Leadership</h1>
      <h2 className="text-2xl text-center mb-4">Click Card For More Information</h2>
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {MyLeadership.map((leadership) => (
          <FlipCard
            key={leadership.offering_id}
            front={
              <div className="flex flex-col justify-center w-full max-w-3xl">
                <div className="flex justify-between w-full mb-4">
                  <div className="text-3xl font-bold text-black">
                    {leadership.activity}
                  </div>
                </div>
                <div className="text-neutral-500 text-xl mb-2">
                    {leadership.date}
                  </div>
              </div>
            }
            back={
              <div className="text-black text-xl mb-2">
                {leadership.description}
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};
export default Leadership;
