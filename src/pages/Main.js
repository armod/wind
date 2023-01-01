import React from 'react'
import styled from 'styled-components/macro'
import Hours from '../components/Hours'
import Parameters from '../components/Parameters'
import Temperature from '../components/Temperature'

const Main = ({ weatherData }) => {
  return (
    <Wrapper>
      <Temperature current={weatherData.current} />
      <Parameters current={weatherData.current} />
      <button>test</button>
      <Hours forecast={weatherData.forecast.forecastday} />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid white; */
  gap: 2rem;
`
