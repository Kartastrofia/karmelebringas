import './App.css';
import SVG from './SVG/SVG';

function App() {
  return (
    <div className="flex items-start justify-center py-[120px] w-ful h-screen bg-[#515151]">
      <div className="flex flex-row items-center justify-start px-[32px] py-[16px] w-full bg-[#FFFFFF59]">
        <SVG.KarmeleFill />
      </div>
      <div className='flex items-center justify-center grow w-full'>
        <SVG.KarmeleFill width='302' height='95' color='#FFFFFF'/>
      </div>
      <div className="flex flex-row items-center justify-start px-[32px] py-[16px] w-full bg-[#FFFFFF59]">
        
      </div>
    </div>
  );
}

export default App;
