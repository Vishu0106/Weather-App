/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import CityData from '../helpers/data.json';
import { useDispatch } from 'react-redux';
import { setCity } from '../redux/citySlice';
import { useSelector } from 'react-redux';
import { fetchWeatherData } from '../redux/weatherSlice';
const MenuBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  


  const names = CityData.map((city) => city.city);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      const filteredSuggestions = names.filter(name => 
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedValue(suggestion);
    setSearchValue(suggestion);
    setSuggestions([]);
    console.log('Selected Value:', selectedValue);
    if(selectedValue) {
      const cityData = CityData.find((city) => city.city === selectedValue);
      if (cityData) {
        dispatch(fetchWeatherData(cityData));
      }
    }
  };

   useEffect(() => {   
      dispatch(setCity(selectedValue)); 
   }, []);

  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold hover:cursor-pointer">
          Weather App
        </div>
        <div className="flex-1 mx-4 md:block relative">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-4 focus:ring-slate-800 focus:ring-opacity-50 transition duration-300 ease-in-out"
            />
            <FaSearch className="w-6 h-6 text-black absolute top-1/2 transform -translate-y-1/2 left-3" />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-slate-300 rounded-md mt-2 w-full max-h-40 overflow-y-auto z-10">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className="px-4 py-2 cursor-pointer hover:bg-slate-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <IoMdMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-50 bg-opacity-90 z-50 flex flex-col">
          <div>
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <RxCross2 className="w-8 h-8 text-black" />
            </button>
          </div>
          <div className="relative top-12 flex flex-col items-center justify-center gap-3">
            <Link to="#" className="text-lg hover:text-white hover:bg-slate-700 rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 1</Link>
            <Link to="#" className="text-lg hover:text-white hover:bg-slate-700 rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 2</Link>
            <Link to="#" className="text-lg hover:text-white hover:bg-slate-700 rounded-lg p-1 px-8 bg-slate-900 text-white" onClick={toggleMenu}>Option 3</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;
