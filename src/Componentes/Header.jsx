import React from "react";
import SVG from "../SVG/SVG";
import Dropdown from "../Componentes/Dropdown";

const Header = ({mobileMenuOpen, setMobileMenuOpen}) => {
  // Define tus opciones de menú
  const menuItems = [
    { text: "Snail Market", link: "/snailmarket" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center max-w-7xl">
      <div className="relative flex flex-row items-center justify-between">
        {/* IZQ */}
        <SVG.KarmeleFill color="#3A59D1"/>
        {/* DER */}
        <div className="flex flex-row items-start gap-[40px] justify-center">
          <Dropdown 
            items={menuItems} 
            title="Concept" 
            className="text-[#3A59D1]"
          />
          <Dropdown 
            title="UX/UI" 
            className="text-[#3A59D1]"
          />
          <Dropdown 
            title="About" 
            className="text-[#3A59D1]"
          />
        </div>
      </div>
      {/* SVG LINEA */}
    </div>
  );
}

export default Header;