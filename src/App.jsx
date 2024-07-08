import BodyLayout from './components/BodyLayout'
import ChartPage from './pages/ChartPage'
import { Routes , Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<BodyLayout />}/>
      <Route path='/charts' element={<ChartPage />}/>
    </Routes>
  )
}

export default App
