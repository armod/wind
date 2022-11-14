import React from 'react'
import styled from 'styled-components/macro'
import Points from './Points'
import Polska from './Polska'

const Main = ({ stations }) => {
  console.log('main log', stations)
  return (
    <Wrapper>
      <Polska />
      <Points />
      {stations.map((station) => {
        return <div>{station.id}</div>
      })}
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  border: 1px solid white;
  /* aspect-ratio: 1/1; */
  margin: 0 auto;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  svg {
    /* border: 1px solid white; */
    /* width: 100%; */
    /* height: 100%; */
    margin: -5px;
    * {
      fill: black;
    }
  }
`
