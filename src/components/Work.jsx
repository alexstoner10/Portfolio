import { useState } from "react";
import { MyWork } from "../assets/work_info";
import FlipCard from "./FlipCard";

const Work = () => {
  return (
    <section className="flex flex-col items-center text-black mb-6 border-b-1 pb-15">
      <h1 className="text-4xl font-bold text-center mt-4 mb-2">Work</h1>
      <h2 className="text-2xl text-center mb-4">Click Card For More Information</h2>
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {MyWork.map((work) => (
          <FlipCard
            key={work.offering_id}
            front={
              <div className="flex flex-col justify-center w-full max-w-3xl">
                <div className="flex justify-between w-full mb-4">
                  <div className="text-3xl font-bold text-black">
                    {work.name}
                  </div>
                  <div className="text-2xl text-black">{work.location}</div>
                </div>
                <div className="text-black text-2xl mb-4">{work.title}</div>
                <div className="text-neutral-500 text-xl mb-4">{work.date}</div>
              </div>
            }
            back={
              <div className="text-black flex text-xl">{work.description}</div>
            }
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
