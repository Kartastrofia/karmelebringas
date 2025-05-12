import './App.css';
import { useState } from 'react';
import SVG from './SVG/SVG';
import Header from './Componentes/Header';
// Fonts
import "@fontsource/konkhmer-sleokchher";

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start w-ful min-h-screen">
      {/* Parte superior pagina */}
      <div className='flex flex-col items-center justify-start py-[120px] w-full grow bg-gradient-to-b from-[#069FD6] to-[#5EFADB]'>
        {/* Header */}
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
        {/* Main Content */}
        <div className='flex items-center justify-center grow w-full'>
          <SVG.KarmeleFill width='302' height='95' className='shadow-[0px_4px_4px_0px_#3A59D1]'/>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex flex-row items-center justify-center px-[32px] py-[16px] w-full bg-[#FBFFE5]">
      </footer>
    </div>
  );
}

export default App;