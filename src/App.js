import './App.css';
import SVG from './SVG/SVG';

function App() {
  return (
    <div className="flex items-start justify-center p-[100px] w-ful h-screen bg-[#515151]">
      <div className="flex flex-col items-center justify-start w-full h-full">
        <SVG.KarmeleFill />
      </div>
    </div>
  );
}

export default App;
