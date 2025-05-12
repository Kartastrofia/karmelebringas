import React from "react";
import SVG from "../SVG/SVG";
import Dropdown from "../Componentes/Dropdown";

const Header = ({mobileMenuOpen, setMobileMenuOpen}) => {
  // Define tus opciones de menú
  const menuItems = [
    { text: "Inicio", link: "/" },
    { text: "Servicios", link: "/servicios" },
    { text: "Nosotros", link: "/nosotros" },
    { text: "Contacto", link: "/contacto" }
  ];
  
  return (
    <div className="flex flex-row items-center justify-between px-[32px] py-[16px] w-full bg-[#92CDFF]">
      {/* IZQ */}
      <SVG.KarmeleFill/>
      {/* DER */}
      <div className="flex flex-col items-start gap-[40px] justify-center">
        <Dropdown 
          items={menuItems} 
          title="Menú" 
          className="text-white"
        />
      </div>
    </div>
  );
}

export default Header;