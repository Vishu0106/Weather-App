/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import CityData from '../helpers/data.json'
import { fetchWeatherData } from '../redux/weatherSlice';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import sunImage from "../assets/cloudy.png"
import Forcaste from './Forcaste';

function WeatherReport() {

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    // console.log("City data",CityData[0]);
    var city = 'Delhi';
    const dispatch = useDispatch();
    function handleChange(e) {
         city = e.target.value;
        if (city) {
            console.log(city);
        }
    }
    const currentData = useSelector((state) => state?.weather?.weather);
    console.log("Current data",currentData);
    async function fetchWeather(city) {
        const cityData = CityData.find((cityData) => cityData.city === city);
        // city={...cityData};
        if (cityData) {
            console.log(cityData);
            await dispatch(fetchWeatherData(cityData));
        } else {
            toast.error("City not found");
        }
    }
    console.log("Current data dt",currentData.current.dt)
    const weekdayIndex = dayjs.unix(currentData.current.dt).day();
    console.log("city",city)
    const cities = CityData.find((cityData) => cityData.city==city);
    console.log("cities",cities);
    useEffect(() => {
        fetchWeather(city)
    }, [city])
    
  return (
    <div className='flex flex-col'>
        <div className='flex  items-center justify-center'>
            <div className='flex gap-1 p-3 w-full flex-col md:flex-row items-center justify-center'>
            <h1 className='text-xl font-semibold p-2'>Select City</h1>
            <select
               name="Select City"
               id="cityname"
               defaultValue={''}
               className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 p-4"
               onChange={(e)=>handleChange(e)}
             >
               {CityData && CityData.length > 0 && CityData.map((city) => {
                 return (
                   <option key={`${city.population}${city.lat}`} value={city.city}>
                     {city.city} - {city.admin_name}
                   </option>
                 );
               })}
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
                    <p className="locationName text-white">{cities.city} - {cities.admin_name} - {cities.country}</p>
                     </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img src={sunImage} alt="" className='rounded h-[80px] w-[80px]' />
                            <h1 className='text-4xl font-bold p-2 text-white'>{currentData.current.temp}°C</h1>
                            <div>
                                <h1 className='text-xl font-bold p-2 text-white'>Visibility {currentData.current.visibility}</h1>
                            </div>
                        </div>
               </div>
               <Forcaste data={currentData.daily}/>
        </div>
    </div>
  )
}

export default WeatherReport