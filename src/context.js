import React from 'react'
import { useState } from 'react'

const api_key = process.env.API_KEY
const rootUrl = 'http://api.weatherapi.com/v1/current.json?key='

const WeatherContext = React.createContext()

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState()
  return (
    <WeatherContext.Provider value={'hello world'}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherProvider }
