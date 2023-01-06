import React from 'react'
import styled from 'styled-components/macro'

const Tomorrow = ({ tomorrow }) => {
  const { maxtemp_c, daily_chance_of_rain, maxwind_kph } = tomorrow
  console.log(tomorrow)
  return (
    <Wrapper>
      <h2>max temp = {maxtemp_c}</h2>
      <h2>szansa na deszcz = {daily_chance_of_rain}</h2>
      <h2>prędkość wiatru = {maxwind_kph}</h2>
    </Wrapper>
  )
}

export default Tomorrow

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid white; */
  gap: 1rem;
  height: 200px;
`
