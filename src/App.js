import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

// const url = 'https://danepubliczne.imgw.pl/api/data/synop'
const url = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
// const url =
//   'https://api.dane.gov.pl/1.4/resources/42634,liczba-studentow-z-obywatelstwem-ukrainskim-w-podziale-na-wojewodztwa_-stan-na-07112022/data'

const api_call =
  'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

function App() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
setLoading(true)
try {
  const response = await fetch(url)
  const data = await response.json()
  setLoading(false)
  setWeather(data)
} catch (error) {
  setLoading(false)
  console.log('Error:', error)
}

    

  useEffect(() => {
    fetchData()
    console.log('effect:', stations)
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <>
      <Navbar />
      {/* <Main stations={stations} /> */}
      <Footer />
    </>
  )
}

export default App
