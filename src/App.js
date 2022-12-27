import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

// const url = 'https://danepubliczne.imgw.pl/api/data/synop'
// const url = 'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
// const url =
//   'https://api.dane.gov.pl/1.4/resources/42634,liczba-studentow-z-obywatelstwem-ukrainskim-w-podziale-na-wojewodztwa_-stan-na-07112022/data'

//  API_KEY 2b50cab1a05a42ed8a181320222612
const api_call =
  'http://api.weatherapi.com/v1/forecast.json?key=2b50cab1a05a42ed8a181320222612&q=Lubin&days=7&aqi=yes&alerts=no'
//api.weatherapi.com/v1/forecast.json?key=&q=Lubin&days=7&aqi=yes&alerts=no

function App() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(api_call)
      const data = await response.json()
      setLoading(false)
      setStations(data)
      // console.log(data)
    } catch (error) {
      setLoading(false)
      console.log('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(
      'Geolocation:',
      navigator.geolocation.getCurrentPosition(success)
    )
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
