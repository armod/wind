import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { success, error } from './geoposition'
import Layout from './components/Layout'

//  API_KEY 2b50cab1a05a42ed8a181320222612
const api_call = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&lang=pl&days=7&aqi=yes&alerts=no&q=51.39,15.95`
const api_call2 =
  'http://api.weatherapi.com/v1/current.json?key=2b50cab1a05a42ed8a181320222612&q=Lubin&aqi=no'
// 'http://api.weatherapi.com/v1/forecast.json?key=2b50cab1a05a42ed8a181320222612&lang=pl&days=7&aqi=yes&alerts=no&q=51.39,15.95'

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(api_call)
      const data = await response.json()
      console.log(data)
      setLoading(false)
      setWeatherData(data)
    } catch (error) {
      setLoading(false)
      console.log('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(
      'Geolocation:',
      navigator.geolocation.getCurrentPosition(success, error),
      'api:',
      process.env.REACT_APP_API_KEY
    )
  }, [])

  // odświeżanie co 10 minut
  useEffect(() => {
    const timer = setInterval(() => {
      fetchData()
    }, 600000)
    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
    <Layout>
      <Navbar name={weatherData.location.name} />
      <Main weatherData={weatherData} />
      <Footer />
    </Layout>
  )
}

export default App
