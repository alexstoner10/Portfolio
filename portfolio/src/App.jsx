import { useState } from 'react'
import { Education } from "./assets/education";
import { Leadership } from "./assets/leadership";
import { Work } from "./assets/work";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4 border-b-1 pb-4">Alex Stoner</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Education.map((education) => (

          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Leadership.map((leadership) => (

          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Work.map((work) => (

          ))}
        </div>

      </div>


  );
};

export default App
