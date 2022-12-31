import React from 'react'
import styled from 'styled-components'
import { WiStrongWind, WiHumidity, WiBarometer } from 'react-icons/wi'

const Parameters = () => {
  return (
    <Wrapper>
      <div className='wind'>
        <WiStrongWind />
      </div>
      <div className='humidity'>
        <WiHumidity />
      </div>
      <div className='pressure'>
        <WiBarometer />
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
`
