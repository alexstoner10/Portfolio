import { useState } from "react";
import { MyEducation } from "../assets/education_info";

const Education = () => {
  return (
  <section className="flex flex-col items-center text-black mb-6 border-b-1 border-t-1 mt-6 pb-15">
    <h1 className="text-4xl font-bold text-center my-4">Education</h1>

    <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4">
      {MyEducation.map((education) => (
        <div
          key={education.offering_id}
          className="bg-gray-100 rounded-lg shadow-md p-6 text-3xl flex flex-col items-start justify-center w-full max-w-3xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex justify-between w-full mb-4">
            <div className="text-3xl font-bold text-black">
              {education.school}
            </div>
            <div className="text-2xl text-black">{education.date}</div>
          </div>

          <div className="text-black text-2xl mb-3">{education.degree}</div>
          <div className="text-black text-2xl mb-3">{education.location}</div>
          <div className="text-black text-2xl">GPA: {education.GPA}</div>
        </div>
      ))}
    </div>
  </section>
);


};
export default Education;
