import React from 'react'
import styled from 'styled-components/macro'
import Hours from '../components/Hours'

const Main = ({ weatherData }) => {
  return (
    <Wrapper>
      <Hours forecast={weatherData.forecast.forecastday} />
      {/* <Map lat={51.39} lng={15.95} /> */}
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
  height: 200px;
`
