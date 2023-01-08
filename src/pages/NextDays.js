import React from 'react'
import styled from 'styled-components/macro'
import { WiThermometer, WiRainMix, WiStrongWind } from 'react-icons/wi'

const NextDays = ({ overmorrow }) => {
  const { maxtemp_c, daily_chance_of_rain, maxwind_kph } = overmorrow
  console.log(overmorrow)
  return (
    <Wrapper>
      <div className='row'>
        <h1>
          <WiThermometer />
          <div className='cap'>temp. maks</div>
        </h1>
        <h2> {maxtemp_c}&deg;</h2>
      </div>
      <div className='row'>
        <h1>
          <WiRainMix />
          <div className='cap'>szansa opadów</div>
        </h1>
        <h2> {daily_chance_of_rain}%</h2>
      </div>
      <div className='row'>
        <h1>
          <WiStrongWind />
          <div className='cap'>wiatr</div>
        </h1>
        <h2> {maxwind_kph} km/h</h2>
      </div>
    </Wrapper>
  )
}

export default NextDays

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  font-weight: 400;
  .row {
    /* border: 1px solid white; */
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    align-items: center;
    h1 {
      font-size: 3rem;
      display: flex;
      flex-direction: column;
      .cap {
        margin: 0 auto;
        font-size: 0.75rem;
        color: var(--c5);
      }
    }
  }
`
