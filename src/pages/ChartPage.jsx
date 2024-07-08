import HomeLayout from '../layout/HomeLayout';
import WeatherChart from '../components/WeatherChart';

const ChartPage = () => {
    const weatherData = [
        { day: 'Day 1', temperature: 25, windSpeed: 15, pressure: 1015, humidity: 55 },
        { day: 'Day 2', temperature: 22, windSpeed: 12, pressure: 1013, humidity: 60 },
        { day: 'Day 3', temperature: 26, windSpeed: 10, pressure: 1016, humidity: 53 },
        { day: 'Day 4', temperature: 23, windSpeed: 14, pressure: 1014, humidity: 58 },
        { day: 'Day 5', temperature: 27, windSpeed: 13, pressure: 1017, humidity: 52 },
        { day: 'Day 6', temperature: 24, windSpeed: 16, pressure: 1018, humidity: 57 },
        { day: 'Day 7', temperature: 28, windSpeed: 11, pressure: 1012, humidity: 54 },
      ];

  return (
    <HomeLayout>
      <div className='bg-white min-h-[89vh] min-w-[83vw] max-w-[83vw] flex flex-col p-4 space-y-4'>
        <h1 className="text-2xl font-bold text-center text-black mb-4">Weather Forecast</h1>
        <WeatherChart weatherData={weatherData} />
      </div>
    </HomeLayout>
  );
};

export default ChartPage;