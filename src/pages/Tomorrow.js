import React from 'react'
import styled from 'styled-components/macro'
import { WiThermometer, WiRainMix, WiStrongWind } from 'react-icons/wi'

const Tomorrow = ({ tomorrow: alias }) => {
  const { maxtemp_c, daily_chance_of_rain, maxwind_kph } = alias
  // console.log(tomorrow)
  return (
    <Wrapper>
      <div className='row'>
        <h1>
          <WiThermometer />
        </h1>
        <h2> {maxtemp_c}&deg;</h2>
      </div>
      <div className='row'>
        <h1>
          <WiRainMix />
        </h1>
        <h2> {daily_chance_of_rain}%</h2>
      </div>
      <div className='row'>
        <h1>
          <WiStrongWind />
        </h1>
        <h2> {maxwind_kph} km/h</h2>
      </div>
    </Wrapper>
  )
}

export default Tomorrow

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  font-weight: 400;
  .row {
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    h1 {
      font-size: 3rem;
      display: flex;
    }
  }
`
