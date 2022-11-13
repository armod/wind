import React from 'react'
import styled from 'styled-components/macro'
import Polska from './Polska'

const Main = () => {
  return (
    <Wrapper>
      <Polska />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  border: 1px solid white;
  margin: 0 auto;
  width: 75vw;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    border: 1px solid white;
    width: 100%;
    height: 100%;
    * {
      fill: black;
    }
  }
`
