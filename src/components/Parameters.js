import React from 'react'
import styled from 'styled-components'
import { WiStrongWind, WiHumidity, WiBarometer } from 'react-icons/wi'

const Parameters = ({ current }) => {
  const { humidity, wind_kph, pressure_mb } = current
  return (
    <Wrapper>
      <div className='wind'>
        <WiStrongWind />
        {wind_kph} km/h
        <span>wiatr</span>
      </div>
      <div className='humidity'>
        <WiHumidity />
        {humidity}
        <span>wilgotność</span>
      </div>
      <div className='pressure'>
        <WiBarometer />
        {pressure_mb}
        <span>ciśnienie</span>
      </div>
    </Wrapper>
  )
}

export default Parameters

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid white;
  background: var(--c4);
  border-radius: 15px;
  margin: 10px 0;
  padding: 4px;
  .wind,
  .humidity,
  .pressure {
    text-transform: lowercase;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
