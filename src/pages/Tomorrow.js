import React from 'react'
import styled from 'styled-components/macro'

const Tomorrow = ({ tomorrow }) => {
  const { maxtemp_c, daily_chance_of_rain, maxwind_kph } = tomorrow
  console.log(tomorrow)
  return (
    <Wrapper>
      <h3>Temperatura max. = {maxtemp_c}&deg;</h3>
      <h3>Szansa na deszcz = {daily_chance_of_rain}%</h3>
      <h3>Prędkość wiatru = {maxwind_kph} km/h</h3>
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
  font-weight: 400;
`
