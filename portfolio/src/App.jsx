import Work from './components/Work';
import Education from './components/Education';
import Leadership from './components/Leadership';

function App() {
  return (
    <div className="bg-blue-100">
      <h2 className="text-5xl font-bold text-center my-4">
        Alex Stoner
      </h2>
      <h3 className="text-2xl text-center my-4 pb-4 border-b-1">
        Cyber Security Engineering
      </h3>
      
      
    <Education />
    <Work />
    <Leadership />
      
      
    </div>
  );
}

export default App;
