import React from 'react'
import styled from 'styled-components/macro'
import Parameters from '../components/Parameters'
import Temperature from '../components/Temperature'

const Main = ({ weatherData }) => {
  return (
    <Wrapper>
      <Temperature current={weatherData.current} />
      <Parameters current={weatherData.current} />
      <h2>{weatherData.location.name}</h2>
      <h2>{weatherData.current.temp_c}&deg;C</h2>

      <h4>{weatherData.current.condition.text}</h4>
      <h4>prędkość wiatru{weatherData.current.wind_kph}m/s</h4>
      <h4>ciśnienie{weatherData.current.pressure_mb}hPa</h4>
      <h4>wilgotonośc{weatherData.current.humidity}%</h4>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid white;
`
