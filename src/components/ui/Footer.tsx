import React from "react";
import linkedin from "../../assets/image/linkedin.png";
import Instagram from "../../assets/image/Instagram.png";
import youtube from "../../assets/image/youtube.png";
import tiktok from "../../assets/image/tiktok.png";
import facebook from "../../assets/image/facebook.png";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/school/162244" target="_blank" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700"> 
              <img src={linkedin} alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/acca.official/" target="_blank" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={Instagram} alt="X" className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/user/ACCAOfficial" target="_blank" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={youtube} alt="YouTube" className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/ACCA.Official" target="_blank" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-700">
              <img src={facebook} alt="Facebook" className="w-4 h-4" />
            </a>
          </div>
          <div className="font-bold" style={{color:'#7F7F7F'}}>
            THINK AHEAD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
