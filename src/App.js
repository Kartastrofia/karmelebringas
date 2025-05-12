import './App.css';
import SVG from './SVG/SVG';

function App() {
  return (
    <div className="flex flex-col items-center justify-start py-[120px] w-ful min-h-screen">
      {/* Parte superior pagina */}
      <div className='flex flex-col items-center justify-start w-full grow'>
        {/* Header */}
        <div className="flex flex-row items-center justify-start px-[32px] py-[16px] w-full bg-[#92CDFF]">
          <SVG.KarmeleFill />
        </div>
        {/* Main Content */}
        <div className='flex items-center justify-center grow w-full bg-gradient-to-b from-[#069FD6] to-[#5EFADB]'>
          <SVG.KarmeleFill width='302' height='95' color='#FFFFFF'/>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex flex-row items-center justify-center px-[32px] py-[16px] w-full bg-[#FBFFE5]">
      </footer>
    </div>
  );
}

export default App;
