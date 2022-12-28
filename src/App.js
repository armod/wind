import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'
import Layout from './components/Layout'
import { success, error } from './geoposition'

//  API_KEY 2b50cab1a05a42ed8a181320222612
const api_call =
  'http://api.weatherapi.com/v1/forecast.json?key=2b50cab1a05a42ed8a181320222612&lang=pl&days=7&aqi=yes&alerts=no&q=51.39,15.95'
const api_call2 =
  'http://api.weatherapi.com/v1/current.json?key=2b50cab1a05a42ed8a181320222612&q=Chojnów&aqi=no'
// 'http://api.weatherapi.com/v1/forecast.json?key=2b50cab1a05a42ed8a181320222612&lang=pl&days=7&aqi=yes&alerts=no&q=51.39,15.95'

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
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(
      'Geolocation:',
      navigator.geolocation.getCurrentPosition(success, error)
    )
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return <></>
}

export default App
