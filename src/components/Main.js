import React from 'react'
import styled from 'styled-components/macro'

const Main = ({ weatherData }) => {
  // console.log('main-log', weatherData)
  const imgName = weatherData.current.condition.icon.substring(
    weatherData.current.condition.icon.length - 7
  )
  return (
    <Wrapper>
      <h2>{weatherData.location.name}</h2>
      <h2>{weatherData.current.temp_c.toPrecision(2)}&deg;C</h2>
      <h4>{imgName}</h4>
      <div>
        <img
          src={`/images/${
            weatherData.current.is_day === 1 ? 'day' : 'night'
          }/${imgName}`}
          alt='icon'
        />
      </div>

      <h4>{weatherData.current.condition.text}</h4>
      <h4>prędkość wiatru{weatherData.current.wind_kph}m/s</h4>
      <h4>ciśnienie{weatherData.current.pressure_mb}hPa</h4>
      <h4>opady{weatherData.current.humidity}%</h4>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  border: 1px solid white;
`
