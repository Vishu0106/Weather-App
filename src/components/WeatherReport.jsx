/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CityData from '../helpers/data.json';
import { fetchWeatherData } from '../redux/weatherSlice';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import sunImage from "../assets/cloudy.png";
import Forcaste from './Forcaste';
import { setCity } from '../redux/citySlice';

function WeatherReport() {
  const dispatch = useDispatch();
  const Name = useSelector((state) => state.city);
  console.log('Name:', Name);
  const [defaultCity1 , setDefaultCity1] = useState('Delhi');
    const cityData = CityData.find((city) => city.city === defaultCity1);
  const WEEKDAYS = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  // Fetch weather data based on selected city
  const handleChange = (e) => {
    setDefaultCity1(e.target.value);
    console.log('Selected City:', e.target.value);
    const  cityData = CityData.find((city) => city.city === defaultCity1);
     console.log('City Data:', cityData);
    if (cityData) {
      dispatch(setCity(cityData.city)); // Set the city in Redux store
      fetchWeather(cityData); // Fetch weather data for the selected city
    } else {
      toast.error("City not found");
    }
  };

 

  // Fetch weather data function
  const fetchWeather = async (cityData) => {
    try {
      await dispatch(fetchWeatherData(cityData));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast.error('Failed to fetch weather data');
    }
  };

  // Redux selectors
  const currentData = useSelector((state) => state?.weather?.weather);
  const selectedCity = useSelector((state) => state.city);

  // Determine weekday index for current weather data
  const weekdayIndex = dayjs.unix(currentData.current.dt).day();

   // Fetch weather data initially for default city (Delhi in this case)
   useEffect(() => {
    const defaultCity = CityData.find((city) => city.city === 'Delhi');
    if (defaultCity) {
      dispatch(setCity(defaultCity.city));
      fetchWeather(defaultCity);
    }
  }, [selectedCity,defaultCity1]);

  // Render component
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center'>
        <div className='flex gap-1 p-3 w-full flex-col md:flex-row items-center justify-center'>
          <h1 className='text-xl font-semibold p-2'>Select City</h1>
          <select
            name="Select City"
            id="cityname"
            value={defaultCity1}
            defaultValue={selectedCity}
            className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-white text-black border-2-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 p-4"
            onChange={handleChange}
          >
            {CityData && CityData.length > 0 && CityData.map((city) => (
              <option key={`${city.population}${city.lat}`} value={city.city}>
                {city.city} - {city.admin_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row gap-2 items-center justify-center gap-20 p-4'>
        <div className='bg-black flex flex-col rounded-lg h-[45vh] w-[25vw] md:w-[18vw] wra'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-xl text-white font-semibold p-2'>{WEEKDAYS[weekdayIndex]}</h1>
            <p className="dateDay text-white">
              {dayjs.unix(currentData.current.dt).format("DD MMM YYYY")}
            </p>
            <p className="locationName text-white">
              {cityData.city} -{cityData.admin_name}- {cityData.country||"IN"}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src={sunImage} alt="" className='rounded h-[80px] w-[80px]' />
            <h1 className='text-4xl font-bold p-2 text-white'>{currentData.current.temp}°C</h1>
            <div>
              <h1 className='text-xl font-bold p-2 text-white'>Visibility {currentData.current.visibility}</h1>
            </div>
          </div>
        </div>
        <Forcaste data={currentData.daily} />
      </div>
    </div>
  );
}

export default WeatherReport;
