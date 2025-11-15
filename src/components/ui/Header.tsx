import React from "react";
import logoOne from "../../assets/image/logo 1.png";

const Header = () => {
  return (
    <header
      className="bg-gradient-to-r from-[#C80000] to-[#E50068] h-[112px] max-[425px]:h-[64px]"
      style={{ width: "1920px" }}
    >
      <div className="margin-acca container mx-auto px-4 py-0 flex items-center">
        <a href="/" className="inline-block">
          <img
            src={logoOne}
            alt="Industrial welding background"
            className="this-img w-full h-full object-cover opacity-100"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
