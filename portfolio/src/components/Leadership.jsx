import { useState } from "react";
import { MyLeadership } from "../assets/leadership";

const Leadership = () => {
  return (
    <section className="flex flex-col items-center text-black mb-6 pb-4">
      <h1 className="text-4xl font-bold text-center my-4">Leadership</h1>
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {MyLeadership.map((leadership) => (
          <div
            key={leadership.offering_id}
            className="bg-gray-100 rounded-lg shadow-md p-4 text-3xl flex flex-col items-start justify-center w-full max-w-3xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between w-full mb-2">
              <div className="text-3xl font-bold text-black">
                {leadership.activity}
              </div>
            </div>
            <div className="text-neutral-500 text-xl mb-2">{leadership.date}</div>

            <div className="text-black text-2xl mb-2">
              {leadership.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Leadership;
