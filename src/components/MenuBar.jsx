/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";
const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold hover:cursor-pointer">
          Weather App
        </div>
        <div className="flex-1 mx-4 md:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-4 focus:ring-slate-800 focus:ring-opacity-50 transition duration-300 ease-in-out "
            />
            <FaSearch className="w-6 h-6 text-black absolute top-1/2 transform -translate-y-1/2 left-3" />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <IoMdMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-50 bg-opacity-90 z-50 felx flex-col">
        <div>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <RxCross2 className="w-8 h-8 text-black" />
          </button>
          </div>
          <div className="relative top-12 flex flex-col items-center justify-center gap-3">
            <Link href="#" className=" text-lg hover:text-white hover:bg-slate-700  rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 1</Link>
            <a href="#" className="text-black text-lg hover:text-white hover:bg-slate-700  rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 2</a>
            <a href="#" className="text-black text-lg hover:text-white hover:bg-slate-700  rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 3</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
