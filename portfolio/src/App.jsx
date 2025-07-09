import Work from "./components/Work";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import profile from "./assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-100">
      <header>
        <nav>
            <ul>
                <li><button onClick={() => scrollToSection("education")}>Education</button></li>
                <li><button onClick={() => scrollToSection("work")}>Work</button></li>
                <li><button onClick={() => scrollToSection("leadership")}>Leadership</button></li>
            </ul>
        </nav>
    </header>
      <h2 className="text-5xl font-bold text-center my-4">Alex Stoner</h2>
      <h3 className="text-2xl text-center my-4">Cyber Security Engineering</h3>
      <img
        src={profile}
        className="w-70 h-70 rounded-full mx-auto shadow-lg object-cover"
      />
      <div className="flex justify-center space-x-4 text-black text-6xl text-shadow mb-4 mt-4">
        <a href="https://github.com/alexstoner10">
          <FaGithub className="flex-row" size={40} />
        </a>
        <a href="http://www.linkedin.com/in/alex-stoner-67a24928b">
          <FaLinkedin className="flex-row" size={40} />
        </a>
      </div>
      <section id="education">
        <Education />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <footer>
        <p>&copy; 2025 Alex Stoner</p>
    </footer>
    </div>
  );
}

export default App;
