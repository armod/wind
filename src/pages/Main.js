import React from 'react'
import styled from 'styled-components/macro'
import Hours from '../components/Hours'
import Parameters from '../components/Parameters'
import Temperature from '../components/Temperature'
import Map from '../components/Map'

const Main = ({ weatherData }) => {
  return (
    <Wrapper>
      <Temperature current={weatherData.current} />
      <Parameters current={weatherData.current} />
      {/* tutaj wstawić listę odnośników do dzisiaj, jutro, kolejne dni */}
      <a>test</a>
      <Hours forecast={weatherData.forecast.forecastday} />
      <Map lat={51.39} lng={15.95} />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid white; */
  gap: 1rem;
`
