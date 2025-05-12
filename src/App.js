import './App.css';
import SVG from './SVG/SVG';

function App() {
  return (
    <div className="flex items-start justify-center py-[120px] w-ful h-screen bg-[#515151]">
      <div className="flex flex-col items-start justify-center px-[32px] py-[16px] w-full bg-[#FFFFFF59]">
        <SVG.KarmeleFill />
      </div>
    </div>
  );
}

export default App;
