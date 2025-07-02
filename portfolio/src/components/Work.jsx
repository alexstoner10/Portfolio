import { useState } from "react";
import { MyWork } from "../assets/work";

const Work = () => {
  return (
     <section className="flex flex-col items-center text-black mb-6 border-b-1 pb-15">
        <h1 className="text-4xl font-bold text-center my-4">
          Work
        </h1>
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
        {MyWork.map((work) => (
          <div
            key={work.offering_id}
            className="bg-gray-100 rounded-lg shadow-md p-4 text-3xl flex flex-col items-start justify-center w-full max-w-3xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between w-full mb-2">
              <div className="text-3xl font-bold text-black">
                {work.name}
              </div>
              <div className="text-2xl text-black">{work.location}</div>
            </div>
            <div className="text-black text-2xl mb-2">{work.title}</div>
           <div className="text-neutral-500 text-xl mb-2">{work.date}</div>
              <div className="text-black flex text-2xl">{work.description}</div>
          </div>
        ))}
        </div>
      </section>   
  );
}
export default Work;