import React from 'react'
import styled from 'styled-components'
import { WiStrongWind, WiHumidity, WiBarometer } from 'react-icons/wi'

const Parameters = ({ current }) => {
  const { humidity, wind_kph, pressure_mb } = current
  return (
    <Wrapper>
      <div className='wind'>
        <div className='icon'>
          <WiStrongWind />
        </div>
        {wind_kph} km/h
        <span className='name'>wiatr</span>
      </div>
      <div className='humidity'>
        <div className='icon'>
          <WiHumidity />
        </div>
        {humidity} %<span className='name'>wilgotność</span>
      </div>
      <div className='pressure'>
        <div className='icon'>
          <WiBarometer />
        </div>
        {pressure_mb} hPa
        <span className='name'>ciśnienie</span>
      </div>
    </Wrapper>
  )
}

export default Parameters

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid white; */
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
    .icon {
      font-size: 2rem;
    }
    .name {
      color: var(--c5);
    }
  }
`
