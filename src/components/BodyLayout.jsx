import HomeLayout from '../layout/HomeLayout'
import WeatherReport from './WeatherReport'

function BodyLayout() {
  return (
    <HomeLayout>
     <div className='bg-[#ffffff] min-h-[89vh] min-w-[83vw] max-w-[83vw] bg-white'>
        <WeatherReport />
     </div>
    </HomeLayout>
  )
}

export default BodyLayout