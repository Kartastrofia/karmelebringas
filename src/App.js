import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SVG from './SVG/SVG';
import Header from './Componentes/Header';
// Paginas
import Inicio from './Paginas/Inicio';
// Fonts
import "@fontsource/konkhmer-sleokchher";

function App() {
    

  return (
      <Router>
        <div className="flex flex-col items-center justify-start w-ful min-h-screen">
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
          {/* Footer */}
          <footer className="flex flex-row items-center justify-center px-[32px] py-[16px] w-full bg-[#FBFFE5]">
          </footer>
        </div>
      </Router>
  );
}

export default App;