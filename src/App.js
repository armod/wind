import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Main from './pages/Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { success, error } from './geoposition'
import Layout from './components/Layout'
import Temperature from './components/Temperature'
import Parameters from './components/Parameters'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Error from './components/Error'
import Tomorrow from './pages/Tomorrow'
import NextDays from './pages/NextDays'

//  API_KEY 2b50cab1a05a42ed8a181320222612
const api_call = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&lang=pl&days=7&aqi=yes&alerts=no&q=51.39,15.95`

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
      navigator.geolocation.getCurrentPosition(success, error)
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
    <BrowserRouter>
      <Layout>
        <Navbar name={weatherData.location.name} />
        <Temperature current={weatherData.current} />
        <Parameters current={weatherData.current} />
        <Menu />
        <Routes>
          <Route path='/' element={<Main weatherData={weatherData} />} />
          <Route
            path='tomorrow'
            element={
              <Tomorrow tomorrow={weatherData.forecast.forecastday[0].day} />
            }
          />
          <Route
            path='next'
            element={
              <NextDays overmorrow={weatherData.forecast.forecastday[1].day} />
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        {/* <Main weatherData={weatherData} /> */}
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default App
