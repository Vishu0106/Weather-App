import React, { useState } from 'react';
import dayjs from 'dayjs';
const Forecaste = ({data}) => {

  const cards = [...data
  ];
  cards.pop();
  const WEEKDAYS = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  console.log("Data props",data);

  const [selectedCard, setSelectedCard] = useState(cards[0]);
  let weekdayIndex = dayjs.unix(selectedCard.dt).day();
  return (
      <div className='bg-white flex flex-col p-4 space-y-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
          cards.map((card,index) => (
            <div
              key={card.dt}
              onClick={() => setSelectedCard(card)}
              className={`cursor-pointer bg-gradient-to-b from-slate-400 to-slate-700 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 ${card.dt===selectedCard.dt ? 'border-4 opacity-80 blur-10 border-black scale-115' : ''}`}
            >
                
              <img src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`} alt={`${card.title} Icon`} className="w-8 h-8 mb-2" />
              <p className="day-name">{WEEKDAYS[dayjs.unix(cards[index].dt).day()].slice(0, 3)}</p>
              <p className="day-temp">{Math.round(cards[index].temp.max)}°C</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-gradient-to-l from-slate-400 to-slate-600 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <div className="text-1xl text-white font-sans flex items-center  justify-between gap-6">UV Index <p>{selectedCard.uvi}</p></div>
          <div className="text-1xl text-white font-sans flex items-center justify-between gap-6">Pressure <p>{selectedCard.pressure}</p></div>
          <div className="text-1xl text-white font-sans flex items-center justify-between gap-8">
            Rain<p>{selectedCard.rain}</p>
          </div>
          <div className="text-1xl text-white font-sans flex items-center justify-between gap-6">
            Wind<p>{selectedCard.wind_speed} km/h</p>
          </div>
          <div className="text-2xl text-white font-sans flex items-center justify-between gap-6">
            Humidity<p>{selectedCard.humidity} %</p>
          </div>
        </div>
      </div>
  );
};

export default Forecaste;
