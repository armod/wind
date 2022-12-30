import React from 'react'
import styled from 'styled-components/macro'

const Main = ({ stations }) => {
  // console.log('main-log', stations)
  const imgName = stations.current.condition.icon.substring(
    stations.current.condition.icon.length - 7
  )
  return (
    <Wrapper>
      <h2>{stations.location.name}</h2>
      <h2>{stations.current.temp_c}&deg;C</h2>
      <h4>{imgName}</h4>
      <div>
        <img
          src={`/images/${
            stations.current.is_day === 1 ? 'day' : 'night'
          }/${imgName}`}
          alt='icon'
        />
      </div>

      <h4>{stations.current.condition.text}</h4>
      <h4>prędkość wiatru{stations.current.wind_kph}m/s</h4>
      <h4>ciśnienie{stations.current.pressure_mb}hPa</h4>
      <h4>opady{stations.current.humidity}%</h4>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  /* border: 1px solid white; */
`
