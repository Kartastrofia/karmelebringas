import React from "react";
import SVG from "../SVG/SVG";
import Dropdown from "../Componentes/Dropdown";

const Header = ({mobileMenuOpen, setMobileMenuOpen}) => {
  // Define tus opciones de menú
  const menuItems = [
    { text: "Snail Market", link: "/snailmarket" },
  ];

  return (
    <div className="flex flex-row items-center justify-between px-[32px] py-[16px] w-full bg-[#92CDFF]">
      {/* IZQ */}
      <SVG.KarmeleFill/>
      {/* DER */}
      <div className="flex flex-col items-start gap-[40px] justify-center">
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
  );
}

export default Header;